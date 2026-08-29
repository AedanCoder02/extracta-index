"use client";

import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import Link from "next/link";
import Image from "next/image";

interface NavLink {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Field Ops", href: "/how-we-do-it" },
  {
    label: "Desk",
    children: [
      { label: "Partners", href: "/about/partners" },
      { label: "Clients", href: "/about/clients" },
      { label: "Team", href: "/about/team" },
    ],
  },
  {
    label: "Index",
    children: [
      { label: "Systems", href: "/systems" },
      { label: "Market Thesis", href: "/value" },
      { label: "The Numbers", href: "/numbers" },
    ],
  },
  { label: "Dispatches", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (!navRef.current) return;
    animate(navRef.current, { translateY: [-40, 0], opacity: [0, 1], duration: 600, ease: "outExpo" });
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-dropdown]")) setOpenDropdown(null);
    };
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("click", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openDropdown]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    animate(".mobile-nav-item", { opacity: [0, 1], y: [12, 0], delay: stagger(40), duration: 300, ease: "outExpo" });
  }, [menuOpen]);

  return (
    <nav ref={navRef} className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Extracta Group" width={2284} height={1782} className="h-9 w-auto brightness-0 invert" priority />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copper">/ Index</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {LINKS.map((link) => (
            <li key={link.label} className="relative">
              {link.children ? (
                <div data-dropdown>
                  <button
                    type="button"
                    aria-expanded={openDropdown === link.label}
                    className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-ink-dim hover:text-copper transition-colors"
                    onClick={() => setOpenDropdown((v) => (v === link.label ? null : link.label))}
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <ul className="absolute top-full left-0 mt-3 w-48 border border-line bg-bg-raised py-2 shadow-2xl">
                      {link.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink-dim hover:bg-bg hover:text-copper"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href!}
                  className="font-mono text-xs uppercase tracking-widest text-ink-dim hover:text-copper transition-colors"
                  data-string="magnetic"
                  data-string-id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  data-string-strength="0.2"
                  data-string-radius="40"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lg:hidden flex h-11 w-11 items-center justify-center -mr-2 text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <>
                <path d="M2 6H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2 16H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-line bg-bg">
          <ul className="container mx-auto px-6 py-2">
            {LINKS.map((link) => (
              <li key={link.label} className="mobile-nav-item opacity-0 border-b border-line last:border-0">
                {link.children ? (
                  <div>
                    <p className="pt-4 pb-1 font-mono text-[10px] uppercase tracking-widest text-copper-dim">{link.label}</p>
                    {link.children.map((c) => (
                      <Link key={c.href} href={c.href} className="flex items-center min-h-12 pl-2 text-ink" onClick={() => setMenuOpen(false)}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={link.href!} className="flex items-center min-h-14 text-base text-ink" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
