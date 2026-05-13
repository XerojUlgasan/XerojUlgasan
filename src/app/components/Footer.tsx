import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Terminal,
  Heart,
} from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <Github size={15} />,
    href: "https://github.com/XerojUlgasan",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={15} />,
    href: "https://www.linkedin.com/in/ulgasan-xeroj-n-bba096314",
    label: "LinkedIn",
  },
  {
    icon: <Facebook size={15} />,
    href: "https://www.facebook.com/xeroj.nilles.ulgasan/",
    label: "Facebook",
  },
  {
    icon: <Mail size={15} />,
    href: "mailto:xerojulgasan@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 mb-3 group"
            >
              <div className="w-7 h-7 bg-foreground rounded flex items-center justify-center">
                <Terminal size={12} className="text-background" />
              </div>
              <span
                className="text-sm text-foreground"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                xeroj.dev
              </span>
            </button>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              IT Student · Software Engineer · IoT Developer · Backend Engineer
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p className="text-xs font-semibold text-foreground mb-3 tracking-wide">
              Navigation
            </p>
            <ul className="space-y-1.5">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold text-foreground mb-3 tracking-wide">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs text-muted-foreground/60"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            © {new Date().getFullYear()} Xeroj N. Ulgasan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 flex items-center gap-1">
            Built with <Heart size={10} className="text-muted-foreground/60" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
