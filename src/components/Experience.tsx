import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "B.Tech in Computer Science",
    org: "Lovely Professional University",
    period: "2022 – Present",
    description: "Pursuing CSE with focus on software development, algorithms, and system design.",
  },
  {
    icon: Award,
    title: "DSA Training Program",
    org: "CIPER School",
    period: "2023",
    description: "Intensive training covering advanced algorithms, optimization techniques, and competitive problem-solving.",
  },
  {
    icon: BookOpen,
    title: "Self-Directed Learning",
    org: "Full Stack Development",
    period: "Ongoing",
    description: "Continuously expanding skills through personal projects and modern web development courses.",
  },
];

const Experience = () => (
  <section id="experience" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">Experience & Education</div>
        <h2 className="section-title">
          My Journey<br />
          <span className="text-gradient-bright">So Far</span>
        </h2>
        <p className="section-subtitle">
          A timeline of learning, building, and growing as a developer.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bento-card"
            >
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-5">
                <item.icon size={20} className="text-muted-foreground" />
              </div>
              <span className="text-xs text-muted-foreground/60 mb-3 block">{item.period}</span>
              <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-primary/70 font-medium mb-3">{item.org}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;
