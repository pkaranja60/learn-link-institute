import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    description: siteConfig.description,
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
  },
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    description: siteConfig.description,
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="flex min-h-full flex-col">
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          href="#main-content"
        >
          Skip to main content
        </a>
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
