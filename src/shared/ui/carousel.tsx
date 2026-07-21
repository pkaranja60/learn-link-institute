"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface CarouselProps {
  autoplay?: boolean;
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  leftControlClassName?: string;
  rightControlClassName?: string;
  showControls?: boolean;
  showDots?: boolean;
}

export function Carousel({
  children,
  className,
  itemClassName,
  showControls = true,
  showDots = false,
  autoplay = false,
  leftControlClassName = "-left-12",
  rightControlClassName = "-right-12",
}: CarouselProps) {
  const plugins = autoplay ? [Autoplay({ delay: 5000 })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    plugins
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // biome-ignore lint/suspicious/noExplicitAny: Embla API type is complex
  const onInit = useCallback((api: any) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  // biome-ignore lint/suspicious/noExplicitAny: Embla API type is complex
  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {children.map((child, index) => (
            <div
              className={cn(
                "min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_25%]",
                itemClassName
              )}
              // biome-ignore lint/suspicious/noArrayIndexKey: Static carousel items
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {showControls ? (
        <>
          <button
            aria-label="Previous slide"
            className={cn(
              "absolute top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[var(--color-navy)] shadow-md hover:bg-gray-50",
              leftControlClassName
            )}
            onClick={scrollPrev}
            type="button"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            aria-label="Next slide"
            className={cn(
              "absolute top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-[var(--color-navy)] shadow-md hover:bg-gray-50",
              rightControlClassName
            )}
            onClick={scrollNext}
            type="button"
          >
            <ChevronRight className="size-6" />
          </button>
        </>
      ) : null}

      {showDots ? (
        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                index === selectedIndex
                  ? "bg-[var(--color-orange)]"
                  : "bg-gray-300"
              )}
              // biome-ignore lint/suspicious/noArrayIndexKey: Dot navigation array
              key={index}
              // biome-ignore lint/performance/noJsxPropsBind: Safe in this context
              onClick={() => scrollTo(index)}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
