import { CategoryCard } from "@/components/shared/category-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          align="center"
          description="Choose a subject area to browse related courses, available in-person, online, or in-house."
          eyebrow="Short Professional Courses"
          title="Explore Training by Subject"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
