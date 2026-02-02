import { ExternalLink, Github, Info } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Websites", "Web Apps", "Admin Panels"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="explore"
      className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div
        className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}
        >
          <div className="inline-block mb-6 px-4 py-2 bg-teal-100 rounded-full">
            <p className="text-teal-700 text-sm font-semibold">Our Work</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-slide-up"
          style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-slide-up overflow-hidden rounded-2xl border-2 border-teal-100 hover:border-teal-300 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              style={{
                animationFillMode: "forwards",
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white flex-grow flex flex-col">
                <div className="mb-3 inline-block px-3 py-1 bg-teal-100 rounded-full w-fit">
                  <span className="text-xs font-semibold text-teal-700">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-orange-100 text-orange-700 font-semibold rounded-lg hover:bg-orange-200 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <Info className="w-4 h-4" />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
