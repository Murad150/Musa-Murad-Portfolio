"use client";

import { 
  Smartphone, Database, Brain, 
  Cloud, BarChart3, Code2
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const techStack = [
  {
    icon: Smartphone,
    title: "Mobile & Web",
    color: "text-electric",
    skills: ["Flutter/Dart", "React 19", "Java Android", "Tailwind CSS", "REST APIs", "Responsive UI"]
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    color: "text-purple-400",
    skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Python"]
  },
  {
    icon: Database,
    title: "Data Engineering",
    color: "text-cyan",
    skills: ["Pandas/NumPy", "ETL Pipelines", "SQL/R", "Feature Engineering", "Statistical Analysis"]
  },
  {
    icon: BarChart3,
    title: "Visualization",
    color: "text-green-400",
    skills: ["Power BI", "Tableau", "Dashboard Design", "Data Storytelling", "Jupyter"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "text-orange-400",
    skills: ["Firebase", "GitHub", "Postman", "Stripe API", "Cloudinary"]
  },
  {
    icon: Code2,
    title: "Methodologies",
    color: "text-pink-400",
    skills: ["Agile/Scrum", "Performance Opt.", "Documentation", "Debugging", "Public Speaking"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Orange glow decorations */}
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">Technical Skills</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((item, index) => {
            // Calculate rotation for "fan" effect: -15, 0, 15, -10, 5, 10
            const rotations = [-15, 0, 15, -10, 5, 10];
            const r = rotations[index] || 0;

            return (
              <AnimateIn
                key={item.title}
                direction="up"
                delay={0.1 + index * 0.08}
                duration={0.5}
                distance={20}
              >
                <div
                  className="skill-card-container group"
                >
                  <div
                    className="skill-glass"
                    style={{ "--r": r } as React.CSSProperties}
                  >
                    <item.icon className={`${item.color} mb-4 transition-transform duration-500 group-hover:scale-110`} size={36} />
                    <h3 className="text-lg font-semibold mb-3 text-center text-bonewhite/90">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2.5 py-1 text-[11px] bg-white/5 border border-white/10 rounded-full text-bonewhite/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
