import type { Course } from "@/types";

export const strategicManagementCourses: Course[] = [
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
];
