// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "../../../lib/posts";

const SITE_URL = "https://<your-domain>"; // set your domain

export const dynamicParams = false;
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

/** ⬇️ params is a Promise now — await it */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = safeGet(slug);
  if (!post) return { title: "Not found" };

  const { frontmatter } = post;
  const title = frontmatter.title;
  const desc = frontmatter.description ?? frontmatter.title;
  const cover = frontmatter.cover ?? "/og-default.jpg";
  const url = `${SITE_URL}/blog/${slug}`;
  const absCover = cover.startsWith("http") ? cover : `${SITE_URL}${cover}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: "article",
      siteName: "SirTimitheDev",
      images: [{ url: absCover, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description: desc, images: [absCover] },
  };
}

function safeGet(slug: string) {
  try { return getPostBySlug(slug); } catch { return null; }
}

/** ⬇️ Await params here too */
export default async function PostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = safeGet(slug);
  if (!post) notFound();

  const { frontmatter, html } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.description || frontmatter.title,
    image: frontmatter.cover ? [frontmatter.cover] : undefined,
    datePublished: frontmatter.date,
    author: [{ "@type": "Person", name: "Timi" }],
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <article className="min-h-screen bg-darkbg text-lightgray px-6 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">
          {frontmatter.title}
        </h1>
        <p className="text-gray-400 mb-8">{new Date(frontmatter.date).toLocaleDateString()}</p>

        {frontmatter.cover && (
          <img
            src={frontmatter.cover}
            alt={frontmatter.title}
            className="w-full rounded-xl mb-8 border border-gray-800"
          />
        )}

        <div
          className="prose prose-invert max-w-none prose-headings:text-lightgray prose-strong:text-lightgray prose-a:text-gold"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </article>
  );
}
