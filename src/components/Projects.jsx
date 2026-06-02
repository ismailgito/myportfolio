"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaDownload, FaFileWord, FaFilePowerpoint, FaFilePdf } from "react-icons/fa";

export default function Projects() {
    const [openProjectId, setOpenProjectId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Optimize Landing Page for High Conversion Rate",
            subtitle: "with Tracking System",
            description: "Designed and A/B tested a landing page using Google Optimize, implemented event tracking via GTM, and improved conversion rate by 32% through data-driven iterations.",
            liveUrl: "https://landing-page-krwi9m05v-gearup4.vercel.app/?utm_source=google&utm_medium=ctr",
            githubUrl: "https://github.com/ismailgito/Landing_page.git",
            downloadOptions: [
                { type: "pdf", label: "PDF", icon: FaFilePdf, color: "text-blue-500", file: "/projects/Landing_page_optimization/Landing_page_UTM_tracking.pdf" },
                { type: "ppt", label: "PowerPoint Presentation", icon: FaFilePowerpoint, color: "text-red-500", file: "/projects/Landing_page_optimization/Optimizing_Performance_and_Attribution.pptx" }
            ]
        },
        {
            id: 2,
            title: "Multi-Channel Attribution & Budget Shift",
            subtitle: "with Automated Reports",
            description: "Built a custom attribution model (linear & time-decay) using Google Sheets + Apps Script. Automated weekly budget reallocation recommendations and dashboard refresh.",
            liveUrl: "https://multi-channel-attribution-tracker.netlify.app/",
            githubUrl: "https://github.com/ismailgito/multi-channel-attribution-tracker.git",
            downloadOptions: [
                { type: "pdf", label: "PDF", icon: FaFilePdf, color: "text-blue-500", file: "/projects/multi-channel-attribution-tracker/Multi-channel-tracker.pdf" },
                { type: "ppt", label: "PowerPoint Presentation", icon: FaFilePowerpoint, color: "text-red-500", file: "/projects/multi-channel-attribution-tracker/The_Growth_Prism.pptx" }
            ]
        },
        {
            id: 3,
            title: "Claude Token Optmization",
            subtitle: "Stop burning tokens, start optimizing",
            description: "Token Optimizer is a browser-based application designed to transform a wide variety of file formats into clean, LLM-ready markdown. By removing unnecessary metadata and binary bloat, the tool can achieve a size reduction of over 90%, which helps users save on API costs and stay within context limits.",
            liveUrl: "https://claude-token-optimization.vercel.app/",
            githubUrl: "https://github.com/ismailgito/Claude-Token-optimization.git",
            downloadOptions: [
                { type: "pdf", label: "PDF", icon: FaFilePdf, color: "text-blue-500", file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pdf" },
                { type: "ppt", label: "PowerPoint Presentation", icon: FaFilePowerpoint, color: "text-red-500", file: "/projects/Claude-Token-optimization/Claude-Token-Optimization.pptx" }
            ]
        },
    ];

    const toggleDownload = (id) => {
        setOpenProjectId(openProjectId === id ? null : id);
    };

    return (
        <section id="projects" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24 py-16">
            <div className="text-center mb-12">
                <h2 className="text-sm font-mono tracking-widest uppercase text-[#FF6584] mb-2">
                    Portfolio Projects
                </h2>
                <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
                    Performance Marketing Showcase
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    Real-world projects demonstrating conversion optimization, multi-channel attribution, and automated reporting.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-[#1A1A2E] rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all"
                    >
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                {project.title}
                            </h4>
                            <p className="text-[#6C63FF] font-mono text-sm mt-1">{project.subtitle}</p>
                            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                {/* Live Demo */}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#6C63FF] text-white rounded-xl hover:bg-[#5a52e0] transition-colors text-sm font-medium"
                                >
                                    <FaExternalLinkAlt size={14} /> Live Demo
                                </a>

                                {/* GitHub Repo */}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-900 transition-colors text-sm font-medium"
                                >
                                    <FaGithub size={14} /> GitHub
                                </a>

                                {/* Download Dropdown Button - Modified to expand container */}
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => toggleDownload(project.id)}
                                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                                    >
                                        <FaDownload size={14} /> Download
                                    </button>

                                    {/* Dropdown now renders inline instead of absolute */}
                                    {openProjectId === project.id && (
                                        <div className="mt-2 w-52 bg-white dark:bg-[#1A1A2E] border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden">
                                            {project.downloadOptions.map((option, idx) => {
                                                const Icon = option.icon;
                                                return (
                                                    <a
                                                        key={idx}
                                                        href={option.file}
                                                        download
                                                        className={`flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${idx !== 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
                                                            }`}
                                                    >
                                                        <Icon className={option.color} size={16} />
                                                        {option.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}