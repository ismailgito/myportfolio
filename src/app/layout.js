// PORTFOLIO/myportfolio/src/app/layout.js

import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageProgressBar from "@/components/ui/PageProgressBar";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Mohamed Ismail | Junior Performance Marketer",
    template: "%s | Mohamed Ismail",
  },
  description:
    "Junior Performance Marketer specializing in Google Ads, Meta Ads, LinkedIn Ads, SEO, and data-driven campaign optimization.",
  keywords: [
    "Performance Marketer",
    "Google Ads",
    "Meta Ads",
    "PPC Specialist",
    "Digital Marketing",
  ],
  authors: [{ name: "Mohamed Ismail" }],
  openGraph: {
    type: "website",
    title: "Mohamed Ismail — Junior Performance Marketer",
    description: "Driving growth through data-driven performance marketing.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Ismail — Junior Performance Marketer",
    description: "Data-driven performance marketer.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8F9FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <GoogleTagManager gtmId="GTM-KBCQ4L7X" />
      <body
        className={`${inter.className} antialiased bg-[#F8F9FA] dark:bg-[#0A0A0B] text-gray-900 dark:text-gray-100 overflow-x-hidden`}
      >
        <ThemeProvider>
          <PageProgressBar />

          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#6C63FF] focus:text-white focus:rounded-lg"
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