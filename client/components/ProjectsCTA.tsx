import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsCTA() {
  return (
    <section className="relative py-12 bg-orange-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 sm:p-12 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards" }}>

          {/* Decorative Pattern - Added pointer-events-none to fix mobile clicks */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full mix-blend-overlay filter blur-3xl pointer-events-none" />

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Final Year Projects for Computer Science Students
            </h3>
            <p className="text-black/80 text-lg max-w-xl mx-auto md:mx-0">
              Explore our collection of real-world full-stack projects designed specifically for final year students. Browse our portfolio or request a custom project tailored to your academic or business requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/college-projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-orange-700/20 hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
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
