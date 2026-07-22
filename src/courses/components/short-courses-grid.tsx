import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/shared";

const CATEGORIES = [
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop",
    linkText: "View GIS Courses",
    title: "GIS Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
    linkText: "View Gender & Protection Courses",
    title: "Gender & Protection Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
    linkText: "View Strategic Management Courses",
    title: "Strategic Management Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    linkText: "View Monitoring & Evaluation Courses",
    title: "Monitoring & Evaluation Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600&auto=format&fit=crop",
    linkText: "View Food Security & Agriculture Courses",
    title: "Food Security & Agriculture Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    linkText: "View Data Management Courses",
    title: "Data Management & Analysis Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
    linkText: "View Accounting & Financial Courses",
    title: "Accounting & Financial Courses",
  },
  {
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=600&auto=format&fit=crop",
    linkText: "View Project Management Courses",
    title: "Project Management Courses",
  },
];

export function ShortCoursesGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-start text-left">
        <SectionHeading
          className="max-w-5xl text-left"
          description="We offer professional training courses that equip individuals and organizations with essential skills across sectors. Delivered in person, online, or in-house, our programs are practical, flexible, and led by expert trainers committed to empowering participants to excel in today's dynamic workforce."
          title="Short Professional Courses"
        />
        <p className="mt-4 font-bold text-gray-900 text-sm">
          Click on the category to explore and select the course that best suits
          your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((category) => (
          <Link
            className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            href={category.href}
            key={category.title}
          >
            <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100">
              <Image
                alt={category.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                src={category.image}
              />
            </div>
            <div className="flex grow items-center justify-center px-2 py-4 text-center">
              <span className="flex items-center justify-center gap-1.5 text-center font-bold text-(--color-navy) text-xs underline decoration-gray-300 underline-offset-4 transition-colors group-hover:text-(--color-orange) group-hover:decoration-(--color-orange) sm:text-sm">
                {category.linkText}
                <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
