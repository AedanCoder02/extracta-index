"use client";

import { useId } from "react";

// useId() keeps this filter id unique even with multiple Grain instances on
// one page — a duplicate SVG id (from copy-pasting a static "grain" id
// across instances) silently breaks the filter reference in some browsers.
export function Grain({ opacity = 0.05 }: { opacity?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay" style={{ opacity }} aria-hidden="true">
      <filter id={`grain-${id}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${id})`} />
    </svg>
  );
}
