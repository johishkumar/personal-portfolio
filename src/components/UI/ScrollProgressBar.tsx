"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${v})`;
      }
    });
  }, [smoothProgress]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 99999,
        background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 50%, #f59e0b 100%)",
        transformOrigin: "left",
        transform: "scaleX(0)",
        boxShadow: "0 0 12px rgba(124,58,237,0.7), 0 0 24px rgba(6,182,212,0.4)",
      }}
      ref={barRef}
    />
  );
};
