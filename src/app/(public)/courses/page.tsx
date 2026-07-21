import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CategoryCard } from "@/components/shared/category-card";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";
import { CtaBand } from "@/shared";

export const metadata: Metadata = {
  description:
    "Browse short professional courses across data management, strategy, finance, gender and inclusion, project management, GIS, monitoring & evaluation, and climate & agriculture.",
  title: "Training Courses",
};

export default function CoursesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Courses" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            description="Select a subject area below to see related courses, formats, and upcoming dates. All courses are available in-person, online, or as in-house training."
            eyebrow="Short Professional Courses"
            title="Browse Training Courses by Subject"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            description="A full list of currently scheduled courses across all subject areas."
            eyebrow="All Courses"
            title="Every Course in Our Catalog"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard course={course} key={course.slug} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        description="We regularly design new courses and custom in-house programs. Tell us what your team needs."
        primaryHref="/contact"
        primaryLabel="Request a Custom Course"
        title="Don't See What You're Looking For?"
      />
    </>
  );
}
