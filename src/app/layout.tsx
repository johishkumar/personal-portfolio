import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";
import { SoundProvider } from "@/components/UI/SoundManager";
import { Navbar } from "@/components/Navigation/Navbar";
import { CursorTrail } from "@/components/UI/CursorTrail";
import { ScrollProgressBar } from "@/components/UI/ScrollProgressBar";
import { SmoothScrollProvider } from "@/components/UI/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "JOHISHKUMAR K C — Game Developer & React Developer",
  description:
    "Official Portfolio of Johishkumar K C. Builds clean code. Ships fast. React Developer, Game Developer & aspiring Interaction Designer from Erode, India. Specializing in Full Stack Web Apps, AI Integration and UI/UX Design.",
  keywords: [
    "Johishkumar K C",
    "Game Developer",
    "React Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "AI Integration",
    "Figma",
    "Web Developer India",
    "Erode Developer",
  ],
  authors: [{ name: "Johishkumar K C" }],
  creator: "Johishkumar K C",
  openGraph: {
    title: "JOHISHKUMAR K C — Game Developer & React Developer",
    description:
      "Builds clean code. Ships fast. Interactive portfolio of Johishkumar K C — React Developer, Game Developer & UI/UX Designer from Erode, India.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#02020a] text-[#f8fafc] antialiased selection:bg-violet-500 selection:text-white noise-overlay">
        <SmoothScrollProvider>
          <ModeProvider>
            <SoundProvider>
              <CursorTrail />
              <ScrollProgressBar />
              <Navbar />
              <main className="relative">{children}</main>
            </SoundProvider>
          </ModeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
