// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostFrontmatter = {
  title: string;
  description?: string;
  date: string; // ISO
  tags?: string[];
  cover?: string; // /cover/xxx.jpg
};

export type PostListItem = PostFrontmatter & { slug: string };

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): PostListItem[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(fileContent);
    const fm = data as PostFrontmatter;

    return {
      slug,
      title: fm.title,
      description: fm.description ?? "",
      date: fm.date,
      tags: fm.tags ?? [],
      cover: fm.cover,
    };
  });

  // newest first
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);
  const html = marked.parse(content);
  const frontmatter = data as PostFrontmatter;
  return { slug, frontmatter, html };
}

export function getAllSlugs() {
  if (!fs.existsSync(postsDir)) return [];
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}
