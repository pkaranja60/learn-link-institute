import { Carousel } from "@/shared";
import { TestimonialCard } from "./testimonial-card";

const TESTIMONIALS = [
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "4 years ago",
    name: "Mary Wangui",
    quote: "Best consultants on protection gender and inclusion training.",
    rating: 5,
  },
];

export function TestimonialCarousel() {
  return (
    <div className="w-full">
      <Carousel
        autoplay={true}
        itemClassName="flex-[0_0_100%]"
        leftControlClassName="-left-4 border border-gray-200 size-8 p-1 flex items-center justify-center bg-white shadow-sm"
        rightControlClassName="-right-4 border border-gray-200 size-8 p-1 flex items-center justify-center bg-white shadow-sm"
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
