import { useState, useEffect } from "react";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { authAPI } from "@/lib/api";
import { useToast } from "@/components/ui/use-toast";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const mode = searchParams.get("mode") || "signup";
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    company: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLogin(mode === "login");
    setError("");
  }, [mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login
        if (!formData.email || !formData.password) {
          setError("Email and password are required");
          setIsLoading(false);
          return;
        }

        await authAPI.login({
          email: formData.email,
          password: formData.password,
        });

        toast({
          title: "Success",
          description: "You have successfully logged in!",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // Signup
        if (!formData.email || !formData.password || !formData.name) {
          setError("Email, password, and name are required");
          setIsLoading(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters");
          setIsLoading(false);
          return;
        }

        await authAPI.signup({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          phone: formData.phone || undefined,
          address: formData.address || undefined,
          company: formData.company || undefined,
        });

        toast({
          title: "Success",
          description: "Account created successfully! Welcome!",
        });

        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
      toast({
        title: "Error",
        description: err.message || "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Background Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-fade-in" />
        <div
          className="absolute top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-br from-orange-50 to-white rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div
            className="text-center mb-12 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                {isLogin ? "Welcome Back" : "Get Started"}
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              {isLogin
                ? "Access your exclusive projects"
                : "Join our community of developers"}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.25s" }}
            >
              {error}
            </div>
          )}

          {/* Form Card */}
          <div
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100/50 opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field (Signup Only) */}
              {!isLogin && (
                <div
                  className="opacity-0 animate-slide-up"
                  style={{
                    animationFillMode: "forwards",
                    animationDelay: "0.4s",
                  }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      <User className="absolute left-4 w-5 h-5 text-orange-500 transition-all duration-300 group-hover:scale-110" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Email Field */}
              <div
                className="opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: isLogin ? "0.4s" : "0.5s",
                }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 w-5 h-5 text-orange-500 transition-all duration-300 group-hover:scale-110" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div
                className="opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: isLogin ? "0.5s" : "0.6s",
                }}
              >
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-3"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    <Lock className="absolute left-4 w-5 h-5 text-orange-500 transition-all duration-300 group-hover:scale-110" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder={
                        isLogin
                          ? "Enter your password"
                          : "Create a strong password"
                      }
                      className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-gray-500 hover:text-orange-500 transition-colors duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field (Signup Only) */}
              {!isLogin && (
                <div
                  className="opacity-0 animate-slide-up"
                  style={{
                    animationFillMode: "forwards",
                    animationDelay: "0.7s",
                  }}
                >
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Confirm Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center">
                      <Lock className="absolute left-4 w-5 h-5 text-orange-500 transition-all duration-300 group-hover:scale-110" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        className="w-full pl-12 pr-12 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                        required={!isLogin}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 text-gray-500 hover:text-orange-500 transition-colors duration-200"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Optional Profile Fields (Signup Only) */}
              {!isLogin && (
                <>
                  <div
                    className="opacity-0 animate-slide-up"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: "0.8s",
                    }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                    />
                  </div>

                  <div
                    className="opacity-0 animate-slide-up"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: "0.85s",
                    }}
                  >
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                    />
                  </div>

                  <div
                    className="opacity-0 animate-slide-up"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: "0.9s",
                    }}
                  >
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Address (Optional)
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Your address"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200/50 focus:bg-white transition-all duration-300 hover:border-gray-300 hover:bg-white"
                    />
                  </div>
                </>
              )}

              {/* Submit Button */}
              <div
                className="opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: isLogin ? "0.6s" : "0.95s",
                }}
              >
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <span>{isLogin ? "Sign In" : "Create Account"}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>

              {/* Toggle Form Type */}
              <div
                className="text-center pt-4 opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: isLogin ? "0.7s" : "1s",
                }}
              >
                <p className="text-gray-600 text-sm">
                  {isLogin
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <Link
                    to={isLogin ? "/auth?mode=signup" : "/auth?mode=login"}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
                  >
                    {isLogin ? "Sign Up" : "Sign In"}
                  </Link>
                </p>
              </div>

              {/* Back to Home */}
              <div
                className="text-center pt-2 opacity-0 animate-slide-up"
                style={{
                  animationFillMode: "forwards",
                  animationDelay: isLogin ? "0.75s" : "1.05s",
                }}
              >
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </form>
          </div>

          {/* Bottom Info */}
          <p
            className="text-center text-gray-500 text-xs mt-8 opacity-0 animate-slide-up"
            style={{
              animationFillMode: "forwards",
              animationDelay: isLogin ? "0.8s" : "1.1s",
            }}
          >
            We respect your privacy. Your data is always secure with us.
          </p>
        </div>
      </div>
    </div>
  );
}
