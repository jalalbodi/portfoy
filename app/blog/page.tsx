import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short Markdown notes about portfolio engineering, DevOps, and learning progress.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="section-shell py-16">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back home
      </Link>
      <SectionHeading
        eyebrow="Blog"
        title="Markdown learning notes"
        description="Use these posts for short write-ups about technical decisions, deployment lessons, and project retrospectives."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-[8px] border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <p className="text-sm text-[var(--accent)]">{post.date}</p>
            <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-sm leading-6 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
            >
              <BookOpen className="size-4" aria-hidden="true" />
              Read note
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
