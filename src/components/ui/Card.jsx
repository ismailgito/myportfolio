// src/components/ui/Card.jsx
"use client";

export default function Card({
  children,
  variant = "yellow", // "yellow" | "red" | "muted" | "plain"
  className = "",
  onClick,
}) {
  const baseClass = "p-6 transition-all duration-200";

  let variantClass = "";
  if (variant === "yellow") {
    variantClass = "electric-card hover:border-accent";
  } else if (variant === "red") {
    variantClass = "electric-card-cta";
  } else if (variant === "muted") {
    variantClass = "bg-[#111111] border border-[#333333] hover:border-muted";
  } else {
    variantClass = "bg-surface border border-[#333333] hover:border-muted";
  }

  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  return (
    <div className={combinedClass} onClick={onClick}>
      {children}
    </div>
  );
}
