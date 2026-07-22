import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CustomNavigation } from "../components/custom-navigation";
import { Button } from "../ui/button";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/subjects", label: "TRAINING SUBJECTS" },
  { href: "/venues", label: "TRAINING VENUES" },
  { href: "/workshops", label: "TRAINING WORKSHOPS" },
  { href: "/resources", label: "RESOURCES" },
];

export function Navbar() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo, Search, CTA */}
        <div className="flex flex-col items-center justify-between py-6 md:flex-row md:gap-8">
          {/* Left Half (50%) */}
          <div className="flex w-full items-center md:w-1/2">
            <Link className="flex shrink-0 items-center" href="/">
              <Image
                alt="Perk Group Africa"
                className="h-16 w-auto"
                height={20}
                priority
                sizes="(max-width: 768px) 200px, 200px"
                src="/images/logo.jpg"
                style={{ width: "auto" }}
                width={200}
              />
            </Link>
          </div>

          {/* Right Half (50%) */}
          <div className="flex w-full items-center justify-end gap-4 md:w-1/2">
            <div className="flex flex-1 items-center border border-gray-300 bg-white">
              <input
                className="w-full bg-transparent px-4 py-3 text-sm outline-none"
                placeholder="Search for pages"
                type="text"
              />
              <button
                aria-label="Search"
                className="flex h-full items-center justify-center bg-(--color-navy) px-6 py-4 text-white hover:bg-navy/90"
                type="submit"
              >
                <Search className="size-4" />
              </button>
            </div>

            <div className="shrink-0">
              <Button
                className="rounded-none px-6 py-7 uppercase tracking-wide"
                variant="navy"
              >
                TRAINING WORKSHOPS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Links */}
      <div className="border-gray-200 border-y">
        <div className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-72 shrink-0 items-center justify-between bg-(--color-navy) px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <Menu className="size-5" />
              <span className="font-semibold text-sm tracking-wide">
                ALL COURSES
              </span>
            </div>
            <ChevronDown className="size-4 text-white" />
          </div>

          <nav className="ml-auto flex items-stretch">
            <CustomNavigation
              className="h-full"
              contentClassName="absolute top-full left-0 mt-4.5 bg-white border border-gray-200 shadow-lg !rounded-none z-50 min-w-55"
              items={NAV_LINKS.map((link) => ({
                content:
                  link.label === "HOME" ? undefined : (
                    <div className="flex flex-col py-2">
                      <span className="cursor-pointer px-4 py-2 text-[#abb8c3] text-sm hover:text-orange">
                        Sample Item 1
                      </span>
                      <span className="cursor-pointer px-4 py-2 text-[#abb8c3] text-sm hover:text-orange">
                        Sample Item 2
                      </span>
                      <span className="cursor-pointer px-4 py-2 text-[#abb8c3] text-sm hover:text-orange">
                        Sample Item 3
                      </span>
                    </div>
                  ),
                href: link.label === "HOME" ? link.href : undefined,
                id: link.label,
                label: link.label,
              }))}
              listClassName="gap-x-8 h-full items-stretch"
              triggerClassName="font-medium text-gray-700 text-sm uppercase hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent bg-transparent nav-trigger-custom p-0 rounded-none h-full flex items-center"
              viewport={false}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}
