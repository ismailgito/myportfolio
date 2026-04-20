// PORTFOLIO/myportfolio/src/components/HeroSection.jsx

"use client";

import { useEffect, useState } from "react";

const typingHeadlines = [
  "I turn data into growth.",
  "The Cookie-less Playbook: Win When Targeting Dies.",
  "Your \"High ROAS\" Is Actually Killing Your Business.",
  "STOP Guessing: Track Only 3 Numbers.",
  "Stop Buying Clicks. Start Buying Revenue.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const headline = typingHeadlines[currentIndex];
    const speed = isDeleting ? 30 : 60;

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
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6C63FF]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Name — Now BIG & Highlighted */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-poppins tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#00D9FF] to-[#FF6584]">
            Hi, I&apos;m Mohamed Ismail
          </span>
        </h1>

        {/* Typing Headline */}
        <div className="min-h-[80px] sm:min-h-[96px] md:min-h-[110px] flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins tracking-tight text-gray-900 dark:text-white leading-snug">
            {displayText}
            <span
              className="inline-block w-[3px] h-[0.85em] bg-[#6C63FF] ml-1 align-middle animate-pulse"
              style={{
                animation: "blink 0.8s step-end infinite",
              }}
            />
          </h2>
        </div>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A Junior Performance Marketer specializing in high-ROI campaigns
          across Google, Meta, and LinkedIn. I optimize for conversions, not
          just clicks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#ai-tools"
            className="w-full sm:w-auto px-8 py-4 bg-[#6C63FF] hover:bg-[#5a52e0] text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-[#6C63FF]/30"
          >
            View My AI Arsenal
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#1A1A2E] border border-gray-200 dark:border-white/10 hover:border-[#6C63FF] text-gray-900 dark:text-white rounded-lg font-semibold transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>

      {/* Blinking cursor keyframe */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}