import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "GitView",
    subtitle: "GitHub User Explorer",
    description:
      "A sleek React app for exploring GitHub profiles in real-time with dynamic search, language filtering, search history, and theme persistence.",
    tech: ["React.js", "Tailwind CSS", "GitHub API"],
    features: ["Real-time search", "Language filtering", "Search history", "Theme persistence"],
  },
  {
    title: "Hotel Booking",
    subtitle: "Full Stack Booking Platform",
    description:
      "A complete hotel reservation system with booking interface, admin dashboard, secure authentication, and database management.",
    tech: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
    features: ["Booking system", "Admin dashboard", "Authentication", "Database integration"],
  },
];

const Projects = () => (
  <section id="projects" className="relative">
    <div className="absolute inset-0 bg-radial-accent opacity-50" />
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-label">Projects</div>
        <h2 className="section-title">
          Proven Results<br />
          You Can <span className="text-gradient-bright">Trust</span>
        </h2>
        <p className="section-subtitle">
          From startups to personal tools, here are projects that showcase real impact.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bento-card group"
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <button className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={15} />
                  </button>
                  <button className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {p.description}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {p.features.map((f) => (
                  <div key={f} className="glass rounded-xl px-3 py-2.5 text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-foreground/40" />
                    {f}
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { number: "2+", label: "Live Projects" },
            { number: "500+", label: "DSA Problems" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Passion Driven" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bento-card text-center"
            >
              <div className="stat-number mb-1">{stat.number}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
