// src/components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Case Studies", href: "#marketing-casestudies" },
    { name: "Services", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#internships" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 border-b border-[#333333]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="text-base md:text-lg font-headline font-bold tracking-tight text-apptext group-hover:text-accent transition-colors">
              MOHAMED ISMAIL
            </span>
            <span className="hidden sm:inline-block text-[10px] font-headline font-bold text-accent uppercase tracking-wider bg-accent/10 border border-accent/20 px-2 py-0.5">
              GROWTH / PPC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-headline font-bold text-muted hover:text-accent uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Button
              href="#contact"
              variant="yellow"
              className="px-5 py-2.5"
            >
              Scale ROI →
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 border border-muted bg-surface text-apptext hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#333333] bg-[#0A0A0A] px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-headline font-bold text-muted hover:text-accent uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
              <Button
                href="#contact"
                variant="yellow"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Scale ROI →
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
