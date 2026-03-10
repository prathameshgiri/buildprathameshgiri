import { useState, useEffect } from "react";
import { collegeProjects } from "@/data/collegeProjects";
import { Code, User, GraduationCap, Download, ExternalLink, ShieldAlert, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "sonner";

export default function CollegeProjectsList() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Auth state listener
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setIsLoggedIn(!!firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleDownload = (e: React.MouseEvent, sourceCodeUrl: string) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("Please login to download the source code", {
        action: {
          label: "Login",
          onClick: () => navigate("/auth?mode=login")
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section id="college-projects" className="relative py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-16 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-16 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards" }}>
            <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
              <p className="text-orange-700 text-sm font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Academic Portfolio
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              College <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore high-quality Full-Stack Final Year Projects built using modern technologies. Ready-to-deploy solutions designed for Computer Engineering and IT students to build real-world experience.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-24">
            {collegeProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center opacity-0 animate-slide-up`}
                style={{ animationFillMode: "forwards", animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Image Side (Long Screenshot) */}
                <div className="w-full lg:w-1/2 group">
                  <Link to={`/college-projects/${project.id}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                      <img 
                        src={project.longScreenshot} 
                        alt={project.title} 
                        className="w-full h-auto max-h-[500px] object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-sm border border-orange-100">
                        View Details
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Code className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Developer</p>
                        <p className="text-sm font-semibold text-gray-800">{project.developerName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <User className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Client</p>
                        <p className="text-sm font-semibold text-gray-800">{project.customerName}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 flex flex-wrap gap-4">
                    <a 
                      href={isLoggedIn ? project.sourceCodeUrl : "#"}
                      onClick={(e) => handleDownload(e, project.sourceCodeUrl)}
                      target={isLoggedIn ? "_blank" : undefined}
                      rel={isLoggedIn ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      Get Source Code
                    </a>
                    <Link 
                      to={`/college-projects/${project.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Details
                    </Link>
                  </div>

                  {!isLoggedIn && (
                    <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                      <ShieldAlert className="w-4 h-4" />
                      Login required for download
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-24 text-center bg-white p-8 sm:p-12 rounded-3xl border-2 border-orange-100 shadow-xl">
            <h3 className="text-1xl font-bold text-gray-900 mb-4">Want a Custom Project?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              We can build any project tailored to your specific academic requirements and deadlines.
            </p>
            <a 
              href="https://wa.me/918010901226?text=Hi, I'm interested in a custom college project."
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all duration-300"
            >
              Contact via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
