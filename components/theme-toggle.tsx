"use client";

import { SunMoon } from "lucide-react";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  function toggleTheme() {
    const theme = getCurrentTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="grid size-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--accent)]"
    >
      <SunMoon aria-hidden="true" className="size-4" />
    </button>
  );
}
