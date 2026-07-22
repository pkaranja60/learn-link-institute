export interface NavSubItem {
  href: string;
  label: string;
}

export interface NavMainItem {
  dropdownItems?: NavSubItem[];
  href?: string;
  label: string;
}

export const headerNavLinks: NavMainItem[] = [
  {
    href: "/",
    label: "HOME",
  },
  {
    dropdownItems: [
      { href: "/about", label: "About PGA" },
      { href: "/contact", label: "Join Our Team" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/contact", label: "Contact us" },
    ],
    label: "ABOUT US",
  },
  {
    dropdownItems: [
      { href: "/courses/data-management-analysis", label: "Data & Analysis" },
      { href: "/courses/strategic-management", label: "Strategy & Leadership" },
      { href: "/courses/finance-accounting", label: "Finance & Accounting" },
      { href: "/courses/gender-social-inclusion", label: "Gender & Inclusion" },
      { href: "/courses/project-management", label: "Project Management" },
      { href: "/courses/geospatial-mapping", label: "GIS & Mapping" },
      { href: "/courses/monitoring-evaluation", label: "M&E and Learning" },
      { href: "/courses/climate-agriculture", label: "Climate & Agriculture" },
    ],
    label: "TRAINING SUBJECTS",
  },
  {
    dropdownItems: [{ href: "/contact", label: "Training in Kenya" }],
    label: "TRAINING VENUES",
  },
  {
    dropdownItems: [
      {
        href: "/solutions/workplace-safeguarding-risks",
        label: "Workplace Safeguarding Risks",
      },
      {
        href: "/solutions/emotional-intelligence-self-awareness",
        label: "Emotional Intelligence",
      },
      {
        href: "/solutions/supervisory-people-management",
        label: "Supervisory Management",
      },
      { href: "/solutions", label: "All Workshops" },
    ],
    label: "TRAINING WORKSHOPS",
  },
  {
    dropdownItems: [
      { href: "/contact", label: "Plan Your Visit" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "Gallery" },
      { href: "/privacy-policy", label: "Privacy Policy" },
    ],
    label: "RESOURCES",
  },
];
