import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 text-xl font-bold">
          <span className="text-orange-500">PS</span>
          <span className="text-gray-900">Giri</span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#explore" className="nav-link">
            Explore
          </a>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-block text-gray-700 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
            Sign In
          </button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
