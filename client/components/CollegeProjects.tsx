import { collegeProjects } from "@/data/collegeProjects";
import { Code, User, GraduationCap, Download, ExternalLink } from "lucide-react";

export default function CollegeProjects() {
  return (
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
            Premium <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">College Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            High-quality, ready-to-deploy final year projects built with modern technologies. 
            Perfect for computer engineering and IT students.
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
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={project.longScreenshot} 
                    alt={project.title} 
                    className="w-full h-auto max-h-[500px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 shadow-sm border border-orange-100">
                    Full Preview Available
                  </div>
                </div>
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
                    href={project.sourceCodeUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all duration-300"
                  >
                    <Download className="w-5 h-5" />
                    Get Source Code
                  </a>
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
