import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  align?: "left" | "center";
  className?: string;
  description?: string;
  eyebrow?: string;
  title: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {!!eyebrow && (
        <p className="mb-3 font-bold text-accent text-sm uppercase tracking-widest">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
        {title}
      </h2>
      {!!description && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
