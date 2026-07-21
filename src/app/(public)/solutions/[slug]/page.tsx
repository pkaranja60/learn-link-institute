import { CheckCircle2, Clock, Settings2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { WorkshopCard } from "@/components/shared/workshop-card";
import { Separator } from "@/components/ui/separator";
import { getWorkshop, workshops } from "@/data/workshops";
import { Button } from "@/shared/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return workshops.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const workshop = getWorkshop(slug);
  if (!workshop) {
    return {};
  }
  return { description: workshop.summary, title: workshop.title };
}

export default async function WorkshopDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const workshop = getWorkshop(slug);
  if (!workshop) {
    notFound();
  }

  const related = workshops.filter((w) => w.slug !== workshop.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { href: "/solutions", label: "Solutions" },
          { label: workshop.title },
        ]}
      />

      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
              {workshop.title}
            </h1>
            <p className="mt-3 font-medium text-accent text-lg">
              {workshop.tagline}
            </p>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              {workshop.summary}
            </p>

            <Separator className="my-8" />

            <h2 className="font-semibold text-foreground text-xl">
              What You&apos;ll Cover
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {workshop.highlights.map((h) => (
                <li
                  className="flex items-start gap-2 text-foreground/80 text-sm"
                  key={h}
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <PlaceholderMedia
                className="aspect-[4/3] w-full rounded-xl"
                icon={Settings2}
                label={`${workshop.title} illustration`}
                tone="gold"
              />
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">At a Glance</h3>
                <dl className="mt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Clock
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                    />
                    <dt className="sr-only">Duration</dt>
                    <dd>{workshop.duration}</dd>
                  </div>
                  <div className="flex items-center gap-2.5 text-muted-foreground">
                    <Settings2
                      aria-hidden="true"
                      className="h-4 w-4 text-primary"
                    />
                    <dt className="sr-only">Format</dt>
                    <dd>{workshop.format}</dd>
                  </div>
                </dl>
                <Button asChild className="mt-6 w-full" size="lg">
                  <Link href="/contact">Request This Workshop</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <h2 className="font-bold text-2xl text-foreground">
            Other Solutions
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((w) => (
              <WorkshopCard key={w.slug} workshop={w} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
