"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handler = () => setIsMdUp(mediaQuery.matches);
    handler();

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- CONFIG ---
  const START_SCROLL = 50;
  const END_SCROLL = 550;
  const MIN_WIDTH = 50;
  const MAX_WIDTH = 100;

  // --- PROGRESS (0 → 1) ---
  const progress = Math.min(
    Math.max((scrollY - START_SCROLL) / (END_SCROLL - START_SCROLL), 0),
    1
  );

  // --- INTERPOLATION ---
  const width = isMdUp
    ? MAX_WIDTH - progress * (MAX_WIDTH - MIN_WIDTH)
    : MAX_WIDTH;

  const borderRadius = progress * 999;

  return (
    <nav
      style={{
        width: `${width}%`,
        borderRadius: `${borderRadius}px`,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="
        fixed top-4 z-50
        backdrop-blur-xl bg-white/60
        border border-white/30 shadow-sm
      "
    >
      <div className="max-w-6xl mx-auto px-8 py-3 flex justify-between items-center">
        <span className="font-bold">
          <a href="#" className="hover:opacity-70 transition">
            Annsh
          </a>
        </span>

        <div className="space-x-3 md:space-x-6 text-sm font-medium">
          <a href="#about" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#skills" className="hover:opacity-70 transition">
            Skills
          </a>
          <a href="#projects" className="hover:opacity-70 transition">
            Projects
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}