import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    author: "Editorial Team",
    category: "Learning & Development",
    content: [
      "This is placeholder editorial content. It exists to demonstrate the blog listing and article layout, not to represent real published research.",
      "When choosing a training format, consider three factors: the complexity of the skill being taught, the geographic spread of your team, and the budget available for travel and venue costs.",
      "Classroom sessions tend to work well for hands-on, tool-based skills where facilitators can walk the room and troubleshoot in real time. Online formats work well for concept-heavy content and distributed teams.",
      "A hybrid approach — short online modules followed by an in-person practicum — often gives the best of both worlds for technical courses.",
    ],
    coverTone: "brand",
    date: "2026-02-26",
    excerpt:
      "A practical look at the trade-offs between in-person and virtual training formats, and how to choose based on your goals and budget.",
    readMinutes: 4,
    slug: "classroom-or-online-training",
    title: "Classroom or Online Training: Which One Fits Your Team?",
  },
  {
    author: "Editorial Team",
    category: "Gender & Inclusion",
    content: [
      "This is placeholder editorial content used to illustrate the blog article template.",
      "Programs that account for gender dynamics and social inclusion from the design stage consistently show stronger uptake and more equitable outcomes across the communities they serve.",
      "Practical steps include conducting a lightweight gender analysis early, disaggregating data by sex and other relevant factors, and building feedback loops that reach marginalized groups directly.",
      "Embedding inclusion is not a one-time checklist; it requires ongoing monitoring and a willingness to adapt program design based on what the data shows.",
    ],
    coverTone: "gold",
    date: "2024-10-21",
    excerpt:
      "Why gender-responsive and inclusive program design leads to stronger, more sustainable development outcomes.",
    readMinutes: 5,
    slug: "gender-equality-social-inclusion-cornerstone",
    title:
      "Gender Equality and Social Inclusion: A Foundation for Lasting Impact",
  },
  {
    author: "Editorial Team",
    category: "Monitoring & Evaluation",
    content: [
      "This is placeholder editorial content used to illustrate the blog article template.",
      "A monitoring system only creates value when the people closest to the work trust and use it. That starts with designing indicators collaboratively rather than handing them down.",
      "Keep data-collection tools short, review data as a team on a predictable schedule, and always close the loop by showing staff how their data influenced a decision.",
      "Culture change takes longer than tool rollout — budget time for coaching, not just training.",
    ],
    coverTone: "teal",
    date: "2025-05-14",
    excerpt:
      "Monitoring systems fail when they exist only on paper. Here's how to build one your team will actually rely on.",
    readMinutes: 6,
    slug: "building-a-monitoring-culture",
    title: "Building a Monitoring Culture That People Actually Use",
  },
  {
    author: "Editorial Team",
    category: "Data & Analysis",
    content: [
      "This is placeholder editorial content used to illustrate the blog article template.",
      "Pivot tables remain the fastest way to summarize large datasets without writing a single formula, and pairing them with slicers turns a static table into an interactive report.",
      "Lookup functions like XLOOKUP replace fragile nested formulas and make spreadsheets easier for the next person to maintain.",
      "Finally, learning basic data-validation rules prevents messy entries before they ever reach your analysis.",
    ],
    coverTone: "brand",
    date: "2025-08-02",
    excerpt:
      "Beyond basic formulas: the spreadsheet skills that separate confident analysts from everyone else.",
    readMinutes: 4,
    slug: "five-excel-skills-every-analyst-needs",
    title: "Five Excel Skills Every Program Analyst Should Master",
  },
  {
    author: "Editorial Team",
    category: "Learning & Development",
    content: [
      "This is placeholder editorial content used to illustrate the blog article template.",
      "Adults learn best by doing, not listening. Effective training designs spend the majority of time on applied practice, not slides.",
      "Spacing content over several shorter sessions, rather than one long day, significantly improves retention.",
      "Following up with a short refresher two to four weeks later helps convert new skills into lasting habits.",
    ],
    coverTone: "gold",
    date: "2025-11-30",
    excerpt:
      "Adult learners forget most of what they hear in a lecture. Here's what the research says works instead.",
    readMinutes: 5,
    slug: "designing-training-that-sticks",
    title: "Designing Training That Actually Sticks",
  },
  {
    author: "Editorial Team",
    category: "Climate & Agriculture",
    content: [
      "This is placeholder editorial content used to illustrate the blog article template.",
      "Most programs already collect the contextual data needed to assess basic climate exposure — the gap is usually in how that data is used during design.",
      "Simple prompts, such as asking 'how might this activity be affected by flooding or drought,' during planning meetings can surface risks early.",
      "Building light adaptive-capacity indicators into existing M&E frameworks avoids the need for a separate climate monitoring system.",
    ],
    coverTone: "teal",
    date: "2026-01-15",
    excerpt:
      "Climate adaptation shouldn't live in a separate strategy document. Here's how to weave it into everyday planning.",
    readMinutes: 6,
    slug: "climate-risk-in-program-design",
    title: "Bringing Climate Risk Into Everyday Program Design",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
