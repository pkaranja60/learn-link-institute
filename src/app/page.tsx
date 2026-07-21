import { AboutSummary } from "@/components/sections/about-summary";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CategoryGrid } from "@/components/sections/category-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { Hero } from "@/components/sections/hero";
import { PartnersSection } from "@/components/sections/partners-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedCourses />
      <CategoryGrid />
      <PartnersSection />
      <TestimonialsSection />
      <BlogPreview />
      <CtaBand
        description="Talk to our team about open enrollment courses, in-house training, or a custom consultancy engagement."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/courses"
        secondaryLabel="Browse Courses"
        title="Ready to Build Your Team's Capacity?"
      />
    </>
  );
}
