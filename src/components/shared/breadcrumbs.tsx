import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface Crumb {
  href?: string;
  label: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="border-border border-b bg-secondary/40"
    >
      <ol className="container-page flex flex-wrap items-center gap-1.5 py-3 text-muted-foreground text-sm">
        <li className="flex items-center gap-1.5">
          <Link
            aria-label="Home"
            className="flex items-center gap-1 hover:text-primary"
            href="/"
          >
            <Home aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
          <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
        </li>
        {items.map((item, i) => (
          <li className="flex items-center gap-1.5" key={item.label}>
            {item.href && i !== items.length - 1 ? (
              <Link className="hover:text-primary" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {item.label}
              </span>
            )}
            {i !== items.length - 1 && (
              <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
