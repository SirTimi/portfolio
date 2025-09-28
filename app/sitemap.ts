// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/posts";

const BASE = "https://<your-domain>"; // e.g., https://sirtimi.dev

function safeDate(input?: string | Date): Date {
  const d = input ? new Date(input) : new Date();
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: safeDate(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/blog`,
      lastModified: safeDate(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const posts = getAllPosts()
    // optional: drop posts missing title/slug
    .filter(p => !!p.slug)
    .map<MetadataRoute.Sitemap[number]>((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: safeDate(p.date),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...posts];
}
