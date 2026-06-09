"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/90 to-carbon" />
      
      {/* Animated Background Circles */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-electric/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan/10 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* 404 Illustration */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center text-8xl md:text-9xl font-bold font-display">
            <span className="text-gradient">4</span>
            <span className="relative mx-2">
              <span className="text-electric/30 text-7xl md:text-8xl">◉</span>
              <span className="absolute inset-0 flex items-center justify-center animate-ping text-electric/50 text-2xl">◉</span>
            </span>
            <span className="text-gradient">4</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-bonewhite/60 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-electric text-white font-medium rounded-lg hover:bg-electric/80 transition-all glow inline-flex items-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border border-bonewhite/20 text-bonewhite font-medium rounded-lg hover:bg-bonewhite/10 transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Decorative Status */}
        <div className="mt-16 inline-flex items-center gap-3 glass rounded-full px-6 py-3">
          <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <span className="text-xs font-mono text-bonewhite/40 tracking-wider uppercase">
            Error 404 — Resource Not Found
          </span>
        </div>
      </div>
    </div>
  );
}
