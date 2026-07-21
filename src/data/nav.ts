import { categories } from "@/data/categories";
import { workshops } from "@/data/workshops";
import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  {
    columns: [
      {
        heading: "Browse by Subject",
        href: "/courses",
        items: categories.map((c) => ({
          href: `/courses/${c.slug}`,
          label: c.shortName,
        })),
      },
    ],
    href: "/courses",
    label: "Courses",
  },
  {
    children: workshops
      .slice(0, 6)
      .map((w) => ({ href: `/solutions/${w.slug}`, label: w.title })),
    href: "/solutions",
    label: "Solutions",
  },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ],
  subjects: categories.map((c) => ({
    href: `/courses/${c.slug}`,
    label: c.shortName,
  })),
};
