import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Code, User, GraduationCap, Download, CheckCircle, ExternalLink, ShieldAlert } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collegeProjects, CollegeProject } from "@/data/collegeProjects";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "sonner";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<CollegeProject | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auth state listener
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setIsLoggedIn(!!firebaseUser);
    });

    // Find project
    const foundProject = collegeProjects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    } else {
      toast.error("Project not found");
      navigate("/college-projects");
    }

    setIsLoading(false);
    return () => unsubscribe();
  }, [id, navigate]);

  const handleDownload = (e: React.MouseEvent) => {
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

  if (isLoading || !project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs / Back button */}
        <div className="mb-8">
          <Link
            to="/college-projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Long Screenshot & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border-2 border-orange-50 shadow-2xl">
              <img
                src={project.longScreenshot}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Detailed Description Section */}
            <div className="space-y-12">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  About the <span className="text-orange-500">Project</span>
                </h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="leading-relaxed">
                    {project.fullDescription || "No detailed description available."}
                  </p>
                </div>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="max-w-4xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                        <div className="mt-1 p-1 bg-green-50 rounded-full">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Project Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <div className="bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-xl space-y-6">
                <div>
                  <div className="inline-block mb-4 px-3 py-1 bg-orange-100 rounded-full">
                    <p className="text-orange-700 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider">
                      <GraduationCap className="w-3.5 h-3.5" /> College Project
                    </p>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="space-y-4 pt-4">
                  <a 
                    href={isLoggedIn ? project.sourceCodeUrl : "#"}
                    onClick={handleDownload}
                    target={isLoggedIn ? "_blank" : undefined}
                    rel={isLoggedIn ? "noopener noreferrer" : undefined}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-orange-200 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Download Source Code
                  </a>
                  {!isLoggedIn && (
                    <div className="flex items-center gap-2 justify-center text-amber-600 text-sm font-medium">
                      <ShieldAlert className="w-4 h-4" />
                      Login required for download
                    </div>
                  )}
                </div>

                {/* Details List */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 rounded-xl">
                      <Code className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Technologies</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-xs font-semibold text-gray-700">{tech}{tech !== project.technologies[project.technologies.length-1] && ","} </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 rounded-xl">
                      <User className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Developer Name</p>
                      <p className="text-sm font-bold text-gray-800">{project.developerName}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-50 rounded-xl">
                      <GraduationCap className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Customer Name</p>
                      <p className="text-sm font-bold text-gray-800">{project.customerName}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Share / Extra Info */}
              <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-3">Interested in a custom project like this?</p>
                <a 
                  href="https://wa.me/918010901226" 
                  className="inline-flex items-center gap-2 text-orange-600 font-bold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
