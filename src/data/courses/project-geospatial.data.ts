import type { Course } from "@/types";

export const projectAndGeospatialCourses: Course[] = [
  {
    audience: ["Project officers", "Program managers", "Team leads"],
    categorySlug: "project-management",
    duration: "5 days",
    fee: "From $700",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-09-25", label: "Sep 21 – 25", start: "2026-09-21" },
      { end: "2026-12-11", label: "Dec 7 – 11", start: "2026-12-07" },
    ],
    objectives: [
      "Develop a logical framework",
      "Build a realistic project schedule",
      "Identify and manage project risks",
      "Track progress against a project plan",
    ],
    outline: [
      {
        detail: "Phases from design to closeout.",
        title: "Day 1 — Project Cycle Overview",
      },
      {
        detail: "Building goals, outcomes, and indicators.",
        title: "Day 2 — Logical Framework Approach",
      },
      {
        detail: "Work breakdown structures and Gantt charts.",
        title: "Day 3 — Scheduling & Resourcing",
      },
      {
        detail: "Identifying, rating, and mitigating risks.",
        title: "Day 4 — Risk Management",
      },
      {
        detail: "Tracking progress and closing projects well.",
        title: "Day 5 — Monitoring & Closeout",
      },
    ],
    overview:
      "This placeholder course equips participants with practical planning tools including logical frameworks, work breakdown structures, and risk registers.",
    slug: "project-planning-management",
    summary:
      "A full project-cycle course covering design, planning, implementation, and closeout using proven tools.",
    title: "Project Planning & Management",
  },
  {
    audience: ["Program staff", "Researchers", "Communications officers"],
    categorySlug: "project-management",
    duration: "3 days",
    fee: "From $480",
    format: "Online",
    location: "Live Virtual Classroom",
    nextDates: [
      { end: "2026-09-02", label: "Aug 31 – Sep 2", start: "2026-08-31" },
    ],
    objectives: [
      "Structure reports for clarity and impact",
      "Edit for tone, brevity, and accuracy",
      "Design simple, effective slide decks",
      "Deliver presentations with confidence",
    ],
    outline: [
      {
        detail: "Planning and organizing technical reports.",
        title: "Day 1 — Report Structure",
      },
      {
        detail: "Plain language and executive summaries.",
        title: "Day 2 — Editing for Impact",
      },
      {
        detail: "Slide design and delivery practice.",
        title: "Day 3 — Presenting with Confidence",
      },
    ],
    overview:
      "A placeholder short course focused on structuring reports for busy readers and building confident presentation delivery skills.",
    slug: "report-writing-presentation",
    summary:
      "Write clear, persuasive reports and deliver presentations that get results.",
    title: "Report Writing & Presentation Skills",
  },
  {
    audience: ["Field researchers", "Planners", "M&E officers"],
    categorySlug: "geospatial-mapping",
    duration: "5 days",
    fee: "From $650",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-10-02", label: "Sep 28 – Oct 2", start: "2026-09-28" },
    ],
    objectives: [
      "Navigate the QGIS interface confidently",
      "Import and style spatial data",
      "Perform basic spatial analysis",
      "Produce print-ready maps",
    ],
    outline: [
      {
        detail: "Core concepts and the QGIS interface.",
        title: "Day 1 — GIS Fundamentals",
      },
      {
        detail: "Points, lines, polygons, and styling.",
        title: "Day 2 — Working with Vector Data",
      },
      {
        detail: "Buffers, overlays, and queries.",
        title: "Day 3 — Spatial Analysis Basics",
      },
      {
        detail: "Imagery and raster analysis basics.",
        title: "Day 4 — Working with Raster Data",
      },
      {
        detail: "Layout design and exporting maps.",
        title: "Day 5 — Map Production",
      },
    ],
    overview:
      "This placeholder introductory course requires no prior GIS experience. Participants learn to import data, build maps, and perform simple spatial queries.",
    slug: "intro-qgis-mapping",
    summary:
      "Get hands-on with a leading open-source GIS platform to create maps and perform basic spatial analysis.",
    title: "Introduction to Mapping with QGIS",
  },
  {
    audience: [
      "Disaster-risk officers",
      "Emergency planners",
      "GIS technicians",
    ],
    categorySlug: "geospatial-mapping",
    duration: "5 days",
    fee: "From $680",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [{ end: "2026-11-06", label: "Nov 2 – 6", start: "2026-11-02" }],
    objectives: [
      "Map hazards and exposure",
      "Assess vulnerability spatially",
      "Design response planning maps",
      "Communicate spatial risk to decision-makers",
    ],
    outline: [
      {
        detail: "Hazard, exposure, and vulnerability data.",
        title: "Day 1 — Risk Concepts & Data",
      },
      {
        detail: "Building hazard layers and overlays.",
        title: "Day 2 — Hazard Mapping",
      },
      {
        detail: "Combining social and spatial data.",
        title: "Day 3 — Vulnerability Analysis",
      },
      {
        detail: "Evacuation routes and resource mapping.",
        title: "Day 4 — Response Planning Maps",
      },
      {
        detail: "Dashboards and stakeholder briefings.",
        title: "Day 5 — Communicating Risk",
      },
    ],
    overview:
      "A placeholder applied GIS course for disaster-risk and emergency-response practitioners, using realistic scenario data.",
    slug: "gis-disaster-risk-management",
    summary:
      "Apply spatial analysis to hazard mapping, vulnerability assessment, and emergency response planning.",
    title: "GIS for Disaster Risk Management",
  },
];
