"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Download, Volume2, VolumeX } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const DIALOGUE_LINES = [
  "Hey! I'm Muhammad Musa Murad",
  "Mobile App Developer & Data Analyst.",
  "I build AI-driven mobile architectures using Flutter & Python.",
  "I transform complex datasets into actionable business intelligence.",
  "CGPA 3.66/4.0 | BS Software Engineering",
  "Let's build data-driven solutions together."
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  // Typewriter effect — first character shown immediately, rest typed one by one
  useEffect(() => {
    const fullText = DIALOGUE_LINES[currentLine];
    let index = 1;
    setDisplayedText(fullText.charAt(0));
    
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [currentLine]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLine((prev) => (prev + 1) % DIALOGUE_LINES.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentLine]);

  // Scroll-aware video play/pause
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Track when video is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleReady = () => setVideoReady(true);
    if (video.readyState >= 2) setVideoReady(true);
    video.addEventListener("loadeddata", handleReady);
    return () => video.removeEventListener("loadeddata", handleReady);
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (!video.muted && video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* ═══ Full-Screen Video Background ═══ */}
      <div className="absolute inset-0">
        {/* Video — shifted slightly right via object-position */}
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          className={`w-full h-full object-cover object-[55%_center] transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Video loading placeholder */}
        {!videoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="w-12 h-12 border-2 border-electric/30 border-t-electric rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* ═══ Content Overlay ═══ */}
      <div className="relative z-20 container mx-auto px-6 lg:px-16 w-full min-h-screen flex flex-col">
        
        {/* ── Spacer pushes everything to bottom ── */}
        <div className="flex-1" />

        {/* ── Bottom Content: Left (badge/buttons/social) + Right (speech/stats) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pb-8 lg:pb-16">
          
          {/* ── Left: Badge + Buttons + Social ── */}
          <div className="space-y-4">
            <AnimateIn direction="left" duration={0.7} distance={40}>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-electric text-xs font-mono tracking-widest uppercase drop-shadow-lg">
                  Available for Opportunities
                </span>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.2} duration={0.7} distance={40}>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a 
                  href="#projects" 
                  className="px-6 sm:px-8 py-3 bg-electric/20 backdrop-blur-md border border-electric/40 text-electric font-medium rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 hover:text-orange-400 transition-all text-sm sm:text-base"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-bonewhite font-medium rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 hover:text-orange-400 transition-all text-sm sm:text-base"
                >
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf" 
                  className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md border border-electric/30 text-electric font-medium rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 hover:text-orange-400 transition-all flex items-center gap-2 text-sm sm:text-base"
                >
                  <Download size={18} />
                  Resume
                </a>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.35} duration={0.7} distance={40}>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/10 transition-all group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-bonewhite/80 group-hover:text-orange-400 transition-colors">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/10 transition-all group">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-bonewhite/80 group-hover:text-orange-400 transition-colors">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:muhammadmusamurad16@gmail.com" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/10 transition-all group">
                  <Mail size={20} className="text-bonewhite/80 group-hover:text-orange-400 transition-colors" />
                </a>
                <a href="tel:+923117344169" className="p-3 bg-white/10 backdrop-blur-md rounded-lg hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/10 transition-all group">
                  <Phone size={20} className="text-bonewhite/80 group-hover:text-orange-400 transition-colors" />
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: Speech Bubble + Stats ── */}
          <div className="space-y-6">
            <AnimateIn direction="right" delay={0.2} duration={0.7} distance={40}>
              <div
                key={currentLine}
                className="bg-black/40 backdrop-blur-xl rounded-xl p-4 sm:p-5 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono uppercase text-bonewhite/50">
                    Live Introduction
                  </span>
                </div>
                <p className="text-sm font-mono text-bonewhite/90 min-h-[40px]">
                  {displayedText}
                  <span className="animate-pulse text-electric">|</span>
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="right" delay={0.5} duration={0.7} distance={40}>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xl font-bold text-electric drop-shadow-lg">3.66</div>
                  <div className="text-[10px] text-bonewhite/50 uppercase tracking-wider">CGPA</div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xl font-bold text-electric drop-shadow-lg">5+</div>
                  <div className="text-[10px] text-bonewhite/50 uppercase tracking-wider">Projects</div>
                </div>
                <div className="bg-black/30 backdrop-blur-md rounded-lg p-3 text-center border border-white/5">
                  <div className="text-xl font-bold text-electric drop-shadow-lg">7+</div>
                  <div className="text-[10px] text-bonewhite/50 uppercase tracking-wider">Certs</div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* ═══ Mute Button (bottom-right of screen) ═══ */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-30 p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 border border-white/10 transition-all"
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? (
          <VolumeX size={20} className="text-bonewhite/70" />
        ) : (
          <Volume2 size={20} className="text-electric" />
        )}
      </button>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-bonewhite/40 rounded-full flex justify-center pt-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-bonewhite/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
