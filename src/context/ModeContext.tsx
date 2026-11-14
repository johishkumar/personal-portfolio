"use client";

import React, { createContext, useContext, useState } from "react";

export type PortfolioMode = "dual" | "video" | "code";

interface ModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  accentColor: string;
}

const ModeContext = createContext<ModeContextType>({
  mode: "dual",
  setMode: () => {},
  accentColor: "#7c3aed",
});

export const usePortfolioMode = () => useContext(ModeContext);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>("dual");

  // Dynamic accent color based on active mode
  const accentColor =
    mode === "video"
      ? "#f59e0b" // molten gold spotlight
      : mode === "code"
      ? "#06b6d4" // electric cyan
      : "#7c3aed"; // deep violet primary

  return (
    <ModeContext.Provider value={{ mode, setMode, accentColor }}>
      {children}
    </ModeContext.Provider>
  );
};
