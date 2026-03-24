import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const links = [
  { icon: Mail, label: "Email", value: "sujalgurung@example.com", href: "mailto:sujalgurung@example.com" },
  { icon: Phone, label: "Phone", value: "+91 6296772763", href: "tel:+916296772763" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sujalgurung", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "github.com/sujalgurung", href: "https://github.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Your Questions<br />
            <span className="text-gradient-bright">Answered</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's build something amazing together.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bento-card flex flex-col items-center justify-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center mb-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <l.icon size={18} />
                  </div>
                  <p className="text-xs font-medium text-foreground mb-0.5">{l.label}</p>
                  <p className="text-[10px] text-muted-foreground break-all">{l.value}</p>
                </a>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bento-card space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Send a Message</h3>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors resize-none"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="pill-button-primary w-full flex items-center justify-center gap-2">
                <Send size={14} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
