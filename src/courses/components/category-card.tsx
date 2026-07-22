import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getCoursesByCategory } from "@/data/courses";
import { getIcon } from "@/lib/icon-map";
import type { CourseCategory } from "@/types";

export function CategoryCard({ category }: { category: CourseCategory }) {
  const Icon = getIcon(category.icon);
  const count = getCoursesByCategory(category.slug).length;

  return (
    <Link
      className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md focus-visible:-translate-y-1"
      href={`/courses/${category.slug}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-semibold text-foreground text-lg">
        {category.name}
      </h3>
      <p className="mt-2 flex-1 text-muted-foreground text-sm leading-relaxed">
        {category.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-border border-t pt-4 font-semibold text-primary text-sm">
        <span>{count} courses</span>
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}
