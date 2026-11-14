"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Terminal, Sparkles, Layers, Cpu, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const tabIcons = [<Code2 key="code" className="h-3.5 w-3.5" />, <Terminal key="term" className="h-3.5 w-3.5" />, <Sparkles key="spark" className="h-3.5 w-3.5" />];

const tabColors = [
  { active: "bg-cyan-500 text-black shadow-[0_0_20px_rgba(0,229,255,0.5)]", bar: "bg-gradient-to-r from-cyan-400 to-blue-500", glow: "rgba(0,229,255,0.15)", border: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]", text: "text-cyan-400" },
  { active: "bg-red-500 text-white shadow-[0_0_20px_rgba(255,34,0,0.5)]", bar: "bg-gradient-to-r from-red-500 to-orange-500", glow: "rgba(255,34,0,0.15)", border: "hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(255,34,0,0.15)]", text: "text-red-400" },
  { active: "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]", bar: "bg-gradient-to-r from-purple-500 to-pink-500", glow: "rgba(168,85,247,0.15)", border: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", text: "text-purple-400" },
];

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const col = tabColors[activeTab] ?? tabColors[0];

  return (
    <section
      id="capabilities"
      className="relative z-20 bg-[#02020a] px-6 py-28 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3.5 py-1 text-xs font-jetbrains uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5" />
            <span>05 / Technical Expertise</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-syne">
            Core <span className="text-gradient-aurora">Capabilities.</span>
          </h2>

          <p className="max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
            From pixel-perfect UI design to production-ready full-stack engineering — every skill is battle-tested across real projects.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 pb-8 mb-10 border-b border-white/[0.07]">
          {PORTFOLIO_DATA.capabilities.map((cat, idx) => {
            const isActive = activeTab === idx;
            const c = tabColors[idx] ?? tabColors[0];
            return (
              <motion.button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-jetbrains font-medium transition-all duration-300 ${
                  isActive
                    ? c.active
                    : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {tabIcons[idx]}
                <span>{cat.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Category subtitle */}
        <motion.div
          key={`subtitle-${activeTab}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 flex items-center gap-3"
        >
          <Zap className={`h-4 w-4 ${col.text}`} />
          <p className={`text-sm font-jetbrains ${col.text}`}>
            {PORTFOLIO_DATA.capabilities[activeTab].subtitle}
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {PORTFOLIO_DATA.capabilities[activeTab].skills.map((skill, sIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sIdx * 0.07, duration: 0.4 }}
              className={`glass-card aurora-bg rounded-2xl p-6 border border-white/[0.07] transition-all duration-300 flex flex-col justify-between group tilt-card ${col.border}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm sm:text-base font-semibold text-white leading-snug">
                    {skill.name}
                  </h4>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: sIdx * 0.07 + 0.3 }}
                    className={`text-xs font-jetbrains font-bold ${col.text}`}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <p className="text-xs text-neutral-500 font-jetbrains mb-5 leading-relaxed">
                  {skill.note}
                </p>
              </div>

              {/* Animated Progress Bar with shimmer */}
              <div className="w-full h-1.5 bg-neutral-900/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: sIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full ${col.bar} progress-shimmer`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
