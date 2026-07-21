import type { Workshop } from "@/types";

export const workshops: Workshop[] = [
  {
    duration: "2 days",
    format: "In-house or open enrollment",
    highlights: [
      "Recognizing risk indicators early",
      "Reviewing and strengthening internal policy",
      "Practicing respectful reporting conversations",
      "Building a simple response action plan",
    ],
    slug: "workplace-safeguarding-risks",
    summary:
      "This placeholder workshop helps organizations recognize, prevent, and respond to safeguarding risks in the workplace through practical policy and case-study work.",
    tagline: "A 2-day workshop for building safer, more respectful workplaces.",
    title: "Safeguarding Risks at the Workplace",
  },
  {
    duration: "2 days",
    format: "In-house or open enrollment",
    highlights: [
      "Understanding personal emotional triggers",
      "Building empathy and active listening skills",
      "Managing stress under pressure",
      "Applying EQ in team settings",
    ],
    slug: "emotional-intelligence-self-awareness",
    summary:
      "A placeholder workshop combining self-assessment tools with practical exercises to help participants manage emotions and build stronger working relationships.",
    tagline:
      "Strengthen self-management and interpersonal effectiveness at work.",
    title: "Emotional Intelligence & Self-Awareness",
  },
  {
    duration: "3 days",
    format: "In-house or open enrollment",
    highlights: [
      "Delegation frameworks that stick",
      "Giving feedback without conflict",
      "Setting clear expectations and goals",
      "Handling underperformance fairly",
    ],
    slug: "supervisory-people-management",
    summary:
      "This placeholder program helps first-time and experienced supervisors delegate effectively, hold accountable conversations, and build motivated teams.",
    tagline: "Core skills for new and experienced supervisors.",
    title: "Supervisory & People Management Skills",
  },
  {
    duration: "4 days",
    format: "In-house or open enrollment",
    highlights: [
      "Translating strategy into operational plans",
      "Aligning teams around shared priorities",
      "Leading through ambiguity and change",
      "Measuring strategic progress",
    ],
    slug: "strategic-leadership-management",
    summary:
      "A placeholder senior-leadership program focused on translating strategy into action, aligning teams, and measuring what matters.",
    tagline: "Equip senior staff to lead strategy execution with clarity.",
    title: "Strategic Leadership & Management",
  },
  {
    duration: "2 days",
    format: "In-house or open enrollment",
    highlights: [
      "Structuring reports for busy readers",
      "Writing clear executive summaries",
      "Editing for tone and brevity",
      "Using visuals to support the narrative",
    ],
    slug: "report-writing-corporate",
    summary:
      "This placeholder workshop sharpens business-writing skills so reports and memos are read, understood, and acted on quickly.",
    tagline: "Clear, concise, and persuasive business writing.",
    title: "Report Writing for Corporate Professionals",
  },
  {
    duration: "1 day (customizable)",
    format: "On-site or off-site",
    highlights: [
      "Trust-building group activities",
      "Structured reflection and debriefs",
      "Communication and collaboration challenges",
      "Action planning for ongoing team habits",
    ],
    slug: "corporate-team-building",
    summary:
      "A placeholder facilitated experience combining structured activities and reflection to strengthen collaboration across teams.",
    tagline: "Facilitated activities that build trust and collaboration.",
    title: "Corporate Team Building",
  },
  {
    duration: "Custom engagement",
    format: "Consultancy",
    highlights: [
      "Financial health diagnostics",
      "Sustainability and diversification planning",
      "Resource-mobilization strategy",
      "Board and leadership briefings",
    ],
    slug: "financial-strategy-development",
    summary:
      "A placeholder advisory service helping organizations design financial strategies, sustainability plans, and resource-mobilization approaches.",
    tagline:
      "Advisory support to align financial planning with strategic goals.",
    title: "Financial Strategy Development Consultancy",
  },
  {
    duration: "Flexible",
    format: "Delivered on-site or virtually",
    highlights: [
      "Custom needs assessment before delivery",
      "Content adapted to your sector",
      "Flexible scheduling around your calendar",
      "Post-training follow-up support",
    ],
    slug: "in-house-training",
    summary:
      "This placeholder service adapts any course in the catalog into a tailored program delivered exclusively for your team, with content adjusted to your sector and context.",
    tagline: "Any course, customized and delivered at your organization.",
    title: "In-House Training Solutions",
  },
];

export function getWorkshop(slug: string) {
  return workshops.find((w) => w.slug === slug);
}
