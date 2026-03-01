import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrlRaw = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Use local proxy in development to bypass browser-level blocking
const isDev = import.meta.env.DEV;
const supabaseUrl =
  isDev && supabaseUrlRaw
    ? "/supabase-proxy"
    : supabaseUrlRaw;

if (isDev) {
  console.log("Supabase URL initialized:", !!supabaseUrl, supabaseUrl);
  console.log("Supabase Original URL:", supabaseUrlRaw);
  console.log("Supabase Key initialized:", !!supabaseKey);
}

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

export interface ContactData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ProjectIdeaData {
  name: string;
  email: string;
  idea: string;
}

class AuthAPI {
  async submitContact(data: ContactData): Promise<void> {
    const sb = getSupabase();
    if (!sb) {
      console.error("Supabase not configured during submitContact");
      throw new Error("Supabase is not configured.");
    }
    try {
      const { error } = await sb.from("contact_submissions").insert([data]);
      if (error) {
        console.error(
          "Supabase insert error (contact_submissions):",
          JSON.stringify(error, null, 2),
        );
        throw new Error(error.message);
      }
    } catch (err: any) {
      console.error(
        "Network error during submitContact:",
        err,
        "Full error:",
        JSON.stringify(err, Object.getOwnPropertyNames(err), 2),
      );
      if (err.message === "Failed to fetch") {
        throw new Error(
          "Network error: Failed to reach Supabase. Please check your internet connection or adblocker.",
        );
      }
      throw err;
    }
  }

  async submitProjectIdea(data: ProjectIdeaData): Promise<void> {
    const sb = getSupabase();
    if (!sb) {
      console.error("Supabase not configured during submitProjectIdea");
      throw new Error("Supabase is not configured.");
    }
    try {
      const { error } = await sb.from("project_ideas").insert([data]);
      if (error) {
        console.error(
          "Supabase insert error (project_ideas):",
          JSON.stringify(error, null, 2),
        );
        throw new Error(error.message);
      }
    } catch (err: any) {
      console.error(
        "Network error during submitProjectIdea:",
        err,
        "Full error:",
        JSON.stringify(err, Object.getOwnPropertyNames(err), 2),
      );
      if (err.message === "Failed to fetch") {
        throw new Error(
          "Network error: Failed to reach Supabase. Please check your internet connection or adblocker.",
        );
      }
      throw err;
    }
  }

  async signup(data: SignupData): Promise<AuthResponse> {
    const sb = getSupabase();
    if (!sb) {
      throw new Error(
        "Supabase is not configured. Please set environment variables.",
      );
    }
    // Sign up with Supabase Auth
    const { data: authData, error: authError } = await sb.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          name: data.name,
        },
      },
    });

    if (authError) {
      console.error("Supabase signup error:", authError);
      throw new Error(authError.message);
    }

    if (!authData.user) {
      throw new Error("Signup failed - no user returned");
    }

    // Try to create user profile in database as fallback
    // (Ideally handled by the trigger in Step 1.1 of SUPABASE_SETUP.md)
    try {
      await sb.from("profiles").insert([
        {
          id: authData.user.id,
          email: data.email,
          name: data.name,
          phone: data.phone || null,
          address: data.address || null,
          company: data.company || null,
        },
      ]);
    } catch (profileError) {
      // Ignore profile error if it's already created by trigger or RLS blocks it
      console.log("Note: Profile creation via client skipped or already exists.");
    }

    // Record login in history if session exists
    if (authData.session) {
      await this.recordLogin(authData.user.id);
    }

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
      throw new Error(
        "Supabase is not configured. Please set environment variables.",
      );
    }
    const { data: authData, error: authError } =
      await sb.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

    if (authError) {
      console.error("Supabase login error:", authError);
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
      console.warn("Profile not found, returning minimal user object");
      return {
        user: {
          id: authData.user.id,
          email: authData.user.email || data.email,
          name: authData.user.user_metadata?.name || "User",
        },
      };
    }

    // Record login in history
    try {
      await this.recordLogin(authData.user.id);
    } catch (err) {
      console.error("Failed to record login history:", err);
    }

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

  async resetPassword(email: string): Promise<void> {
    const sb = getSupabase();
    if (!sb) throw new Error("Supabase is not configured");

    const { error } = await sb.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth?mode=reset-password`,
    });

    if (error) throw new Error(error.message);
  }

  async updateUserPassword(password: string): Promise<void> {
    const sb = getSupabase();
    if (!sb) throw new Error("Supabase is not configured");

    const { error } = await sb.auth.updateUser({ password });

    if (error) throw new Error(error.message);
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
      /(?:Chrome|Safari|Firefox|Edge|Opera)\/[\d.]+/,
    );
    return match ? match[0] : "Unknown";
  }

  private getOS(userAgent: string): string {
    const match = userAgent.match(
      /(?:Windows|Macintosh|Linux|Android|iOS)[\w\s;]*/,
    );
    return match ? match[0] : "Unknown";
  }
}

export const authAPI = new AuthAPI();
