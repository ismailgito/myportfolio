// src/components/ui/SectionHeading.jsx
"use client";

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}) {
  const isLeft = align === "left";

  return (
    <div className={`mb-12 ${isLeft ? "text-left" : "text-center"}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-[10px] font-headline font-bold tracking-[0.15em] uppercase text-accent border border-accent/25 bg-accent/5 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold uppercase tracking-tight text-apptext leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base font-body text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`electric-underline mt-5 ${isLeft ? "mr-auto" : "mx-auto"}`} />
    </div>
  );
}
