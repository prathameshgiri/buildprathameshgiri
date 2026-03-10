import { Sparkles, ArrowRight } from "lucide-react";
import PremiumMessage from "./PremiumMessage";
import { Link } from "react-router-dom";



        {/* Main Heading */}
        <div
          className="max-w-2xl mb-8 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            <span
              className="text-gray-900 inline-block opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
            >
              Build with Prathamesh Giri
            </span>
            <br />

            <span
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: "0.7s" }}
            >
              Turning Your Dream Website into Reality
              <Sparkles
                className="w-8 h-8 text-orange-500 inline opacity-0 animate-bounce-subtle"
                style={{ animationDelay: "0.9s" }}
              />
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-600 leading-relaxed opacity-0 animate-slide-up"
            style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
          >
            Develop modern websites, web applications, and custom software with professional design, high performance, and SEO-optimized solutions.
            Build with Prathamesh Giri.
          </p>

          {/* About Link */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 opacity-0 animate-slide-up group"
            style={{ animationFillMode: "forwards", animationDelay: "0.82s" }}
          >
            <span className="text-base sm:text-lg">About</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Premium Message Section */}
          <PremiumMessage />
        </div>
      </div>
    </div>
  );
}
