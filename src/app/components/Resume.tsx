import { motion } from "motion/react";
import {
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
} from "lucide-react";

const strengths = [
  "IoT System Architecture & Sensor Integration",
  "Backend API Development (Node.js, Firebase, SQL)",
  "Desktop Application Development (C#, VB.NET)",
  "Real-time Dashboard Engineering",
  "Hardware-Software Integration (ESP32, Arduino)",
  "Database Design (SQL Server, Oracle, Firebase)",
  "Full-stack Web Development",
  "Research & Technical Documentation",
];

const education = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Quezon City University",
    location: "Quezon City, Philippines",
    period: "2022 – Present",
    details:
      "Specialization in software engineering, IoT systems, and application development.",
  },
];

const experience = [
  {
    title: "IoT Systems Developer",
    company: "Academic Research Projects",
    period: "2023 – Present",
    highlights: [
      "Developed PondPal — real-time aquaculture monitoring IoT system",
      "Built QCU-EcoCharge — automated solar tracking and energy monitoring platform",
      "Engineered ERBriwan — GPS-based emergency response hardware-software system",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Capstone & Project Work",
    period: "2023 – Present",
    highlights: [
      "Designed and built BarangayEase — digital governance and complaint management system",
      "Developed role-based authentication and access control systems",
      "Created responsive web dashboards and mobile-compatible interfaces",
    ],
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-24 lg:py-32">
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
            05 / Resume
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Professional
                <br />
                Background
              </h2>
              <div className="w-12 h-0.5 bg-foreground" />
            </div>
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              href="/misc/xeroj_ulgasan.pdf"
              download="Xeroj_Ulgasan.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shrink-0 group"
            >
              <Download
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              Download Resume PDF
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Code2 size={16} className="text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground">
                Core Strengths
              </h3>
            </div>
            <ul className="space-y-2.5">
              {strengths.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    size={14}
                    className="text-muted-foreground/40 mt-0.5 shrink-0"
                  />
                  {s}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Education + Experience */}
          <div className="lg:col-span-2 space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={16} className="text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">
                  Education
                </h3>
              </div>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-xl border border-border/60 bg-muted/10"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.school}
                      </p>
                      <p className="text-xs text-muted-foreground/60">
                        {edu.location}
                      </p>
                    </div>
                    <span
                      className="text-xs text-muted-foreground/50 shrink-0"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <Briefcase size={16} className="text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground">
                  Project Experience
                </h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.title}
                    className="p-5 rounded-xl border border-border/60 bg-muted/10"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className="text-xs text-muted-foreground/50 shrink-0"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <span className="text-muted-foreground/30 mt-1 shrink-0">
                            —
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
