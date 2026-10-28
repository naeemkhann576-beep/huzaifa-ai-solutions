import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onSectionClick: (section: string) => void;
}

const Footer = ({ onSectionClick }: FooterProps) => {
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Huzafi", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/huzaifa-sheikh-b2a012342/", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Mail, text: "contacthuzai567823@gmail.com", href: "mailto:contacthuzai567823@gmail.com" },
    { icon: Phone, text: "+92 3482515273", href: "tel:+92 3420023413" },
    { icon: MapPin, text: "Karachi, Pakistan" },
  ];

  return (
    <footer className="relative bg-background/40 backdrop-blur-sm border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Huzaifa Sheikh</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer & AI Specialist crafting innovative solutions with cutting-edge technologies.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onSectionClick(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <info.icon className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                      {info.text}
                    </a>
                  ) : (
                    <div className="text-muted-foreground text-sm flex items-center gap-2">
                      <info.icon className="w-4 h-4 text-primary/70" />
                      {info.text}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Web Development</li>
              <li className="text-muted-foreground text-sm">AI Integration</li>
              <li className="text-muted-foreground text-sm">AI AGENTS DEVELOPMENT</li>
              <li className="text-muted-foreground text-sm">Consulting</li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/70 text-sm">
              © {new Date().getFullYear()} Huzaifa Sheikh. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-muted-foreground/70 hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
