import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        accent: "border-transparent bg-accent/15 text-brand-900",
        default: "border-transparent bg-primary text-primary-foreground",
        outline: "border-border text-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
      },
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
