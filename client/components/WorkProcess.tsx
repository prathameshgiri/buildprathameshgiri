export default function WorkProcess() {
  const steps = [
    {
      number: 1,
      title: "Requirement Analysis",
      description: "We understand your vision, goals, and business requirements in detail",
    },
    {
      number: 2,
      title: "UI/UX Design",
      description: "Create wireframes and mockups to visualize the final product",
    },
    {
      number: 3,
      title: "Development",
      description: "Build your project using modern technologies and best practices",
    },
    {
      number: 4,
      title: "Testing",
      description: "Comprehensive testing to ensure quality and performance",
    },
    {
      number: 5,
      title: "Deployment",
      description: "Launch your project on optimized hosting and configure deployment",
    },
    {
      number: 6,
      title: "Support & Maintenance",
      description: "Ongoing support and updates to keep your project running smoothly",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-fade-in" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-slide-up" style={{ animationFillMode: "forwards", animationDelay: "0.2s" }}>
          <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
            <p className="text-orange-700 text-sm font-semibold">How We Work</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Work Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined process that ensures clarity, quality, and timely delivery
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="opacity-0 animate-slide-up"
              style={{ animationFillMode: "forwards", animationDelay: `${0.3 + index * 0.08}s` }}
            >
              <div className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Card */}
                <div className="pt-8 pl-8 p-6 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 -right-20 w-40 h-1 bg-gradient-to-r from-orange-400 to-transparent"></div>
                  )}
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
