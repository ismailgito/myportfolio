// src/components/Certificates.js
"use client";

import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Button from "./ui/Button";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2025",
    credentialUrl: "https://www.udemy.com/certificate/UC-1f0cf417-cf80-4840-b9a0-6022c71b5f1f/",
    variant: "yellow"
  },
  {
    id: 2,
    title: "Performance Marketing",
    issuer: "Tute Dude",
    date: "2026",
    credentialUrl: "https://upskill.tutedude.com/certificate/TD-J.MD-PM-0811",
    variant: "red"
  },
  {
    id: 3,
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "2026",
    credentialUrl: "https://skillshop.credential.net/c4170a7e-feba-4487-aa93-792f52118202",
    variant: "yellow"
  },
  {
    id: 4,
    title: "HubSpot Digital Marketing Certification",
    issuer: "HubSpot",
    date: "2026",
    credentialUrl: "https://app-na2.hubspot.com/academy/achievements/4g77fxf7/en/1/mohamed-ismail-j/digital-marketing-certified",
    variant: "red"
  },
  {
    id: 5,
    title: "AI-Powered Marketing Certification",
    issuer: "SEMRush Academy",
    date: "2026",
    credentialUrl: "https://static.semrush.com/academy/certificates/635c14d1af/mohamed-ismail-j_26.pdf",
    variant: "yellow"
  },
  {
    id: 6,
    title: "Conversion Optimization Certification",
    issuer: "Google",
    date: "2026",
    credentialUrl: "https://skillshop.credential.net/3f7ce6b6-3e5d-4a4b-83d6-d0443254b8c9#acc.n2qSTAul",
    variant: "red"
  }
];

export default function Certificates() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="certificates"
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24"
    >
      <SectionHeading
        badge="Accreditation"
        title="Certifications & Credentials"
        subtitle="Verified professional completions and platform credentials representing structured studies and platform mastery."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            variant={cert.variant}
            className="flex flex-col justify-between h-full p-8"
            onMouseEnter={() => setHoveredId(cert.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center font-headline font-bold text-accent text-lg">
                  {cert.issuer.charAt(0)}
                </div>
                <span className="text-[10px] font-headline font-bold text-muted uppercase tracking-wider">
                  Issued: {cert.date}
                </span>
              </div>

              <h4 className="text-base font-headline font-bold text-apptext mb-2 leading-snug uppercase tracking-tight">
                {cert.title}
              </h4>
              <p className="text-xs font-headline font-bold text-muted uppercase tracking-wider">
                Issuer: <span className="text-accent">{cert.issuer}</span>
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#333333]">
              <Button
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant={cert.variant === "yellow" ? "yellow" : "red"}
                className="w-full text-xs py-2.5"
              >
                Verify Credential ↗
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
