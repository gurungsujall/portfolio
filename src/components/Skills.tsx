import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "PHP", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Tools & Databases",
    skills: ["MongoDB", "Oracle SQL", "MySQL", "GitHub", "VS Code"],
  },
  {
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Communication", "Adaptability", "Collaboration"],
  },
];

const Skills = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">Skills</div>
        <h2 className="section-title">
          Technologies I<br />
          Work <span className="text-gradient-bright">With</span>
        </h2>
        <p className="section-subtitle">
          A curated toolkit refined through projects, training, and continuous learning.
        </p>

        {/* Bento grid for skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="bento-card"
            >
              <h3 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wide">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full text-xs font-medium glass border-border hover:border-foreground/20 transition-colors duration-300 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
