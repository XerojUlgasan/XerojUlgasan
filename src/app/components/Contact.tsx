import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  Send,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const socials = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "xerojulgasan@gmail.com",
    href: "mailto:xerojulgasan@gmail.com",
    sublabel: "Direct message",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/XerojUlgasan",
    href: "https://github.com/XerojUlgasan",
    sublabel: "View repositories",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ulgasan-xeroj-n-bba096314",
    href: "https://www.linkedin.com/in/ulgasan-xeroj-n-bba096314",
    sublabel: "Professional network",
  },
  {
    icon: <Facebook size={18} />,
    label: "Facebook",
    value: "facebook.com/xeroj.nilles.ulgasan",
    href: "https://www.facebook.com/xeroj.nilles.ulgasan/",
    sublabel: "Social profile",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="text-xs text-muted-foreground tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            06 / Contact
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's Connect
          </h2>
          <div className="w-12 h-0.5 bg-foreground mb-6" />
          <p className="text-base text-muted-foreground max-w-lg">
            Open to opportunities, collaborations, and conversations. Whether
            you're a recruiter, fellow developer, or researcher — reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <MapPin size={14} />
              <span>Quezon City, Philippines</span>
            </div>

            {/* Social cards */}
            <div className="space-y-3">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-background/50 hover:bg-muted/30 hover:border-border transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                    {social.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground">
                        {social.label}
                      </span>
                      <span className="text-xs text-muted-foreground/50">
                        · {social.sublabel}
                      </span>
                    </div>
                    <p
                      className="text-xs text-muted-foreground truncate"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {social.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 rounded-xl border border-green-500/20 bg-green-500/5"
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-600 dark:text-green-400">
                  Available for new opportunities
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5 ml-4">
                Actively seeking internships, part-time roles, and project
                collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
              >
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-border/60 bg-muted/20 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 focus:bg-muted/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border/60 bg-muted/20 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 focus:bg-muted/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-muted/20 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 focus:bg-muted/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Tell me about the opportunity, project, or question you have..."
                    className="w-full px-4 py-3 rounded-xl border border-border/60 bg-muted/20 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 focus:bg-muted/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                >
                  <Send size={15} />
                  Send Message
                </button>

                <p className="text-xs text-muted-foreground/50 text-center">
                  I typically respond within 24–48 hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
