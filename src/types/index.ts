export interface CourseCategory {
  description: string;
  icon: string;
  name: string;
  shortName: string;
  slug: string;
}

export interface Course {
  audience: string[];
  categorySlug: string;
  duration: string;
  featured?: boolean;
  fee?: string;
  format: "In-Person" | "Online" | "In-House" | "Hybrid";
  location: string;
  nextDates: { start: string; end: string; label: string }[];
  objectives: string[];
  outline: { title: string; detail: string }[];
  overview: string;
  slug: string;
  summary: string;
  title: string;
}

export interface Workshop {
  duration: string;
  format: string;
  highlights: string[];
  slug: string;
  summary: string;
  tagline: string;
  title: string;
}

export interface BlogPost {
  author: string;
  category: string;
  content: string[];
  coverTone: "brand" | "gold" | "teal";
  date: string;
  excerpt: string;
  readMinutes: number;
  slug: string;
  title: string;
}

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  role: string;
}

export interface Partner {
  name: string;
}

export interface NavChild {
  href: string;
  label: string;
}

export interface NavItem {
  children?: NavChild[];
  columns?: { heading: string; href: string; items: NavChild[] }[];
  href: string;
  label: string;
}
