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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20 border-b border-bonewhite/5"
            : "glass border-b border-bonewhite/5"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl md:text-2xl font-bold font-display text-gradient"
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
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      activeSection === link.href.slice(1)
                        ? "text-electric"
                        : "text-bonewhite/60 hover:text-orange-400 hover:bg-orange-500/10"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-electric rounded-full"
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
                  className="px-5 py-2 bg-electric text-white text-sm font-medium rounded-lg hover:bg-orange-500/80 transition-all glow"
                >
                  Hire Me
                </a>
              </div>
            </div>
            </LayoutGroup>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 glass rounded-lg hover:border-electric/50 transition-all"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? (
                  <X size={22} className="text-bonewhite" />
                ) : (
                  <Menu size={22} className="text-bonewhite" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="glass border-t border-bonewhite/10 mx-4 rounded-b-2xl overflow-hidden shadow-xl shadow-black/30">
              <div className="py-4 px-2 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
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
                  className="block mx-2 mt-3 px-4 py-3 bg-electric text-white text-sm font-medium rounded-xl text-center hover:bg-orange-500/80 transition-all glow"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
}
