import { Sparkles } from "lucide-react";
import PremiumMessage from "./PremiumMessage";

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Gradient Background Blobs with Animation */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" style={{ animationDelay: "0s" }} />
      <div className="absolute top-40 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" style={{ animationDelay: "0.2s" }} />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" style={{ animationDelay: "0.4s" }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Social Proof Badge */}
        <div className="mb-8 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
          <div className="badge-pill hover:shadow-md transition-shadow duration-300">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold hover:scale-110 transition-transform duration-300" title="Client 1">
                A
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold hover:scale-110 transition-transform duration-300" title="Client 2">
                B
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold hover:scale-110 transition-transform duration-300" title="Client 3">
                C
              </div>
            </div>
            <span className="text-gray-700 text-sm">30+ businesses built with Prathamesh Giri</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-3xl mb-8 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-gray-900 inline-block opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}>Build your dream website with</span>
            <br />
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}>
              Prathamesh Giri
              <Sparkles className="w-8 h-8 text-orange-500 inline opacity-0 animate-bounce-subtle" style={{ animationDelay: "0.9s" }} />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}>
            Transform your ideas into stunning digital experiences. Professional design, seamless development, and unlimited possibilities.
          </p>

          {/* Premium Message Section */}
          <PremiumMessage />
        </div>

      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </div>
  );
}
