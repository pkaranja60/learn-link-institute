"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GraduationCap, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link
      aria-label={`${siteConfig.name} home`}
      className="flex shrink-0 items-center gap-2.5"
      href="/"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <GraduationCap aria-hidden="true" className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-bold font-display text-base text-foreground tracking-tight">
          {siteConfig.shortName}
        </span>
        <span className="font-medium text-[10px] text-muted-foreground uppercase tracking-wider">
          Skills Institute
        </span>
      </span>
    </Link>
  );
}

function DesktopItem({ item }: { item: (typeof mainNav)[number] }) {
  const [open, setOpen] = React.useState(false);
  const hasMenu = !!(item.columns || item.children);

  const handleMouseEnter = React.useCallback(() => setOpen(true), []);
  const handleMouseLeave = React.useCallback(() => setOpen(false), []);
  const handleClick = React.useCallback(() => setOpen((o) => !o), []);

  if (!hasMenu) {
    return (
      <Link
        className="px-3 py-2 font-semibold text-foreground/80 text-sm transition-colors hover:text-primary"
        href={item.href}
      >
        {item.label}
      </Link>
    );
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Dropdown container handles hover, inner button handles focus
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="presentation"
    >
      <button
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 px-3 py-2 font-semibold text-foreground/80 text-sm transition-colors hover:text-primary"
        onClick={handleClick}
        type="button"
      >
        {item.label}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {!!open && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "absolute top-full left-1/2 z-40 -translate-x-1/2 pt-3",
              item.columns ? "w-[560px]" : "w-72"
            )}
            exit={{ opacity: 0, y: 8 }}
            initial={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
          >
            <div className="rounded-xl border border-border bg-popover p-5 shadow-lg">
              {!!item.columns && (
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {item.columns[0].items.map((child) => (
                    <Link
                      className="rounded-md px-3 py-2 font-medium text-foreground/80 text-sm transition-colors hover:bg-secondary hover:text-primary"
                      href={child.href}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
              {!!item.children && (
                <div className="flex flex-col gap-1">
                  {item.children.map((child) => (
                    <Link
                      className="rounded-md px-3 py-2 font-medium text-foreground/80 text-sm transition-colors hover:bg-secondary hover:text-primary"
                      href={child.href}
                      key={child.href}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
              <div className="mt-3 border-border border-t pt-3">
                <Link
                  className="font-semibold text-primary text-sm hover:underline"
                  href={item.href}
                >
                  View all {item.label.toLowerCase()} →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button
          aria-label="Open menu"
          className="lg:hidden"
          size="icon"
          variant="ghost"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-full max-w-sm overflow-y-auto p-0"
        side="right"
      >
        <SheetHeader className="border-border border-b p-5">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
          {mainNav.map((item) => {
            const list = item.columns?.[0]?.items ?? item.children;
            if (!list) {
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    className="rounded-lg px-3 py-3 font-semibold text-base text-foreground hover:bg-secondary"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              );
            }
            return (
              <Accordion collapsible key={item.href} type="single">
                <AccordionItem className="border-none" value={item.label}>
                  <AccordionTrigger className="rounded-lg px-3 py-3 font-semibold text-base hover:bg-secondary hover:no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1 pl-3">
                    <div className="flex flex-col gap-0.5">
                      <SheetClose asChild>
                        <Link
                          className="rounded-md px-3 py-2 font-semibold text-primary text-sm hover:bg-secondary"
                          href={item.href}
                        >
                          View all
                        </Link>
                      </SheetClose>
                      {list.map((child) => (
                        <SheetClose asChild key={child.href}>
                          <Link
                            className="rounded-md px-3 py-2 text-foreground/80 text-sm hover:bg-secondary"
                            href={child.href}
                          >
                            {child.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </nav>
        <div className="mt-auto flex flex-col gap-3 border-border border-t p-5">
          <a
            className="flex items-center gap-2 font-medium text-foreground/80 text-sm"
            href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-primary" />
            {siteConfig.contact.phone}
          </a>
          <SheetClose asChild>
            <Button render={<Link href="/contact" />} size="lg">
              Request Training
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const _pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    // no-op: ensures active states can react to route changes if needed later
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-border border-b bg-background/90 shadow-sm backdrop-blur-md"
          : "border-transparent border-b bg-background/70 backdrop-blur-sm"
      )}
    >
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs">
          <p>{siteConfig.tagline}</p>
          <div className="flex items-center gap-4">
            <a
              className="hover:underline"
              href={`mailto:${siteConfig.contact.email}`}
            >
              {siteConfig.contact.email}
            </a>
            <span aria-hidden="true">•</span>
            <a
              className="hover:underline"
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
        <Logo />
        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {mainNav.map((item) => (
            <DesktopItem item={item} key={item.href} />
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button render={<Link href="/contact" />}>Request Training</Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
