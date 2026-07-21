import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { Badge } from "@/components/ui/badge";
import { getCategory } from "@/data/categories";
import { getIcon } from "@/lib/icon-map";
import type { Course } from "@/types";

export function CourseCard({ course }: { course: Course }) {
  const category = getCategory(course.categorySlug);
  const Icon = category ? getIcon(category.icon) : undefined;

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
      href={`/courses/${course.categorySlug}/${course.slug}`}
    >
      <PlaceholderMedia
        className="h-40 w-full"
        icon={Icon}
        label={`${course.title} illustration`}
        tone={(() => {
          if (course.format === "Online") {
            return "teal";
          }
          if (course.format === "In-House") {
            return "gold";
          }
          return "brand";
        })()}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{course.format}</Badge>
          {category && <Badge variant="outline">{category.shortName}</Badge>}
        </div>
        <h3 className="mt-3 font-semibold text-base text-foreground leading-snug group-hover:text-primary">
          {course.title}
        </h3>
        <p className="mt-2 flex-1 text-muted-foreground text-sm leading-relaxed">
          {course.summary}
        </p>
        <div className="mt-4 flex flex-col gap-1.5 border-border border-t pt-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />{" "}
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />{" "}
            {course.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar aria-hidden="true" className="h-3.5 w-3.5" /> Next:{" "}
            {course.nextDates[0]?.label}
          </span>
        </div>
      </div>
    </Link>
  );
}
