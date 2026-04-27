import Link from "next/link";
import { navigation, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full text-sm font-semibold tracking-wide"
          aria-label={`${profile.name} home`}
        >
          <span className="grid size-9 place-items-center rounded-full bg-[var(--accent)] font-mono text-sm font-bold text-white">
            {profile.name
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--surface)] p-1 text-sm lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
