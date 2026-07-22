import { Carousel } from "@/shared";
import { TestimonialCard } from "./testimonial-card";

const TESTIMONIALS = [
  {
    date: "4 years ago",
    initial: "W",
    name: "Wilson Mathu",
    quote:
      "A wonderful training on Leadership and people management, will definitely recommend for future professional capacity building.",
    rating: 5,
  },
  {
    date: "2 years ago",
    initial: "M",
    name: "Mary Wangui",
    quote:
      "Best consultants on protection gender and inclusion training across Africa.",
    rating: 5,
  },
  {
    date: "1 year ago",
    initial: "J",
    name: "John Doe",
    quote:
      "Excellent facilitators and practical hands-on Excel and data analytics sessions.",
    rating: 5,
  },
  {
    date: "6 months ago",
    initial: "A",
    name: "Alice Njoroge",
    quote: "Impactful capacity building workshop on Project Management.",
    rating: 5,
  },
  {
    date: "3 months ago",
    initial: "K",
    name: "Kevin Ochieng",
    quote: "Highly recommended professional development courses.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  return (
    <div className="relative w-full px-3">
      <Carousel
        autoplay={true}
        // Force each item to take exactly 100% of the container width to avoid squishing and add py-3 to prevent shadow clipping
        itemClassName="min-w-full shrink-0 flex-[0_0_100%] px-1 py-3"
        leftControlClassName="absolute -left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white p-1 text-gray-700 shadow-md transition-colors hover:bg-gray-100 z-20"
        rightControlClassName="absolute -right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full border border-gray-200 bg-white p-1 text-gray-700 shadow-md transition-colors hover:bg-gray-100 z-20"
        showControls={true}
        showDots={true}
      >
        {TESTIMONIALS.map((testimonial, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: Static testimonials
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </Carousel>
    </div>
  );
}
