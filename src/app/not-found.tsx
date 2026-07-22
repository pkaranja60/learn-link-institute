import { Compass } from "lucide-react";
import Link from "next/link";
import { Button, PlaceholderMedia } from "@/shared";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="container-page flex flex-col items-center gap-8 text-center">
        <PlaceholderMedia
          className="h-48 w-48 rounded-full"
          icon={Compass}
          label="Lost page illustration"
          tone="brand"
        />
        <div>
          <p className="font-bold text-accent text-sm uppercase tracking-widest">
            404 Error
          </p>
          <h1 className="mt-3 font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
            We Couldn&apos;t Find That Page
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            The page you&apos;re looking for may have moved or no longer exists.
            Let&apos;s get you back on track.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/courses">Browse Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
