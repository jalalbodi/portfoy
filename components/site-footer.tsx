import { Code2, ExternalLink, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="section-shell flex flex-col gap-6 py-8 text-sm text-[color-mix(in_srgb,var(--foreground)_68%,transparent)] md:flex-row md:items-center md:justify-between">
        <p>
          Copyright {new Date().getFullYear()} {profile.name}. Built with Next.js,
          TypeScript, Docker, and CI checks.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full p-2 transition hover:bg-[var(--surface-muted)]"
            aria-label="Email"
          >
            <Mail className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-[var(--surface-muted)]"
            aria-label="GitHub"
          >
            <Code2 className="size-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition hover:bg-[var(--surface-muted)]"
            aria-label="LinkedIn"
          >
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
