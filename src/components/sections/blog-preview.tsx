import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "@/components/shared/blog-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  const recent = blogPosts.slice(0, 3);
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            description="Practical articles on training design, monitoring, and professional development."
            eyebrow="Resources"
            title="From the Blog"
          />
          <Button asChild className="shrink-0" variant="outline">
            <Link href="/blog">
              Visit the blog
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
