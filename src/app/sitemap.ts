import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { categories } from "@/data/categories";
import { courses } from "@/data/courses";
import { workshops } from "@/data/workshops";

const base = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/courses",
    "/solutions",
    "/blog",
    "/contact",
    "/privacy-policy",
  ].map((path) => ({
    lastModified: new Date(),
    url: `${base}${path}`,
  }));

  const categoryRoutes = categories.map((c) => ({
    lastModified: new Date(),
    url: `${base}/courses/${c.slug}`,
  }));

  const courseRoutes = courses.map((c) => ({
    lastModified: new Date(),
    url: `${base}/courses/${c.categorySlug}/${c.slug}`,
  }));

  const workshopRoutes = workshops.map((w) => ({
    lastModified: new Date(),
    url: `${base}/solutions/${w.slug}`,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    lastModified: new Date(p.date),
    url: `${base}/blog/${p.slug}`,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...courseRoutes,
    ...workshopRoutes,
    ...blogRoutes,
  ];
}
