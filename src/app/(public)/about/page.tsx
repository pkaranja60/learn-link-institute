import {
  Building2,
  Compass,
  HeartHandshake,
  Target,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { PartnersGalleryCarousel, PartnersMarquee } from "@/partners";
import {
  Breadcrumbs,
  CtaBand,
  PlaceholderMedia,
  SectionHeading,
} from "@/shared";
import { TestimonialCarousel } from "@/testimonials";

export const metadata: Metadata = {
  description:
    "Learn about our placeholder capacity-development and training organization, our mission, and our approach to professional development.",
  title: "About Us",
};

const values = [
  {
    description:
      "Every session is built around tools and templates participants can use the next day at work.",
    icon: Target,
    title: "Practical by Design",
  },
  {
    description:
      "Small cohorts, facilitated discussion, and real case studies keep learning grounded and relevant.",
    icon: Users,
    title: "Participant-Centered",
  },
  {
    description:
      "We stay engaged after training ends, offering follow-up support to help skills take hold.",
    icon: HeartHandshake,
    title: "Long-Term Partnership",
  },
  {
    description:
      "Facilitators bring direct experience from programs and institutions across the continent.",
    icon: Compass,
    title: "Regional Perspective",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              description={siteConfig.description}
              eyebrow="About Us"
              title={`Who is ${siteConfig.shortName}?`}
            />
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              This placeholder organization is based in Nairobi, Kenya, and
              delivers short professional courses, in-house training, and
              advisory support to individuals and institutions across the
              region. Our facilitators combine subject-matter expertise with a
              participatory training style that favors application over lecture.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 border-border border-t pt-6">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-bold text-2xl text-primary sm:text-3xl">
                    {stat.value}
                  </dd>
                  <p className="mt-1 text-muted-foreground text-xs sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
          <PlaceholderMedia
            className="aspect-4/3 w-full rounded-2xl"
            icon={Building2}
            label="Training center illustration"
            tone="brand"
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <SectionHeading
            align="center"
            className="mx-auto"
            eyebrow="Our Approach"
            title="What Guides Our Training"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
                key={value.title}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-primary">
                  <value.icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-base text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold text-foreground text-lg">
              Our Mission
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              To equip professionals and organizations with practical skills
              that improve individual careers and institutional performance.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold text-foreground text-lg">
              Our Vision
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              A region where every organization has access to the
              capacity-building support it needs to thrive.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold text-foreground text-lg">
              Our Promise
            </h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              Practical content, experienced facilitators, and flexible delivery
              — in person, online, or in-house.
            </p>
          </div>
        </div>
      </section>

      <PartnersMarquee />
      <PartnersGalleryCarousel />
      <TestimonialCarousel />

      <CtaBand
        description="Reach out to discuss training needs, partnership opportunities, or a custom consultancy engagement."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/courses"
        secondaryLabel="Browse Courses"
        title="Want to Learn More About Working With Us?"
      />
    </>
  );
}
