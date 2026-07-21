import type { Course } from "@/types";

export const courses: Course[] = [
  // Data Management & Analysis
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

  // Strategic Management & Leadership
  {
    audience: ["Team leaders", "Middle managers", "Department heads"],
    categorySlug: "strategic-management",
    duration: "5 days",
    featured: true,
    fee: "From $700",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-07-31", label: "Jul 27 – 31", start: "2026-07-27" },
      { end: "2026-11-20", label: "Nov 16 – 20", start: "2026-11-16" },
    ],
    objectives: [
      "Distinguish leadership styles and when to apply them",
      "Run effective performance conversations",
      "Build motivated, accountable teams",
      "Manage conflict constructively",
    ],
    outline: [
      {
        detail: "Leadership vs. management, self-awareness tools.",
        title: "Day 1 — Foundations of Leadership",
      },
      {
        detail: "Active listening, feedback frameworks.",
        title: "Day 2 — Communication & Influence",
      },
      {
        detail: "Goal-setting, coaching, and appraisal conversations.",
        title: "Day 3 — Performance Management",
      },
      {
        detail: "Motivation theories and building trust.",
        title: "Day 4 — Team Dynamics",
      },
      {
        detail: "Resolving disputes and leading through change.",
        title: "Day 5 — Conflict & Change",
      },
    ],
    overview:
      "This placeholder program blends leadership theory with case studies and role-play so participants can practice difficult conversations, coaching, and delegation in a safe environment.",
    slug: "leadership-people-management",
    summary:
      "Practical leadership techniques for supervisors managing performance, motivation, and team dynamics.",
    title: "Leadership & People Management",
  },
  {
    audience: ["Executives", "HR leaders", "Change champions"],
    categorySlug: "strategic-management",
    duration: "3 days",
    fee: "Custom quote",
    format: "In-House",
    location: "Delivered at your organization",
    nextDates: [
      { end: "2026-08-26", label: "Aug 24 – 26", start: "2026-08-24" },
    ],
    objectives: [
      "Diagnose readiness for change",
      "Apply a structured change-management model",
      "Design stakeholder communication plans",
      "Track adoption and sustain momentum",
    ],
    outline: [
      {
        detail: "Why change efforts succeed or fail.",
        title: "Day 1 — Understanding Change",
      },
      {
        detail: "Stakeholder mapping and communication design.",
        title: "Day 2 — Planning for Change",
      },
      {
        detail: "Reinforcement, metrics, and feedback loops.",
        title: "Day 3 — Sustaining Change",
      },
    ],
    overview:
      "A placeholder workshop for leadership teams navigating restructuring, new systems, or strategic shifts. Participants apply a change-management framework to a real initiative from their own organization.",
    slug: "change-management",
    summary:
      "Frameworks and tools to plan, communicate, and sustain organizational change initiatives.",
    title: "Change Management for Organizations",
  },

  // Finance & Accounting
  {
    audience: ["Finance officers", "Grants managers", "Program directors"],
    categorySlug: "finance-accounting",
    duration: "5 days",
    fee: "From $690",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-09-11", label: "Sep 7 – 11", start: "2026-09-07" },
    ],
    objectives: [
      "Build compliant grant budgets",
      "Track expenditure against donor rules",
      "Prepare accurate financial reports",
      "Prepare for donor audits",
    ],
    outline: [
      {
        detail: "From proposal to close-out.",
        title: "Day 1 — Grant Lifecycle Overview",
      },
      {
        detail: "Cost categories, indirect costs, and matching funds.",
        title: "Day 2 — Budgeting for Grants",
      },
      {
        detail: "Common donor rules and internal controls.",
        title: "Day 3 — Compliance & Controls",
      },
      {
        detail: "Preparing donor-ready financial reports.",
        title: "Day 4 — Financial Reporting",
      },
      {
        detail: "Documentation and responding to audit findings.",
        title: "Day 5 — Audit Readiness",
      },
    ],
    overview:
      "This placeholder course covers the full grant lifecycle, helping finance and program staff work together to meet donor requirements while reducing audit risk.",
    slug: "grants-management",
    summary:
      "Manage donor-funded grants confidently, from proposal budgeting through compliance and reporting.",
    title: "Grants Management for Nonprofits",
  },
  {
    audience: ["Finance teams", "Program managers", "Executive directors"],
    categorySlug: "finance-accounting",
    duration: "4 days",
    fee: "From $560",
    format: "Online",
    location: "Live Virtual Classroom",
    nextDates: [
      { end: "2026-10-22", label: "Oct 19 – 22", start: "2026-10-19" },
    ],
    objectives: [
      "Apply zero-based and incremental budgeting methods",
      "Build rolling forecasts",
      "Conduct variance analysis",
      "Present budgets to non-finance stakeholders",
    ],
    outline: [
      {
        detail: "Methods and organizational budget cycles.",
        title: "Day 1 — Budgeting Foundations",
      },
      {
        detail: "Rolling forecasts and scenario planning.",
        title: "Day 2 — Forecasting Techniques",
      },
      {
        detail: "Comparing actuals to budget and explaining drivers.",
        title: "Day 3 — Variance Analysis",
      },
      {
        detail: "Visualizing and presenting financial plans.",
        title: "Day 4 — Communicating Budgets",
      },
    ],
    overview:
      "A placeholder course covering budgeting methods, forecasting techniques, and variance analysis with hands-on spreadsheet exercises.",
    slug: "budgeting-forecasting",
    summary:
      "Build reliable budgets and forecasts that support sound organizational and program decisions.",
    title: "Financial Planning, Budgeting & Forecasting",
  },

  // Gender, Safeguarding & Inclusion
  {
    audience: ["Program officers", "Gender focal points", "M&E staff"],
    categorySlug: "gender-social-inclusion",
    duration: "5 days",
    featured: true,
    fee: "From $680",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-08-21", label: "Aug 17 – 21", start: "2026-08-17" },
    ],
    objectives: [
      "Conduct a basic gender analysis",
      "Integrate gender indicators into log frames",
      "Design gender-responsive activities",
      "Monitor gender outcomes",
    ],
    outline: [
      {
        detail: "Key definitions and frameworks.",
        title: "Day 1 — Gender Concepts",
      },
      {
        detail: "Practical analysis methods.",
        title: "Day 2 — Gender Analysis Tools",
      },
      {
        detail: "Applying gender lens to project design.",
        title: "Day 3 — Mainstreaming in Design",
      },
      {
        detail: "Tracking gender-responsive results.",
        title: "Day 4 — Indicators & Monitoring",
      },
      {
        detail: "Applying learning to participant projects.",
        title: "Day 5 — Case Studies",
      },
    ],
    overview:
      "This placeholder course helps program teams move from gender awareness to practical mainstreaming tools applied across the project cycle.",
    slug: "gender-mainstreaming",
    summary:
      "Integrate gender analysis into project design, implementation, and evaluation for more equitable outcomes.",
    title: "Gender Mainstreaming in Programs",
  },
  {
    audience: ["Program staff", "HR teams", "Safeguarding focal points"],
    categorySlug: "gender-social-inclusion",
    duration: "5 days",
    fee: "From $680",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-08-28", label: "Aug 24 – 28", start: "2026-08-24" },
    ],
    objectives: [
      "Apply core safeguarding standards",
      "Design a reporting and referral pathway",
      "Conduct safe recruitment practices",
      "Respond appropriately to disclosures",
    ],
    outline: [
      {
        detail: "Standards, policies, and codes of conduct.",
        title: "Day 1 — Safeguarding Foundations",
      },
      {
        detail: "Recognizing and assessing safeguarding risks.",
        title: "Day 2 — Risk Identification",
      },
      {
        detail: "Designing accessible reporting mechanisms.",
        title: "Day 3 — Reporting Pathways",
      },
      {
        detail: "Vetting and induction practices.",
        title: "Day 4 — Safe Recruitment",
      },
      {
        detail: "Handling disclosures appropriately.",
        title: "Day 5 — Response & Case Management",
      },
    ],
    overview:
      "A placeholder course grounded in international safeguarding standards, helping organizations build stronger prevention and response systems.",
    slug: "child-protection-safeguarding",
    summary:
      "Practical safeguarding standards, reporting procedures, and prevention strategies for teams working with children.",
    title: "Child Protection & Safeguarding",
  },

  // Project & Program Management
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

  // Geospatial & Mapping Technologies
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

  // Monitoring, Evaluation & Learning
  {
    audience: [
      "M&E officers",
      "Program managers",
      "Accountability focal points",
    ],
    categorySlug: "monitoring-evaluation",
    duration: "5 days",
    featured: true,
    fee: "From $700",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [{ end: "2026-08-07", label: "Aug 3 – 7", start: "2026-08-03" }],
    objectives: [
      "Design a MEAL framework",
      "Select SMART indicators",
      "Build community feedback mechanisms",
      "Use data for organizational learning",
    ],
    outline: [
      {
        detail: "Core concepts and frameworks.",
        title: "Day 1 — MEAL Foundations",
      },
      {
        detail: "Designing indicators and data-collection tools.",
        title: "Day 2 — Indicators & Tools",
      },
      {
        detail: "Feedback and complaint-response systems.",
        title: "Day 3 — Accountability Mechanisms",
      },
      {
        detail: "Ensuring reliable, verifiable data.",
        title: "Day 4 — Data Quality",
      },
      {
        detail: "Using data to inform decisions.",
        title: "Day 5 — Learning & Adaptive Management",
      },
    ],
    overview:
      "This placeholder course covers the full MEAL cycle, from indicator design through data quality and feedback mechanisms.",
    slug: "meal-training",
    summary:
      "Design MEAL systems that track results, ensure accountability, and support organizational learning.",
    title: "Monitoring, Evaluation, Accountability & Learning",
  },
  {
    audience: [
      "Evaluation specialists",
      "Research managers",
      "Donor liaison staff",
    ],
    categorySlug: "monitoring-evaluation",
    duration: "5 days",
    fee: "From $700",
    format: "Online",
    location: "Live Virtual Classroom",
    nextDates: [
      { end: "2026-10-16", label: "Oct 12 – 16", start: "2026-10-12" },
    ],
    objectives: [
      "Distinguish evaluation designs and when to use them",
      "Develop a theory of change",
      "Design a counterfactual approach",
      "Interpret impact evaluation findings",
    ],
    outline: [
      {
        detail: "Types of evaluation and when to use them.",
        title: "Day 1 — Evaluation Foundations",
      },
      {
        detail: "Building and testing program logic.",
        title: "Day 2 — Theory of Change",
      },
      {
        detail: "Experimental and quasi-experimental methods.",
        title: "Day 3 — Impact Evaluation Designs",
      },
      {
        detail: "Sampling and data-quality for evaluation.",
        title: "Day 4 — Data Considerations",
      },
      {
        detail: "Communicating findings to stakeholders.",
        title: "Day 5 — Interpreting Results",
      },
    ],
    overview:
      "A placeholder course introducing impact-evaluation designs, from quasi-experimental methods to practical data-collection considerations.",
    slug: "impact-evaluation",
    summary:
      "Design rigorous impact evaluations that demonstrate attributable change from your programs.",
    title: "Impact Evaluation for Evidence-Based Development",
  },

  // Climate Resilience & Agriculture
  {
    audience: ["Program officers", "Agriculture specialists", "Policy staff"],
    categorySlug: "climate-agriculture",
    duration: "5 days",
    fee: "From $680",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-09-18", label: "Sep 14 – 18", start: "2026-09-14" },
    ],
    objectives: [
      "Interpret climate-risk information",
      "Design adaptation interventions",
      "Integrate resilience indicators into projects",
      "Engage communities in adaptation planning",
    ],
    outline: [
      {
        detail: "Understanding hazards and vulnerability.",
        title: "Day 1 — Climate Risk Foundations",
      },
      {
        detail: "Designing practical interventions.",
        title: "Day 2 — Adaptation Planning",
      },
      {
        detail: "Measuring adaptive capacity.",
        title: "Day 3 — Resilience Indicators",
      },
      {
        detail: "Participatory adaptation planning.",
        title: "Day 4 — Community Engagement",
      },
      {
        detail: "Mainstreaming climate risk in design.",
        title: "Day 5 — Integrating into Projects",
      },
    ],
    overview:
      "This placeholder course helps program teams integrate climate-risk thinking into project design and community engagement.",
    slug: "climate-adaptation-resilience",
    summary:
      "Plan adaptation and resilience programming grounded in local climate risk and vulnerability data.",
    title: "Climate Change Adaptation & Resilience",
  },
  {
    audience: [
      "Agriculture officers",
      "Livelihoods specialists",
      "Program managers",
    ],
    categorySlug: "climate-agriculture",
    duration: "5 days",
    fee: "From $680",
    format: "In-Person",
    location: "Nairobi Training Center",
    nextDates: [
      { end: "2026-11-13", label: "Nov 9 – 13", start: "2026-11-09" },
    ],
    objectives: [
      "Apply food-security analysis frameworks",
      "Map agricultural value chains",
      "Design market-linkage interventions",
      "Integrate sustainability practices",
    ],
    outline: [
      {
        detail: "Concepts, indicators, and analysis.",
        title: "Day 1 — Food Security Foundations",
      },
      {
        detail: "Identifying actors and constraints.",
        title: "Day 2 — Value Chain Mapping",
      },
      {
        detail: "Connecting producers to markets.",
        title: "Day 3 — Market Linkages",
      },
      {
        detail: "Climate-smart agriculture approaches.",
        title: "Day 4 — Sustainable Practices",
      },
      {
        detail: "Applying tools to participant projects.",
        title: "Day 5 — Program Design",
      },
    ],
    overview:
      "A placeholder course connecting food-security analysis with sustainable agriculture practice and market-systems thinking.",
    slug: "food-security-agriculture",
    summary:
      "Strengthen food-security programming with practical tools for value chains, market linkages, and sustainability.",
    title: "Food Security & Sustainable Agriculture",
  },
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
