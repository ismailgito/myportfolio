"use client";

import { FaChartBar, FaVideo, FaBullhorn, FaRocket, FaExternalLinkAlt } from "react-icons/fa";

const caseStudies = [
    {
        title: "Competitor Analysis for Creative Testing",
        subtitle: "Key Insights from 10 Winning Ads",
        notionUrl: "https://app.notion.com/p/37bb681bd1b2801b9f5cfeb036f1c5c0?v=37bb681bd1b2807d98dd000c9b1fda2d",
        highlights: [
            { icon: FaVideo, text: "Every winner uses video (14–42 sec). No static images." },
            { icon: FaBullhorn, text: 'CTA "SEND WHATSAPP" appears in 9/10 ads - direct WhatsApp ordering is profitable.' },
            { icon: FaChartBar, text: "Top hooks: Offer, Problem + Solution, and Direct Order." },
            { icon: FaRocket, text: "Ads under 3 months show strongest profitability signals." },
        ],
    },
    {
        title: "Performance Marketing Assignment",
        subtitle: "Key Metrics and Strategies",
        notionUrl: "https://docs.google.com/document/d/1xFl8I5Da6PL234Mar-r4hnt_YyZFkXnN2DH530hKJCQ/edit?tab=t.0",
        highlights: [
            { icon: FaChartBar, text: "Increased ROAS by 35% across paid social and search channels." },
            { icon: FaRocket, text: "Implemented A/B testing framework for iterative optimization." },
            { icon: FaBullhorn, text: "Automated reporting dashboards for real-time performance tracking." },
            { icon: FaVideo, text: "Data-driven budget allocation across high-performing campaigns." },
        ],
    },
];

export default function MarketingCasestudies() {
    return (
        <section id="marketing-casestudies" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24 py-16">
            <div className="text-center mb-12">
                <h2 className="text-sm font-mono tracking-widest uppercase text-[#FF6584] mb-2">
                    Marketing Case Studies
                </h2>
                <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                    Marketing Case Studies
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Data-driven competitive analysis and creative testing strategies that inform marketing decisions.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                    <div
                        key={study.title}
                        className="bg-white dark:bg-[#1A1A2E] rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all p-6 flex flex-col"
                    >
                        <div className="flex items-center gap-2 text-[#6C63FF] font-mono text-xs uppercase tracking-wider mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
                            Case Study
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {study.title}
                        </h4>
                        <p className="text-[#FF6584] font-mono text-sm mb-5">
                            {study.subtitle}
                        </p>

                        <ul className="space-y-3 mb-6 flex-1">
                            {study.highlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.text} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                        <Icon className="mt-0.5 shrink-0 text-[#6C63FF]" size={14} />
                                        <span>{item.text}</span>
                                    </li>
                                );
                            })}
                        </ul>

                        <a
                            href={study.notionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5a52e0] transition-colors text-sm font-medium"
                        >
                            <FaExternalLinkAlt size={14} /> View Full Case Study
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}