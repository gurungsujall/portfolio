import { motion } from "framer-motion";
import { Github, ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-muted/5 blur-[150px]" />

      {/* Decorative sparkles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[15%] hidden lg:block"
      >
        <Sparkles size={80} className="text-foreground/10" strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[25%] hidden lg:block"
      >
        <Sparkles size={40} className="text-foreground/5" strokeWidth={1} />
      </motion.div>

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Open to new opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-3d-glass">Build your</span>
            <br />
            <span className="text-3d-glass">digital </span>
            <span className="text-gradient-bright">presence</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed">
            Full Stack Developer & CSE Student. Passionate about building scalable web applications and solving real-world problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#projects" className="pill-button-primary flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="pill-button-outline">
              Contact Me
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-button-outline flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>

          {/* Tech logos bar */}
          <div className="flex flex-wrap items-center gap-8 text-muted-foreground/40 text-sm font-medium">
            {["React", "Node.js", "MongoDB", "Tailwind", "Express", "Java"].map((t) => (
              <span key={t} className="hover:text-muted-foreground transition-colors">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
