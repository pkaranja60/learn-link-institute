import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/marketing";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/shared";

export const metadata: Metadata = {
  description:
    "Practical articles on training design, monitoring and evaluation, leadership, and professional development.",
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            description="Practical articles from our facilitators on training design, monitoring and evaluation, leadership, and professional development."
            eyebrow="Resources"
            title="News & Insights"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        description="Reach out and we'll add you to our occasional newsletter with new course dates and articles."
        primaryHref="/contact"
        primaryLabel="Get in Touch"
        title="Want Training Tips in Your Inbox?"
      />
    </>
  );
}
