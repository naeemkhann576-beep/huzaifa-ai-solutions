import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "WhatsApp AI Agent",
      description: "Smart WhatsApp agent for automated messaging and workflows",
      image: "📱",
      details: "A smart WhatsApp agent that can reply to messages automatically, answer FAQs, and handle small workflows using OpenAI Agents SDK.",
      technologies: ["Python", "Ultramsg WhatsApp API", "Chainlit"],
      githubUrl: "https://github.com/Huzafi/Whatsapp_Agent",
      liveUrl: "https://drive.google.com/file/d/1gav2vcxSw6oGqQVGC4t3vGqMuNLQfvav/view",
    },
    {
      id: 2,
      title: "GitHub Agent",
      description: "An AI-powered automation agent that manages GitHub repositories through chat commands.",
      image: "🐱",
      details: "A conversational agent built with the OpenAI Agents SDK and GitHub API that allows users to create, list, and delete repositories directly through chat. It eliminates manual steps by automating GitHub tasks seamlessly.",
      technologies: ["Python", "OpenAI Agents SDK", "GitHub API", "FastAPI"],
      githubUrl: "https://github.com/Huzafi/Github_Agent",
      liveUrl: "https://drive.google.com/file/d/1Ecq3OjSLNJpeU0ZZ5vym8VlWLNddYnVI/view",
    },
    {
      id: 3,
      title: "AI Native Book",
      description: "AI Native Book Of Physical AI & Humanoids",
      image: "📘",
      details: "An AI-Native Book platform combining Docusaurus frontend, SpecKit Plus for structured development and using ClaudeCode for developemnt, and a RAG-powered chatbot delivering context-aware answers from the book content.",
      technologies: ["Docusarus", "ClaudeCode", "Speckit"],
      githubUrl: "https://github.com/Huzafi/AI-Native-Physical-Book/tree/001-ai-book-docusaurus",
      liveUrl: "https://ai-native-book-green.vercel.app/",
    },
    {
      id: 4,
      title: "LinkedIn Automation Agent",
      description: "Automated LinkedIn outreach and networking",
      image: "🔗",
      details: "Automation tool for LinkedIn that helps with connection requests, messaging, and profile optimization while maintaining authenticity.",
      technologies: ["n8n", "LinkedIn API", "Automation workfow"],
      githubUrl: "https://github.com/Huzafi/n8n_Automation_Projects/tree/main/01-LinkedIn-Automation",
      liveUrl: "https://drive.google.com/file/d/18WcuY6IO2oIkjmg9iKviYzB5MMN8pHs6/view",
    },
    {
      id: 5,
      title: "YouTube Transcript Agent",
      description: "An AI-powered app that extracts, summarizes, and analyzes YouTube video transcripts in real-time.",
      image: "▶️",
      details: "A smart transcript agent that uses OpenAI API and FastAPI to fetch and process YouTube video transcripts with keyword extraction and summary generation.",
      technologies: ["Python", "Hugging Face embeddings", "Langchain", "Streamlit"],
      githubUrl: "https://github.com/Huzafi/Youtube_Transcript_Agent",
      liveUrl: "https://youtube-transcript-agent.streamlit.app",
    },
    {
      id: 6,
      title: "Gmail Agent",
      description: "Smart email management and automation",
      image: "📧",
      details: "AI-powered email assistant that categorizes emails, generates responses, and automates routine email tasks to boost productivity.",
      technologies: ["n8n", "Gmail API", "OpenAI"],
      githubUrl: "https://github.com/Huzafi/n8n_Automation_Projects/tree/main/03-Gmail-Agent",
      liveUrl: "https://drive.google.com/file/d/1Y6uHz5hjl05PyOoRhXlYZctQLxjMj-YW/view",
    },
    {
      id: 7,
      title: "AI Resume Analyzer",
      description: "Intelligent resume analysis and optimization tool",
      image: "🤖",
      details: "Advanced AI-powered resume analyzer that provides detailed feedback, keyword optimization, and formatting suggestions to help job seekers improve their resumes.",
      technologies: ["Python", "GEMINI API", "Streamlit"],
      githubUrl: "https://github.com/Huzafi/Ai_Resume_Analyzer",
      liveUrl: "https://ai-resume-analyzing.streamlit.app/",
    },
    {
      id: 8,
      title: "Coding Agent",
      description: "AI-powered code review and generation tool",
      image: "💻",
      details: "Smart coding assistant that provides code reviews, generates documentation, and helps with debugging and optimization tasks.",
      technologies: ["Python", "OpenAI", "Streamlit"],
      githubUrl: "https://github.com/Huzafi/Expert_Coding_Agent",
      liveUrl: "https://expert-coding-agent.streamlit.app/",
    },
    {
      id: 9,
      title: "AI Appointment Assistant",
      description: "AI Hospital Appointment Assistant to book an Appointment of patient",
      image: "✍️",
      details: "An AI-powered hospital appointment assistant that enables patients to interact naturally through voice, describe their health concerns, find the relevant medical specialty, select an available doctor and appointment slot, and book an appointment automatically..",
      technologies: ["Python", "n8n", "Elevenlabs"],
      githubUrl: "https://github.com/Huzafi/n8n_Automation_Projects/tree/main/06-AI%20Hospital%20Appointment%20System",
      liveUrl: "https://drive.google.com/file/d/1z8HhOvituXF3_GaConVdoLZgGB7_C-Bj/view",
    },
    {
      id: 10,
      title: "Currency Converter Agent",
      description: "Real-time currency converter with live exchange rates",
      image: "💱",
      details: "A real-time currency converter agent that fetches live exchange rates and performs fast conversions.",
      technologies: ["Python", "OpenAI API", "Free Currency API"],
      githubUrl: "https://github.com/Huzafi/Currency_Converter_Agent",
      liveUrl: "https://currency-converter-agent.streamlit.app/",
    },
    {
      id: 11,
      title: "AI Chat Assistant",
      description: "Conversational AI for customer support",
      image: "💬",
      details: "Intelligent chatbot solution for businesses to automate customer support, handle inquiries, and provide 24/7 assistance.",
      technologies: ["Python", "OpenAI", "Gemini API"],
      githubUrl: "https://github.com/Huzafi/AI_Chat_Assistant-Agent",
      liveUrl: "https://agentic-ai-bo.streamlit.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my recent work in AI and automation, showcasing innovative
            solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-2 group"
              variants={itemVariants}
              whileHover={{ 
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)',
                borderColor: 'rgba(0, 255, 255, 0.6)'
              }}
            >
              <div className="p-6">
                <div className="mb-4 h-16 flex items-center justify-center">
                  {typeof project.image === "string" ? (
                    <div className="text-4xl">{project.image}</div>
                  ) : (
                    <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<div class="text-2xl text-primary">${project.title.charAt(0)}</div>`;
                        }}
                      />
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="secondary" size="sm" className="text-foreground border-border hover:bg-accent hover:text-accent-foreground">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-heading">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-base leading-relaxed">
                          {project.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span
                                key={index}
                                className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button variant="default" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-accent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-accent" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
