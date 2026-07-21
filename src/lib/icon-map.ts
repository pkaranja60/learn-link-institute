import {
  BarChart3,
  ClipboardList,
  Compass,
  Landmark,
  Leaf,
  LineChart,
  type LucideIcon,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  ClipboardList,
  Compass,
  Landmark,
  Leaf,
  LineChart,
  MapPinned,
  ShieldCheck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? BarChart3;
}
