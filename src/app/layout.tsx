import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

import { siteConfig } from "@/data/site";
import { FloatingChat, Footer, Navbar, NavbarProvider, TopBar } from "@/shared";

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
    <html
      className={`${roboto.variable} ${montserrat.variable} h-full`}
      lang="en"
    >
      <body className="flex min-h-full flex-col">
        <NavbarProvider>
          <a
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            href="#main-content"
          >
            Skip to main content
          </a>
          <TopBar />
          <Navbar />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
          <FloatingChat />
        </NavbarProvider>
      </body>
    </html>
  );
}
