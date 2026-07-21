import { ChevronDown, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-(--color-orange) px-4 py-2.5 text-white text-xs sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <div className="flex items-center gap-4">
          <div className="group relative flex cursor-pointer items-center gap-1 border-white/30 border-r border-l px-4 hover:text-white/80">
            <span>ENGLISH</span>
            <ChevronDown className="size-3 text-[#abb8c3]" />
            <div className="absolute top-full left-0 z-50 hidden min-w-30 bg-white pt-2 text-gray-800 shadow-lg group-hover:block">
              <div className="flex flex-col">
                <span className="cursor-pointer px-4 py-2 text-[#abb8c3] hover:text-(--color-orange)">
                  English
                </span>
                <span className="cursor-pointer px-4 py-2 text-[#abb8c3] hover:text-(--color-orange)">
                  Deutsch
                </span>
                <span className="cursor-pointer px-4 py-2 text-[#abb8c3] hover:text-(--color-orange)">
                  French
                </span>
              </div>
            </div>
          </div>
          <span className="hidden sm:inline">YOUR TRAINING PARTNER...</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Link
              aria-label="Facebook"
              className="hover:text-white/80"
              href="#"
            >
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              aria-label="Twitter/X"
              className="hover:text-white/80"
              href="#"
            >
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link
              aria-label="LinkedIn"
              className="hover:text-white/80"
              href="#"
            >
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect height="12" width="4" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link
              aria-label="Instagram"
              className="hover:text-white/80"
              href="#"
            >
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link aria-label="YouTube" className="hover:text-white/80" href="#">
              <svg
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>YouTube</title>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </Link>
          </div>
          <div className="hidden items-center md:flex">
            <Link
              className="flex items-center gap-1 border-white/30 border-r border-l px-4 hover:text-white/80"
              href="mailto:training@perk-gafrica.com"
            >
              <Mail className="size-4" />
              <span>Email: training@perk-gafrica.com</span>
            </Link>
            <Link
              className="flex items-center gap-1 pl-4 hover:text-white/80"
              href="tel:+254712028449"
            >
              <Phone className="size-4" />
              <span>Call: (+254) 712 028 449</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
