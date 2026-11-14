"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Braces, Cpu } from "lucide-react";

interface PreloaderProps {
  loaded: number;
  total: number;
  onComplete?: () => void;
}

const bootLines = [
  "Initializing portfolio engine...",
  "Loading React & Node.js modules...",
  "Mounting UI components...",
  "Connecting design systems...",
  "Running AI integrations...",
  "Portfolio ready.",
];

export const Preloader: React.FC<PreloaderProps> = ({ loaded, total, onComplete }) => {
  const [isDone, setIsDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const percentage = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < bootLines.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 320);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage >= 25 || loaded >= 25) {
      const timer = setTimeout(() => {
        setIsDone(true);
        onComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [percentage, loaded, onComplete]);

  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 2800);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#02020a] p-8 md:p-14 select-none pointer-events-none overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none noise-overlay" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.16),transparent_32%),radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_30%)]" />

          <div className="relative w-full flex items-center justify-between text-xs font-jetbrains tracking-widest text-slate-400">
            <span className="flex items-center gap-2">
              <Cpu className="h-4 w-4 text-cyan-400 animate-pulse" />
              <span className="font-semibold tracking-[0.18em] text-slate-200">JOHISHKUMAR K C</span>
            </span>
            <span className="text-slate-500">PORTFOLIO v1.0</span>
          </div>

          <div className="relative flex w-full max-w-5xl flex-col items-center gap-8 my-auto">
            <div className="relative text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl font-black tracking-tighter uppercase text-white font-syne"
              >
                <span className="text-gradient-aurora">JO</span>
                <span className="text-white">HISHKUMAR</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-2 text-[10px] font-jetbrains tracking-[0.35em] uppercase text-slate-400"
              >
                Game Developer · React Developer · UI/UX
              </motion.p>
            </div>

            <div className="w-full glass-card rounded-2xl border border-violet-500/20 bg-slate-950/40 p-4 shadow-[0_0_30px_rgba(124,58,237,0.12)]">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-[10px] font-jetbrains uppercase tracking-[0.28em] text-violet-300">
                <Braces className="h-3 w-3 text-cyan-400" />
                <span>BOOT SEQUENCE</span>
              </div>
              <div className="mt-3 space-y-1.5 font-jetbrains text-xs text-slate-300">
                {bootLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={visibleLines > i ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-cyan-400">$</span>
                    <span className={visibleLines > i ? "text-slate-200" : "text-slate-600"}>{line}</span>
                    {visibleLines === i + 1 && <span className="inline-block h-3.5 w-1.5 bg-cyan-400 animate-pulse" />}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-3xl space-y-2">
              <div className="h-1 w-full overflow-hidden rounded-full border border-white/10 bg-slate-950/80">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-400"
                  style={{ width: `${Math.max(percentage, 8)}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] font-jetbrains uppercase tracking-[0.24em] text-slate-500">
                <span>LOADING ASSETS</span>
                <span className="text-cyan-300">{Math.max(percentage, 8)}%</span>
              </div>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-between text-[10px] font-jetbrains uppercase tracking-[0.18em] text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Code2 className="h-3 w-3 text-violet-300" />
              React · Node.js · MongoDB · AI
            </span>
            <span className="text-amber-300">Erode, India</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
