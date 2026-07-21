"use client";

import {
  Briefcase,
  Calculator,
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
import { HeroSidebarItem } from "./hero-sidebar-item";

const SIDEBAR_ITEMS = [
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
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "absolute -top-2 left-0 z-40 hidden w-72 border bg-white transition-all duration-300 lg:block",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-10 opacity-0"
      )}
    >
      <ul className="flex flex-col">
        {SIDEBAR_ITEMS.map((item) => (
          <HeroSidebarItem
            hasChildren={item.hasChildren}
            icon={item.icon}
            key={item.label}
            label={item.label}
          />
        ))}
      </ul>
      <div className="flex flex-col border-gray-200 border-t">
        <Link
          className="flex items-center gap-3 px-4 py-4 font-medium text-gray-700 text-sm hover:bg-gray-50"
          href="#"
        >
          <span className="ml-7">TRAINING WORKSHOPS</span>
        </Link>
        <ul className="flex flex-col border-gray-100 border-t">
          <HeroSidebarItem
            hasChildren={true}
            icon={<Globe className="size-4" />}
            label="PECB COURSES"
          />
        </ul>
      </div>
    </div>
  );
}
