import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
      <div aria-hidden="true" className="flex gap-0.5 text-accent">
        {[1, 2, 3, 4, 5].map((starId, i) => (
          <Star
            className="h-4 w-4"
            fill={i < testimonial.rating ? "currentColor" : "none"}
            key={starId}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-foreground/90 text-sm leading-relaxed">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 border-border border-t pt-4">
        <p className="font-semibold text-foreground text-sm">
          {testimonial.name}
        </p>
        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
