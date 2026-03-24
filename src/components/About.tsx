import { motion } from "framer-motion";
import { Code2, Brain, Layers, Zap, Star, BarChart3 } from "lucide-react";

const About = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">About Me</div>
        <h2 className="section-title">
          CSE Student That<br />
          Delivers <span className="text-gradient-bright">Real Results</span>
        </h2>
        <p className="section-subtitle">
          Building efficient, scalable solutions with a strong foundation in algorithms and modern web technologies.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card */}
          <div className="md:col-span-2 bento-card">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Who I Am</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  I'm a Computer Science Engineering student at Lovely Professional University with a deep passion for technology and problem-solving. I specialize in building full stack web applications with clean, efficient code.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: Code2, label: "Full Stack" },
                  { icon: Brain, label: "DSA Expert" },
                  { icon: Layers, label: "System Design" },
                  { icon: Zap, label: "Fast Learner" },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-3 text-center">
                    <item.icon size={18} className="mx-auto mb-1.5 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            <div className="bento-card flex-1 flex flex-col items-center justify-center text-center">
              <Star size={24} className="text-muted-foreground mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">LPU</div>
              <p className="text-xs text-muted-foreground">B.Tech CSE Student</p>
            </div>
            <div className="bento-card flex-1 flex flex-col items-center justify-center text-center">
              <BarChart3 size={24} className="text-muted-foreground mb-3" />
              <div className="text-3xl font-bold text-foreground mb-1">10+</div>
              <p className="text-xs text-muted-foreground">Projects Built</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
