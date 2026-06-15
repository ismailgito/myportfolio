// src/components/Resume.jsx
"use client";

import Card from "./ui/Card";
import Button from "./ui/Button";

export default function Resume() {
  return (
    <section
      id="resume"
      className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full scroll-mt-24 text-center"
    >
      <Card
        variant="red"
        className="p-8 md:p-12 border border-cta/30"
      >
        <h3 className="text-2xl md:text-3xl font-headline font-bold uppercase text-apptext mb-4 leading-none">
          Ready to see the full picture?
        </h3>
        <p className="text-sm sm:text-base font-body text-muted mb-8 max-w-xl mx-auto leading-relaxed">
          Download my complete professional resume detailing performance campaigns, acquisition stacks,
          and conversion histories.
        </p>

        <Button
          href="/Mohamed_Ismail_Resume.pdf"
          download="Mohamed_Ismail_Resume.pdf"
          variant="yellow"
          className="px-8 py-4 text-xs uppercase font-bold tracking-widest"
        >
          Download Full Resume →
        </Button>
      </Card>
    </section>
  );
}
