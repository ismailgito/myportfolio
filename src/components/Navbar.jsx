// PORTFOLIO/myportfolio/src/components/Navbar.jsx

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "AI Tools", href: "#ai-tools" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg
      className="w-5 h-5 text-yellow-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      className="w-5 h-5 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const renderThemeIcon = () => {
    if (!mounted) {
      return (
        <div className="w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 animate-pulse" />
      );
    }
    if (theme === "dark") {
      return <SunIcon />;
    }
    return <MoonIcon />;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C63FF] via-[#00D9FF] to-[#FF6584] flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">MI</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-gray-900 dark:text-white leading-tight">
                  Mohamed Ismail
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest uppercase">
                  Performance Marketer
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#6C63FF] dark:hover:text-white transition-colors rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                {renderThemeIcon()}
              </button>

              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="hidden lg:inline-flex px-5 py-2.5 rounded-lg bg-[#6C63FF] hover:bg-[#5a52e0] text-white text-sm font-semibold transition-all"
              >
                Let&apos;s Talk
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="lg:hidden w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              >
                <span
                  className={`w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""
                    }`}
                />
                <span
                  className={`w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`w-5 h-0.5 bg-gray-700 dark:bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
                    }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#0A0A0B] border-l border-gray-200 dark:border-white/10 z-50 lg:hidden pt-24 px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] dark:hover:text-white rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="block mt-6 w-full text-center px-6 py-3 rounded-lg bg-[#6C63FF] text-white font-semibold"
            >
              Let&apos;s Talk
            </a>
          </div>
        </>
      )}
    </>
  );
}