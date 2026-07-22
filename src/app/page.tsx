import { ShortCoursesGrid, UpcomingCourses } from "@/courses";
import { AboutSummary, Hero } from "@/marketing";
import { PartnersGalleryCarousel, PartnersMarquee } from "@/partners";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSummary />
      <UpcomingCourses />
      <ShortCoursesGrid />
      <div className="flex flex-col">
        <PartnersMarquee />
        <PartnersGalleryCarousel />
      </div>
    </div>
  );
}
