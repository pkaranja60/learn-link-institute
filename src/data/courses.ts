import type { Course } from "@/types";
import { dataAndAnalysisCourses } from "./courses/data-and-analysis.data";
import { financeAndInclusionCourses } from "./courses/finance-and-inclusion.data";
import { mealAndClimateCourses } from "./courses/meal-and-climate.data";
import { projectAndGeospatialCourses } from "./courses/project-geospatial.data";
import { strategicManagementCourses } from "./courses/strategic-management.data";

export const courses: Course[] = [
  ...dataAndAnalysisCourses,
  ...strategicManagementCourses,
  ...financeAndInclusionCourses,
  ...projectAndGeospatialCourses,
  ...mealAndClimateCourses,
];

export function getCoursesByCategory(categorySlug: string) {
  return courses.filter((c) => c.categorySlug === categorySlug);
}

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses() {
  return courses.filter((c) => c.featured);
}
