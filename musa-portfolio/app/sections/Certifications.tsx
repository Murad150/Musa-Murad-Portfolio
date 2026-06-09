"use client";

import { Award } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const certifications = [
  {
    name: "Google Data Analytics Certificate",
    provider: "Coursera",
    year: "2026",
    description: "8 practical case studies with SQL, data cleaning, dashboards, and data storytelling"
  },
  {
    name: "IBM Machine Learning with Python",
    provider: "IBM",
    year: "2026",
    description: "Supervised and unsupervised models, evaluation metrics, and feature engineering"
  },
  {
    name: "IBM Python for Data Science, AI Development",
    provider: "IBM",
    year: "2026",
    description: "Python fundamentals, web scraping (BeautifulSoup), REST APIs for data extraction"
  },
  {
    name: "Cisco Python Essentials",
    provider: "Cisco",
    year: "2024",
    description: "Python fundamentals, data structures, and modular programming"
  },
  {
    name: "Power BI & Tableau",
    provider: "Hadi E-Learning",
    year: "2024",
    description: "Professional dashboards for data storytelling and KPI tracking"
  },
  {
    name: "Business Writing",
    provider: "University of Colorado Boulder",
    year: "2025",
    description: "Communication and reporting skills for data presentation"
  },
  {
    name: "Technical Writing",
    provider: "Board Infinity",
    year: "2025",
    description: "Documentation and project reporting for technical teams"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">Credentials</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimateIn
              key={cert.name}
              direction="up"
              delay={0.05 + index * 0.06}
              duration={0.4}
              distance={15}
            >
              <div className="glass rounded-xl p-6 hover:border-electric/30 transition-all group min-h-[200px] flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Award className="text-electric group-hover:scale-110 transition-transform" size={28} />
                  <span className="text-xs font-mono text-bonewhite/40 bg-bonewhite/5 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>
                
                <h3 className="font-semibold mb-1 leading-tight">{cert.name}</h3>
                <p className="text-sm text-electric mb-3">{cert.provider}</p>
                <p className="text-sm text-bonewhite/50 leading-relaxed flex-1">
                  {cert.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
