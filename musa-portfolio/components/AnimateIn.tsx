"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  margin?: string;
  as?: "div" | "span";
}

export default function AnimateIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 30,
  once = true,
  margin = "-80px",
  as = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  const isInView = useInView(ref, { once, margin } as Parameters<typeof useInView>[1]);

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (direction) {
      case "up": return { opacity: 0, y: distance };
      case "down": return { opacity: 0, y: -distance };
      case "left": return { opacity: 0, x: distance };
      case "right": return { opacity: 0, x: -distance };
      case "none": return { opacity: 0 };
    }
  };

  const MotionTag = as === "span" ? motion.span : motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={prefersReduced ? { duration: 0 } : { duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </MotionTag>
  );
}
