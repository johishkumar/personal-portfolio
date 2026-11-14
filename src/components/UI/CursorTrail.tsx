"use client";

import React, { useEffect, useRef, useCallback } from "react";

interface TrailDot {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailDot[]>([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const TRAIL_LENGTH = 18;
  const COLORS = [
    [124, 58, 237],   // violet
    [99, 44, 230],
    [75, 30, 220],
    [6, 182, 212],    // cyan
    [22, 211, 238],
  ];

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const trail = trailRef.current;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // Push new dot
    trail.unshift({ x: mx, y: my, alpha: 0.6, size: 6 });
    if (trail.length > TRAIL_LENGTH) trail.pop();

    // Draw trail
    trail.forEach((dot, i) => {
      const progress = i / TRAIL_LENGTH;
      const alpha = (1 - progress) * 0.5;
      const size = Math.max(1, 6 * (1 - progress));
      const colorIdx = Math.floor(progress * COLORS.length);
      const [r, g, b] = COLORS[Math.min(colorIdx, COLORS.length - 1)];

      // Glow
      const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, size * 3);
      gradient.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.6})`);
      gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, size * 3, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.fill();
    });

    // Update dot position
    if (dotRef.current) {
      dotRef.current.style.left = `${mx - 5}px`;
      dotRef.current.style.top = `${my - 5}px`;
    }

    rafRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    // Hide default cursor on desktop
    document.documentElement.style.cursor = "none";

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [draw]);

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99998]"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed z-[99999] pointer-events-none"
        style={{
          width: 10,
          height: 10,
          background: "radial-gradient(circle, #22d3ee, #7c3aed)",
          boxShadow: "0 0 10px rgba(124,58,237,0.8), 0 0 20px rgba(6,182,212,0.4)",
          transition: "width 0.1s, height 0.1s",
        }}
      />
    </>
  );
};
