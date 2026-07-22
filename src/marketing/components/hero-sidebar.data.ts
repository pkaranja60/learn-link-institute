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
  },
  {
    hasChildren: true,
    icon: React.createElement(TrendingUp, { className: "size-4" }),
    label: "STRATEGIC MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: React.createElement(Calculator, { className: "size-4" }),
    label: "ACCOUNTING & FINANCIAL MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: React.createElement(Users, { className: "size-4" }),
    label: "GENDER PROTECTION",
  },
  {
    hasChildren: true,
    icon: React.createElement(Briefcase, { className: "size-4" }),
    label: "PROJECT MANAGEMENT",
  },
  {
    hasChildren: true,
    icon: React.createElement(MapIcon, { className: "size-4" }),
    label: "GIS COURSES",
  },
  {
    hasChildren: true,
    icon: React.createElement(LineChart, { className: "size-4" }),
    label: "MONITORING & EVALUATION",
  },
  {
    hasChildren: true,
    icon: React.createElement(Leaf, { className: "size-4" }),
    label: "AGRICULTURE & CLIMATE CHANGE",
  },
];
