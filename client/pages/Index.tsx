import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectIdeaSection from "@/components/ProjectIdeaSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProjectIdeaSection />
    </div>
  );
}
