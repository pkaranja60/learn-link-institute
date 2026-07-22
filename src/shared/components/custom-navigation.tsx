"use client";

import Link from "next/link";
import type * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export interface CustomNavItem {
  content?: React.ReactNode;
  href?: string;
  id?: string;
  label: React.ReactNode;
}

interface CustomNavigationProps {
  className?: string;
  contentClassName?: string;
  hideChevron?: boolean;
  items: CustomNavItem[];
  listClassName?: string;
  orientation?: "horizontal" | "vertical";
  triggerClassName?: string;
  viewport?: boolean;
  viewportClassName?: string;
}

function NavigationItemContent({
  item,
  triggerClassName,
  contentClassName,
  hideChevron,
}: {
  item: CustomNavItem;
  triggerClassName?: string;
  contentClassName?: string;
  hideChevron?: boolean;
}) {
  if (item.content) {
    return (
      <>
        <NavigationMenuTrigger
          className={triggerClassName}
          hideChevron={hideChevron}
        >
          {item.label}
        </NavigationMenuTrigger>
        <NavigationMenuContent className={contentClassName}>
          {item.content}
        </NavigationMenuContent>
      </>
    );
  }

  if (item.href) {
    return (
      <NavigationMenuLink
        asChild
        className={cn(navigationMenuTriggerStyle(), triggerClassName)}
      >
        <Link href={item.href}>{item.label}</Link>
      </NavigationMenuLink>
    );
  }

  return (
    <div className={cn(navigationMenuTriggerStyle(), triggerClassName)}>
      {item.label}
    </div>
  );
}

export function CustomNavigation({
  items,
  orientation = "horizontal",
  className,
  listClassName,
  triggerClassName,
  contentClassName,
  viewportClassName,
  viewport = true,
  hideChevron,
}: CustomNavigationProps) {
  return (
    <NavigationMenu
      className={className}
      orientation={orientation}
      viewport={viewport}
      viewportClassName={viewportClassName}
    >
      <NavigationMenuList
        className={cn(
          orientation === "vertical" && "flex-col items-stretch space-y-0",
          listClassName
        )}
      >
        {items.map((item, index) => (
          <NavigationMenuItem
            className={
              orientation === "vertical"
                ? "static w-full"
                : "relative flex h-full items-stretch"
            }
            key={
              item.id ?? (typeof item.label === "string" ? item.label : index)
            }
          >
            <NavigationItemContent
              contentClassName={contentClassName}
              hideChevron={hideChevron}
              item={item}
              triggerClassName={triggerClassName}
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
