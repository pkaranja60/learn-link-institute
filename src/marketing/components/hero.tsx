import { Button } from "@/shared";
import { HeroSidebar } from "./hero-sidebar";

export function Hero() {
  return (
    <div
      className="relative mt-2 flex min-h-100 w-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex w-full flex-1">
          <HeroSidebar />

          <div className="flex w-full flex-col items-end justify-end py-20 text-center lg:ml-72 lg:w-[calc(100%-288px)]">
            <div className="relative z-10 flex max-w-3xl flex-col items-end gap-6">
              <h1 className="font-bold text-white drop-shadow-md sm:text-4xl">
                Short Professional Courses
              </h1>
              <p className="font-semibold text-(--color-orange) drop-shadow-md sm:text-3xl">
                Empowering Professionals, Transforming Organizations.
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-4">
                <Button
                  className="rounded-none px-8 shadow-sm"
                  size="lg"
                  variant="navy"
                >
                  Explore Courses
                </Button>
                <Button
                  className="rounded-none px-8 shadow-sm"
                  size="lg"
                  variant="navy"
                >
                  Request an In-House Training
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
