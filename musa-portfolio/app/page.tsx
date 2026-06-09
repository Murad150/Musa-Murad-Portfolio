import dynamic from "next/dynamic";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

// Lazy-load sections below the fold for faster initial load
const Projects = dynamic(() => import("./sections/Projects"), {
  loading: () => <div className="py-24" />,
});

const Experience = dynamic(() => import("./sections/Experience"), {
  loading: () => <div className="py-24" />,
});

const Certifications = dynamic(() => import("./sections/Certifications"), {
  loading: () => <div className="py-24" />,
});

const Contact = dynamic(() => import("./sections/Contact"), {
  loading: () => <div className="py-24" />,
});

export default function Home() {
  return (
    <main className="relative pt-16 md:pt-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
