"use client";

import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { headerNavLinks } from "@/data/nav-links";
import { cn } from "@/lib/utils";
import { CustomNavigation } from "../components/custom-navigation";
import { Button } from "../ui/button";
import { CoursesDropdown } from "./courses-dropdown";
import { useNavbar } from "./navbar-context";

export function Navbar() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const { setIsNavSticky } = useNavbar();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const handleMouseEnter = useCallback(() => setIsCoursesOpen(true), []);
  const handleMouseLeave = useCallback(() => setIsCoursesOpen(false), []);

  // Detect when the top row scrolls out of view → bottom row is visually sticky
  useEffect(() => {
    const topRow = topRowRef.current;
    if (!topRow) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsNavSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(topRow);
    return () => observer.disconnect();
  }, [setIsNavSticky]);

  // ─────────────────────────────────────────────
  // SECTION: Header Nav Items
  // ─────────────────────────────────────────────

  const navItems = headerNavLinks.map((link) => {
    if (link.dropdownItems && link.dropdownItems.length > 0) {
      return {
        content: (
          <div className="flex flex-col py-2.5">
            {link.dropdownItems.map((sub) => (
              <Link
                className="block px-5 py-2 text-gray-600 text-sm transition-colors hover:bg-gray-50 hover:text-(--color-orange)"
                href={sub.href}
                key={sub.label}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        ),
        id: link.label,
        label: link.label,
      };
    }

    return {
      href: link.href,
      id: link.label,
      label: link.label,
    };
  });

  // ─────────────────────────────────────────────
  // SECTION: Render
  // ─────────────────────────────────────────────

  return (
    <>
      {/* Top Row: Logo, Search, CTA */}
      <div className="bg-white px-4 py-6 sm:px-6 lg:px-8" ref={topRowRef}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full items-center sm:w-1/2">
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

          <div className="flex w-full items-center justify-end gap-4 sm:w-1/2">
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
                asChild
                className="rounded-none px-6 py-7 uppercase tracking-wide"
                variant="navy"
              >
                <Link href="/solutions">TRAINING WORKSHOPS</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Navigation Links — sticky on scroll */}
      <div className="sticky top-0 z-50 border-gray-200 border-y bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          {/* biome-ignore lint/a11y/noNoninteractiveElementInteractions: Hover reveal for mega dropdown — keyboard navigation handled by CustomNavigation items inside */}
          <nav
            aria-label="Course categories"
            className="relative flex w-72 shrink-0 cursor-pointer items-center justify-between bg-(--color-navy) px-4 py-4 text-white"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-3">
              <Menu className="size-5" />
              <span className="font-semibold text-sm tracking-wide">
                ALL COURSES
              </span>
            </div>
            <ChevronDown
              className={cn(
                "size-4 text-white transition-transform",
                isCoursesOpen && "rotate-180"
              )}
            />

            {isCoursesOpen ? <CoursesDropdown /> : null}
          </nav>

          <nav className="ml-auto flex items-stretch">
            <CustomNavigation
              className="h-full"
              contentClassName="absolute top-full left-0 mt-4.5 bg-white border border-gray-200 shadow-lg !rounded-none z-50 min-w-55"
              items={navItems}
              listClassName="gap-x-8 h-full items-stretch"
              triggerClassName="font-medium text-gray-700 text-sm uppercase hover:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent bg-transparent nav-trigger-custom p-0 rounded-none h-full flex items-center"
              viewport={false}
            />
          </nav>
        </div>
      </div>
    </>
  );
}
