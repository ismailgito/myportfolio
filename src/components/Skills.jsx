// src/components/Skills.jsx
"use client";

import { FaGoogle, FaFacebook, FaLinkedin, FaTiktok, FaChartLine, FaTag, FaFlask, FaFileExcel } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function Skills() {
  const services = [
    {
      title: "Paid Media Management",
      description: "Google Ads, Meta Ads, LinkedIn, TikTok — full-funnel campaign architecture from keyword research to creative testing to budget scaling.",
      icon: FaGoogle,
      skills: ["Google Ads (PPC)", "Meta Ads (FB/IG)", "LinkedIn Ads", "TikTok Ads"],
    },
    {
      title: "Tracking & Attribution",
      description: "Custom GA4 property setup, GTM container architecture, CAPI integration, and multi-channel attribution modeling.",
      icon: FaChartLine,
      skills: ["Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Conversion API (CAPI)", "Looker Studio Dashboards"],
    },
    {
      title: "CRO & Optimization",
      description: "A/B testing frameworks, landing page optimization, creative testing matrices, and automated budget reallocation workflows.",
      icon: FaFlask,
      skills: ["SEO Optimization", "Creative A/B Testing", "Excel / Apps Script", "Landing Page Optimization"],
    },
  ];

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <SectionHeading
        badge="What I Deliver"
        title="Services"
        subtitle="Performance marketing services backed by technical implementation skills and data-driven optimization methodologies."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              variant="yellow"
              className="flex flex-col h-full p-8"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Icon className="text-accent" size={22} />
              </div>

              <h4 className="text-lg font-headline font-bold text-apptext mb-3 uppercase tracking-tight">
                {service.title}
              </h4>
              <p className="text-sm font-body text-muted leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[10px] font-headline font-bold text-muted border border-[#444444] bg-bg hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
