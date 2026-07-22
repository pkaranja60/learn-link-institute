import {
  Briefcase,
  Calculator,
  Database,
  Leaf,
  LineChart,
  Map as MapIcon,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

export const CATEGORIES = [
  {
    hasChildren: true,
    icon: React.createElement(Database, { className: "size-4" }),
    label: "DATA MANAGEMENT & ANALYSIS",
    slug: "data-management-analysis",
  },
  {
    hasChildren: true,
    icon: React.createElement(TrendingUp, { className: "size-4" }),
    label: "STRATEGIC MANAGEMENT",
    slug: "strategic-management",
  },
  {
    hasChildren: true,
    icon: React.createElement(Calculator, { className: "size-4" }),
    label: "ACCOUNTING & FINANCIAL MANAGEMENT",
    slug: "finance-accounting",
  },
  {
    hasChildren: true,
    icon: React.createElement(Users, { className: "size-4" }),
    label: "GENDER PROTECTION",
    slug: "gender-social-inclusion",
  },
  {
    hasChildren: true,
    icon: React.createElement(Briefcase, { className: "size-4" }),
    label: "PROJECT MANAGEMENT",
    slug: "project-management",
  },
  {
    hasChildren: true,
    icon: React.createElement(MapIcon, { className: "size-4" }),
    label: "GIS COURSES",
    slug: "geospatial-mapping",
  },
  {
    hasChildren: true,
    icon: React.createElement(LineChart, { className: "size-4" }),
    label: "MONITORING & EVALUATION",
    slug: "monitoring-evaluation",
  },
  {
    hasChildren: true,
    icon: React.createElement(Leaf, { className: "size-4" }),
    label: "AGRICULTURE & CLIMATE CHANGE",
    slug: "climate-agriculture",
  },
];
