// src/components/MarketingCasestudies.jsx
"use client";

import { FaChartBar, FaVideo, FaBullhorn, FaRocket } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

const caseStudies = [
  {
    title: "Competitor Analysis for Creative Testing",
    subtitle: "Insights from 10 Winning Ads",
    notionUrl: "https://app.notion.com/p/37bb681bd1b2801b9f5cfeb036f1c5c0?v=37bb681bd1b2807d98dd000c9b1fda2d",
    results: ["14–42 sec video ads dominate", "WhatsApp CTA in 9/10 ads", "Problem + Solution hooks win", "Ads under 3 months strongest"],
    highlights: [
      { icon: FaVideo, text: "Every winner uses video (14–42 sec). No static images." },
      { icon: FaBullhorn, text: 'CTA "SEND WHATSAPP" appears in 9/10 ads.' },
      { icon: FaChartBar, text: "Top hooks: Offer, Problem + Solution, and Direct Order callouts." },
      { icon: FaRocket, text: "Ads under 3 months show the strongest profitability signals." },
    ],
  },
  {
    title: "Performance Marketing Assignment",
    subtitle: "Growth Metrics & Optimization",
    notionUrl: "https://docs.google.com/document/d/1xFl8I5Da6PL234Mar-r4hnt_YyZFkXnN2DH530hKJCQ/edit?tab=t.0",
    results: ["35% ROAS increase", "A/B testing framework", "Automated dashboards", "Budget allocation shifts"],
    highlights: [
      { icon: FaChartBar, text: "Increased ROAS by 35% across paid social and search channels." },
      { icon: FaRocket, text: "Implemented A/B testing framework for iterative copy/creative optimization." },
      { icon: FaBullhorn, text: "Automated reporting dashboards for real-time tracking of funnel metrics." },
      { icon: FaVideo, text: "Data-driven budget allocation shifts across high-performing ad sets." },
    ],
  },
];

export default function MarketingCasestudies() {
  return (
    <section id="marketing-casestudies" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <SectionHeading
        badge="Proven Results"
        title="Case Studies"
        subtitle="Data-driven audits, competitor intelligence frameworks, and campaign management reports outlining scaling strategies."
      />

      <div className="max-w-6xl mx-auto space-y-6">
        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className="bg-surface border border-[#333333] p-6 md:p-8 hover:border-accent/30 transition-all duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Title + Number */}
              <div className="col-span-12 md:col-span-3 flex items-start gap-4">
                <span className="text-3xl font-headline font-bold text-accent shrink-0">{(index + 1).toString().padStart(2, "0")}</span>
                <div>
                  <h4 className="text-base font-headline font-bold text-apptext leading-tight">{study.title}</h4>
                  <span className="electric-tag electric-tag-cta mt-2 inline-block">{study.subtitle}</span>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="col-span-12 md:col-span-3 bg-bg border border-[#333333] p-4">
                <p className="text-[9px] font-headline font-bold text-cta uppercase tracking-wider mb-3">Key Results</p>
                <ul className="space-y-2">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-xs font-body text-apptext flex items-start gap-2">
                      <span className="text-cta mt-0.5">◆</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="col-span-12 md:col-span-4">
                <p className="text-[9px] font-headline font-bold text-muted uppercase tracking-wider mb-3">Details</p>
                <ul className="space-y-2.5">
                  {study.highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <li key={idx} className="flex gap-2.5 text-xs font-body text-muted">
                        <Icon className="mt-0.5 shrink-0 text-accent" size={13} />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* CTA */}
              <div className="col-span-12 md:col-span-2 flex items-start md:justify-end">
                <Button
                  href={study.notionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="w-full md:w-auto text-xs py-2 px-4"
                >
                  Read Report ↗
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
