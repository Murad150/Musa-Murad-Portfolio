"use client";

import { GraduationCap, MapPin, Calendar, Award, BarChart3, Database } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const infoCards = [
  {
    icon: GraduationCap,
    title: "Education",
    lines: ["BS Software Engineering", "The University of Faisalabad"]
  },
  {
    icon: Award,
    title: "CGPA",
    value: "3.66/4.0",
    lines: ["Current Standing"]
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Punjab, Pakistan", "Available Remote"]
  },
  {
    icon: Calendar,
    title: "Graduation",
    value: "2026",
    lines: ["Expected"]
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    lines: ["Power BI, Tableau", "Python, SQL, Excel"]
  },
  {
    icon: Database,
    title: "AI & ML",
    lines: ["TensorFlow, PyTorch", "NLP, Deep Learning"]
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Orange glow decorations */}
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">About Me</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Developer & <span className="text-gradient">Data Analyst</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <AnimateIn direction="left" delay={0.15} duration={0.6} distance={30}>
              <p className="text-bonewhite/70 text-lg leading-relaxed">
                I am a <span className="text-electric font-semibold">Final-Year Software Engineering student</span> at 
                The University of Faisalabad with a CGPA of <span className="text-electric font-semibold">3.66/4.0</span>. 
                I bridge the gap between <span className="text-cyan">data engineering</span> and <span className="text-cyan">application development</span>, 
                transforming raw datasets into intelligent, production-ready solutions.
              </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.25} duration={0.6} distance={30}>
              <p className="text-bonewhite/70 text-lg leading-relaxed">
                As a <span className="text-electric font-semibold">Data Analyst</span>, I specialize in end-to-end data pipelines — 
                from <span className="text-cyan">ETL processing</span> and <span className="text-cyan">statistical modeling</span> 
                to interactive dashboards in <span className="text-cyan">Power BI</span> and <span className="text-cyan">Tableau</span>. 
                I leverage Python (Pandas, NumPy, Scikit-Learn) and SQL to extract actionable business intelligence 
                from complex, multi-source datasets.
              </p>
            </AnimateIn>
            <AnimateIn direction="left" delay={0.35} duration={0.6} distance={30}>
              <p className="text-bonewhite/70 text-lg leading-relaxed">
                On the development side, I architect scalable mobile and web solutions using 
                <span className="text-cyan"> Flutter, React, Java, and Tailwind CSS</span>. 
                My passion lies in engineering AI-augmented platforms that combine predictive analytics 
                with intuitive user experiences — delivering measurable impact through data-driven design.
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((card, index) => (
              <AnimateIn
                key={card.title}
                direction="right"
                delay={0.15 + index * 0.08}
                duration={0.5}
                distance={20}
              >
                <div className="glass rounded-xl p-6 hover:border-electric/30 transition-all min-h-[130px]">
                  <card.icon className="text-electric mb-3" size={26} />
                  <h3 className="font-semibold mb-1 text-sm">{card.title}</h3>
                  {card.value && (
                    <p className="text-xl font-bold text-electric">{card.value}</p>
                  )}
                  {card.lines.map((line) => (
                    <p key={line} className="text-sm text-bonewhite/50">{line}</p>
                  ))}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
