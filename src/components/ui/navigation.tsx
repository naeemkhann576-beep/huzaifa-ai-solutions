import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/assets/logo.png";
interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}
const Navigation = ({
  activeSection,
  onSectionClick
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "certifications",
    label: "Certifications"
  }, {
    id: "skills",
    label: "Skills"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "contact",
    label: "Contact"
  }];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMobileClick = (sectionId: string) => {
    setIsMobileOpen(false);
    onSectionClick(sectionId);
  };
  return <motion.nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" initial={{
    opacity: 1,
    y: 0
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* 💠 Logo */}
          <motion.div className="relative w-14 h-14 flex items-center justify-center cursor-pointer transition-transform duration-300 rounded-full bg-card border border-border" whileHover={{
          scale: 1.1
        }} transition={{
          type: "spring",
          stiffness: 300
        }}>
            <img src={logo} alt="HS Logo" className="w-full h-full object-contain rounded-full" />
          </motion.div>

          {/* 🖥 Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`transition-all duration-300 font-medium px-5 py-2 rounded-full text-sm lg:px-6 ${
                  activeSection === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* 🌓 Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* 📱 Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="text-foreground hover:text-primary" aria-label={isMobileOpen ? "Close menu" : "Open menu"} aria-expanded={isMobileOpen} onClick={() => setIsMobileOpen(open => !open)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>

        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border shadow-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleMobileClick(item.id)}
                  className={`text-left font-medium px-4 py-2.5 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>;
};
export default Navigation;
