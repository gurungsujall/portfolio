import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-lg font-bold text-foreground tracking-tight mb-1">
            <span className="text-muted-foreground font-light">Sujal</span>Gurung
          </p>
          <p className="text-xs text-muted-foreground">Full Stack Developer & CSE Student</p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          {["About", "Skills", "Projects", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Mail, href: "mailto:sujalgurung@example.com" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sujal Gurung. Built with passion & React.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
