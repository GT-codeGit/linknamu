"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-white/70 bg-white/40 px-3.5 py-1.5 text-xs font-medium text-stone-700 backdrop-blur-xl transition-colors duration-300 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E89A6C]/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-200 dark:hover:bg-white/[0.1]"
    >
      {dark === null ? " " : dark ? "☀️ 라이트" : "🌙 다크"}
    </button>
  );
}
