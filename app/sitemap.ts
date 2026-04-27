import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts().map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: profile.siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${profile.siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...posts,
  ];
}
