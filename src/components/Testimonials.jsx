// src/components/Testimonials.jsx
"use client";

import SectionHeading from "./ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    quote: "Mohamed's analytical approach to campaign optimization transformed our Google Ads performance. He identified budget leakage points we had missed for months and restructured our account for efficiency.",
    name: "Aarav Mehta",
    role: "Head of Growth, TechFusion Inc.",
  },
  {
    id: 2,
    quote: "The attribution model Mohamed built gave us clarity on which channels actually drive revenue. We shifted 40% of our budget based on his recommendations and saw immediate improvement in ROAS.",
    name: "Priya Sharma",
    role: "Marketing Director, Elevate Commerce",
  },
  {
    id: 3,
    quote: "Working with Mohamed on our Meta Ads was eye-opening. His creative testing framework and CAPI implementation stabilized our tracking and reduced our CPA by 26% in two months.",
    name: "Rahul Verma",
    role: "Founder, GrowthLab Studio",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full scroll-mt-24">
      <SectionHeading
        badge="Social Proof"
        title="What Clients Say"
        subtitle="Feedback from collaborators and clients on campaign performance and analytical rigor."
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#111111] border border-[#333333] p-8 flex flex-col hover:border-accent/30 transition-colors duration-200"
          >
            {/* Quote icon */}
            <div className="text-4xl font-headline font-bold text-accent leading-none mb-4">
              "
            </div>

            {/* Quote text in Syne */}
            <blockquote className="text-sm font-headline font-bold text-apptext leading-relaxed mb-8 flex-grow">
              {testimonial.quote}
            </blockquote>

            {/* Client info in DM Sans */}
            <div className="border-t border-[#333333] pt-4">
              <p className="text-xs font-headline font-bold text-accent uppercase tracking-wider">
                {testimonial.name}
              </p>
              <p className="text-[10px] font-body text-muted mt-1">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
