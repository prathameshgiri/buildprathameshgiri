import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm animate-slide-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-xl font-bold opacity-0 animate-slide-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="text-orange-500">PS</span>
          <span className="text-gray-900">Giri</span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#pricing" className="nav-link opacity-0 animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Pricing
          </a>
          <a href="#explore" className="nav-link opacity-0 animate-slide-up" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
            Explore
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors duration-300 opacity-0 animate-slide-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Sign In
          </button>
          <button className="btn-primary opacity-0 animate-slide-up" style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
