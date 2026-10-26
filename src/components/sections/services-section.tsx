import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Server,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Custom chatbots, automation agents, and intelligent orchestration systems",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Google Sheets, Gmail, LinkedIn, and WhatsApp integrations for seamless workflows",
    },
    {
      icon: Server,
      title: "Full Stack Development",
      description: "FastAPI, Node.js, UI Interface/Design and scalable API development for robust applications",
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Tools",
      description: "Resume analyzers, content generators, and intelligent chat assistants",
    },
    {
      icon: Users,
      title: "Consultation & Integration",
      description: "AI strategy planning and seamless system integration services",
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description: "Automate repetitive tasks and streamline business processes with AI",
    },
    {
      icon: Video,
      title: "AI Videos & Image Generation",
      description: "Creating an Generating Viral AI Videos for Faceless Content Creation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 bg-background services-section">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Services
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I offer comprehensive AI and automation solutions to help businesses
            streamline their processes and boost productivity.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              style={{
                transition: 'all 0.3s ease'
              }}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)',
                borderColor: 'rgba(0, 255, 255, 0.6)'
              }}
            >
              <div className="mb-4">
                {/* 🔥 Blue glow icon */}
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon 
                    className="w-6 h-6 transition-all duration-300" 
                    style={{
                      color: '#00ffff',
                      filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.9)) drop-shadow(0 0 16px rgba(0, 212, 255, 0.7))'
                    }}
                  />
                </div>

                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
