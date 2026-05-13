import { motion } from "motion/react"
import { Award, BookOpen, Trophy, FlaskConical, Clock } from "lucide-react"

type Achievement = {
  icon: React.ReactNode
  title: string
  issuer: string
  date: string
  type: "cert" | "academic" | "competition" | "research"
  status: "earned" | "upcoming"
  description: string
}

const achievements: Achievement[] = [
  {
    icon: <BookOpen size={18} />,
    title: "Bachelor of Science in Information Technology",
    issuer: "Quezon City University",
    date: "In Progress",
    type: "academic",
    status: "upcoming",
    description: "Pursuing BSIT with focus on software development, IoT systems, and backend engineering.",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "PondPal — IoT Aquaculture Monitoring",
    issuer: "Research Presentation / Academic Showcase",
    date: "2024",
    type: "research",
    status: "earned",
    description: "Presented IoT-based aquaculture water quality monitoring system at an academic showcase.",
  },
  {
    icon: <FlaskConical size={18} />,
    title: "QCU-EcoCharge — Smart Solar Platform",
    issuer: "Engineering Research Exhibition",
    date: "2024",
    type: "research",
    status: "earned",
    description: "Research paper and system demo on automated solar tracking and energy monitoring.",
  },
  {
    icon: <Award size={18} />,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Upcoming",
    type: "cert",
    status: "upcoming",
    description: "Planned certification in AWS cloud fundamentals, compute, storage, and database services.",
  },
  {
    icon: <Award size={18} />,
    title: "Google IT Support Certificate",
    issuer: "Coursera / Google",
    date: "Upcoming",
    type: "cert",
    status: "upcoming",
    description: "Planned completion of Google's IT support professional certification program.",
  },
  {
    icon: <Trophy size={18} />,
    title: "Technical Competition Participation",
    issuer: "University / Regional IT Events",
    date: "2023–2025",
    type: "competition",
    status: "earned",
    description: "Active participant in programming challenges, hackathons, and technical competitions.",
  },
]

const typeColors: Record<Achievement["type"], string> = {
  cert: "text-blue-500",
  academic: "text-violet-500",
  research: "text-teal-500",
  competition: "text-amber-500",
}

const typeLabel: Record<Achievement["type"], string> = {
  cert: "Certification",
  academic: "Education",
  research: "Research",
  competition: "Competition",
}

export function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            04 / Achievements
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4" style={{ letterSpacing: "-0.02em" }}>
            Certifications &
            <br />
            Achievements
          </h2>
          <div className="w-12 h-0.5 bg-foreground" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                item.status === "upcoming"
                  ? "border-border/40 bg-muted/10 opacity-70 hover:opacity-90"
                  : "border-border/60 bg-background/60 hover:bg-muted/20 hover:border-border"
              }`}
            >
              {item.status === "upcoming" && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-xs text-muted-foreground/50" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  <Clock size={10} />
                  <span>planned</span>
                </div>
              )}

              <div className={`w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center mb-4 ${typeColors[item.type]}`}>
                {item.icon}
              </div>

              <div className="mb-1">
                <span className={`text-xs ${typeColors[item.type]}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {typeLabel[item.type]}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-foreground mb-1 leading-snug">{item.title}</h4>
              <p className="text-xs text-muted-foreground/70 mb-3">{item.issuer}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{item.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground/50" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {item.date}
                </span>
                {item.status === "earned" && (
                  <span className="flex items-center gap-1 text-xs text-green-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    Earned
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future cert placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-5 p-6 rounded-2xl border-2 border-dashed border-border/30 text-center"
        >
          <Award size={24} className="text-muted-foreground/20 mx-auto mb-2" />
          <p className="text-sm text-muted-foreground/40" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            // More certifications loading...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
