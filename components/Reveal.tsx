"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function Reveal({ children, className, y = 24, delay = 0 }: { children: React.ReactNode; className?: string; y?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate(el, { opacity: [0, 1], y: [y, 0], duration: 650, delay, ease: "outExpo" });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [y, delay]);
  return (
    <div ref={ref} className={`opacity-0 ${className ?? ""}`}>
      {children}
    </div>
  );
}
