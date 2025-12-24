import { Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function PremiumMessage() {
  return (
    <div className="opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.85s" }}>
      <div className="relative mt-10 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-2xl p-6 sm:p-8 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed">
              Sign up or log in to access exclusive, real-world projects built for serious developers and businesses.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Link
              to="/auth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group/btn whitespace-nowrap"
            >
              <span className="group-hover/btn:scale-110 inline-block transition-transform duration-300">
                Unlock Premium Projects
              </span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
