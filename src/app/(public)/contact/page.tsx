import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactForm } from "@/components/shared/contact-form";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { SectionHeading } from "@/components/shared/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  description:
    "Get in touch to enroll in a course, request in-house training, or discuss a consultancy engagement.",
  title: "Contact Us",
};

const contactDetails = [
  { icon: MapPin, label: "Office Address", value: siteConfig.contact.address },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone },
  { icon: Mail, label: "Email", value: siteConfig.contact.email },
  { icon: Clock, label: "Office Hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading
              description="Whether you're enrolling in a course, planning an in-house program, or exploring a consultancy engagement, our team is ready to help."
              eyebrow="Get in Touch"
              title="Let's Talk About Your Training Needs"
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              <PlaceholderMedia
                className="aspect-[4/3] w-full rounded-2xl"
                icon={MapPin}
                label="Office location map placeholder"
                tone="teal"
              />
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  Contact Details
                </h3>
                <ul className="mt-4 flex flex-col gap-4">
                  {contactDetails.map((item) => (
                    <li className="flex items-start gap-3" key={item.label}>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-primary">
                        <item.icon aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                          {item.label}
                        </p>
                        <p className="text-foreground/90 text-sm">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
