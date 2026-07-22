import { CalendarDays, Clock, Newspaper } from "lucide-react";
import Link from "next/link";
import { Badge, PlaceholderMedia } from "@/shared";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
      href={`/blog/${post.slug}`}
    >
      <PlaceholderMedia
        className="h-44 w-full"
        icon={Newspaper}
        label={`${post.title} cover graphic`}
        tone={post.coverTone}
      />
      <div className="flex flex-1 flex-col p-5">
        <Badge className="w-fit" variant="secondary">
          {post.category}
        </Badge>
        <h3 className="mt-3 font-semibold text-base text-foreground leading-snug group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-muted-foreground text-sm leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-4 border-border border-t pt-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1.5">
            <CalendarDays aria-hidden="true" className="h-3.5 w-3.5" /> {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />{" "}
            {post.readMinutes} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
