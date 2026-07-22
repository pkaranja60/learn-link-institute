import type { Course } from "@/types";

export const dataAndAnalysisCourses: Course[] = [
  {
    audience: [
      "M&E officers",
      "Finance & admin staff",
      "Research assistants",
      "Program coordinators",
    ],
    categorySlug: "data-management-analysis",
    duration: "5 days",
    featured: true,
    fee: "From $650",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-08-14", label: "Aug 10 – 14", start: "2026-08-10" },
      { end: "2026-10-09", label: "Oct 5 – 9", start: "2026-10-05" },
    ],
    objectives: [
      "Apply advanced formulas and lookup functions to real datasets",
      "Build pivot tables and interactive dashboards",
      "Automate repetitive tasks with simple macros",
      "Design clean, shareable spreadsheet templates",
    ],
    outline: [
      {
        detail: "Formatting, references, and formula fundamentals.",
        title: "Day 1 — Foundations Refresher",
      },
      {
        detail: "VLOOKUP/XLOOKUP, INDEX-MATCH, nested IF statements.",
        title: "Day 2 — Lookup & Logic Functions",
      },
      {
        detail: "Summarizing large datasets and building visuals.",
        title: "Day 3 — Pivot Tables & Charts",
      },
      {
        detail: "Combining slicers, charts, and KPIs into one view.",
        title: "Day 4 — Dashboards",
      },
      {
        detail: "Introduction to macros and workbook protection.",
        title: "Day 5 — Automation Basics",
      },
    ],
    overview:
      "This placeholder course walks participants through practical spreadsheet techniques used daily in monitoring, finance, and research teams. Sessions combine short demonstrations with guided practice on sample datasets so participants leave with templates they can reuse immediately.",
    slug: "intermediate-advanced-excel",
    summary:
      "Move beyond basic spreadsheets into formulas, pivot tables, and dashboards for faster, more reliable data work.",
    title: "Intermediate & Advanced Excel for Data Analysis",
  },
  {
    audience: [
      "Data analysts",
      "M&E specialists",
      "Business intelligence teams",
    ],
    categorySlug: "data-management-analysis",
    duration: "4 days",
    fee: "From $580",
    format: "Online",
    location: "Live Virtual Classroom",
    nextDates: [
      { end: "2026-09-17", label: "Sep 14 – 17", start: "2026-09-14" },
    ],
    objectives: [
      "Import and clean data from multiple sources",
      "Build relational data models",
      "Design interactive report pages and dashboards",
      "Share and publish reports securely",
    ],
    outline: [
      {
        detail: "Interface tour, connecting to data sources.",
        title: "Day 1 — Power BI Foundations",
      },
      {
        detail: "Power Query basics and cleaning workflows.",
        title: "Day 2 — Data Transformation",
      },
      {
        detail: "Relationships, measures, and calculated columns.",
        title: "Day 3 — Modeling & DAX",
      },
      {
        detail: "Visual design, dashboards, and sharing options.",
        title: "Day 4 — Reports & Publishing",
      },
    ],
    overview:
      "Participants learn to connect, transform, and model data before building interactive Power BI reports. The placeholder curriculum emphasizes storytelling with data so results reach non-technical audiences clearly.",
    slug: "data-analysis-power-bi",
    summary:
      "Turn raw datasets into interactive dashboards and reports that support faster, evidence-based decisions.",
    title: "Data Analysis & Visualization with Power BI",
  },
];
