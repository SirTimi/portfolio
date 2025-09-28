import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/posts";
const base = "https://sirtimithedev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "", "/blog", "/#about", "/#services", "/#portfolio", "/#contact",
  ].map((p) => ({
    url: `${base}${p.startsWith("/") ? p : `/${p}`}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.6,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...posts];
}
