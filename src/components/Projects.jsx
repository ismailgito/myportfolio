// src/components/Projects.jsx
"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaDownload, FaFilePowerpoint, FaFilePdf } from "react-icons/fa";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Projects() {
  const [openProjectId, setOpenProjectId] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Landing Page A/B Testing & Tracking",
      subtitle: "Conversion Rate Optimization (CRO)",
      description: "Designed, hosted, and A/B tested an acquisition landing page. Set up granular click event tracking via GTM, verified tag firing, and boosted the conversion rate by 32% over 3 iterative data sprints.",
      liveUrl: "https://landing-page-krwi9m05v-gearup4.vercel.app/?utm_source=google&utm_medium=ctr",
      githubUrl: "https://github.com/ismailgito/Landing_page.git",
      downloadOptions: [
        { type: "pdf", label: "Attribution Plan PDF", icon: FaFilePdf, color: "text-accent", file: "/projects/Landing_page_optimization/Landing_page_UTM_tracking.pdf" },
        { type: "ppt", label: "Slide Deck Presentation", icon: FaFilePowerpoint, color: "text-accent", file: "/projects/Landing_page_optimization/Optimizing_Performance_and_Attribution.pptx" }
      ]
    },
    {
      id: 2,
      title: "Attribution Tracker & Budget Shifter",
      subtitle: "Analytical Pipeline / Automation",
      description: "Built a multi-channel attribution model comparing linear, position-based, and time-decay structures using Google Sheets & Google Apps Script. Features automatic weekly budget shifts recommendations.",
      liveUrl: "https://multi-channel-attribution-tracker.netlify.app/",
      githubUrl: "https://github.com/ismailgito/multi-channel-attribution-tracker.git",
      downloadOptions: [
        { type: "pdf", label: "Model Methodology PDF", icon: FaFilePdf, color: "text-accent", file: "/projects/multi-channel-attribution-tracker/Multi-channel-tracker.pdf" },
        { type: "ppt", label: "Growth Prism Deck", icon: FaFilePowerpoint, color: "text-accent", file: "/projects/multi-channel-attribution-tracker/The_Growth_Prism.pptx" }
      ]
    },
    {
      id: 3,
      title: "LLM Claude Token Optimizer",
      subtitle: "Open Source Utility Tool",
      description: "A browser-based tool translating documents (PDF, Word, PPT) into ultra-clean, structure-preserving markdown. Compresses context sizes by over 90% to prevent context bloat and minimize API fees.",
      liveUrl: "https://claude-token-optimization.vercel.app/",
      githubUrl: "https://github.com/ismailgito/Claude-Token-optimization.git",
      downloadOptions: [
        { type: "pdf", label: "Documentation PDF", icon: FaFilePdf, color: "text-accent", file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pdf" },
        { type: "ppt", label: "Product Slide Deck", icon: FaFilePowerpoint, color: "text-accent", file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pptx" }
      ]
    },
  ];

  const toggleDownload = (id) => {
    setOpenProjectId(openProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <SectionHeading
        badge="Campaign Showcase"
        title="Projects"
        subtitle="Active applications, automated sheets scripting, landing page experiments, and pipeline utilities proving practical optimization skills."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card
            key={project.id}
            variant="yellow"
            className="flex flex-col h-full justify-between p-8"
          >
            <div>
              <span className="electric-tag electric-tag-cta inline-block mb-4">
                {project.subtitle}
              </span>
              <h4 className="text-lg font-headline font-bold text-apptext mt-4 leading-snug uppercase">
                {project.title}
              </h4>
              <p className="text-sm font-body text-muted mt-4 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-4 border-t border-[#333333]">
              <div className="flex flex-wrap gap-2.5">
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="yellow"
                  className="flex-1 text-xs py-2 px-3"
                >
                  <FaExternalLinkAlt className="mr-1.5" size={11} /> Live Demo
                </Button>

                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  className="flex-1 text-xs py-2 px-3"
                >
                  <FaGithub className="mr-1.5" size={11} /> GitHub
                </Button>
              </div>

              {/* Download Panel */}
              <div className="mt-3">
                <Button
                  onClick={() => toggleDownload(project.id)}
                  variant="ghost"
                  className="w-full text-xs py-2.5 px-3 flex items-center justify-center gap-1.5 border border-cta/30 text-cta hover:bg-cta/10 hover:border-cta"
                >
                  <FaDownload size={11} /> {openProjectId === project.id ? "Hide Assets" : "Download Assets"}
                </Button>

                {openProjectId === project.id && (
                  <div className="mt-2 border border-[#333333] bg-bg p-1.5 space-y-1">
                    {project.downloadOptions.map((option, idx) => {
                      const Icon = option.icon;
                      return (
                        <a
                          key={idx}
                          href={option.file}
                          download
                          className="flex items-center gap-2 px-3 py-2 text-xs font-headline font-bold text-muted hover:text-accent hover:bg-surface transition-colors"
                        >
                          <Icon className="text-accent" size={12} />
                          {option.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
