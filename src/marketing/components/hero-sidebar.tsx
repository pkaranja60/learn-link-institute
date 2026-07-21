"use client";

import {
  Briefcase,
  Calculator,
  ChevronRight,
  Database,
  Globe,
  Leaf,
  LineChart,
  Map as MapIcon,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CustomNavigation } from "@/shared/components/custom-navigation";

const CATEGORIES = [
  {
    hasChildren: true,
    icon: <Database className="size-4" />,
    label: "DATA MANAGEMENT & ANALYSIS",
  },
  {
    hasChildren: true,
    icon: <TrendingUp className="size-4" />,
    label: "STRATEGIC MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: <Calculator className="size-4" />,
    label: "ACCOUNTING & FINANCIAL MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: <Users className="size-4" />,
    label: "GENDER PROTECTION",
  },
  {
    hasChildren: true,
    icon: <Briefcase className="size-4" />,
    label: "PROJECT MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: <MapIcon className="size-4" />,
    label: "GIS COURSES",
  },
  {
    hasChildren: true,
    icon: <LineChart className="size-4" />,
    label: "MONITORING & EVALUATION",
  },
  {
    hasChildren: true,
    icon: <Leaf className="size-4" />,
    label: "AGRICULTURE & CLIMATE CHANGE",
  },
];

export function HeroSidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    ...CATEGORIES.map((item) => ({
      content: (
        <div className="h-full w-150 overflow-y-auto border border-gray-200 border-l-0 bg-white p-8 shadow-xl">
          <h3 className="mb-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
            ALL {item.label} COURSES
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
      ),
      id: item.label,
      label: (
        <div className="flex w-full items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)">
              {item.icon}
            </span>
            <span className="font-medium text-gray-700 text-sm transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)">
              {item.label}
            </span>
          </div>
          <ChevronRight className="size-4 text-gray-400 transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)" />
        </div>
      ),
    })),
    {
      href: "#",
      id: "training-workshops",
      label: (
        <div className="flex w-full items-center gap-3 text-left">
          <span className="ml-7 font-medium text-gray-700 text-sm transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)">
            TRAINING WORKSHOPS
          </span>
        </div>
      ),
    },
    {
      content: (
        <div className="h-full w-150 overflow-y-auto border border-gray-200 border-l-0 bg-white p-8 shadow-xl">
          <h3 className="mb-6 font-semibold text-gray-800 text-sm uppercase tracking-wide">
            ALL PECB COURSES
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                className="block text-gray-500 text-sm transition-colors hover:text-(--color-orange)"
                href="#"
              >
                PECB Certification 1
              </Link>
            </li>
          </ul>
        </div>
      ),
      id: "pecb-courses",
      label: (
        <div className="flex w-full items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <span className="text-gray-400 transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)">
              <Globe className="size-4" />
            </span>
            <span className="font-medium text-gray-700 text-sm transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)">
              PECB COURSES
            </span>
          </div>
          <ChevronRight className="size-4 text-gray-400 transition-colors group-hover:text-(--color-orange) group-data-[state=open]:text-(--color-orange)" />
        </div>
      ),
    },
  ];

  return (
    <div
      className={cn(
        "absolute -top-2 left-0 z-40 hidden w-72 border bg-white transition-all duration-300 lg:block",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-10 opacity-0"
      )}
    >
      <CustomNavigation
        contentClassName="absolute left-full group-data-[viewport=false]/navigation-menu:!-top-px group-data-[viewport=false]/navigation-menu:!-bottom-px z-50 !mt-0 !p-0 ml-px border-none bg-transparent shadow-none h-full"
        hideChevron={true}
        items={navItems}
        listClassName="w-full divide-y divide-gray-100"
        orientation="vertical"
        triggerClassName="w-full flex items-center justify-between bg-white px-4 py-3.5 transition-colors hover:bg-gray-50 data-[state=open]:bg-gray-50 focus:bg-gray-50 !rounded-none !h-auto text-left font-normal nav-trigger-custom"
        viewport={false}
      />
    </div>
  );
}
