import Image from "next/image";
import { Carousel } from "@/shared";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
];

export function PartnersGalleryCarousel() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Carousel
        autoplay={true}
        itemClassName="lg:flex-[0_0_25%] md:flex-[0_0_50%] pl-4"
        showControls={false}
        showDots={true}
      >
        {GALLERY_IMAGES.map((src, idx) => (
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
            key={src}
          >
            <Image
              alt={`Gallery item ${idx + 1}`}
              className="object-cover transition-transform duration-500 hover:scale-110"
              fill
              src={src}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
