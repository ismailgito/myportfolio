// src/components/ui/Button.jsx
"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  onClick,
  variant = "yellow", // "yellow" | "red" | "outline" | "ghost"
  className = "",
  type = "button",
  disabled = false,
  target,
  rel,
  download
}) {
  const baseClass = "inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-widest transition-all duration-150 cursor-pointer select-none text-center font-headline font-bold";

  let variantClass = "";
  if (variant === "yellow") {
    variantClass = "electric-btn-accent";
  } else if (variant === "red") {
    variantClass = "electric-btn-cta";
  } else if (variant === "ghost") {
    variantClass = "bg-transparent text-apptext border border-transparent hover:text-accent hover:border-accent/30";
  } else {
    variantClass = "electric-btn-outline";
  }

  const combinedClass = `${baseClass} ${variantClass} ${className} ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`;

  if (href) {
    if (href.startsWith("#") || download) {
      return (
        <a
          href={href}
          onClick={onClick}
          className={combinedClass}
          target={target}
          rel={rel}
          download={download}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {children}
    </button>
  );
}
