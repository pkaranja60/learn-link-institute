import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { footerNav } from "@/data/nav";
import { siteConfig } from "@/data/site";

// Original monogram badges stand in for social network icons (avoids any
// third-party brand marks while still giving each link a distinct glyph).
const socialInitials: Record<string, string> = {
  Facebook: "Fb",
  Instagram: "Ig",
  LinkedIn: "In",
  X: "X",
};

export function Footer() {
  return (
    <footer className="border-border border-t bg-brand-900 text-white">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link className="flex items-center gap-2.5" href="/">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
              <GraduationCap aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="font-bold font-display text-lg">
              {siteConfig.shortName}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.socials.map((s) => (
              <a
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 font-bold text-white text-xs transition-colors hover:bg-white/20"
                href={s.href}
                key={s.label}
              >
                {socialInitials[s.label] ?? s.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm text-white/60 uppercase tracking-wider">
            Training Subjects
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerNav.subjects.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-white/80 hover:text-white hover:underline"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm text-white/60 uppercase tracking-wider">
            Company
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link
                  className="text-sm text-white/80 hover:text-white hover:underline"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm text-white/60 uppercase tracking-wider">
            Contact Us
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-white/80">
            <li className="flex items-start gap-2.5">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-white/50"
              />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-white/50"
              />
              <a
                className="hover:underline"
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-white/50"
              />
              <a
                className="hover:underline"
                href={`mailto:${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-white/10 border-t">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-white/60 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Placeholder content for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
