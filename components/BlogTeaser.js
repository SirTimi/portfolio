import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (!posts.length) return null;

  return (
    <section className="bg-darkbg text-lightgray px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          From the <span className="text-gold">Blog</span>
        </h2>
        <p className="text-gray-300 mb-10">Build logs, systems, and lessons learned.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <article className="bg-darkgray rounded-2xl overflow-hidden border border-gray-800 hover:border-gold transition">
                {p.cover && <img src={p.cover} alt={p.title} className="w-full h-40 object-cover" />}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gold mb-1 group-hover:underline">{p.title}</h3>
                  <p className="text-xs text-gray-400 mb-3">
                    {new Date(p.date).toLocaleDateString()}
                  </p>
                  {p.description && <p className="text-gray-300 text-sm">{p.description}</p>}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-block px-5 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-darkbg transition"
          >
            Read all posts
          </Link>
        </div>
      </div>
    </section>
  );
}
