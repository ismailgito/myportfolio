"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Your social links - REPLACE WITH YOUR ACTUAL LINKS
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/ismailgito", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/mohamed-ismail-2700a2257/", color: "hover:text-blue-400" },
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://wa.me/919384222784", color: "hover:text-green-400" },
  ];

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-white dark:bg-[#0F0F1A] border-t border-gray-200 dark:border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
              Mohamed<span className="text-[#6C63FF]">Ismail</span>
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <p className="leading-relaxed">
                <span className="font-medium text-gray-800 dark:text-gray-200">Junior Performance Marketer</span> dedicated to
                driving measurable growth through data-backed strategies. I specialize in Google Ads, Meta Ads, LinkedIn Ads,
                and SEO — helping businesses acquire high-quality leads at the lowest possible cost.
              </p>
              <p className="leading-relaxed">
                What sets me apart? I don't just run ads — I build complete <span className="font-medium">performance ecosystems</span>.
                From setting up conversion tracking and attribution models to automating budget allocation and generating
                AI-powered insights, I ensure every marketing dollar works harder for your bottom line.
              </p>
            </div>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-2">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="text-sm font-mono tracking-widest uppercase text-[#FF6584] mb-2">
                  Let's Connect
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm max-w-2xl mx-auto">
                  I'm always open to new opportunities, collaborations, or just a friendly chat about marketing!
                </p>
              </div>

              {/* Left side - Social Links, Right side - Email & Response */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Social Links Grid */}
                <div className="space-y-3">
                  {/* GitHub */}
                  <a
                    href="https://github.com/ismailgito"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-white dark:bg-[#1A1A2E] rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#6C63FF] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#6C63FF] transition-colors">
                      <FaGithub size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">GitHub</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">github.com/ismailgito</p>
                    </div>
                    <FaExternalLinkAlt size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-white dark:bg-[#1A1A2E] rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#6C63FF] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#0077B5] transition-colors">
                      <FaLinkedin size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">linkedin.com/in/yourusername</p>
                    </div>
                    <FaExternalLinkAlt size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919384222784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-white dark:bg-[#1A1A2E] rounded-xl border border-gray-200 dark:border-white/10 hover:border-[#6C63FF] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                      <FaWhatsapp size={20} className="text-gray-700 dark:text-gray-300 group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Message me directly</p>
                    </div>
                    <FaExternalLinkAlt size={12} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

                {/* Right side - Email Card */}
                <div className="bg-gradient-to-br from-[#6C63FF]/5 to-[#00D9FF]/5 rounded-xl border border-gray-200 dark:border-white/10 p-6 flex flex-col justify-center">
                  <div className="text-center md:text-left">
                    <div className="w-12 h-12 bg-[#6C63FF]/10 rounded-xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                      <FaEnvelope size={24} className="text-[#6C63FF]" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email Me</h4>
                    <a
                      href="mailto:dadobeb553@gmail.com"
                      className="text-lg text-[#6C63FF] hover:text-[#5a52e0] transition-colors break-all"
                    >
                      dadobeb553@gmail.com
                    </a>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 justify-center md:justify-start">
                        <span>⚡</span> Usually responds within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Mohamed Ismail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}