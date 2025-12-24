import ProjectIdeaForm from "./ProjectIdeaForm";

export default function ProjectIdeaSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Subtle Gradient Blobs */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" style={{ animationDelay: "0.3s" }} />

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Share Your <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Project Idea</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Have a vision? Tell us about your project and let's bring it to life together. We'd love to hear from you!
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200 hover:border-orange-200 transition-colors duration-300">
          <ProjectIdeaForm />
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-20" />
    </section>
  );
}
