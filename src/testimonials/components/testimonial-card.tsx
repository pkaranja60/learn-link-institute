import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  avatar: string;
  date: string;
  name: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({
  name,
  avatar,
  date,
  rating,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="relative flex h-full min-h-[160px] flex-col border border-gray-100 bg-[#f8f9fa] p-6 shadow-sm">
      <div className="absolute top-4 right-4 flex size-6 items-center justify-center rounded-full bg-white font-bold text-blue-500 text-xl shadow-sm">
        <span className="text-sm">G</span>
      </div>
      <div className="mb-3 flex items-center gap-3">
        <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
          <Image
            alt={name}
            className="h-full w-full object-cover"
            fill
            src={avatar}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-blue-600 text-sm">{name}</h4>
          <p className="text-gray-400 text-xs">{date}</p>
        </div>
      </div>
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            className={`size-4 ${i < rating ? "fill-[var(--color-orange)] text-[var(--color-orange)]" : "fill-gray-200 text-gray-200"}`}
            // biome-ignore lint/suspicious/noArrayIndexKey: Static stars
            key={i}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{quote}</p>
    </div>
  );
}
