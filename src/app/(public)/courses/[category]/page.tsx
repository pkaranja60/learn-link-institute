import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CourseCard } from "@/components/shared/course-card";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories, getCategory } from "@/data/categories";
import { getCoursesByCategory } from "@/data/courses";
import { getIcon } from "@/lib/icon-map";

interface PageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    return {};
  }
  return {
    description: category.description,
    title: category.name,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) {
    notFound();
  }

  const list = getCoursesByCategory(category.slug);
  const Icon = getIcon(category.icon);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/courses", label: "Courses" },
          { label: category.shortName },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              description={category.description}
              eyebrow="Course Category"
              title={category.name}
            />
          </div>
          <PlaceholderMedia
            className="aspect-[16/9] w-full rounded-2xl"
            icon={Icon}
            label={`${category.name} illustration`}
            tone="brand"
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            eyebrow={`${list.length} Course${list.length === 1 ? "" : "s"}`}
            title={`${category.shortName} Courses`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        description="Reach out for group discounts, in-house delivery, or help choosing the right course."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/courses"
        secondaryLabel="View All Courses"
        title="Ready to Enroll or Have Questions?"
      />
    </>
  );
}
