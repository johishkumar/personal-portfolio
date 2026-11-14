import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // === VOID DARK BASE ===
        background: "#02020a",
        surface: {
          DEFAULT: "#080812",
          elevated: "#0d0d1f",
          card: "rgba(10, 10, 28, 0.80)",
        },
        // === AAA GAME STUDIO PALETTE ===
        brand: {
          // Electric Violet — primary identity
          violet: "#7c3aed",
          "violet-light": "#a78bfa",
          "violet-glow": "#6d28d9",
          // Neon Cyan — tech/code accent
          cyan: "#06b6d4",
          "cyan-light": "#22d3ee",
          "cyan-neon": "#00f0ff",
          // Molten Gold — luxury/prestige accent
          gold: "#f59e0b",
          "gold-light": "#fbbf24",
          "gold-pale": "#fde68a",
          // Blood Crimson — danger/power accent
          crimson: "#dc2626",
          "crimson-light": "#ef4444",
          // Legacy orange kept for compatibility
          orange: "#ff4d00",
          amber: "#ff8c00",
          flame: "#ff3700",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-game":
          "radial-gradient(circle at 20% 50%, rgba(124,58,237,0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(6,182,212,0.12), transparent 50%), radial-gradient(circle at 50% 80%, rgba(245,158,11,0.08), transparent 50%)",
        "gradient-hud":
          "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.1))",
        "gradient-gold":
          "linear-gradient(135deg, #f59e0b, #fbbf24, #f59e0b)",
        "gradient-violet":
          "linear-gradient(135deg, #7c3aed, #a855f7, #7c3aed)",
      },
      animation: {
        // Existing
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        aurora: "aurora 6s ease infinite",
        // New AAA effects
        "scan-line": "scan-line 3s linear infinite",
        "hud-flicker": "hud-flicker 8s ease-in-out infinite",
        "glitch-1": "glitch-1 4s infinite linear alternate-reverse",
        "glitch-2": "glitch-2 3s infinite linear alternate-reverse",
        "border-flow": "border-flow 3s linear infinite",
        "particle-rise": "particle-rise 4s ease-out infinite",
        "radar-sweep": "radar-sweep 3s linear infinite",
        "cursor-trail": "cursor-trail 0.6s ease-out forwards",
        "aurora-shift": "aurora-shift 16s ease-in-out infinite alternate",
        "trail": "trail 0.7s ease-out forwards",
        "tilt-glow": "tilt-glow 0.8s ease-out forwards",
        "power-on": "power-on 1.5s ease-out forwards",
        "data-stream": "data-stream 20s linear infinite",
        "noise": "noise 0.4s steps(2) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(1deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-25px) translateX(10px)" },
          "50%": { transform: "translateY(-10px) translateX(-8px)" },
          "75%": { transform: "translateY(-20px) translateX(5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "hud-flicker": {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.8" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.6" },
          "99%": { opacity: "1" },
        },
        "glitch-1": {
          "0%": { clip: "rect(29px, 9999px, 70px, 0)", transform: "skew(0.4deg)" },
          "10%": { clip: "rect(50px, 9999px, 85px, 0)", transform: "skew(0.1deg)" },
          "20%": { clip: "rect(10px, 9999px, 32px, 0)", transform: "skew(0.2deg)" },
          "30%": { clip: "rect(72px, 9999px, 90px, 0)", transform: "skew(0.5deg)" },
          "40%": { clip: "rect(31px, 9999px, 56px, 0)", transform: "skew(0.3deg)" },
          "50%": { clip: "rect(0px, 9999px, 100px, 0)", transform: "skew(0deg)" },
          "60%": { clip: "rect(45px, 9999px, 60px, 0)", transform: "skew(0.4deg)" },
          "70%": { clip: "rect(20px, 9999px, 70px, 0)", transform: "skew(0.2deg)" },
          "80%": { clip: "rect(55px, 9999px, 90px, 0)", transform: "skew(0.1deg)" },
          "90%": { clip: "rect(5px, 9999px, 25px, 0)", transform: "skew(0.5deg)" },
          "100%": { clip: "rect(29px, 9999px, 70px, 0)", transform: "skew(0.4deg)" },
        },
        "glitch-2": {
          "0%": { clip: "rect(65px, 9999px, 100px, 0)", transform: "skew(0.5deg)", left: "2px" },
          "15%": { clip: "rect(32px, 9999px, 50px, 0)", transform: "skew(0.2deg)", left: "-2px" },
          "30%": { clip: "rect(80px, 9999px, 95px, 0)", transform: "skew(0.4deg)", left: "1px" },
          "50%": { clip: "rect(10px, 9999px, 40px, 0)", transform: "skew(0deg)", left: "-3px" },
          "70%": { clip: "rect(55px, 9999px, 80px, 0)", transform: "skew(0.3deg)", left: "2px" },
          "100%": { clip: "rect(65px, 9999px, 100px, 0)", transform: "skew(0.5deg)", left: "2px" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.8" },
          "100%": { transform: "translateY(-130px) scale(0)", opacity: "0" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "cursor-trail": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        "power-on": {
          "0%": { opacity: "0", filter: "brightness(0)" },
          "30%": { opacity: "1", filter: "brightness(3)" },
          "60%": { opacity: "0.8", filter: "brightness(1.5)" },
          "100%": { opacity: "1", filter: "brightness(1)" },
        },
        "aurora-shift": {
          "0%": { backgroundPosition: "0% 50%", filter: "hue-rotate(0deg)" },
          "50%": { backgroundPosition: "50% 50%", filter: "hue-rotate(20deg)" },
          "100%": { backgroundPosition: "100% 50%", filter: "hue-rotate(-10deg)" },
        },
        trail: {
          "0%": { transform: "scale(1)", opacity: "0.75" },
          "100%": { transform: "scale(0.25)", opacity: "0" },
        },
        "tilt-glow": {
          "0%": { boxShadow: "0 0 0 rgba(124,58,237,0.0)" },
          "100%": { boxShadow: "0 0 30px rgba(124,58,237,0.25), 0 0 40px rgba(6,182,212,0.18)" },
        },
        "data-stream": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        noise: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-1%)" },
          "20%": { transform: "translate(1%,1%)" },
          "30%": { transform: "translate(0,-1%)" },
          "40%": { transform: "translate(-1%,0)" },
          "50%": { transform: "translate(1%,0)" },
          "60%": { transform: "translate(0,1%)" },
          "70%": { transform: "translate(1%,-1%)" },
          "80%": { transform: "translate(-1%,1%)" },
          "90%": { transform: "translate(0,0)" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-violet": "0 0 40px -5px rgba(124,58,237,0.5), 0 0 80px -10px rgba(124,58,237,0.2)",
        "glow-cyan": "0 0 40px -5px rgba(6,182,212,0.5), 0 0 80px -10px rgba(6,182,212,0.2)",
        "glow-gold": "0 0 40px -5px rgba(245,158,11,0.5), 0 0 80px -10px rgba(245,158,11,0.2)",
        "glow-orange": "0 0 35px -5px rgba(255, 77, 0, 0.35)",
        "glow-subtle": "0 0 25px -5px rgba(255, 255, 255, 0.08)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)",
        "hud": "0 0 0 1px rgba(124,58,237,0.3), 0 0 30px rgba(124,58,237,0.1), inset 0 0 30px rgba(124,58,237,0.03)",
        "card-luxury": "0 20px 60px -15px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
