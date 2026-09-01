"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, splitText, scrambleText, onScroll } from "animejs";
import Link from "next/link";
import { TrendingDown, PieChart, CircleDollarSign, ArrowUpRight } from "lucide-react";
import { HERO, PROCESS_STEPS, METRICS, CTA, PARTNER } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { BentoStat } from "@/components/BentoStat";

const METRIC_ICONS = [TrendingDown, PieChart, CircleDollarSign];

export default function Home() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const { words } = splitText(headlineRef.current, { words: true });
    animate(words, { y: ["110%", 0], opacity: [0, 1], delay: stagger(35), duration: 750, ease: "outExpo" });
    animate(".hero-sub", { y: [20, 0], opacity: [0, 1], duration: 600, delay: 550, ease: "outExpo" });
    animate(".hero-cta", { scale: [0.9, 1], opacity: [0, 1], duration: 500, delay: 950, ease: "outBack" });
    animate(".cta-heading", {
      ...scrambleText({ text: CTA.headline, duration: 1300, revealRate: 0.4 }),
      autoplay: onScroll({ target: ".cta-heading", enter: "bottom-=15% center" }),
    });
    animate(".cta-btn", {
      boxShadow: ["0 0 0 0 rgba(245,166,35,0.45)", "0 0 0 22px rgba(245,166,35,0)"],
      duration: 1800,
      loop: true,
      ease: "outExpo",
    });
  }, []);

  return (
    <main>
      {/* Masthead */}
      <section className="relative overflow-hidden border-b border-line py-28 px-6">
        <GradientField variant="dark" />
        <div className="container relative z-10 mx-auto max-w-4xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-copper">{HERO.eyebrow}</p>
          <h1 ref={headlineRef} className="overflow-hidden text-5xl font-bold leading-[1.02] tracking-tight text-ink md:text-7xl">
            {HERO.headline}
          </h1>
          <p className="hero-sub opacity-0 mt-7 max-w-xl text-lg text-ink-dim">{HERO.subheadline}</p>
          <Link
            href={HERO.primaryCtaHref}
            className="hero-cta opacity-0 mt-9 inline-flex items-center gap-2 border border-copper px-7 py-3.5 font-mono text-xs uppercase tracking-widest text-copper transition-colors hover:bg-copper hover:text-bg"
            data-string="magnetic"
            data-string-id="hero-cta"
            data-string-strength="0.3"
            data-string-radius="80"
          >
            {HERO.primaryCta}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* The Opportunity — bento stat grid */}
      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Filed under: Opportunity</p>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">The balance sheet case for decommissioning</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {METRICS.map((m, i) => (
              <Reveal key={m.id} y={i % 2 === 0 ? 20 : 36}>
                <BentoStat icon={METRIC_ICONS[i]} label={m.label} value={m.value} description={m.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — numbered dossier */}
      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">The Protocol</p>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">A field-tested method, run the same way every time</h2>
            <p className="mt-4 text-ink-dim">
              Proven in over 10 different environments, yielding millions of feet of copper cable with highly profitable results.
            </p>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.id} y={i % 2 === 0 ? 16 : 28}>
                <div
                  className="group grid gap-4 py-7 transition-colors hover:bg-bg-raised md:grid-cols-[100px_1fr_2fr] md:items-baseline md:px-4"
                  data-string="spotlight"
                  data-string-id={`step-${step.id}`}
                >
                  <span className="font-mono text-sm text-copper-dim">N°{String(step.stage).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm text-ink-dim">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner pull-quote */}
      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-copper">Field Partner // {PARTNER.name}</p>
            <p className="text-2xl font-medium leading-snug text-ink md:text-3xl">&ldquo;{PARTNER.headline}&rdquo;</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-ink-dim">
              {PARTNER.bullets.slice(0, 4).map((b) => (
                <span key={b}>· {b}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 text-center">
        <GradientField variant="signal" />
        <div className="container relative z-10 mx-auto max-w-2xl">
          <h2 className="cta-heading text-3xl font-bold text-ink md:text-4xl">{CTA.headline}</h2>
          <p className="mt-5 text-ink-dim">{CTA.body}</p>
          <Link
            href={CTA.buttonHref}
            className="cta-btn mt-9 inline-block bg-copper px-8 py-4 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-105"
            data-string="magnetic"
            data-string-id="cta-btn"
            data-string-strength="0.3"
            data-string-radius="80"
          >
            {CTA.buttonLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
