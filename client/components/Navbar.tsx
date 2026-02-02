import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-bold opacity-0 animate-slide-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="text-orange-500">PS</span>
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
          <a
            href="/#services"
            className="nav-link opacity-0 animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Services
          </a>
          <a
            href="/#pricing"
            className="nav-link opacity-0 animate-slide-up"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Pricing
          </a>
          <a
            href="/#explore"
            className="nav-link opacity-0 animate-slide-up"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Explore
          </a>
        </div>

        {/* Desktop Right Side Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => {
              navigate("/auth?mode=login");
              setIsMenuOpen(false);
            }}
            className="text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors duration-300 opacity-0 animate-slide-up"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              navigate("/auth?mode=signup");
              setIsMenuOpen(false);
            }}
            className="btn-primary opacity-0 animate-slide-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Sign Up
          </button>
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
            <a
              href="/#services"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="/#pricing"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/#explore"
              className="block px-4 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </a>
            <div className="border-t border-gray-100 pt-3 space-y-2">
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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
