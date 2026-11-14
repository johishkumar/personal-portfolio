"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative z-20 bg-[#030308] px-6 py-28 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
    >
      {/* Ambient purple glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-[300px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/5 px-3.5 py-1 text-xs font-jetbrains uppercase tracking-widest text-purple-400 backdrop-blur-md">
            <Briefcase className="h-3.5 w-3.5" />
            <span>07 / My Journey</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-syne">
            Experience &amp; <span className="text-gradient-purple">Milestones.</span>
          </h2>
          <p className="max-w-xl text-base text-neutral-400 font-light leading-relaxed">
            Building skills, shipping projects and growing through every challenge.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical connecting line */}
          <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-px overflow-hidden">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent"
            />
          </div>

          <div className="space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.1, type: "spring", stiffness: 200 }}
                  className="absolute -left-8 sm:-left-12 top-5 flex items-center justify-center"
                >
                  <div className="relative h-6 w-6 rounded-full border-2 border-cyan-400 bg-[#030308] flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />
                    {/* Ping ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" />
                  </div>
                </motion.div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.07] hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(0,229,255,0.08)] transition-all duration-500 cursor-default">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-jetbrains text-neutral-400">
                        <MapPin className="h-3 w-3 text-cyan-500" />
                        <span>{exp.studio}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-xs font-jetbrains text-cyan-400 flex-shrink-0 self-start">
                      <Calendar className="h-3 w-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-jetbrains text-neutral-600 group-hover:text-cyan-500 transition-colors duration-300">
                    <ArrowRight className="h-3 w-3" />
                    <span>Role #{idx + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
