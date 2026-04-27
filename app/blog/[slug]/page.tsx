import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="section-shell max-w-3xl py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to blog
      </Link>
      <article>
        <p className="text-sm font-semibold text-[var(--accent)]">{post.date}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-[color-mix(in_srgb,var(--foreground)_72%,transparent)]">
          {post.description}
        </p>
        <div
          className="prose-blog mt-10"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
