"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import { CONTACT } from "@/lib/content";

const COLUMNS = [
  {
    title: "Desk",
    links: [
      { label: "Field Ops", href: "/how-we-do-it" },
      { label: "Partners", href: "/about/partners" },
      { label: "Clients", href: "/about/clients" },
      { label: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Index",
    links: [
      { label: "Systems", href: "/systems" },
      { label: "Market Thesis", href: "/value" },
      { label: "The Numbers", href: "/numbers" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Dispatches", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  useEffect(() => {
    animate(".footer-col", { opacity: [0, 1], y: [16, 0], delay: stagger(60), duration: 400 });
  }, []);

  return (
    <footer className="mt-auto border-t border-line bg-bg text-ink-dim">
      <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="footer-col opacity-0">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-copper mb-4">Extracta / Index</p>
          <p className="text-sm max-w-xs">{CONTACT.address}</p>
          <p className="text-sm mt-2">{CONTACT.phone}</p>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center min-h-11 text-sm text-copper hover:text-ink">
            {CONTACT.email}
          </a>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="footer-col opacity-0">
            <p className="font-mono text-xs uppercase tracking-widest text-ink mb-3">{col.title}</p>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center min-h-11 text-sm hover:text-copper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="container mx-auto px-6 py-6 font-mono text-[11px] uppercase tracking-widest text-ink-dim/60">
          © {new Date().getFullYear()} Extracta Group — Index Edition
        </div>
      </div>
    </footer>
  );
}
