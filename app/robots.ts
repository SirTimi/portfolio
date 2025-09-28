import type { MetadataRoute } from "next";
const base = "https://sirtimithedev.vercel.app"; // same as siteUrl

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
