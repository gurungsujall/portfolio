import { motion } from "framer-motion";
import { Github, ArrowRight, Sparkles, Download } from "lucide-react";

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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* ── Left: Text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
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
              Full Stack Developer &amp; CSE Student. Passionate about building scalable web applications and solving real-world problems.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a href="#projects" className="pill-button-primary flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="pill-button-outline">
                Contact Me
              </a>
              <a
                href="/cvforplaceportal (1).pdf"
                download="Sujal_Resume.pdf"
                className="pill-button-outline flex items-center gap-2"
              >
                <Download size={16} />
                Download Resume
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

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative flex-shrink-0 hidden lg:flex items-center justify-center"
          >
            {/* Outer spinning glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[360px] h-[360px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 60%, rgba(139,92,246,0.6) 80%, rgba(59,130,246,0.6) 100%, transparent 0%)",
                filter: "blur(2px)",
              }}
            />

            {/* Middle glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[310px] h-[310px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.15) 60%, transparent 80%)",
              }}
            />

            {/* Glass border ring */}
            <div
              className="absolute w-[300px] h-[300px] rounded-full"
              style={{
                border: "1.5px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 0 40px rgba(139,92,246,0.35), 0 0 80px rgba(59,130,246,0.2), inset 0 0 30px rgba(139,92,246,0.1)",
              }}
            />

            {/* Profile image */}
            <div
              className="relative w-[280px] h-[280px] rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(255,255,255,0.15)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.3)",
              }}
            >
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle glass overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
