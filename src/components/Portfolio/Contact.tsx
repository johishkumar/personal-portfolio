"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy, ArrowUpRight, Github, Linkedin, Instagram, MapPin, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
  YouTube: <Sparkles className="h-4 w-4" />,
};

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#030308] px-6 py-28 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
    >
      {/* Layered ambient glows */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[300px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[300px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Animated floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + i * 2,
              height: 4 + i * 2,
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              background: i % 2 === 0 ? "rgba(0,229,255,0.5)" : "rgba(168,85,247,0.5)",
            }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative mx-auto max-w-5xl text-center space-y-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-jetbrains uppercase tracking-widest text-cyan-400 backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>08 / Let&apos;s Connect</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase font-syne leading-[1.05]">
            LET&apos;S BUILD{" "}
            <span className="text-gradient-aurora">SOMETHING</span>
            <br />
            <span className="text-gradient-cyan">AMAZING.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-xl text-neutral-400 font-light leading-relaxed">
            Open to creative collaborations, internships, full-time roles and innovative ideas.
            My inbox is always open — let&apos;s create something meaningful together!
          </p>
        </motion.div>

        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-jetbrains text-neutral-400"
        >
          <MapPin className="h-3.5 w-3.5 text-cyan-400" />
          <span>{PORTFOLIO_DATA.contact.location}</span>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 rounded-full border border-white/15 bg-neutral-900/80 px-8 py-4 font-jetbrains text-sm sm:text-base text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-neutral-800 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)]"
          >
            <Mail className="h-4 w-4 text-cyan-400" />
            <span>{PORTFOLIO_DATA.contact.email}</span>
            <span className="rounded-full bg-white/10 p-1.5 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </span>
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-jetbrains text-sm sm:text-base font-semibold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,229,255,0.5)] hover:scale-105 active:scale-95"
          >
            Send Email
          </a>
        </motion.div>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-jetbrains text-cyan-400"
          >
            ✓ Email copied to clipboard!
          </motion.div>
        )}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-10 border-t border-white/[0.07] flex flex-wrap items-center justify-center gap-4"
        >
          {PORTFOLIO_DATA.socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-3 text-xs font-jetbrains text-neutral-300 transition-all duration-300 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
            >
              <span className="text-cyan-400">{socialIcons[social.name] ?? <ArrowUpRight className="h-4 w-4" />}</span>
              <span>{social.name}</span>
              <span className="text-neutral-600 font-mono text-[10px]">{social.handle}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
