"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringXSpring = useSpring(cursorX, { damping: 35, stiffness: 100 });
  const ringYSpring = useSpring(cursorY, { damping: 35, stiffness: 100 });

  useEffect(() => {
    const interactiveSelector =
      "a, button, input, textarea, [role='button'], label, select";

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Event delegation — single listener on document
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(interactiveSelector)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(interactiveSelector)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 12 : 8,
            height: isHovering ? 12 : 8,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-electric"
          style={{
            boxShadow: "0 0 12px rgba(37, 99, 235, 0.6)",
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[99998]"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 52 : 40,
            height: isHovering ? 52 : 40,
            borderColor: isHovering
              ? "rgba(37, 99, 235, 0.6)"
              : "rgba(37, 99, 235, 0.25)",
          }}
          transition={{ duration: 0.3 }}
          className="rounded-full border"
          style={{
            borderWidth: "1.5px",
            backdropFilter: "blur(2px)",
          }}
        />
      </motion.div>
    </>
  );
}
