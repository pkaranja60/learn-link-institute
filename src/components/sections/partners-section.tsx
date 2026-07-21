import { PartnerMarquee } from "@/components/shared/partner-marquee";
import { SectionHeading } from "@/components/shared/section-heading";

export function PartnersSection() {
  return (
    <section className="section-y bg-secondary/40">
      <div className="container-page">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Clientele"
          title="Organizations We've Worked With"
        />
        <div className="mt-10">
          <PartnerMarquee />
        </div>
      </div>
    </section>
  );
}
