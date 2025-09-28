// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Blog & Insights",
  description: "Short build logs and lessons on systems, web, and growth.",
  alternates: { canonical: "/blog" },
};


export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="min-h-screen bg-darkbg text-lightgray px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Blog & <span className="text-gold">Insights</span>
        </h1>
        <p className="text-gray-300 mb-12">
          Short lessons, build logs, and systems that scale.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <article className="bg-darkgray rounded-2xl overflow-hidden border border-gray-800 hover:border-gold transition">
                {p.cover && (
                  <img src={p.cover} alt={p.title} className="w-full h-44 object-cover" />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gold mb-2 group-hover:underline">
                    {p.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3">
                    {new Date(p.date).toLocaleDateString()}
                  </p>
                  {!!p.description && <p className="text-gray-300">{p.description}</p>}
                  {p.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded bg-black/40 border border-gray-700">
                          #{t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
