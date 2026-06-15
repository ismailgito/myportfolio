// src/components/Footer.jsx
"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Button from "./ui/Button";

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ismailgito",
      username: "github.com/ismailgito",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/mohamed-ismail-2700a2257/",
      username: "linkedin/mohamed-ismail",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/919384222784",
      username: "+91 93842 22784",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-bg border-t border-[#333333] mt-28 font-body text-apptext">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Bio Column */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-headline font-bold text-accent tracking-tight">
              MOHAMED ISMAIL
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
              <p>
                <span className="font-bold text-apptext">Performance Marketing Specialist</span> focused on driving
                high-integrity campaign architectures, lead acquisition systems, and ROAS scaling protocols.
              </p>
              <p>
                I configure custom analytics tracking (GTM, GA4, CAPI), optimize landing page pipelines, deploy creative A/B testing matrixes,
                and scale paid budgets to maximize conversion value.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-headline font-bold uppercase tracking-widest text-muted">
              Connection Endpoints //
            </h4>
            <div className="flex flex-col gap-3.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-surface border border-[#333333] text-muted hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    <div className="w-8 h-8 bg-bg border border-[#444444] flex items-center justify-center">
                      <Icon size={15} />
                    </div>
                    <div>
                      <h5 className="text-xs font-headline font-semibold uppercase text-apptext">{social.name}</h5>
                      <p className="text-[10px] font-body text-muted">{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email Contact */}
          <div className="space-y-6">
            <h4 className="text-xs font-headline font-bold uppercase tracking-widest text-muted">
              Direct Inquiries //
            </h4>
            <div className="bg-surface border border-accent/20 p-6 flex flex-col justify-between min-h-[200px] hover:border-accent/50 transition-colors duration-200">
              <div>
                <div className="w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                  <FaEnvelope className="text-accent" size={14} />
                </div>
                <h5 className="text-xs font-headline font-semibold uppercase text-apptext mb-1">Send an Email</h5>
                <a
                  href="mailto:dadobeb553@gmail.com"
                  className="text-sm sm:text-base font-headline font-bold text-accent hover:text-apptext transition-colors break-all"
                >
                  dadobeb553@gmail.com
                </a>
              </div>
              <p className="text-[10px] font-body text-muted mt-4">
                Avg response time: &lt; 24 hours
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#333333] mt-12 pt-8 text-center text-[10px] font-headline font-bold text-muted uppercase tracking-widest flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} MOHAMED ISMAIL // ALL RIGHTS RESERVED.</p>
          <p className="text-accent">DATA-DRIVEN PERFORMANCE ARCHITECTURE</p>
        </div>
      </div>
    </footer>
  );
}
