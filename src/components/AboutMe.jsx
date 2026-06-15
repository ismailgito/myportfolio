// src/components/AboutMe.jsx
"use client";

import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";

export default function AboutMe() {
  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <Card variant="yellow" className="p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              badge="About Me"
              title="Data + Creative Storytelling."
              align="left"
            />
            <p className="text-muted font-body leading-relaxed text-sm sm:text-base">
              I bridge the gap between creative storytelling and analytical rigor. My growth playbook is simple:
              test rapidly, measure accurately, optimize relentlessly, and scale profitability.
            </p>
            <p className="text-muted font-body leading-relaxed text-sm sm:text-base">
              Whether it&apos;s implementing CAPI tracking to survive the cookieless shift, reducing CPA through
              rigorous creative A/B testing on Meta, or capturing high-intent search queries on Google,
              I design marketing systems focused on metrics that positively impact the bottom line.
            </p>
          </div>

          {/* Profile Image */}
          <div className="relative w-full h-85 bg-surface border border-[#333333] flex items-center justify-center overflow-hidden group">
            <Image
              src="/assets/profile.webp"
              alt="Mohamed Ismail"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-3 left-3 bg-bg border border-accent/20 text-accent text-[9px] font-headline font-bold px-2.5 py-1">
              verified_acquisition_specialist //
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
