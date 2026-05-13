import { motion } from "motion/react";

type Skill = { name: string; level?: "primary" | "secondary" };

type SkillCategory = {
  id: string;
  label: string;
  index: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    id: "languages",
    label: "Programming Languages",
    index: "01",
    skills: [
      { name: "Python", level: "primary" },
      { name: "JavaScript", level: "primary" },
      { name: "C#", level: "primary" },
      { name: "VB.NET", level: "secondary" },
      { name: "SQL", level: "primary" },
      { name: "HTML", level: "primary" },
      { name: "CSS", level: "primary" },
    ],
  },
  {
    id: "web",
    label: "Web & Backend Technologies",
    index: "02",
    skills: [
      { name: "Node.js", level: "primary" },
      { name: "REST API", level: "primary" },
      { name: "Firebase", level: "primary" },
      { name: "Express.js", level: "secondary" },
      { name: "React", level: "secondary" },
      { name: "WebSockets", level: "secondary" },
      { name: "JSON / XML", level: "secondary" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Hardware Systems",
    index: "03",
    skills: [
      { name: "ESP32", level: "primary" },
      { name: "Arduino", level: "primary" },
      { name: "Sensor Integration", level: "primary" },
      { name: "GPS Modules", level: "primary" },
      { name: "Solar Tracking", level: "primary" },
      { name: "pH Sensors", level: "secondary" },
      { name: "TDS / Turbidity", level: "secondary" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    index: "04",
    skills: [
      { name: "GitHub", level: "primary" },
      { name: "Figma", level: "primary" },
      { name: "Firebase Console", level: "primary" },
      { name: "SQL Server", level: "primary" },
      { name: "Postman", level: "primary" },
      { name: "Docker", level: "secondary" },
      { name: "Kubernetes", level: "secondary" },
      { name: "AWS", level: "secondary" },
      { name: "Supabase", level: "secondary" },
      { name: "Oracle DB", level: "secondary" },
      { name: "XAMPP", level: "secondary" },
      { name: "VS Code", level: "primary" },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity & Penetration Testing",
    index: "05",
    skills: [
      { name: "Beginner Penetration Testing", level: "primary" },
      { name: "Red Teaming Fundamentals", level: "primary" },
      { name: "Web Application Exploitation", level: "primary" },
      { name: "Kali Linux", level: "primary" },
      { name: "Bettercap", level: "secondary" },
      { name: "VMware Virtual Labs", level: "primary" },
      { name: "Network Traffic Analysis", level: "primary" },
      { name: "Ethical Hacking Practices", level: "primary" },
      { name: "Security Testing in Controlled Environments", level: "primary" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            02 / Skills
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Tech Stack
          </h2>
          <div className="w-12 h-0.5 bg-foreground" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
              className="p-6 lg:p-8 rounded-2xl border border-border/60 bg-background/50 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <span
                  className="text-xs text-muted-foreground/50 mt-0.5 shrink-0"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {cat.index}
                </span>
                <h3 className="text-base font-semibold text-foreground">
                  {cat.label}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.08 + i * 0.04,
                      duration: 0.3,
                    }}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs tracking-wide transition-all duration-200 cursor-default select-none ${
                      skill.level === "primary"
                        ? "bg-foreground/8 dark:bg-foreground/10 text-foreground border border-border/80 hover:bg-foreground/15"
                        : "bg-muted/40 text-muted-foreground border border-border/40 hover:text-foreground hover:border-border/80"
                    }`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tag line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground/50 mt-12"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // continuously learning · building · shipping
        </motion.p>
      </div>
    </section>
  );
}
