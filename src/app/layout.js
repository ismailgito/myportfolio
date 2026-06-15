// src/app/layout.js

import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageProgressBar from "@/components/ui/PageProgressBar";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Mohamed Ismail | Performance Marketing Specialist",
    template: "%s | Mohamed Ismail",
  },
  description:
    "Data-driven Performance Marketer specializing in ROI optimization, Google Ads, Meta Ads, LinkedIn Ads, CRO, and analytical reporting pipelines.",
  keywords: [
    "Performance Marketer",
    "Google Ads",
    "Meta Ads",
    "PPC Specialist",
    "Digital Marketing",
    "Growth Lead",
    "CRO Specialist"
  ],
  authors: [{ name: "Mohamed Ismail" }],
  openGraph: {
    type: "website",
    title: "Mohamed Ismail — Performance Marketer",
    description: "Driving growth through data-driven performance marketing campaigns.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ismail — Performance Marketer",
    description: "Data-driven performance marketer specializing in paid media & CRO.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F2F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <GoogleTagManager />
      </head>

      <body
        className={`${dmSans.className} antialiased bg-bg text-apptext overflow-x-hidden`}
      >
        {/* Google Tag Manager - Noscript */}
        <GoogleTagManagerNoScript />

        <ThemeProvider>
          <PageProgressBar />

          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded-none"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content" className="min-h-screen">
            {children}
          </main>

          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}