import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop",
    title: "GIS Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
    title: "Gender & Protection Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
    title: "Strategic Management Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    title: "Monitoring & Evaluation Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600&auto=format&fit=crop",
    title: "Food Security & Agriculture Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    title: "Data Management Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
    title: "Accounting & Financial Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop",
    title: "Project Management Courses",
  },
];

export function ShortCoursesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <h2 className="font-bold text-3xl text-[var(--color-navy)] sm:text-4xl">
          Short Professional Courses
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600">
          We offer professional training courses that equip individuals and
          organizations with essential skills across sectors. Delivered in
          person, online, or in-house, our programs are practical, flexible, and
          led by expert trainers committed to empowering participants to excel
          in today&apos;s dynamic workforce.
        </p>
        <p className="mt-4 font-semibold text-gray-800">
          Click on the category to explore and select the course that best suits
          your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            className="group flex flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            href={category.href}
            key={category.title}
          >
            <div className="relative h-40 w-full overflow-hidden bg-gray-100">
              <Image
                alt={category.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={category.image}
              />
            </div>
            <div className="flex grow items-center justify-center p-4">
              <span className="flex items-center gap-2 text-center font-bold text-[var(--color-navy)] group-hover:underline">
                View {category.title}
                <ArrowRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
