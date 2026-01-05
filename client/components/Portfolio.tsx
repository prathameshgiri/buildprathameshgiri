import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web Apps",
      description: "Full-stack e-commerce platform with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      name: "Corporate Website",
      category: "Websites",
      description: "Modern, responsive corporate website with CMS",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity"],
      image: "https://images.unsplash.com/photo-1507238691619-20f6629c3368?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      name: "Admin Dashboard",
      category: "Admin Panels",
      description: "Real-time analytics and user management dashboard",
      tech: ["React", "Firebase", "Chart.js", "Redux"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      name: "SaaS Platform",
      category: "Web Apps",
      description: "Subscription-based SaaS application with user management",
      tech: ["Next.js", "Supabase", "Stripe", "TypeScript"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      name: "Portfolio Website",
      category: "Websites",
      description: "Creative portfolio with smooth animations and interactions",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1563062407-98eeb66db05f?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      name: "Mobile App Interface",
      category: "Admin Panels",
      description: "Mobile-first responsive application interface",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const categories = ["All", "Websites", "Web Apps", "Admin Panels"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" style={{ animationDelay: "0.2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 text-sm font-semibold">Our Work</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.3s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
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
              className="opacity-0 animate-slide-up group overflow-hidden rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300"
              style={{ animationFillMode: "forwards", animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    className="p-3 bg-white rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="p-3 bg-white rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <div className="mb-3 inline-block px-3 py-1 bg-orange-100 rounded-full">
                  <span className="text-xs font-semibold text-orange-700">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5 pointer-events-none" />
    </section>
  );
}
