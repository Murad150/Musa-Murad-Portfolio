"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const projects = [
  {
    title: "Smart Home Energy Monitor",
    description: "Native Android app for real-time energy tracking with SQLite database, cost calculation, and personalized optimization suggestions.",
    tech: ["Java", "Android", "SQLite", "Room Database"],
    metrics: "Device-level tracking & cost forecasting",
    color: "#10b981",
    icon: "⚡",
    accent: "rgba(16, 185, 129, 0.5)"
  },
  {
    title: "Predictive Retail Insights",
    description: "Mobile BI solution with Power BI dashboards in Flutter, Firebase alerts, and ML-powered stock forecasting with heat maps.",
    tech: ["Flutter", "Power BI", "Firebase", "Python", "ML"],
    metrics: "Real-time inventory analytics",
    color: "#3b82f6",
    icon: "📊",
    accent: "rgba(59, 130, 246, 0.5)"
  },
  {
    title: "Fake News Detection",
    description: "NLP pipeline using TF-IDF and SVM to detect misinformation with 91% accuracy. Processed 20,000+ text samples.",
    tech: ["NLP", "SVM", "TF-IDF", "NLTK", "Python"],
    metrics: "91% Classification Accuracy",
    color: "#ef4444",
    icon: "🔍",
    accent: "rgba(239, 68, 68, 0.5)"
  },
  {
    title: "Breast Cancer Detection",
    description: "Hybrid CNN-RNN model for histopathology image classification. Compared multiple ML algorithms achieving 88% accuracy.",
    tech: ["CNN", "RNN", "TensorFlow", "Deep Learning"],
    metrics: "88% ML | 85% Deep Learning",
    color: "#f43f5e",
    icon: "🏥",
    accent: "rgba(244, 63, 94, 0.5)"
  },
  {
    title: "Bakery Sales Dashboard",
    description: "Power BI dashboard for revenue visualization, best-selling products, and seasonal trends with unified data model.",
    tech: ["Power BI", "SQL", "Excel", "Data Modeling"],
    metrics: "Live inventory & pricing decisions",
    color: "#f59e0b",
    icon: "🥐",
    accent: "rgba(245, 158, 11, 0.5)"
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const project = projects[activeProject];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">Portfolio</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ── Left: Project List ── */}
          <div className="space-y-4">
            {projects.map((p, index) => (
              <AnimateIn
                key={p.title}
                direction="left"
                delay={0.1 + index * 0.08}
                duration={0.4}
                distance={20}
              >
                <div
                  onClick={() => setActiveProject(index)}
                  className={`glass rounded-xl p-5 cursor-pointer transition-all ${
                    activeProject === index 
                      ? "border-electric/50 bg-electric/5" 
                      : "hover:border-bonewhite/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.icon}</span>
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        <p className="text-xs text-bonewhite/50">{p.metrics}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`transition-transform ${
                        activeProject === index ? "rotate-90 text-electric" : "text-bonewhite/30"
                      }`} 
                      size={20} 
                    />
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* ── Right: Ticket Card ── */}
          <div className="flex items-start justify-center pt-4">
            <AnimateIn direction="right" delay={0.2} duration={0.6} distance={30}>
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="ticket-canvas"
              >
                <div
                  className="ticket-wrapper"
                  style={{
                    "--t-accent": project.color,
                    "--t-accent-glow": project.accent,
                  } as React.CSSProperties}
                >
                  <div className="ticket">
                    {/* ── Main Ticket Body ── */}
                    <div className="t-main">
                      <div className="t-content">
                        <div className="t-header">
                          <div className="t-logo">
                            <span className="text-2xl">{project.icon}</span>
                            <span>PROJECT</span>
                          </div>
                          <div
                            className="t-type"
                            style={{
                              color: project.color,
                              borderColor: project.color,
                            }}
                          >
                            {project.tech[0]}
                          </div>
                        </div>

                        <div className="t-title">{project.title}</div>
                        <div className="t-subtitle">{project.description}</div>

                        <div className="t-details">
                          {project.tech.slice(0, 4).map((tech) => (
                            <div key={tech} className="t-detail-item">
                              <span className="t-label">Tech</span>
                              <span className="t-value">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Perforation line */}
                      <div className="t-perforation" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", transform: "translateY(50%)", zIndex: 2 }}>
                        <div className="t-perf-line" />
                      </div>
                    </div>

                    {/* ── Ticket Stub ── */}
                    <div className="t-stub">
                      <div className="t-barcode-container">
                        <div className="t-barcode" />
                        <div className="t-barcode-id">{project.metrics.toUpperCase().replace(/\s+/g, "-")}</div>
                      </div>
                      <div className="t-admit">
                        <div className="t-admit-text">Status</div>
                        <div
                          className="t-admit-num"
                          style={{ color: project.color }}
                        >
                          ✓
                        </div>
                      </div>
                    </div>

                    {/* ── Action Buttons Overlay ── */}
                    <div className="flex gap-3 mt-4 justify-center">
                      <button className="flex items-center gap-2 px-5 py-2.5 bg-electric text-white text-sm rounded-lg hover:bg-electric/80 transition-all">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="flex items-center gap-2 px-5 py-2.5 border border-bonewhite/20 text-bonewhite/80 text-sm rounded-lg hover:bg-bonewhite/10 transition-all">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
