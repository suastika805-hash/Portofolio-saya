"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const roles = ["Web Developer", "UI Enthusiast", "Next.js Learner", "Mahasiswa Informatika"];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-gray-950 bg-white px-5">
      {/* Grid background */}
      <div className="absolute inset-0 dark:opacity-20 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,229,204,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full dark:bg-accent/10 bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border dark:border-accent/30 border-accent/50 dark:bg-accent/5 bg-accent/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono dark:text-accent/80 text-accent-dim">
            Open to collaboration
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-display font-bold dark:text-white text-gray-900 leading-tight mb-4 animate-fade-up">
          I Komang
          <br />
          <span className="text-accent">Swastika</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-mono dark:text-gray-400 text-gray-600">
            {displayed}
            <span className="animate-blink text-accent">|</span>
          </p>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg dark:text-gray-400 text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
          Mahasiswa Informatika di Bali yang suka membangun antarmuka web yang bersih dan modern.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.35s", opacity: 0, animationFillMode: "forwards" }}>
          <Link
            href="/projects"
            className="px-7 py-3.5 rounded-xl bg-accent text-gray-950 font-bold hover:bg-accent-dim transition-colors text-sm"
          >
            Lihat Proyek →
          </Link>
          <Link
            href="/contact"
            className="px-7 py-3.5 rounded-xl border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 font-bold dark:hover:border-white/30 hover:border-gray-400 transition-colors text-sm"
          >
            Hubungi Saya
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 dark:text-gray-600 text-gray-400">
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
