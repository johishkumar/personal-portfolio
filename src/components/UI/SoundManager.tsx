"use client";

import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playChime: (freq?: number) => void;
  playHover: () => void;
  playClick: () => void;
  analyserRef: React.RefObject<AnalyserNode | null>;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  playChime: () => {},
  playHover: () => {},
  playClick: () => {},
  analyserRef: { current: null },
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceConnectedRef = useRef(false);

  // Create the audio element once on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio("/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.preload = "auto";
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const initAudioCtx = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        const ctx = new AudioCtxClass();
        audioCtxRef.current = ctx;

        // Create analyser for visualizer
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 32;
        analyser.smoothingTimeConstant = 0.85;
        analyser.connect(ctx.destination);
        analyserRef.current = analyser;
      }
    }
    if (audioCtxRef.current?.state === "suspended") {
      audioCtxRef.current.resume();
    }
    // Connect audio source to analyser if not done yet
    if (audioRef.current && audioCtxRef.current && analyserRef.current && !sourceConnectedRef.current) {
      try {
        const source = audioCtxRef.current.createMediaElementSource(audioRef.current);
        source.connect(analyserRef.current);
        sourceConnectedRef.current = true;
      } catch {
        // Already connected or not available
      }
    }
  }, []);

  const playTone = useCallback((freq: number, duration: number, vol = 0.04, type: OscillatorType = "sine") => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {}
  }, []);

  const playChime = useCallback((freq = 440) => {
    if (isMuted) return;
    initAudioCtx();
    playTone(freq, 0.65, 0.04);
    setTimeout(() => playTone(freq * 1.5, 0.4, 0.025), 150);
  }, [isMuted, initAudioCtx, playTone]);

  const playHover = useCallback(() => {
    if (isMuted) return;
    initAudioCtx();
    playTone(880, 0.08, 0.015, "sine");
  }, [isMuted, initAudioCtx, playTone]);

  const playClick = useCallback(() => {
    if (isMuted) return;
    initAudioCtx();
    playTone(660, 0.12, 0.03, "square");
    setTimeout(() => playTone(880, 0.1, 0.02, "sine"), 50);
  }, [isMuted, initAudioCtx, playTone]);

  const toggleMute = useCallback(() => {
    initAudioCtx();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    const audio = audioRef.current;
    if (!audio) return;
    if (!nextMuted) {
      audio.play().catch(() => {});
      // Power-on chime
      setTimeout(() => {
        try {
          const ctx = audioCtxRef.current;
          if (!ctx) return;
          [520, 660, 880].forEach((f, i) => {
            setTimeout(() => playTone(f, 0.4, 0.04, "sine"), i * 80);
          });
        } catch {}
      }, 100);
    } else {
      audio.pause();
    }
  }, [isMuted, initAudioCtx, playTone]);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playChime, playHover, playClick, analyserRef }}>
      {children}
    </SoundContext.Provider>
  );
};

/* ---- Audio Visualizer Bars ---- */
const AudioVisualizer: React.FC<{ analyserRef: React.RefObject<AnalyserNode | null> }> = ({ analyserRef }) => {
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const NUM_BARS = 5;

  useEffect(() => {
    const animate = () => {
      const analyser = analyserRef.current;
      if (analyser) {
        const dataArr = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(dataArr);
        barsRef.current.forEach((bar, i) => {
          if (!bar) return;
          const val = dataArr[i * 2] || 0;
          const height = Math.max(4, (val / 255) * 20);
          bar.style.height = `${height}px`;
          bar.style.opacity = String(0.4 + (val / 255) * 0.6);
        });
      } else {
        // Idle animation when no analyser data
        const t = Date.now() / 500;
        barsRef.current.forEach((bar, i) => {
          if (!bar) return;
          const h = 4 + Math.sin(t + i * 0.8) * 8;
          bar.style.height = `${Math.max(2, h)}px`;
        });
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [analyserRef]);

  return (
    <span className="flex items-end gap-[2px] h-5">
      {Array.from({ length: NUM_BARS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { barsRef.current[i] = el; }}
          style={{
            width: 3,
            minHeight: 2,
            height: 4,
            borderRadius: 2,
            background: `linear-gradient(to top, #7c3aed, #22d3ee)`,
            boxShadow: "0 0 4px rgba(124,58,237,0.6)",
            animationDelay: `${i * 0.12}s`,
            transition: "height 0.05s ease-out",
            transformOrigin: "bottom",
          }}
        />
      ))}
    </span>
  );
};

/* ---- Sound Button ---- */
export const SoundButton: React.FC = () => {
  const { isMuted, toggleMute, playClick, analyserRef } = useSound();

  return (
    <button
      onClick={() => { toggleMute(); playClick(); }}
      aria-label={isMuted ? "Enable Ambient Sound" : "Mute Sound"}
      className="group flex items-center gap-2 rounded-sm border px-3 py-1.5 text-xs font-mono backdrop-blur-md transition-all duration-300 relative overflow-hidden"
      style={{
        background: isMuted
          ? "rgba(8,8,20,0.6)"
          : "rgba(124,58,237,0.12)",
        borderColor: isMuted
          ? "rgba(255,255,255,0.08)"
          : "rgba(124,58,237,0.5)",
        color: isMuted ? "#6b7280" : "#a78bfa",
        boxShadow: isMuted ? "none" : "0 0 15px rgba(124,58,237,0.2), inset 0 0 15px rgba(124,58,237,0.03)",
      }}
    >
      {isMuted ? (
        <>
          <VolumeX className="h-3.5 w-3.5" style={{ color: "#4b4b6b" }} />
          <span className="hidden sm:inline tracking-widest uppercase" style={{ fontSize: 10 }}>AUDIO: OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="h-3.5 w-3.5" style={{ color: "#a78bfa" }} />
          <AudioVisualizer analyserRef={analyserRef} />
          <span className="hidden sm:inline tracking-widest uppercase" style={{ fontSize: 10, color: "#a78bfa" }}>AUDIO: ON</span>
        </>
      )}
    </button>
  );
};
