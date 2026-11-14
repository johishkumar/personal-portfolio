"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Palette, Terminal, Sparkles, Menu, X } from "lucide-react";
import { SoundButton, useSound } from "@/components/UI/SoundManager";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { usePortfolioMode, PortfolioMode } from "@/context/ModeContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = usePortfolioMode();
  const { playHover, playClick } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Story", href: "#scrolly-section" },
    { label: "Projects", href: "#projects" },
    { label: "Terminal", href: "#terminal" },
    { label: "Skills", href: "#capabilities" },
    { label: "Journey", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full border px-4 sm:px-6 py-2 transition-all duration-500 max-w-6xl w-full ${
          scrolled
            ? "border-white/15 bg-neutral-950/85 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-black/45 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-xs font-jetbrains font-bold uppercase tracking-wider text-white hover:text-cyan-400 transition-colors flex-shrink-0"
        >
          <Cpu className="h-4 w-4 text-cyan-400 animate-pulse" />
          <span className="font-syne tracking-tight text-sm sm:text-base text-gradient-cyan">
            {PORTFOLIO_DATA.hero.shortName}
          </span>
        </a>

        {/* The 3-Way Mode Switcher (Global HUD) */}
        <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-neutral-950/80 p-1 backdrop-blur-md">
          <button
            onMouseEnter={playHover}
            onClick={() => {
              setMode("video");
              playClick();
            }}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-jetbrains transition-all ${
              mode === "video"
                ? "bg-purple-600 text-white font-semibold shadow-[0_0_12px_rgba(168,85,247,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Palette className="h-3 w-3" />
            <span>DESIGN</span>
          </button>

          <button
            onMouseEnter={playHover}
            onClick={() => {
              setMode("dual");
              playClick();
            }}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-jetbrains transition-all ${
              mode === "dual"
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            <span>ALL</span>
          </button>

          <button
            onMouseEnter={playHover}
            onClick={() => {
              setMode("code");
              playClick();
            }}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-jetbrains transition-all ${
              mode === "code"
                ? "bg-cyan-500 text-black font-semibold shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>CODE</span>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-xs font-jetbrains text-neutral-400">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={playHover}
              className="relative transition-colors hover:text-cyan-400 group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Controls: Audio & Contact CTA */}
        <div className="flex items-center gap-2.5">
          <SoundButton />

          <a
            href="#contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-cyan-500 px-4 py-1.5 text-xs font-jetbrains font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] active:scale-95"
          >
            Hire Me
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="pointer-events-auto absolute top-18 left-4 right-4 rounded-2xl border border-white/15 bg-neutral-950/95 p-6 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 text-center md:hidden"
        >
          {/* Mobile Mode Switcher */}
          <div className="flex items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 p-1 mb-2">
            {(["video", "dual", "code"] as PortfolioMode[]).map((m) => (
              <button
                key={m}
                onMouseEnter={playHover}
                onClick={() => {
                  setMode(m);
                  playClick();
                }}
                className={`flex-1 py-1.5 text-xs font-mono uppercase rounded-full transition-all ${
                  mode === m
                    ? m === "video"
                      ? "bg-amber-500 text-black font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                      : m === "code"
                      ? "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.35)]"
                      : "bg-violet-500 text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.35)]"
                    : "text-neutral-400"
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={playHover}
              onClick={() => {
                setMobileMenuOpen(false);
                playClick();
              }}
              className="text-sm font-mono text-neutral-300 hover:text-violet-300 py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onMouseEnter={playHover}
            onClick={() => {
              setMobileMenuOpen(false);
              playClick();
            }}
            className="mt-2 rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-cyan-500 py-3 text-xs font-jetbrains font-bold uppercase text-white shadow-[0_0_20px_rgba(124,58,237,0.35)]"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </header>
  );
};
