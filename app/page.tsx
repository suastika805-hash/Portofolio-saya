// SERVER COMPONENT
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen dark:bg-gray-950 bg-white overflow-x-hidden">
      <HeroSection />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
    </main>
  );
}
