import { ArrowRight, MessageCircle } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards" }}>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full mix-blend-overlay filter blur-3xl" />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Explore Our Recent Projects
            </h3>
            <p className="text-white/80 text-lg max-w-xl mx-auto md:mx-0">
              Check out our portfolio or request a custom project built specifically for your requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a 
              href="#college-projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-orange-700/20 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/918010901226?text=Hi, I'm interested in a custom project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-black hover:scale-105 transition-all duration-300"
            >
              Request Custom Project
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
