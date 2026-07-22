import type { CourseCategory } from "@/types";

export const categories: CourseCategory[] = [
  {
    description:
      "Practical, tool-based courses covering data collection, cleaning, statistical analysis, and visualization for evidence-based decisions.",
    icon: "BarChart3",
    name: "Data Management & Analysis",
    shortName: "Data & Analysis",
    slug: "data-management-analysis",
  },
  {
    description:
      "Build the decision-making, people-management, and change-leadership skills needed to steer teams and organizations forward.",
    icon: "Compass",
    name: "Strategic Management & Leadership",
    shortName: "Strategy & Leadership",
    slug: "strategic-management",
  },
  {
    description:
      "From budgeting to grants compliance, sharpen the financial skills that keep programs accountable and organizations sustainable.",
    icon: "Landmark",
    name: "Finance & Accounting",
    shortName: "Finance & Accounting",
    slug: "finance-accounting",
  },
  {
    description:
      "Equip your teams to design and deliver programs that are safe, inclusive, and responsive to gender and protection concerns.",
    icon: "ShieldCheck",
    name: "Gender, Safeguarding & Inclusion",
    shortName: "Gender & Inclusion",
    slug: "gender-social-inclusion",
  },
  {
    description:
      "Plan, monitor, and deliver projects with confidence using proven frameworks for design, results management, and reporting.",
    icon: "ClipboardList",
    name: "Project & Program Management",
    shortName: "Project Management",
    slug: "project-management",
  },
  {
    description:
      "Hands-on training in mapping platforms and spatial analysis tools used across research, planning, and emergency response.",
    icon: "MapPinned",
    name: "Geospatial & Mapping Technologies",
    shortName: "GIS & Mapping",
    slug: "geospatial-mapping",
  },
  {
    description:
      "Strengthen results tracking, impact evaluation, and learning systems that demonstrate the value of your programs.",
    icon: "LineChart",
    name: "Monitoring, Evaluation & Learning",
    shortName: "M&E and Learning",
    slug: "monitoring-evaluation",
  },
  {
    description:
      "Explore adaptation planning, food-security programming, and sustainable value chains in a changing climate.",
    icon: "Leaf",
    name: "Climate Resilience & Agriculture",
    shortName: "Climate & Agriculture",
    slug: "climate-agriculture",
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
