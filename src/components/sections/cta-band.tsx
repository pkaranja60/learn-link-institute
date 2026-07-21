import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CtaBandProps {
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
}

export function CtaBand({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-[0.06]"
      />
      <div className="container-page relative flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="max-w-2xl text-balance font-bold text-3xl text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base text-primary-foreground/80">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="accent">
            <Link href={primaryHref}>
              {primaryLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
          {!!secondaryLabel && !!secondaryHref && (
            <Button
              asChild
              className="border-white/30 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              size="lg"
              variant="outline"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
