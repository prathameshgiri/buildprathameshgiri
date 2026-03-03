import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
  User as FirebaseUser
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  getDocs,
  Timestamp,
  serverTimestamp
} from "firebase/firestore";
import { auth, db } from "./firebase";

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
  created_at?: any;
  updated_at?: any;
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
  private checkFirebase() {
    if (!auth || !db) {
      throw new Error("Firebase is not configured. Please set your VITE_FIREBASE_* environment variables.");
    }
  }

  async submitContact(data: ContactData): Promise<void> {
    this.checkFirebase();
    try {
      await addDoc(collection(db!, "contact_submissions"), {
        ...data,
        created_at: serverTimestamp(),
      });
    } catch (err: any) {
      console.error("Firebase submitContact error:", err);
      throw new Error(err.message || "Failed to submit contact form");
    }
  }

  async submitProjectIdea(data: ProjectIdeaData): Promise<void> {
    this.checkFirebase();
    try {
      await addDoc(collection(db!, "project_ideas"), {
        ...data,
        created_at: serverTimestamp(),
      });
    } catch (err: any) {
      console.error("Firebase submitProjectIdea error:", err);
      throw new Error(err.message || "Failed to submit project idea");
    }
  }

  async signup(data: SignupData): Promise<AuthResponse> {
    this.checkFirebase();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth!, data.email, data.password);
      const user = userCredential.user;

      const profile: UserProfile = {
        id: user.uid,
        email: data.email,
        name: data.name,
        phone: data.phone || "",
        address: data.address || "",
        company: data.company || "",
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      };

      await setDoc(doc(db!, "profiles", user.uid), profile);
      await this.recordLogin(user.uid);

      return { user: profile };
    } catch (err: any) {
      console.error("Firebase signup error:", err);
      throw new Error(err.message || "Signup failed");
    }
  }

  async login(data: LoginData): Promise<AuthResponse> {
    this.checkFirebase();
    try {
      const userCredential = await signInWithEmailAndPassword(auth!, data.email, data.password);
      const user = userCredential.user;

      const profileDoc = await getDoc(doc(db!, "profiles", user.uid));
      if (!profileDoc.exists()) {
        const minimalProfile = {
          id: user.uid,
          email: user.email || data.email,
          name: "User",
        };
        return { user: minimalProfile as UserProfile };
      }

      await this.recordLogin(user.uid);
      return { user: profileDoc.data() as UserProfile };
    } catch (err: any) {
      console.error("Firebase login error:", err);
      throw new Error(err.message || "Login failed");
    }
  }

  async getProfile(): Promise<UserProfile> {
    this.checkFirebase();
    const user = auth!.currentUser;
    if (!user) throw new Error("Not authenticated");

    const profileDoc = await getDoc(doc(db!, "profiles", user.uid));
    if (!profileDoc.exists()) throw new Error("Profile not found");

    return profileDoc.data() as UserProfile;
  }

  async updateProfile(data: Partial<UserProfile>): Promise<UserProfile> {
    this.checkFirebase();
    const user = auth!.currentUser;
    if (!user) throw new Error("Not authenticated");

    const docRef = doc(db!, "profiles", user.uid);
    await updateDoc(docRef, {
      ...data,
      updated_at: serverTimestamp(),
    });

    const updatedDoc = await getDoc(docRef);
    return updatedDoc.data() as UserProfile;
  }

  async getLoginHistory(limitNum: number = 10): Promise<any[]> {
    if (!auth || !db) return [];
    const user = auth.currentUser;
    if (!user) return [];

    try {
      const q = query(
        collection(db, "login_history"),
        where("user_id", "==", user.uid),
        orderBy("login_time", "desc"),
        limit(limitNum)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
      console.error("Failed to fetch login history:", err);
      return [];
    }
  }

  async recordLogin(userId: string): Promise<void> {
    if (!auth || !db) return;
    const userAgent = navigator.userAgent;
    const ipAddress = await this.getClientIP();

    const deviceInfo = {
      browser: this.getBrowser(userAgent),
      os: this.getOS(userAgent),
      userAgent: userAgent,
    };

    await addDoc(collection(db, "login_history"), {
      user_id: userId,
      ip_address: ipAddress,
      device_info: deviceInfo,
      login_time: serverTimestamp(),
    });
  }

  async logout(): Promise<void> {
    if (!auth) return;
    await signOut(auth);
  }

  async resetPassword(email: string): Promise<void> {
    this.checkFirebase();
    await sendPasswordResetEmail(auth!, email);
  }

  async updateUserPassword(password: string): Promise<void> {
    this.checkFirebase();
    const user = auth!.currentUser;
    if (!user) throw new Error("Not authenticated");
    await updatePassword(user, password);
  }

  async isAuthenticated(): Promise<boolean> {
    if (!auth) return false;
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(!!user);
      });
    });
  }

  async getCurrentUser(): Promise<UserProfile | null> {
    if (!auth || !db) return null;
    const user = auth.currentUser;
    if (!user) return null;

    const profileDoc = await getDoc(doc(db, "profiles", user.uid));
    return profileDoc.exists() ? (profileDoc.data() as UserProfile) : null;
  }

  private async getClientIP(): Promise<string> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      if (!response.ok) return "unknown";
      const data = await response.json();
      return data.ip || "unknown";
    } catch {
      return "unknown";
    }
  }

  private getBrowser(userAgent: string): string {
    const match = userAgent.match(/(?:Chrome|Safari|Firefox|Edge|Opera)\/[\d.]+/);
    return match ? match[0] : "Unknown";
  }

  private getOS(userAgent: string): string {
    const match = userAgent.match(/(?:Windows|Macintosh|Linux|Android|iOS)[\w\s;]*/);
    return match ? match[0] : "Unknown";
  }
}

export const authAPI = new AuthAPI();
