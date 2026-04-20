
// src/components/Certificates.js

"use client";

import { useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "2024",
    credentialUrl: "#",
    color: "from-blue-500/10 to-green-500/10",
    borderColor: "hover:border-blue-500/50",
  },
  {
    id: 2,
    title: "Google Ads Display Certification",
    issuer: "Google",
    date: "2024",
    credentialUrl: "#",
    color: "from-yellow-500/10 to-red-500/10",
    borderColor: "hover:border-yellow-500/50",
  },
  {
    id: 3,
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "2024",
    credentialUrl: "#",
    color: "from-orange-500/10 to-yellow-500/10",
    borderColor: "hover:border-orange-500/50",
  },
  {
    id: 4,
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta",
    date: "2024",
    credentialUrl: "#",
    color: "from-blue-600/10 to-blue-400/10",
    borderColor: "hover:border-blue-600/50",
  },
  {
    id: 5,
    title: "HubSpot Inbound Marketing Certification",
    issuer: "HubSpot",
    date: "2024",
    credentialUrl: "#",
    color: "from-orange-500/10 to-red-400/10",
    borderColor: "hover:border-orange-500/50",
  },
  {
    id: 6,
    title: "SEMrush SEO Toolkit Course",
    issuer: "SEMrush Academy",
    date: "2023",
    credentialUrl: "#",
    color: "from-orange-600/10 to-orange-300/10",
    borderColor: "hover:border-orange-600/50",
  },
];

export default function Certificates() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="certificates"
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-mono tracking-widest uppercase text-[#6C63FF] mb-2">
          Credentials
        </h2>
        <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
          Certifications &amp; Courses
        </h3>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Continuously learning and validating my skills through
          industry-recognized certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative bg-white dark:bg-[#1A1A2E] border border-gray-100 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${cert.borderColor}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-5">
                <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-[#6C63FF]">
                    {cert.issuer.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400 dark:text-gray-500 mt-1">
                  {cert.date}
                </span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
                Issued by{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {cert.issuer}
                </span>
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#6C63FF] hover:text-[#5a52e0] transition-colors"
              >
                View Credential
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    hoveredId === cert.id ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}