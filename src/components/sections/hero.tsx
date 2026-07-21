"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, PlayCircle } from "lucide-react";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/shared/placeholder-media";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 font-semibold text-white/80 text-xs uppercase tracking-widest">
            Your Training Partner
          </p>
          <h1 className="mt-5 text-balance font-bold text-4xl text-white leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Short Professional Courses that Transform Careers
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75 leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="accent">
              <Link href="/courses">
                Explore Courses
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              size="lg"
              variant="outline"
            >
              <Link href="/about">
                <PlayCircle aria-hidden="true" className="h-4 w-4" />
                About Us
              </Link>
            </Button>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-white/10 border-t pt-8">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-bold text-2xl text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-white/60 text-xs sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <PlaceholderMedia
            className="aspect-[4/3] w-full rounded-2xl shadow-2xl"
            icon={GraduationCap}
            label="Training session illustration"
            tone="gold"
          />
        </motion.div>
      </div>
    </section>
  );
}
