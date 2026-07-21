import { partners } from "@/data/testimonials";

export function PartnerMarquee() {
  const items = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10">
        {items.map((p, i) => (
          <div
            className="flex h-16 w-44 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4 text-center font-semibold text-muted-foreground text-sm"
            // biome-ignore lint/suspicious/noArrayIndexKey: order of partners does not change
            key={`${p.name}-${i}`}
          >
            {p.name}
          </div>
        ))}
      </div>
    </div>
  );
}
