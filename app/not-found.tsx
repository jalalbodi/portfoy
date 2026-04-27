import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell grid min-h-[70svh] place-items-center py-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          This page is not in the portfolio.
        </h1>
        <p className="mt-4 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
          The link may be outdated, or the page may have moved during a portfolio
          update.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
