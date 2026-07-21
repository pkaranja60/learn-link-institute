import { CheckCircle2, Users } from "lucide-react";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site";

const points = [
  "Experienced facilitators with real sector practice",
  "Participatory, hands-on training methodology",
  "Internationally recognized certificates of completion",
  "Flexible in-person, online, and in-house delivery",
];

export function AboutSummary() {
  return (
    <section className="section-y">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <PlaceholderMedia
          className="order-2 aspect-[4/3] w-full rounded-2xl lg:order-1"
          icon={Users}
          label="Team collaborating illustration"
          tone="teal"
        />
        <div className="order-1 lg:order-2">
          <SectionHeading
            description={siteConfig.description}
            eyebrow="About Us"
            title={siteConfig.name}
          />
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Our placeholder areas of practice span socio-economic research,
            spatial technologies, climate resilience, gender and social
            inclusion, data management, project cycle management, and
            organizational development.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                className="flex items-start gap-2 text-foreground/80 text-sm"
                key={point}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
