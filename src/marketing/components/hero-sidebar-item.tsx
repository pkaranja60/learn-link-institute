"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type React from "react";

interface HeroSidebarItemProps {
  hasChildren?: boolean;
  icon: React.ReactNode;
  label: string;
}

export function HeroSidebarItem({
  icon,
  label,
  hasChildren,
}: HeroSidebarItemProps) {
  return (
    <li className="group list-none border-gray-100 border-b last:border-b-0">
      <button
        className="flex w-full items-center justify-between bg-white px-4 py-3 text-left transition-colors hover:bg-gray-50"
        type="button"
      >
        <div className="flex items-center gap-3">
          <span className="text-gray-400">{icon}</span>
          <span className="font-medium text-gray-700 text-sm">{label}</span>
        </div>
        {hasChildren ? <ChevronRight className="size-4 text-gray-400" /> : null}
      </button>

      {/* Flyout / Dropdown that appears to the right on hover */}
      {hasChildren ? (
        <div className="absolute -top-px -bottom-px left-71.75 z-50 hidden w-150 overflow-y-auto border border-gray-200 border-l-0 bg-white p-8 shadow-xl group-hover:block">
          <h3 className="mb-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
            ALL {label} COURSES
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                Training Course on Mobile Data Collection using ODK
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                Training Course on Intermediate Excel
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                Training Course on Advanced Excel
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                Training Course on Advanced Financial Modeling with Excel
              </Link>
            </li>
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                Training Course on Data Analytics with Advanced Excel
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </li>
  );
}
