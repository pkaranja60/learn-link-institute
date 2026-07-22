import type { Metadata } from "next";
import { WorkshopCard } from "@/courses";
import { workshops } from "@/data/workshops";
import { Breadcrumbs, CtaBand, SectionHeading } from "@/shared";

export const metadata: Metadata = {
  description:
    "Explore our facilitated workshops, in-house training, and consultancy solutions designed for teams and organizations.",
  title: "Training Solutions & Workshops",
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions" }]} />

      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            description="Beyond our open-enrollment courses, we offer facilitated workshops and consultancy engagements tailored to your organization's goals."
            eyebrow="Solutions"
            title="Workshops & Advisory Solutions"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop) => (
              <WorkshopCard key={workshop.slug} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        description="Tell us about your team's goals and we'll help design the right workshop or advisory engagement."
        primaryHref="/contact"
        primaryLabel="Start a Conversation"
        title="Looking for a Tailored Solution?"
      />
    </>
  );
}
