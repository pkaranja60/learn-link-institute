import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/shared";
import type { Workshop } from "@/types";

export function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-md">
      <CardContent className="flex h-full flex-col p-6">
        <h3 className="font-semibold text-foreground text-lg group-hover:text-primary">
          <Link
            className="focus:outline-none"
            href={`/solutions/${workshop.slug}`}
          >
            <span aria-hidden="true" className="absolute inset-0" />
            {workshop.title}
          </Link>
        </h3>
        <p className="mt-2 font-medium text-accent text-sm">
          {workshop.tagline}
        </p>
        <p className="mt-3 flex-1 text-muted-foreground text-sm leading-relaxed">
          {workshop.summary}
        </p>
        <div className="relative mt-5 flex items-center justify-between border-border border-t pt-4 text-sm">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />{" "}
            {workshop.duration}
          </span>
          <span className="flex items-center gap-1 font-semibold text-primary">
            Learn more
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
