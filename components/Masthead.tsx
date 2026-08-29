"use client";

import { useEffect, useRef } from "react";
import { animate, splitText } from "animejs";
import { GradientField } from "./GradientField";

export function Masthead({
  kicker,
  title,
  dek,
  variant = "dark",
}: {
  kicker: string;
  title: string;
  dek?: string;
  variant?: "dark" | "signal";
}) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const { words } = splitText(titleRef.current, { words: true });
    animate(words, { y: ["110%", 0], opacity: [0, 1], delay: (_, i) => (i ?? 0) * 45, duration: 650, ease: "outExpo" });
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-line py-24 px-6">
      <GradientField variant={variant} />
      <div className="container relative z-10 mx-auto max-w-4xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-copper">{kicker}</p>
        <h1 ref={titleRef} className="overflow-hidden text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
          {title}
        </h1>
        {dek && <p className="mt-6 max-w-2xl text-lg text-ink-dim">{dek}</p>}
      </div>
    </section>
  );
}
