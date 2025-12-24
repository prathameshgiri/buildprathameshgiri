import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Gradient Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />
      <div className="absolute top-40 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-fade-in" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        {/* Social Proof Badge */}
        <div className="mb-8 animate-slide-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
          <div className="badge-pill">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                A
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                B
              </div>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white flex items-center justify-center text-xs text-white font-bold">
                C
              </div>
            </div>
            <span className="text-gray-700 text-sm">30+ businesses built with Prathamesh Giri</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-3xl mb-8 animate-slide-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            <span className="text-gray-900">Build your dream website</span>
            <br />
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              with Prathamesh Giri
              <Sparkles className="w-8 h-8 text-orange-500 inline" />
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Transform your ideas into stunning digital experiences. Professional design, seamless development, and unlimited possibilities.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up opacity-0" style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}>
          <button className="btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200">
            Get Started
          </button>
          <button className="btn-secondary text-lg px-8 py-3 hover:shadow-lg transition-all duration-200">
            View Work
          </button>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </div>
  );
}
