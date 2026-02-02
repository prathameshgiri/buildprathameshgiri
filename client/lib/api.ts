const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

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

export interface AuthResponse {
  user: {
    id: number;
    email: string;
    name: string;
    phone?: string;
    address?: string;
    company?: string;
  };
  token: string;
}

export interface UserProfile {
  id: number;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  company?: string;
  created_at: string;
  updated_at: string;
}

export interface LoginHistoryEntry {
  id: number;
  login_time: string;
  logout_time?: string;
  ip_address: string;
  device_info: Record<string, any>;
}

class AuthAPI {
  private getAuthToken(): string | null {
    return localStorage.getItem("authToken");
  }

  private getHeaders(includeAuth: boolean = false): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (includeAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Signup failed");
    }

    const result: AuthResponse = await response.json();
    localStorage.setItem("authToken", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
    return result;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Login failed");
    }

    const result: AuthResponse = await response.json();
    localStorage.setItem("authToken", result.token);
    localStorage.setItem("user", JSON.stringify(result.user));
    return result;
  }

  async getProfile(): Promise<UserProfile> {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: "GET",
      headers: this.getHeaders(true),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    return response.json();
  }

  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: "PUT",
      headers: this.getHeaders(true),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const result = await response.json();
    localStorage.setItem("user", JSON.stringify(result));
    return result;
  }

  async getLoginHistory(limit: number = 10): Promise<LoginHistoryEntry[]> {
    const response = await fetch(
      `${API_BASE_URL}/auth/login-history?limit=${limit}`,
      {
        method: "GET",
        headers: this.getHeaders(true),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch login history");
    }

    return response.json();
  }

  async logout(): Promise<void> {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "POST",
        headers: this.getHeaders(true),
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
    }
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  getCurrentUser(): any {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  clearAuth(): void {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  }
}

export const authAPI = new AuthAPI();
