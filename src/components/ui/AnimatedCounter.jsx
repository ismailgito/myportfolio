// src/components/ui/AnimatedCounter.jsx
"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, "")) || 0;
  const isFloat = value.toString().includes(".");

  useEffect(() => {
    let startTimestamp = null;
    let observer = null;
    let element = countRef.current;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * numericValue;
      
      setCount(isFloat ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        window.requestAnimationFrame(animate);
        if (observer && element) {
          observer.unobserve(element);
        }
      }
    };

    if (element) {
      observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
      observer.observe(element);
    }

    return () => {
      if (observer && element) {
        observer.unobserve(element);
      }
    };
  }, [numericValue, duration, isFloat]);

  // Handle display formatting (e.g. if the original value has prefixes like $ or % we just add suffix)
  return (
    <span ref={countRef} className="font-headline font-bold">
      {count}
      {suffix}
    </span>
  );
}
