"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Quote, Rocket, Heart, Lightbulb, Zap } from "lucide-react";

const philosophyPoints = [
  { icon: <Heart className="h-5 w-5" />, text: "Design is empathy — I build for people, not pixels." },
  { icon: <Lightbulb className="h-5 w-5" />, text: "Ideas are worthless without execution. I ship fast and iterate." },
  { icon: <Rocket className="h-5 w-5" />, text: "Technology and creativity are not opposites — they're multipliers." },
  { icon: <Zap className="h-5 w-5" />, text: "Every line of code and every UI decision should serve a human need." },
];

export const Philosophy: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#030308] px-6 py-28 sm:px-12 md:px-20 lg:px-28 overflow-hidden">
      {/* Mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-60" />

      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Philosophy quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3.5 py-1 text-xs font-jetbrains uppercase tracking-widest text-cyan-400">
              <span>06 / Philosophy</span>
            </div>

            <div className="relative">
              <Quote className="h-10 w-10 text-cyan-400/20 absolute -top-4 -left-4" />
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight font-syne">
                "Great design is{" "}
                <span className="text-gradient-cyan">invisible</span>.
                <br />
                Great code is{" "}
                <span className="text-gradient-purple">unbreakable</span>."
              </h3>
            </div>

            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
              I believe the best digital experiences feel effortless — where thoughtful
              UI design and clean engineering come together to create something that just
              <em> works</em> and delights at every interaction.
            </p>

            {/* Philosophy points */}
            <div className="space-y-4">
              {philosophyPoints.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="flex-shrink-0 h-9 w-9 rounded-full border border-cyan-500/20 bg-cyan-500/5 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                    {point.icon}
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed pt-1.5">{point.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card rounded-2xl p-6 border border-white/[0.07] hover:border-cyan-500/25 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] transition-all duration-400 cursor-default"
              >
                <div className="text-4xl sm:text-5xl font-black font-syne text-gradient-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs font-jetbrains text-neutral-500">{stat.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
