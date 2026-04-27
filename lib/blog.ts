import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export type BlogPost = BlogPostMeta & {
  html: string;
};

function assertString(value: unknown, fallback: string) {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: assertString(data.title, slug),
        description: assertString(data.description, "Portfolio learning note"),
        date: assertString(data.date, "Editable date"),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const filePath = path.join(postsDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const html = await marked.parse(content, { async: true });

  return {
    slug: safeSlug,
    title: assertString(data.title, safeSlug),
    description: assertString(data.description, "Portfolio learning note"),
    date: assertString(data.date, "Editable date"),
    html,
  };
}
