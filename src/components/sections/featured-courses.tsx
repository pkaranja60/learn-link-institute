import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CourseCard } from "@/components/shared/course-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getFeaturedCourses } from "@/data/courses";

export function FeaturedCourses() {
  const featured = getFeaturedCourses();
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            description="A selection of upcoming sessions across our most in-demand training subjects."
            eyebrow="Featured Training"
            title="Upcoming Courses & Workshops"
          />
          <Button asChild className="shrink-0" variant="outline">
            <Link href="/courses">
              View all courses
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((course) => (
            <CourseCard course={course} key={course.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
