import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any = null;

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey);
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
  }
}

function getSupabase() {
  return supabase;
}

export { getSupabase };

export interface SignupData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  address?: string;
  company?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  company?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AuthResponse {
  user: UserProfile;
  token?: string;
}

class AuthAPI {
  async signup(data: SignupData): Promise<AuthResponse> {
    const sb = getSupabase();
    if (!sb) {
      throw new Error("Supabase is not configured. Please set environment variables.");
    }
    // Sign up with Supabase Auth
    const { data: authData, error: authError } = await sb.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (authError) {
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error("Signup failed - no user returned");
    }

    // Create user profile in database
    const { error: profileError } = await sb.from("profiles").insert([
      {
        id: authData.user.id,
        email: data.email,
        name: data.name,
        phone: data.phone || null,
        address: data.address || null,
        company: data.company || null,
      },
    ]);

    if (profileError) {
      throw new Error(profileError.message);
    }

    // Record login in history
    await this.recordLogin(authData.user.id);

    return {
      user: {
        id: authData.user.id,
        email: data.email,
        name: data.name,
        phone: data.phone,
        address: data.address,
        company: data.company,
      },
    };
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const sb = getSupabase();
    if (!sb) {
      throw new Error("Supabase is not configured. Please set environment variables.");
    }
    const { data: authData, error: authError } =
      await sb.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    if (authError) {
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error("Login failed - no user returned");
    }

    // Get user profile
    const { data: profile, error: profileError } = await sb
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (profileError) {
      throw new Error("Failed to fetch profile");
    }

    // Record login in history
    await this.recordLogin(authData.user.id);

    return {
      user: profile,
    };
  }

  async getProfile(): Promise<UserProfile> {
    const sb = getSupabase();
    if (!sb) {
      throw new Error("Supabase is not configured");
    }
    const {
      data: { user },
      error: authError,
    } = await sb.auth.getUser();

    if (authError || !user) {
      throw new Error("Not authenticated");
    }

    const { data: profile, error: profileError } = await sb
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (profileError) {
      throw new Error("Failed to fetch profile");
    }

    return profile;
  }

  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const sb = getSupabase();
    if (!sb) {
      throw new Error("Supabase is not configured");
    }
    const {
      data: { user },
      error: authError,
    } = await sb.auth.getUser();

    if (authError || !user) {
      throw new Error("Not authenticated");
    }

    const { data: profile, error: profileError } = await sb
      .from("profiles")
      .update({
        name: data.name || undefined,
        phone: data.phone || null,
        address: data.address || null,
        company: data.company || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)
      .select()
      .single();

    if (profileError) {
      throw new Error("Failed to update profile");
    }

    return profile;
  }

  async getLoginHistory(limit: number = 10): Promise<any[]> {
    const sb = getSupabase();
    if (!sb) {
      return [];
    }
    const {
      data: { user },
      error: authError,
    } = await sb.auth.getUser();

    if (authError || !user) {
      throw new Error("Not authenticated");
    }

    const { data: history, error: historyError } = await sb
      .from("login_history")
      .select("*")
      .eq("user_id", user.id)
      .order("login_time", { ascending: false })
      .limit(limit);

    if (historyError) {
      throw new Error("Failed to fetch login history");
    }

    return history || [];
  }

  async recordLogin(userId: string): Promise<void> {
    const sb = getSupabase();
    if (!sb) return;
    const userAgent = navigator.userAgent;
    const ipAddress = await this.getClientIP();

    const deviceInfo = {
      browser: this.getBrowser(userAgent),
      os: this.getOS(userAgent),
      userAgent: userAgent,
    };

    await sb.from("login_history").insert([
      {
        user_id: userId,
        ip_address: ipAddress,
        device_info: deviceInfo,
        login_time: new Date().toISOString(),
      },
    ]);
  }

  async logout(): Promise<void> {
    const sb = getSupabase();
    if (!sb) return;
    const {
      data: { user },
    } = await sb.auth.getUser();

    if (user) {
      // Update the last login record with logout time
      await sb
        .from("login_history")
        .update({ logout_time: new Date().toISOString() })
        .eq("user_id", user.id)
        .is("logout_time", null)
        .order("login_time", { ascending: false })
        .limit(1);
    }

    await sb.auth.signOut();
  }

  async isAuthenticated(): Promise<boolean> {
    const sb = getSupabase();
    if (!sb) return false;
    const {
      data: { user },
    } = await sb.auth.getUser();
    return !!user;
  }

  async getCurrentUser(): Promise<UserProfile | null> {
    const sb = getSupabase();
    if (!sb) return null;
    const {
      data: { user },
    } = await sb.auth.getUser();

    if (!user) {
      return null;
    }

    const { data: profile } = await sb
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    return profile || null;
  }

  private async getClientIP(): Promise<string> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip || "unknown";
    } catch {
      return "unknown";
    }
  }

  private getBrowser(userAgent: string): string {
    const match = userAgent.match(
      /(?:Chrome|Safari|Firefox|Edge|Opera)\/[\d.]+/
    );
    return match ? match[0] : "Unknown";
  }

  private getOS(userAgent: string): string {
    const match = userAgent.match(
      /(?:Windows|Macintosh|Linux|Android|iOS)[\w\s;]*/
    );
    return match ? match[0] : "Unknown";
  }
}

export const authAPI = new AuthAPI();
