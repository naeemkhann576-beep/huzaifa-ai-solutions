import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { GraduationCap, Download, Bot, Workflow, Server } from "lucide-react";

const AboutSection = () => {
  const educationTimeline = [
    {
      year: "2023",
      title: "Matriculation",
      institution: "The Educators School",
      status: "Completed",
    },
    {
      year: "2024",
      title: "Intermediate in Computer Science",
      institution: "DJ Science College",
      status: "Completed",
    },
    {
      year: "2025",
      title: "Web Development/Wordpress",
      institution: "Aptech",
      status: "Completed",
    },
    {
      year: "2024",
      title: "Agentic AI Engineer/Developer",
      institution: "PIAIC & Panaversity",
      status: "Ongoing",
    },
  ];

  const focusAreas = [
    {
      icon: Bot,
      title: "Agentic AI Development",
      description: "Autonomous agents and multi-step AI workflows",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Gmail, WhatsApp, LinkedIn and GitHub integrations",
    },
    {
      icon: Server,
      title: "Full-Stack Web Development",
      description: "FastAPI, Node.js and WordPress projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bio Section */}
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-soft dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.3),0_0_40px_rgba(0,255,255,0.1)] dark:hover:border-[rgba(0,255,255,0.6)] transition-all duration-500"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
                AI &amp; Automation Developer
              </p>
              <p className="text-lg leading-relaxed text-foreground font-medium">
                I'm Huzaifa Sheikh, an Agentic AI developer focused on building
                intelligent agents and automation workflows that make everyday
                processes faster, smarter and more reliable.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                My recent projects span agent development and workflow
                automation — WhatsApp, Gmail, LinkedIn and GitHub agents, a
                YouTube transcript agent, a resume analyzer and AI writing
                tools. I'm currently training as an Agentic AI Engineer through
                PIAIC &amp; Panaversity, building on my certifications in
                Agentic AI development and prompt engineering.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-background/60 border border-border rounded-xl p-4 transition-colors duration-300 hover:border-primary/40"
                >
                  <area.icon className="w-6 h-6 text-primary mb-3" />
                  <h4 className="font-heading font-semibold text-sm text-foreground mb-1">
                    {area.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="text-muted-foreground mt-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm interested in building practical AI and automation solutions
              that solve real problems and create meaningful value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                variant="hero"
                className="mt-6 shadow-medium hover:shadow-strong"
                asChild
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1JZi46edKC9bNRRKlAFYwObPhQsJsFq-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="space-y-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-heading font-semibold text-xl text-foreground flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>

            <div className="space-y-6">
              {educationTimeline.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-primary before:shadow-glow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-lg p-4 shadow-soft dark:hover:shadow-[0_0_20px_rgba(0,255,255,0.3),0_0_40px_rgba(0,255,255,0.1)] dark:hover:border-[rgba(0,255,255,0.6)] transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-semibold text-primary">
                        {edu.year}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          edu.status === "Completed"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                            : "bg-primary/10 text-primary border border-primary/20"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {edu.institution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
