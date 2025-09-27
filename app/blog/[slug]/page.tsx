// app/blog/[slug]/page.tsx
import { getAllSlugs, getPostBySlug } from "../../../lib/posts";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, html } = getPostBySlug(params.slug);

  return (
    <article className="min-h-screen bg-darkbg text-lightgray px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gold mb-2">
          {frontmatter.title}
        </h1>
        <p className="text-gray-400 mb-8">
          {new Date(frontmatter.date).toLocaleDateString()}
        </p>
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
