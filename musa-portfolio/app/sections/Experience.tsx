"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const experiences = [
  {
    role: "Data Visualization Intern",
    company: "Excelerate",
    type: "Remote",
    duration: "Oct 2024 - Dec 2024",
    tools: ["Power BI", "Tableau", "Python", "SQL", "Excel"],
    achievements: [
      "Designed interactive dashboards increasing engagement by 30%",
      "Translated complex requirements into intuitive visualizations",
      "Integrated multi-source data for executive decision-making",
      "Applied ML-based trend forecasting for strategic planning"
    ]
  },
  {
    role: "Python Developer Intern",
    company: "Remote",
    type: "Remote",
    duration: "Aug 2024 - Sep 2024",
    tools: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Jupyter", "Git"],
    achievements: [
      "Built custom Python libraries for ML workflows",
      "Developed text classification and computer vision prototypes",
      "Automated data processing reducing time by 20%",
      "Collaborated in Agile/Scrum sprints"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">Experience</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Work <span className="text-gradient">History</span>
          </h2>
        </AnimateIn>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimateIn
              key={exp.role}
              direction="up"
              delay={0.1 + index * 0.15}
              duration={0.5}
              distance={20}
            >
              <div className="group glass rounded-2xl p-6 lg:p-8 hover:border-electric/30 hover:shadow-lg hover:shadow-electric/5 hover:bg-electric/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="text-electric group-hover:scale-110 group-hover:text-orange-400 transition-all duration-300" size={24} />
                      <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors duration-300">{exp.role}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-bonewhite/50">
                      <span className="flex items-center gap-1 group-hover:text-electric/70 transition-colors duration-300">
                        <MapPin size={14} />
                        {exp.company} • {exp.type}
                      </span>
                      <span className="flex items-center gap-1 group-hover:text-electric/70 transition-colors duration-300">
                        <Calendar size={14} />
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-bonewhite/40 mb-3 group-hover:text-electric/60 transition-colors duration-300">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 text-xs bg-electric/10 border border-electric/20 rounded-full text-electric group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-bonewhite/40 mb-3 group-hover:text-electric/60 transition-colors duration-300">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-bonewhite/70 group-hover:text-bonewhite/80 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 bg-electric rounded-full mt-2 shrink-0 group-hover:bg-orange-400 group-hover:scale-150 transition-all duration-300" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
