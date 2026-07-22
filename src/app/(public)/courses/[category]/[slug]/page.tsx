import {
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Users2,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseCard } from "@/courses";
import { getCategory } from "@/data/categories";
import { courses, getCourse, getCoursesByCategory } from "@/data/courses";
import { getIcon } from "@/lib/icon-map";
import {
  Badge,
  Breadcrumbs,
  Button,
  PlaceholderMedia,
  Separator,
} from "@/shared";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return courses.map((c) => ({ category: c.categorySlug, slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) {
    return {};
  }
  return {
    description: course.summary,
    title: course.title,
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { category: categorySlug, slug } = await params;
  const course = getCourse(slug);
  if (!course || course.categorySlug !== categorySlug) {
    notFound();
  }

  const category = getCategory(course.categorySlug);
  const Icon = category ? getIcon(category.icon) : undefined;
  const related = getCoursesByCategory(course.categorySlug)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/courses", label: "Courses" },
          {
            href: `/courses/${course.categorySlug}`,
            label: category?.shortName ?? "Category",
          },
          { label: course.title },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>{course.format}</Badge>
              {category && (
                <Badge variant="outline">{category.shortName}</Badge>
              )}
            </div>
            <h1 className="mt-4 text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
              {course.title}
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {course.overview}
            </p>

            <Separator className="my-8" />

            <h2 className="font-semibold text-foreground text-xl">
              Learning Objectives
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {course.objectives.map((objective) => (
                <li
                  className="flex items-start gap-2 text-foreground/80 text-sm"
                  key={objective}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  {objective}
                </li>
              ))}
            </ul>

            <Separator className="my-8" />

            <h2 className="font-semibold text-foreground text-xl">
              Course Outline
            </h2>
            <ol className="mt-4 flex flex-col gap-4">
              {course.outline.map((item, i) => (
                <li
                  className="flex gap-4 rounded-lg border border-border bg-card p-4"
                  key={item.title}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 font-bold text-primary text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {item.title}
                    </p>
                    <p className="mt-1 text-muted-foreground text-sm">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <Separator className="my-8" />

            <h2 className="font-semibold text-foreground text-xl">
              Who Should Attend
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {course.audience.map((a) => (
                <Badge key={a} variant="secondary">
                  <Users2 aria-hidden="true" className="h-3 w-3" />
                  {a}
                </Badge>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <PlaceholderMedia
                className="aspect-4/3 w-full rounded-xl"
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
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Course Details
                </h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                    />
                    <dt className="sr-only">Duration</dt>
                    <dd>{course.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <MapPin
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                    />
                    <dt className="sr-only">Location</dt>
                    <dd>{course.location}</dd>
                  </div>
                  {!!course.fee && (
                    <div className="flex items-center gap-2.5 text-muted-foreground">
                      <span className="font-bold text-primary">$</span>
                      <dt className="sr-only">Fee</dt>
                      <dd>{course.fee}</dd>
                    </div>
                  )}
                </dl>
                <Separator className="my-4" />
                <h4 className="font-semibold text-foreground text-sm">
                  Upcoming Dates
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {course.nextDates.map((d) => (
                    <li
                      className="flex items-center gap-2.5 rounded-md bg-secondary px-3 py-2 text-foreground/80 text-sm"
                      key={d.label}
                    >
                      <CalendarDays
                        aria-hidden="true"
                        className="h-4 w-4 text-primary"
                      />
                      {d.label}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" size="lg">
                  <Link href="/contact">Enroll / Request Info</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-y bg-secondary/40">
          <div className="container-page">
            <h2 className="font-bold text-2xl text-foreground">
              Related Courses
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CourseCard course={c} key={c.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
