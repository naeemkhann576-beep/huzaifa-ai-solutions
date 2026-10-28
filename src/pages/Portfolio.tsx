import { useState, useEffect } from "react";
import Navigation from "../components/ui/navigation";
import HeroSection from "../components/sections/hero-section";
import AboutSection from "../components/sections/about-section";
import CertificationsSection from "../components/sections/certifications-section";
import SkillsSection from "../components/sections/skills-section";
import ServicesSection from "../components/sections/services-section";
import ProjectsSection from "../components/sections/projects-section";
import ContactSection from "../components/sections/contact-section";
import Footer from "../components/sections/footer";
import ChatAssistant from "../components/ai-chat/ChatAssistant";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Particle overlay */}
      <div className="particle-overlay">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} />
      <HeroSection onSectionClick={handleSectionClick} />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer onSectionClick={handleSectionClick} />
      <ChatAssistant />
    </div>
  );
};

export default Portfolio;