"use client";

import { useEffect } from "react";
import { StringTune, StringProgress, StringParallax, StringMagnetic, StringSpotlight } from "@fiddle-digital/string-tune";

export function StringTuneInit() {
  useEffect(() => {
    const st = StringTune.getInstance();
    st.use(StringProgress);
    st.use(StringParallax);
    st.use(StringMagnetic);
    st.use(StringSpotlight);
    // Lenis already owns scroll physics — StringTune must read native scroll,
    // not run its own interpolated engine, or the two fight (confirmed
    // collision in the sibling extracta-group build).
    st.scrollDesktopMode = "default";
    st.start(60);
  }, []);

  return null;
}
