import { motion } from "framer-motion";
import { Bot, Cpu, Code, Cloud, LucideIcon } from "lucide-react";

const SkillsSection = () => {
  const skillCategories: {
    title: string;
    icon: LucideIcon;
    color: string;
    skills: { name: string; level: number }[];
  }[] = [
    {
      title: "AI & Automation",
      icon: Bot,
      color: "bg-blue-500",
      skills: [
        { name: "OpenAI Agents SDK", level: 90 },
        { name: "LangGraph", level: 85 },
        { name: "MCP", level: 80 },
        { name: "n8n", level: 88 },
      ],
    },
    {
      title: "Programming",
      icon: Code,
      color: "bg-green-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Node.js", level: 88 },
        { name: "API Development", level: 92 },
        { name: "System Design", level: 85 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Cloud,
      color: "bg-orange-500",
      skills: [
        { name: "FastAPI", level: 90 },
        { name: "Streamlit/Chainlit", level: 85 },
        { name: "Cloud", level: 82 },
        { name: "Vercel/Render", level: 88 },
      ],
    },
    {
      title: "Integrations",
      icon: Cpu,
      color: "bg-purple-500",
      skills: [
        { name: "Github Agent API", level: 90 },
        { name: "LinkedIn API", level: 85 },
        { name: "Gmail API", level: 88 },
        { name: "Gemini API", level: 92 },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} p-2 rounded-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-neon">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative w-full h-2.5 rounded-full overflow-hidden bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full transition-all duration-500 relative overflow-hidden"
                        style={{
                          background: 'hsl(var(--neon))',
                          boxShadow: `
                            0 0 15px hsl(var(--neon) / 0.8),
                            0 0 25px hsl(var(--neon) / 0.6),
                            0 0 35px hsl(var(--neon) / 0.4),
                            inset 0 1px 3px rgba(255, 255, 255, 0.7)
                          `,
                        }}
                      >
                        <div 
                          className="absolute inset-0 w-1/3 animate-shimmer"
                          style={{
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
