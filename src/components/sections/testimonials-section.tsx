import { SectionHeading } from "@/components/shared/section-heading";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading
          align="center"
          className="mx-auto"
          eyebrow="Testimonials"
          title="What Past Participants Say"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
