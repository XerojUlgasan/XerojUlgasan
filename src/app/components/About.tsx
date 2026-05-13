import { motion } from "motion/react";
import { Code2, Cpu, Database, Globe, Lightbulb, Layers } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} />,
    title: "Software Engineering",
    desc: "Designing robust, scalable desktop and web applications with clean architecture principles.",
  },
  {
    icon: <Database size={20} />,
    title: "Backend Systems",
    desc: "Building APIs, database schemas, and server-side logic for real-world production systems.",
  },
  {
    icon: <Cpu size={20} />,
    title: "IoT Development",
    desc: "Integrating ESP32, Arduino, and sensor systems into intelligent monitoring platforms.",
  },
  {
    icon: <Globe size={20} />,
    title: "Full-Stack Capabilities",
    desc: "End-to-end product development from hardware integration to web dashboard interfaces.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Research-Driven",
    desc: "Academic projects grounded in real-world problem-solving and engineering innovation.",
  },
  {
    icon: <Layers size={20} />,
    title: "Hardware-Software Bridge",
    desc: "Seamlessly connecting physical devices with cloud platforms and mobile/web interfaces.",
  },
];

const stats = [
  { value: "4+", label: "Major Projects" },
  { value: "10+", label: "Tech Stacks" },
  { value: "3+", label: "IoT Systems" },
  { value: "100%", label: "Commitment" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-16">
          <p
            className="text-xs text-muted-foreground tracking-widest uppercase mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            01 / About
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-foreground" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm{" "}
                <strong className="text-foreground">Xeroj N. Ulgasan</strong>,
                an IT student at Quezon City University with a deep passion for
                engineering systems that bridge the physical and digital worlds.
                My work spans across software development, IoT systems, and
                full-stack application architecture.{" "}
                <strong className="text-foreground">
                  Penetration Testing Student with hands-on experience in
                  controlled home lab environments, focusing on red teaming
                  fundamentals, web exploitation, and practical cybersecurity
                  learning.
                </strong>
              </p>
              <p>
                I specialize in building complete solutions — from calibrating
                sensors on microcontrollers to designing dashboards that
                visualize real-time data. I believe that technology is most
                powerful when software meets hardware in intelligent, purposeful
                ways.
              </p>
              <p>
                My academic journey is defined by research-driven projects that
                solve tangible problems: monitoring fish farm water quality,
                optimizing solar energy systems, enabling emergency response,
                and digitizing local government services.
              </p>
              <p>
                I'm currently seeking opportunities where I can contribute as a
                backend developer, IoT engineer, or full-stack developer —
                bringing both technical precision and creative problem-solving
                to every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl border border-border/60 bg-muted/20 text-center"
                >
                  <div
                    className="text-2xl font-bold text-foreground mb-1"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group p-5 rounded-xl border border-border/60 bg-muted/10 hover:bg-muted/30 hover:border-border transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors mb-3">
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
