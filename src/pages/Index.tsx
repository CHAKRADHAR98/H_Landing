
import { useEffect } from "react";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/TechnologySection";
import RoadmapSection from "@/components/RoadmapSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Heimdall Network - ";
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main>
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <RoadmapSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
