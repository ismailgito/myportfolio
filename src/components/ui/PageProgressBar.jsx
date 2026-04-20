// PORTFOLIO/myportfolio/src/components/ui/PageProgressBar.jsx

"use client";

import { useEffect, useState } from "react";

export default function PageProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${progress}%`,
        zIndex: 9999,
        background: "linear-gradient(90deg, #6C63FF, #00D9FF, #FF6584)",
        transition: "width 0.2s ease",
      }}
    />
  );
}