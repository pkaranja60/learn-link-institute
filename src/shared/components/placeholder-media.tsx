import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const toneMap = {
  brand: "from-brand-700 via-brand-600 to-brand-900",
  gold: "from-gold-400 via-gold-500 to-gold-600",
  neutral: "from-muted via-secondary to-muted",
  teal: "from-teal-500 via-teal-600 to-brand-900",
} as const;

interface PlaceholderMediaProps {
  className?: string;
  icon?: LucideIcon;
  label?: string;
  tone?: keyof typeof toneMap;
}

export function PlaceholderMedia({
  tone = "brand",
  icon: Icon = ImageIcon,
  label,
  className,
}: PlaceholderMediaProps) {
  return (
    <div
      aria-label={label ?? "Decorative placeholder graphic"}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-linear-to-br",
        toneMap[tone],
        className
      )}
      role="img"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-10" />
      <div
        aria-hidden="true"
        className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl"
      />
      <Icon
        aria-hidden="true"
        className="relative h-10 w-10 text-white/90"
        strokeWidth={1.5}
      />
    </div>
  );
}
