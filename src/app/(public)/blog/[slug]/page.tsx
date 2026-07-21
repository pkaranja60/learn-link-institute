import { CalendarDays, Clock, Newspaper, User } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/shared/blog-card";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getBlogPost } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return {};
  }
  return { description: post.excerpt, title: post.title };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[{ href: "/blog", label: "Blog" }, { label: post.title }]}
      />

      <article className="section-y">
        <div className="container-page max-w-3xl">
          <Badge variant="secondary">{post.category}</Badge>
          <h1 className="mt-4 text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5">
              <User aria-hidden="true" className="h-4 w-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays aria-hidden="true" className="h-4 w-4" /> {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock aria-hidden="true" className="h-4 w-4" />{" "}
              {post.readMinutes} min read
            </span>
          </div>

          <PlaceholderMedia
            className="mt-8 aspect-[16/9] w-full rounded-2xl"
            icon={Newspaper}
            label={`${post.title} cover graphic`}
            tone={post.coverTone}
          />

          <div className="mt-10 max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                className="mb-5 text-base text-foreground/85 leading-relaxed"
                // biome-ignore lint/suspicious/noArrayIndexKey: paragraphs in blog post are static content
                key={i}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <h2 className="font-bold text-2xl text-foreground">More Articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
