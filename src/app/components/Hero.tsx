import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Facebook,
  Download,
  ChevronRight,
  User,
} from "lucide-react";

const roles = [
  "Software Engineer",
  "Backend Developer",
  "IoT Systems Innovator",
  "Desktop App Developer",
  "Full-Stack Builder",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const handleNav = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, var(--color-background) 100%),
            radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--color-foreground) 3%, transparent) 0%, transparent 70%)
          `,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Profile image will render in the profile block below to avoid duplication */}

      {/* Subtle radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--color-foreground) 4%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-muted/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span
            className="text-xs text-muted-foreground tracking-wider uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Available for opportunities
          </span>
        </motion.div>

        {/* Profile photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-8 relative"
        >
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #6b7280, #374151, #111827)",
              padding: "2px",
            }}
          >
            <img
              src="/misc/ProfilePicture.jpg"
              alt="Profile picture of Xeroj Ulgasan"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* IT Student label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm text-muted-foreground tracking-widest uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          IT Student · Quezon City University
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground mb-4"
          style={{ lineHeight: "0.95", letterSpacing: "-0.03em" }}
        >
          Xeroj N.
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 50%, transparent) 100%)",
            }}
          >
            Ulgasan
          </span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-8 mb-6 flex items-center justify-center"
        >
          <span
            className="text-lg sm:text-xl text-muted-foreground"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building intelligent systems through software, hardware, and
          innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={() => handleNav("#projects")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            View Projects
            <ChevronRight size={16} />
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border/70 bg-muted/30 text-foreground text-sm font-medium hover:bg-muted/60 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Contact Me
            <Mail size={16} />
          </button>
          <a
            href="/misc/xeroj_ulgasan.pdf"
            download="Xeroj_Ulgasan.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border/70 bg-transparent text-muted-foreground text-sm font-medium hover:text-foreground hover:border-foreground/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: <Github size={18} />,
              label: "GitHub",
              href: "https://github.com/XerojUlgasan",
            },
            {
              icon: <Linkedin size={18} />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ulgasan-xeroj-n-bba096314",
            },
            {
              icon: <Facebook size={18} />,
              label: "Facebook",
              href: "https://www.facebook.com/xeroj.nilles.ulgasan/",
            },
            {
              icon: <Mail size={18} />,
              label: "Email",
              href: "mailto:xerojulgasan@gmail.com",
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/30 transition-all duration-200"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
