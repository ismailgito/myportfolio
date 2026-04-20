"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Simple inline components to avoid import issues
const SimpleHeading = ({ title, subtitle, centered }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

const SimpleButton = ({ children, variant, className, onClick }) => {
  const baseStyles = "inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300";
  const variantStyles = variant === "primary" 
    ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105" 
    : "border-2 border-primary text-primary hover:bg-primary hover:text-white";
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const digitalProjects = [
  {
    id: 1,
    title: "E-Commerce ROAS Optimization",
    category: "Google Ads & Shopping",
    client: "Fashion Retail Brand",
    duration: "3 months",
    challenge: "High ad spend with low ROAS (2.1x) and inconsistent conversion rates across product categories.",
    solution: "Implemented smart bidding strategies, restructured shopping feeds, and launched dynamic remarketing campaigns with audience segmentation.",
    results: [
      { metric: "ROAS", value: "4.8x", change: "+129%" },
      { metric: "CTR", value: "12.4%", change: "+67%" },
      { metric: "CPA", value: "$24.50", change: "-42%" },
      { metric: "Revenue", value: "$847K", change: "+156%" }
    ],
    platforms: ["Google Ads", "Shopping", "Analytics"],
    gradient: "from-purple-500/20 to-blue-500/20",
    icon: "📊"
  },
  {
    id: 2,
    title: "B2B Lead Generation Campaign",
    category: "LinkedIn & Meta Ads",
    client: "SaaS Tech Company",
    duration: "4 months",
    challenge: "Low-quality leads and high cost-per-lead ($85+) with poor conversion to SQLs.",
    solution: "Developed account-based targeting, created industry-specific ad creatives, and implemented LinkedIn Matched Audiences with retargeting sequences.",
    results: [
      { metric: "CPL", value: "$42", change: "-51%" },
      { metric: "SQL Rate", value: "28%", change: "+86%" },
      { metric: "Impressions", value: "2.1M", change: "+203%" },
      { metric: "Pipeline Value", value: "$1.2M", change: "+178%" }
    ],
    platforms: ["LinkedIn Ads", "Meta Ads", "HubSpot"],
    gradient: "from-indigo-500/20 to-purple-500/20",
    icon: "🎯"
  },
  {
    id: 3,
    title: "SEO & Content Authority Build",
    category: "SEO & Content Marketing",
    client: "Health & Wellness Blog",
    duration: "6 months",
    challenge: "Organic traffic plateau at 25k monthly visits with declining keyword rankings post-core update.",
    solution: "Conducted technical SEO audit, optimized content clusters, built authority backlinks, and implemented schema markup for featured snippets.",
    results: [
      { metric: "Organic Traffic", value: "89K", change: "+256%" },
      { metric: "Keyword Rankings", value: "1.2K", change: "+182%" },
      { metric: "Domain Rating", value: "52", change: "+38 points" },
      { metric: "Conversion Rate", value: "4.2%", change: "+110%" }
    ],
    platforms: ["Google Search Console", "Ahrefs", "SEMrush"],
    gradient: "from-green-500/20 to-teal-500/20",
    icon: "🚀"
  }
];

export default function DigitalProjects() {
  const [activeProject, setActiveProject] = useState(digitalProjects[0].id);

  const currentProject = digitalProjects.find(p => p.id === activeProject);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <SimpleHeading
          title="Digital Marketing Case Studies"
          subtitle="Data-driven campaigns that delivered measurable results across Google, Meta, LinkedIn, and SEO"
          centered
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {digitalProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onClick={() => setActiveProject(project.id)}
              className={`
                cursor-pointer rounded-2xl p-6 transition-all duration-300
                ${activeProject === project.id 
                  ? "ring-2 ring-[#6C63FF] shadow-xl scale-[1.02] bg-white dark:bg-gray-800" 
                  : "bg-white/80 dark:bg-gray-800/80 hover:scale-[1.01] hover:shadow-lg border border-gray-200 dark:border-gray-700"
                }
              `}
            >
              {/* Icon & Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#6C63FF]/10 text-[#6C63FF]">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>

              {/* Client & Duration */}
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span>{project.client}</span>
                <span>{project.duration}</span>
              </div>

              {/* Results Preview */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.results.slice(0, 2).map((result, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-xl font-bold text-[#6C63FF]">{result.value}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{result.metric}</p>
                    <p className="text-xs font-semibold text-green-600">{result.change}</p>
                  </div>
                ))}
              </div>

              {/* Active Indicator */}
              {activeProject === project.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="mt-4 h-1 bg-[#6C63FF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed View - Animated */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Gradient Header */}
            <div className={`bg-gradient-to-r ${currentProject.gradient} p-6 md:p-8`}>
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{currentProject.icon}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {currentProject.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {currentProject.client} • {currentProject.duration}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentProject.platforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge & Solution */}
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>⚠️</span> The Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <span>💡</span> The Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Results Dashboard */}
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    📈 Key Results
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {currentProject.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-center p-3 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                      >
                        <p className="text-2xl font-bold text-[#6C63FF]">
                          {result.value}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {result.metric}
                        </p>
                        <p className="text-xs font-semibold text-green-600 dark:text-green-400 mt-1">
                          {result.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* ROI Highlight */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Campaign ROI
                    </p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      +187%
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 text-center">
                <SimpleButton variant="primary">
                  View Full Case Study
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </SimpleButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}