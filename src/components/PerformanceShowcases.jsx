"use client";

import { useState, useEffect } from "react";
import { HiTrendingUp, HiEye, HiCash, HiChartBar } from "react-icons/hi";

const metrics = [
  {
    icon: HiEye,
    label: "Impressions Managed",
    value: 2500000,
    suffix: "+",
    format: (v) => (v / 1000000).toFixed(1) + "M",
  },
  {
    icon: HiCash,
    label: "Ad Spend Managed",
    value: 250000,
    prefix: "$",
    suffix: "+",
    format: (v) => "$" + (v / 1000).toFixed(0) + "K+",
  },
  {
    icon: HiTrendingUp,
    label: "Avg. ROAS Improvement",
    value: 320,
    suffix: "%",
    format: (v) => v + "%",
  },
  {
    icon: HiChartBar,
    label: "CPA Reduction",
    value: 45,
    suffix: "%",
    format: (v) => v + "%",
  },
];

function AnimatedNumber({ target, prefix, suffix, format }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {format(current)}
      {suffix}
    </span>
  );
}

export default function PerformanceShowcases() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById("performance-showcases");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="performance-showcases"
      className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24"
    >
      <div className="text-center mb-12">
        <h2 className="text-sm font-mono tracking-widest uppercase text-[#00D9FF] mb-2">
          Track Record
        </h2>
        <h3 className="text-3xl font-bold font-poppins text-gray-900 dark:text-white">
          Performance Highlights
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          Key metrics that showcase the impact delivered across campaigns and
          channels.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div
              key={metric.label}
              className="bg-white dark:bg-[#1A1A2E] rounded-2xl border border-gray-100 dark:border-white/10 p-6 text-center hover:shadow-xl transition-all group"
            >
              <Icon className="mx-auto text-[#6C63FF] text-3xl mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                {inView ? (
                  <AnimatedNumber
                    target={metric.value}
                    prefix={metric.prefix || ""}
                    suffix={metric.suffix || ""}
                    format={metric.format}
                  />
                ) : (
                  <span>
                    {metric.prefix || ""}0{metric.suffix || ""}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {metric.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
