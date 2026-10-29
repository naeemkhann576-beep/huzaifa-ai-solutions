import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ZoomIn, X } from "lucide-react";
import agenticAiCert from "@/assets/certificate-agentic-ai.png";
import promptEngineerCert from "@/assets/certificate-prompt-engineer.png";
import pythonCert from "@/assets/certificate-python.png";
import wordpressCert from "@/assets/certificate-wordpress-cms.png";

const certificates = [
  {
    title: "Agentic AI Level 1 Developer",
    issuer: "PIAIC",
    year: "2026",
    image: agenticAiCert,
  },
  {
    title: "Prompt Engineer",
    issuer: "PIAIC",
    year: "2026",
    image: promptEngineerCert,
  },
  {
    title: "Python Development and Programming",
    issuer: "Aptech",
    year: "2025",
    image: pythonCert,
  },
  {
    title: "Working with Content Management System",
    issuer: "Aptech",
    year: "2025",
    image: wordpressCert,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

const CertificationsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, closeLightbox]);

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Verified credentials from recognized institutions — click any
            certificate to view it in full size.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((certificate, index) => (
            <motion.button
              key={certificate.title}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View ${certificate.title} certificate enlarged`}
              className="text-left bg-card border border-border rounded-2xl p-4 shadow-soft transition-all duration-300 hover:-translate-y-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-[0_0_20px_rgba(0,255,255,0.3),0_0_40px_rgba(0,255,255,0.1)] hover:border-[rgba(0,255,255,0.6)]"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Thumbnail — object-contain so the full certificate stays visible */}
              <div className="relative h-56 rounded-xl bg-muted border border-border/50 overflow-hidden flex items-center justify-center p-3 mb-4">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} — ${certificate.issuer} certificate`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain rounded-md"
                />
                <span className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-heading font-semibold text-base text-foreground leading-snug">
                  {certificate.title}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  {certificate.issuer}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {certificate.year}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Enlarged certificate view (lightbox) */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={`${certificates[selectedIndex].title} certificate enlarged view`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close enlarged certificate view"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary/50 flex items-center justify-center transition-all duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              className="max-w-5xl w-full flex flex-col items-center gap-4"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={certificates[selectedIndex].image}
                alt={`${certificates[selectedIndex].title} — ${certificates[selectedIndex].issuer} certificate`}
                className="max-h-[80vh] max-w-full w-auto object-contain rounded-lg shadow-[0_0_40px_rgba(0,255,255,0.2)]"
              />
              <p className="text-center text-foreground font-heading font-semibold">
                {certificates[selectedIndex].title}
                <span className="text-muted-foreground font-normal">
                  {" "}
                  — {certificates[selectedIndex].issuer}{" "}
                  {certificates[selectedIndex].year}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
