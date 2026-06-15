// src/components/Hero.jsx
"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import AnimatedCounter from "./ui/AnimatedCounter";

const typingHeadlines = [
  "I turn ad spend into pipeline revenue.",
  "Winning when tracking dies: The Cookieless Playbook.",
  "Your high ROAS is actually killing campaign scale.",
  "Data-driven scaling: Stop buying clicks, buy revenue.",
  "Relentless testing. Verifiable acquisition growth.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const headline = typingHeadlines[currentIndex];
    const speed = isDeleting ? 20 : 40;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(headline.substring(0, displayText.length + 1));
        if (displayText.length === headline.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(headline.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingHeadlines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative bg-bg electric-grid"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/30 bg-accent/5">
              <span className="w-2 h-2 bg-accent" />
              <span className="text-[10px] font-headline font-bold tracking-wider uppercase text-accent">
                Performance Marketing Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold uppercase tracking-tight leading-none text-apptext">
                Hi, I&apos;m{" "}
                <span className="text-accent inline-block mt-2">
                  Mohamed Ismail
                </span>
              </h1>
            </div>

            {/* Typewriter */}
            <div className="min-h-[80px] flex items-center border-l-4 border-accent pl-4 bg-surface py-2">
              <h2 className="text-base sm:text-lg md:text-xl font-headline font-bold tracking-tight text-apptext">
                {displayText}
                <span className="inline-block w-[3px] h-[1.1em] bg-accent ml-1 animate-blink align-middle" />
              </h2>
            </div>

            <p className="text-sm sm:text-base text-muted max-w-xl leading-relaxed font-body">
              A data-driven acquisition marketer optimizing paid campaigns across Google, Meta, and LinkedIn.
              I focus on the metrics that actually impact the bottom line: pipeline volume, conversion value, and ROAS scaling.
            </p>

            {/* Quick Stats — Yellow numbers on black pills */}
            <div className="grid grid-cols-3 gap-4 border border-[#333333] bg-surface p-5 max-w-lg">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-headline font-bold text-accent">
                  <AnimatedCounter value={35} suffix="%" />
                </p>
                <p className="text-[9px] font-headline font-bold uppercase text-muted mt-1.5 tracking-wider">
                  ROAS Increase
                </p>
              </div>
              <div className="text-center border-x border-[#333333]">
                <p className="text-3xl md:text-4xl font-headline font-bold text-accent">
                  <AnimatedCounter value={26} suffix="%" />
                </p>
                <p className="text-[9px] font-headline font-bold uppercase text-muted mt-1.5 tracking-wider">
                  CPA Reduction
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-headline font-bold text-accent">
                  <AnimatedCounter value={32} suffix="%" />
                </p>
                <p className="text-[9px] font-headline font-bold uppercase text-muted mt-1.5 tracking-wider">
                  CRO Boost
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                href="#resume"
                variant="yellow"
                className="w-full sm:w-auto px-6 py-3.5"
              >
                Download Resume →
              </Button>
              <Button
                href="#contact"
                variant="outline"
                className="w-full sm:w-auto px-6 py-3.5"
              >
                Request Audit
              </Button>
            </div>
          </div>

          {/* Right side — Funnel Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md bg-surface border border-[#333333] p-6">
              <div className="absolute top-4 right-4 text-[9px] font-headline font-bold text-accent uppercase tracking-widest bg-accent/10 border border-accent/20 px-2 py-0.5">
                Funnel_Metrics // Live
              </div>

              <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto mt-6">
                {/* AWARENESS LEVEL */}
                <path d="M40 60 L360 60 L320 140 L80 140 Z" fill="#1A1A1A" stroke="#E8FF00" strokeOpacity="0.3" strokeWidth="1.5" />
                <text x="200" y="100" textAnchor="middle" fill="#E8FF00" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="2">AWARENESS</text>
                <text x="200" y="118" textAnchor="middle" fill="#444444" fontSize="9" fontFamily="DM Sans, sans-serif">Impressions &amp; Traffic</text>

                <line x1="200" y1="140" x2="200" y2="168" stroke="#E8FF00" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* CONSIDERATION LEVEL */}
                <path d="M90 170 L310 170 L280 260 L120 260 Z" fill="#1A1A1A" stroke="#444444" strokeWidth="1.5" />
                <text x="200" y="210" textAnchor="middle" fill="#F2F2F0" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="2">CONSIDERATION</text>
                <text x="200" y="228" textAnchor="middle" fill="#444444" fontSize="9" fontFamily="DM Sans, sans-serif">Clicks &amp; CTR Optimization</text>

                <line x1="200" y1="260" x2="200" y2="288" stroke="#E8FF00" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* CONVERSION LEVEL */}
                <path d="M130 290 L270 290 L240 380 L160 380 Z" fill="#1A1A1A" stroke="#FF4D2E" strokeOpacity="0.4" strokeWidth="1.5" />
                <text x="200" y="330" textAnchor="middle" fill="#FF4D2E" fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="700" letterSpacing="2">CONVERSION</text>
                <text x="200" y="348" textAnchor="middle" fill="#444444" fontSize="9" fontFamily="DM Sans, sans-serif">Leads, CAPI &amp; Purchases</text>

                {/* Callout Cards */}
                <rect x="325" y="78" width="60" height="24" rx="0" fill="#1A1A1A" stroke="#E8FF00" strokeOpacity="0.2" strokeWidth="1" />
                <text x="355" y="94" textAnchor="middle" fill="#E8FF00" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">$12K Spend</text>

                <rect x="325" y="193" width="60" height="24" rx="0" fill="#1A1A1A" stroke="#444444" strokeWidth="1" />
                <text x="355" y="209" textAnchor="middle" fill="#F2F2F0" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">3.8x ROAS</text>

                <rect x="325" y="313" width="60" height="24" rx="0" fill="#1A1A1A" stroke="#FF4D2E" strokeOpacity="0.3" strokeWidth="1" />
                <text x="355" y="329" textAnchor="middle" fill="#FF4D2E" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="700">-26% CPA</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
