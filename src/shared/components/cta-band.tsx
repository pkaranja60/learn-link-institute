import Link from "next/link";
import { Button } from "@/shared/ui/button";

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
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: CtaBandProps) {
  return (
    <section className="bg-[var(--color-navy)] py-16 text-center text-white sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-bold text-3xl sm:text-4xl">{title}</h2>
        <p className="mb-8 text-gray-300 text-lg">{description}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="bg-[var(--color-orange)] text-white hover:bg-[var(--color-orange)]/90"
            size="lg"
          >
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button
              asChild
              className="border-white text-white hover:bg-white/10 hover:text-white"
              size="lg"
              variant="outline"
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
