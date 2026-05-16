"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certificates" },
    { name: "Experience", href: "#internships" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "/contact" },
  ];

  // Your social media links - REPLACE WITH YOUR ACTUAL LINKS
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/ismailgito", color: "hover:text-gray-600" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-600" },
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/919384222784", color: "hover:text-green-500" },
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0F0F1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
            Mohamed<span className="text-[#6C63FF]">Ismail</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] dark:hover:text-[#6C63FF] transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#6C63FF] text-sm"
              >
                {link.name}
              </Link>
            ))}

            {/* Social Icons in Mobile */}
            <div className="flex gap-4 pt-4 mt-2 border-t border-gray-200 dark:border-gray-800">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
              <button
                onClick={toggleTheme}
                className="p-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}