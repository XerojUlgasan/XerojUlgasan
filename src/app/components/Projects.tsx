import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  ChevronRight,
  Waves,
  Zap,
  AlertTriangle,
  Building2,
  ChevronLeft,
} from "lucide-react";

type Project = {
  id: string;
  index: string;
  icon: React.ReactNode;
  accentColor: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  features: string[];
  role: string[];
  tags: string[];
  status: string;
  link: string;
  projectPath: string;
  screenshots?: { title: string; src: string }[];
};

const projects: Project[] = [
  {
    id: "pondpal",
    index: "01",
    icon: <Waves size={22} />,
    accentColor: "text-cyan-500",
    title: "PondPal",
    subtitle: "IoT Aquaculture Monitoring System",
    link: "https://pondpal.web.app/",
    projectPath: "pondpal",
    description:
      "Real-time water quality monitoring for fish farms, tracking pH, turbidity, TDS, and temperature with live dashboard analytics.",
    fullDescription:
      "PondPal is a comprehensive IoT-based aquaculture monitoring system designed to help fish farm operators maintain optimal water conditions in real time. The system integrates multiple water quality sensors with a cloud-connected ESP32 microcontroller, streaming live data to a web dashboard that enables automated alerts and historical trend analysis. The platform significantly reduces manual water testing effort and helps prevent fish mortality by providing actionable insights from continuous environmental data.",
    features: [
      "Real-time water quality monitoring (pH, turbidity, TDS, temperature)",
      "Live cloud-connected dashboard with data visualization",
      "Automated threshold alerts and notifications",
      "Farm management panel for multi-pond tracking",
      "Historical data logging and trend analysis",
      "Sensor calibration management interface",
    ],
    role: [
      "Full-system IoT architect & developer",
      "Sensor calibration and hardware integration",
      "Backend API and database design",
      "Real-time dashboard engineering",
      "Firebase cloud integration",
    ],
    tags: ["ESP32", "Firebase", "Node.js", "React", "IoT", "SQL", "Sensors"],
    status: "Completed",
  },
  {
    id: "ecocharg",
    index: "02",
    icon: <Zap size={22} />,
    accentColor: "text-yellow-500",
    title: "QCU-EcoCharge",
    link: "https://qcu---ecocharge.web.app/",
    projectPath: "ecocharge",
    subtitle: "Smart Solar Tracking & Energy Monitor",
    description:
      "Automated solar panel tracking system that optimizes energy efficiency by following sun position throughout the day.",
    fullDescription:
      "QCU-EcoCharge is a smart energy system developed for Quezon City University that combines automated solar panel tracking with comprehensive energy monitoring. The ESP32-based system uses servo motors and light-dependent resistors to continuously orient solar panels toward the sun, maximizing energy capture efficiency. A web dashboard displays real-time electricity generation, weather conditions, and accumulated energy data, allowing administrators to track performance and optimize panel placement decisions.",
    features: [
      "Automated dual-axis solar panel tracking via servo control",
      "Real-time weather and sunlight intensity dashboard",
      "Energy generation monitoring (watts, kWh accumulation)",
      "Electricity cost savings calculator",
      "Performance optimization analytics",
      "Historical generation logs and reports",
    ],
    role: [
      "Lead developer and system architect",
      "ESP32 firmware and solar tracking logic",
      "Servo motor control programming",
      "Energy monitoring dashboard engineer",
      "Cloud data pipeline integration",
    ],
    tags: ["ESP32", "Arduino", "Solar", "Node.js", "Firebase", "React", "IoT"],
    status: "Completed",
  },
  {
    id: "erbriwan",
    index: "03",
    icon: <AlertTriangle size={22} />,
    accentColor: "text-red-500",
    title: "ERBriwan",
    link: "https://erbriwan.web.app/",
    projectPath: "erbriwan",
    subtitle: "Emergency Response System",
    description:
      "One-press emergency hardware button system with real-time GPS tracking, SMS alerts, and mobile/web dashboard integration.",
    fullDescription:
      "ERBriwan is an integrated emergency response platform combining a physical hardware button with mobile and web interfaces to enable rapid distress alerting. When activated, the IoT device immediately captures the user's GPS coordinates and triggers SMS notifications to registered responders while simultaneously updating web and mobile dashboards with live location tracking. The system is designed for vulnerable populations and field workers who need immediate assistance mechanisms without relying on complex device interactions.",
    features: [
      "Single-press physical emergency button activation",
      "Real-time GPS coordinate capture and tracking",
      "Automated SMS notifications to emergency contacts",
      "Live location dashboard for responders",
      "Mobile application with responder tracking",
      "Emergency incident logging and history",
    ],
    role: [
      "Full-stack system architect",
      "REST API development and design",
      "Hardware-software integration engineer",
      "GPS communication systems developer",
      "Mobile and web dashboard creator",
    ],
    tags: ["ESP32", "GPS", "SMS API", "Node.js", "React", "Firebase", "Mobile"],
    status: "Completed",
  },
  {
    id: "barangayease",
    index: "04",
    icon: <Building2 size={22} />,
    accentColor: "text-violet-500",
    projectPath: "barangayease",
    title: "BarangayEase",
    subtitle: "Digital Governance & Complaint System",
    description:
      "Comprehensive digital platform for barangay public services, complaint management, and local governance workflow optimization.",
    fullDescription:
      "BarangayEase is a full-featured digital governance platform that modernizes barangay public services by replacing paper-based processes with an intuitive web application. Residents can submit complaints, request services, and track their request status online, while administrators manage workflows through a dedicated dashboard with role-based access controls. The system includes reporting tools for barangay officials to analyze service delivery performance and identify areas for improvement, contributing to more transparent and efficient local governance.",
    features: [
      "Resident complaint submission and tracking portal",
      "Service request management workflow",
      "Separate resident and administrator dashboards",
      "Role-based access control (RBAC) system",
      "Status tracking and real-time notifications",
      "Governance analytics and reporting tools",
    ],
    role: [
      "Full-stack developer (frontend & backend)",
      "UI/UX designer and prototyper",
      "Authentication and RBAC architect",
      "Database schema and query optimization",
      "Workflow automation builder",
    ],
    tags: ["React", "Node.js", "SQL Server", "Firebase", "REST API", "RBAC"],
    status: "Completed",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [availableScreenshots, setAvailableScreenshots] = useState(
    project.screenshots || [],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleImageError = (idx: number) => {
    setAvailableScreenshots((prev) => prev.filter((_, i) => i !== idx));
    if (currentScreenshot >= availableScreenshots.length - 1) {
      setCurrentScreenshot(Math.max(0, currentScreenshot - 1));
    }
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
        onClick={onClose}
      />

      {/* Modal panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-background border border-border/70 rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center ${project.accentColor}`}
              >
                {project.icon}
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-foreground"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shrink-0"
            >
              <X size={18} />
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-xs border border-border/60 text-muted-foreground bg-muted/30"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Overview
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Screenshots Gallery */}
          {availableScreenshots && availableScreenshots.length > 0 && (
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Gallery
              </h4>
              <div className="relative">
                <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden border border-border/60 aspect-video flex items-center justify-center">
                  {availableScreenshots[currentScreenshot]?.src ? (
                    <img
                      src={availableScreenshots[currentScreenshot].src}
                      alt={availableScreenshots[currentScreenshot].title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(currentScreenshot)}
                    />
                  ) : (
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Screenshot not available
                      </p>
                    </div>
                  )}
                </div>

                {/* Navigation buttons */}
                {availableScreenshots.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentScreenshot(
                          (prev) =>
                            (prev - 1 + availableScreenshots.length) %
                            availableScreenshots.length,
                        )
                      }
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentScreenshot(
                          (prev) => (prev + 1) % availableScreenshots.length,
                        )
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-black/50 hover:bg-black/70 text-white transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}

                {/* Screenshot counter and title */}
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs font-medium text-foreground">
                    {availableScreenshots[currentScreenshot]?.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {currentScreenshot + 1} / {availableScreenshots.length}
                  </p>
                </div>

                {/* Thumbnail navigation - No scrollbar */}
                {availableScreenshots.length > 1 && (
                  <div
                    className="flex gap-2 mt-3 overflow-x-auto pb-1"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    <style>{`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    {availableScreenshots.map((screenshot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentScreenshot(idx)}
                        className={`flex-shrink-0 h-12 rounded-md border transition-all ${
                          idx === currentScreenshot
                            ? "border-foreground ring-2 ring-foreground/30"
                            : "border-border/40 hover:border-border/80"
                        }`}
                      >
                        <img
                          src={screenshot.src}
                          alt={screenshot.title}
                          className="w-full h-full object-cover rounded-md"
                          onError={() => handleImageError(idx)}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Features + Role */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <ChevronRight
                      size={12}
                      className="mt-0.5 shrink-0 text-muted-foreground/40"
                    />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                My Contributions
              </h4>
              <ul className="space-y-2">
                {project.role.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <ChevronRight
                      size={12}
                      className="mt-0.5 shrink-0 text-muted-foreground/40"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-muted-foreground">
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={12} />
                Visit Project
              </a>
              <span
                className="text-xs text-muted-foreground/40"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {project.index} / 04
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [projectsWithScreenshots, setProjectsWithScreenshots] =
    useState<Project[]>(projects);

  useEffect(() => {
    const loadManifests = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await fetch(
              `/projects/${project.projectPath}/manifest.json`,
            );
            const manifest = await response.json();
            const screenshots = manifest.images
              .sort()
              .map((filename: string, idx: number) => ({
                title: `Screenshot ${idx + 1}`,
                src: `/projects/${project.projectPath}/${filename}`,
              }));

            return {
              ...project,
              screenshots,
            };
          } catch (error) {
            console.warn(`Failed to load manifest for ${project.id}:`, error);
            return {
              ...project,
              screenshots: [],
            };
          }
        }),
      );

      setProjectsWithScreenshots(updatedProjects);
    };

    loadManifests();
  }, []);

  return (
    <section id="projects" className="py-24 lg:py-32">
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
            03 / Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Featured Work
              </h2>
              <div className="w-12 h-0.5 bg-foreground" />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Click any project card to explore the full case study.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {projectsWithScreenshots.map((project, i) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setSelected(project)}
              className="w-full text-left group p-6 lg:p-8 rounded-2xl border border-border/60 bg-background hover:bg-muted/20 hover:border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center ${project.accentColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-xs text-muted-foreground/40"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.index}
                  </span>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground/30 group-hover:text-muted-foreground transition-colors"
                />
              </div>

              <h3
                className="text-xl font-bold text-foreground mb-1"
                style={{ letterSpacing: "-0.01em" }}
              >
                {project.title}
              </h3>
              <p
                className="text-xs text-muted-foreground mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {project.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs border border-border/40 text-muted-foreground/70 bg-muted/20"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-xs text-muted-foreground/50">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                <span>View case study</span>
                <ChevronRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
