import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { authAPI } from "@/lib/api";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const isConfigured = isFirebaseConfigured();

  useEffect(() => {
    if (!isConfigured || !auth) return;

    const checkUser = async () => {
      try {
        const currentUser = await authAPI.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error checking auth status:", error);
      }
    };

    checkUser();

    // Set up auth state change listener using Firebase
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        checkUser();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [isConfigured]);

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-bold opacity-0 animate-slide-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="text-orange-500">Prathamesh</span>
          <span className="text-gray-900">Giri</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/about"
            className="nav-link opacity-0 animate-slide-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            About
          </Link>
         
          <Link
            to="/college-projects"
            className="nav-link opacity-0 animate-slide-up"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
           College Projects
          </Link>
          
        </div>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-full border border-orange-100 hover:bg-orange-100 transition-all duration-300 group"
              >
                <User className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-gray-700">
                  {user.name || user.email}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-300 text-sm font-medium"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/auth?mode=login");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors duration-300 opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.35s",
                  animationFillMode: "forwards",
                }}
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/auth?mode=signup");
                  setIsMenuOpen(false);
                }}
                className="btn-primary opacity-0 animate-slide-up"
                style={{
                  animationDelay: "0.4s",
                  animationFillMode: "forwards",
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 animate-fade-in" />
          ) : (
            <Menu className="w-6 h-6 animate-fade-in" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            <Link
              to="/college-projects"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
             College Projects
            </Link>
            <a
              href="/#explore"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <div className="border-t border-gray-100 pt-3 space-y-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="px-4 py-3 flex items-center gap-3 bg-orange-50 rounded-lg group active:bg-orange-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-gray-700">
                      {user.name || user.email}
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 flex items-center gap-3 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate("/auth?mode=login");
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-gray-700 text-left hover:text-orange-600 transition-colors duration-300"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      navigate("/auth?mode=signup");
                      setIsMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 rounded-full bg-orange-500 text-white font-medium hover:bg-orange-600 transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
