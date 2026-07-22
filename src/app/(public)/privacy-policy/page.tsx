import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs } from "@/shared";

export const metadata: Metadata = {
  description:
    "Placeholder privacy policy describing how we would collect, use, and protect your information.",
  title: "Privacy Policy",
};

const sections = [
  {
    body: "This is placeholder policy text. In a live version of this site, this section would describe the categories of personal information collected through forms, cookies, and analytics tools, such as name, email address, and course interests.",
    title: "1. Information We Collect",
  },
  {
    body: "Placeholder text describing how submitted information might be used — for example, to respond to inquiries, process course enrollments, and send occasional updates about training opportunities.",
    title: "2. How We Use Information",
  },
  {
    body: "Placeholder text describing the use of cookies or similar technologies for analytics and improving site performance, along with how visitors could manage their preferences.",
    title: "3. Cookies & Analytics",
  },
  {
    body: "Placeholder text describing the limited circumstances under which information might be shared with service providers or as required by law.",
    title: "4. Data Sharing",
  },
  {
    body: "Placeholder text describing reasonable measures taken to protect personal information and how long data would typically be retained.",
    title: "5. Data Retention & Security",
  },
  {
    body: "Placeholder text describing how a visitor could request access to, correction of, or deletion of their personal information.",
    title: "6. Your Rights",
  },
  {
    body: `Questions about this placeholder policy can be directed to ${siteConfig.contact.email}.`,
    title: "7. Contact Us",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <h1 className="font-bold text-3xl text-foreground tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground text-sm">
            Last updated: January 2026. This page contains placeholder content
            for demonstration purposes and does not constitute a real privacy
            policy.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-semibold text-foreground text-lg">
                  {section.title}
                </h2>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
