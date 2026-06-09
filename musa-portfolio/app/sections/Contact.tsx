"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const contactItems = [
  {
    href: "mailto:muhammadmusamurad16@gmail.com",
    icon: Mail,
    label: "Email",
    value: "muhammadmusamurad16@gmail.com"
  },
  {
    href: "tel:+923117344169",
    icon: Phone,
    label: "Phone",
    value: "+92-311-7344169"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Punjab, Pakistan (Available Remote)",
    noHover: true
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="orange-glow-left" />
      <div className="orange-glow-right" />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <AnimateIn direction="up" duration={0.6}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-electric" />
            <span className="text-electric text-xs font-mono uppercase tracking-widest">Get In Touch</span>
          </div>
        </AnimateIn>

        <AnimateIn direction="up" delay={0.1} duration={0.6}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Let's <span className="text-gradient">Collaborate</span>
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <AnimateIn direction="left" delay={0.15} duration={0.6} distance={30}>
              <p className="text-bonewhite/70 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or 
                opportunities to be part of your vision. Let's build something amazing together.
              </p>
            </AnimateIn>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <AnimateIn key={item.label} direction="left" delay={0.2 + index * 0.1} duration={0.5} distance={20}>
                  {item.href ? (
                    <a 
                      href={item.href}
                      className="flex items-center gap-4 glass rounded-xl p-4 hover:border-electric/30 transition-all group"
                    >
                      <div className="p-3 bg-electric/10 rounded-lg group-hover:bg-electric/20 transition-all">
                        <item.icon className="text-electric" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-bonewhite/50">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 glass rounded-xl p-4">
                      <div className="p-3 bg-electric/10 rounded-lg">
                        <item.icon className="text-electric" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-bonewhite/50">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </AnimateIn>
              ))}
            </div>

            <AnimateIn direction="left" delay={0.5} duration={0.5} distance={20}>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank"
                  className="p-4 glass rounded-xl hover:border-electric/30 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-bonewhite/70 hover:text-electric transition-colors">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="p-4 glass rounded-xl hover:border-electric/30 transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-bonewhite/70 hover:text-electric transition-colors">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn direction="right" delay={0.2} duration={0.6} distance={30}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-bonewhite/5 border border-bonewhite/10 rounded-lg focus:border-electric focus:outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-bonewhite/5 border border-bonewhite/10 rounded-lg focus:border-electric focus:outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-bonewhite/5 border border-bonewhite/10 rounded-lg focus:border-electric focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-electric text-white font-medium rounded-lg hover:bg-electric/80 transition-all flex items-center justify-center gap-2 glow"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </AnimateIn>
        </div>
      </div>

      {/* Footer */}
      <AnimateIn direction="up" delay={0.3} duration={0.5}>
        <div className="mt-24 pt-8 border-t border-bonewhite/10 text-center">
          <p className="text-bonewhite/40 text-sm">
            © 2026 Muhammad Musa Murad. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </AnimateIn>
    </section>
  );
}
