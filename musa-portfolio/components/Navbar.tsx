"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-3 pointer-events-none"
    >
      {/* Floating Bubble */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`w-full max-w-5xl mx-4 lg:mx-auto rounded-2xl transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "glass shadow-xl shadow-black/20 border border-bonewhite/5"
            : "glass shadow-lg shadow-black/10 border border-bonewhite/5"
        }`}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 lg:px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl md:text-2xl font-bold font-display text-gradient-orange-blue tracking-tight hover:opacity-80 transition-opacity"
          >
            Musa Murad
          </a>

          {/* Desktop Nav */}
          <LayoutGroup>
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-electric"
                      : "text-bonewhite/60 hover:text-orange-400 hover:bg-orange-500/10"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-1 left-3 right-3 h-[3px] bg-electric rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <div className="flex items-center gap-2 ml-2">
                <ThemeToggle />
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="px-5 py-2 bg-electric text-white text-sm font-semibold tracking-wide rounded-xl hover:bg-orange-500/80 hover:shadow-lg hover:shadow-electric/30 transition-all glow"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </LayoutGroup>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 glass rounded-lg hover:border-electric/50 transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X size={20} className="text-bonewhite" />
              ) : (
                <Menu size={20} className="text-bonewhite" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay — inside bubble so it floats together */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 500 }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-bonewhite/10 mx-0 overflow-hidden"
            >
              <div className="py-3 px-2 space-y-1">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-bonewhite/10 mb-1">
                  <span className="text-sm text-bonewhite/40 font-medium tracking-wide">Theme</span>
                  <ThemeToggle />
                </div>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${
                      activeSection === link.href.slice(1)
                        ? "text-electric bg-electric/10"
                        : "text-bonewhite/60 hover:text-orange-400 hover:bg-orange-500/10"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="block mx-2 mt-2 px-4 py-3 bg-electric text-white text-sm font-semibold tracking-wide rounded-xl text-center hover:bg-orange-500/80 transition-all glow"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
