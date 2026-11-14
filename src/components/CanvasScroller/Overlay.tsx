"use client";

import React from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Terminal, Layers, Palette, Brain } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useScrolly } from "./ScrollyCanvas";

interface OverlayProps {
  scrollYProgress?: MotionValue<number>;
  onOpenVideo?: () => void;
}

/* Floating particle component */
function Particle({ x, y, color, delay, size }: { x: string; y: string; color: string; delay: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{ y: [0, -80, 0], opacity: [0, 0.7, 0], scale: [1, 0.4, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export const Overlay: React.FC<OverlayProps> = ({ scrollYProgress: propScroll }) => {
  const context = useScrolly();
  const { scrollYProgress: fallbackScroll } = useScroll();
  const scrollYProgress = propScroll || context?.scrollYProgress || fallbackScroll;

  /* Section transforms */
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 0.9, 0]);
  const s1Y      = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const s1Scale  = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.28, 0.44, 0.50], [0, 1, 1, 0]);
  const s2Y       = useTransform(scrollYProgress, [0.22, 0.32, 0.44, 0.50], [60, 0, 0, -60]);

  const s3Opacity = useTransform(scrollYProgress, [0.50, 0.56, 0.70, 0.76], [0, 1, 1, 0]);
  const s3Y       = useTransform(scrollYProgress, [0.50, 0.58, 0.70, 0.76], [60, 0, 0, -60]);

  const s4Opacity = useTransform(scrollYProgress, [0.76, 0.82, 0.94, 0.99], [0, 1, 1, 0]);
  const s4Y       = useTransform(scrollYProgress, [0.76, 0.84, 0.94, 0.99], [70, 0, 0, -40]);
  const s4Scale   = useTransform(scrollYProgress, [0.80, 0.92], [0.95, 1]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* Particle config */
  const particles = [
    { x: "15%", y: "20%", color: "rgba(0,229,255,0.6)", delay: 0, size: 4 },
    { x: "75%", y: "30%", color: "rgba(168,85,247,0.6)", delay: 1.2, size: 3 },
    { x: "35%", y: "70%", color: "rgba(0,229,255,0.4)", delay: 2.1, size: 5 },
    { x: "85%", y: "60%", color: "rgba(255,77,0,0.5)", delay: 0.8, size: 3 },
    { x: "55%", y: "15%", color: "rgba(0,245,155,0.5)", delay: 1.5, size: 4 },
    { x: "10%", y: "75%", color: "rgba(168,85,247,0.4)", delay: 0.4, size: 3 },
    { x: "90%", y: "80%", color: "rgba(0,229,255,0.5)", delay: 2.5, size: 4 },
    { x: "45%", y: "88%", color: "rgba(255,77,0,0.4)", delay: 1.0, size: 3 },
  ];

  return (
    <div className="relative h-full w-full pointer-events-none select-none">
      {/* ============================================================ */}
      {/* SECTION 1: Hero — Johishkumar K C                           */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-between py-12 md:py-16 px-6 text-center"
      >
        {/* Floating particles */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* Top status HUD */}
        <div className="pt-14 md:pt-10 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/60 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            <span className="text-[11px] font-jetbrains tracking-widest uppercase text-neutral-300">
              {PORTFOLIO_DATA.hero.status}
            </span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-jetbrains text-neutral-400 backdrop-blur-md">
            <span className="text-cyan-400 font-bold">◆ LIVE</span>
            <span>Erode, India</span>
          </div>
        </div>

        {/* Center hero name */}
        <div className="max-w-4xl space-y-5 my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-syne text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
              <span className="text-gradient-cyan">{PORTFOLIO_DATA.hero.shortName}</span>HISHKUMAR
            </h1>
            {/* Animated gradient underline */}
            <div className="h-[3px] w-full mt-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent opacity-80 animate-aurora" />
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-2xl md:text-3xl font-light text-neutral-200">
            <span className="text-gradient-cyan font-bold">GAME DEV</span>
            <span className="text-neutral-600">×</span>
            <span className="text-gradient-purple font-bold">REACT DEV</span>
            <span className="text-neutral-600">×</span>
            <span className="text-white/60 font-semibold">UI/UX</span>
          </div>

          <p className="mx-auto max-w-xl text-xs sm:text-sm text-neutral-400 font-light leading-relaxed font-jetbrains">
            {PORTFOLIO_DATA.hero.tagline} — {PORTFOLIO_DATA.hero.subtagline}
          </p>

          {/* Skill chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {PORTFOLIO_DATA.hero.videoSkills.map((s) => (
              <span key={s.name} className="tag-purple">{s.name}</span>
            ))}
            <span className="text-neutral-700 text-xs hidden sm:inline">|</span>
            {PORTFOLIO_DATA.hero.codeSkills.map((s) => (
              <span key={s.name} className="tag-cyan">{s.name}</span>
            ))}
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-jetbrains uppercase tracking-[0.25em] text-neutral-500">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-8 w-8 rounded-full border border-cyan-500/30 flex items-center justify-center"
          >
            <ArrowDown className="h-3.5 w-3.5 text-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 2: Design World (Left)                              */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-500/10 px-3.5 py-1 text-xs font-jetbrains uppercase tracking-widest text-purple-400 backdrop-blur-md">
            <Palette className="h-3.5 w-3.5" />
            <span>01 / Design & Interaction</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] font-syne">
            TURNING IDEAS <br />
            <span className="text-gradient-purple">INTO EXPERIENCES.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl">
            Design isn&apos;t just appearance — it&apos;s empathy in pixels. I craft interfaces that are
            simple, useful and emotionally engaging through research-driven UX and sharp visual design.
          </p>

          {/* Design skills mini-panel */}
          <div className="glass-card rounded-xl p-4 border border-purple-500/20 max-w-lg space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-jetbrains text-purple-400">
              <Layers className="h-3.5 w-3.5" />
              <span>DESIGN TOOLKIT</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Wireframing", "Prototyping", "UI Systems", "Color Theory", "Typography"].map((s) => (
                <span key={s} className="tag-purple">{s}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {["UI/UX Research", "Interaction Design", "Responsive Layouts"].map((item) => (
              <div key={item} className="glass-card flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-jetbrains text-neutral-200">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 3: Code World (Right)                               */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 text-right"
      >
        <div className="max-w-2xl space-y-6 flex flex-col items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-jetbrains uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Terminal className="h-3.5 w-3.5" />
            <span>02 / Full Stack Engineering</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] font-syne">
            BUILDING IDEAS <br />
            <span className="text-gradient-cyan">INTO REAL SOLUTIONS.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-xl text-right">
            From AI-powered civic platforms to agriculture marketplaces — I build full-stack apps
            with React, Node.js, MongoDB and cutting-edge AI integrations that solve real problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2">
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/20 hover:border-cyan-400 transition-colors group">
              <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                <Code2 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">React & Node.js</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-jetbrains">Full-stack MERN apps with JWT auth, REST APIs and real-time sync.</p>
            </div>
            <div className="glass-card p-3.5 rounded-xl text-left border border-cyan-500/20 hover:border-cyan-400 transition-colors group">
              <div className="flex items-center gap-2 text-cyan-400 mb-1.5">
                <Brain className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">AI Integration</span>
              </div>
              <p className="text-[11px] text-neutral-400 font-jetbrains">Gemini API, ML models, Computer Vision & intelligent automation.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 4: Synthesis CTA (Center)                           */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        {/* Radial glow burst */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px] animate-glow-cyan" />
        </div>

        <div className="relative max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/70 px-4 py-1.5 backdrop-blur-lg">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-jetbrains uppercase tracking-widest text-cyan-400">
              03 / The Complete Vision
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] font-syne">
            ONE MIND. <br />
            <span className="text-gradient-aurora">LIMITLESS BUILDS.</span>
          </h2>

          <p className="mx-auto max-w-xl text-base sm:text-lg text-neutral-300 font-light">
            Whether designing an intuitive interface or engineering a full-stack AI platform —
            I deliver extraordinary digital experiences.
          </p>

          {/* CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-jetbrains text-xs sm:text-sm font-semibold uppercase tracking-wider text-white shadow-[0_0_35px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 btn-magnetic"
            >
              <Sparkles className="h-4 w-4" />
              <span>View My Projects</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-purple-500/40 bg-purple-500/10 px-8 py-4 font-jetbrains text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-300 shadow-[0_0_35px_rgba(168,85,247,0.15)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-purple-500/20 hover:border-purple-400 active:scale-95"
            >
              <Code2 className="h-4 w-4" />
              <span>Let&apos;s Collaborate</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
