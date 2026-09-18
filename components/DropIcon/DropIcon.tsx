"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A mark that drops in when its section is scrolled to, wearing whatever
 * animation the caller's class gives it.
 *
 * Extracted from the homepage's approach band when the education statement
 * wanted the same behaviour. It owns the trigger and nothing else: the mark,
 * the size, the stroke and the keyframes all belong to the caller's own
 * stylesheet, keyed off the `data-state` this sets.
 *
 * The icon arrives as `children` rather than as a component prop, which is
 * what lets a *server* component pass one in. A function reference cannot
 * cross that boundary — <Pillars> carries "use client" for exactly this reason
 * — but an already-rendered element can.
 *
 * Observed rather than driven by a scroll timeline, which is the exception on
 * this site. `animation-timeline: view()` scrubs: it maps progress onto scroll
 * position, so a fall with two decaying rebounds would run in step with the
 * wheel and reverse on the way back up. These drops have to play once at their
 * own speed to read as weight, and there is no CSS way to say "play, on entry"
 * that ships in browsers today.
 *
 * Three states, so nothing depends on JavaScript arriving. The server renders
 * `idle` and the mark is simply visible. `armed` is set on mount — the first
 * moment we know scripting is running — and only then is it hidden to be
 * dropped in. Without that the mark would render, hide itself, and flash.
 */
export default function DropIcon({
  className,
  children,
  /** Most of the mark, not a sliver: at a low threshold it fires while still
   *  under the fold on a short window and the drop is over unseen. */
  threshold = 0.6,
}: {
  className?: string;
  children: React.ReactNode;
  threshold?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "dropped">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Anyone who has asked for less motion gets the mark drawn and still,
       matching the site's other gates, which all sit behind
       prefers-reduced-motion rather than removing the element. */
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still || typeof IntersectionObserver === "undefined") return;

    setState("armed");

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setState("dropped");
        io.disconnect();
      },
      { threshold },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <span ref={ref} className={className} data-state={state} aria-hidden="true">
      {children}
    </span>
  );
}
