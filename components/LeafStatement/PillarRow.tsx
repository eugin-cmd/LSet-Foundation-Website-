"use client";

import { useEffect, useRef, useState } from "react";
import Leaf from "@/components/icons/Leaf";
import OpenBook from "@/components/icons/OpenBook";
import NodeNetwork from "@/components/icons/NodeNetwork";
import s from "./PillarRow.module.css";

/* The three marks the pillars board gives them, so a pillar wears the same
   drawing wherever it is named — the board's own Leaf, OpenBook and
   NodeNetwork, at the board's own 20px and 1.6 stroke.

   Conservation, Education, Technology, by direction. That is the board's
   reading order (01, 02, 03) rather than the order the sentence above once
   listed them in, so the row and the accordion below it agree. */
const PILLARS = [
  { label: "Conservation", Icon: Leaf },
  { label: "Education", Icon: OpenBook },
  { label: "Technology", Icon: NodeNetwork },
];

/**
 * The three pillars as one line under the sentence that names them, each with
 * its mark, and the marks drop in when the line is scrolled to.
 *
 * Client, and observed rather than driven by a scroll timeline, which is the
 * exception on this site. `animation-timeline: view()` — what the leaf below
 * and the banners' parallax use — *scrubs*: it maps the animation's progress
 * onto scroll position, so the drop would fall and rebound in step with the
 * wheel and run backwards on the way up. This drop has two decaying bounces
 * and only reads as weight if it plays at its own speed once. There is no CSS
 * way to say "play, on entry" that ships in browsers today, so it is an
 * observer.
 *
 * Three states rather than two, so nothing depends on JavaScript arriving:
 * the server renders `idle` and the marks are simply visible. `armed` is set
 * on mount — the first moment we know scripting is running — and only then are
 * they hidden to be dropped in. Without it the row would render, hide itself,
 * and flash.
 */
export default function PillarRow() {
  const ref = useRef<HTMLUListElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "dropped">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* Anyone who has asked for less motion gets the row as it is, drawn and
       still. Matching the site's other gates, which all sit behind
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
      /* Most of the line, not a sliver of it: at a low threshold the row fires
         while still under the fold on a short window and the drop is over
         before it is worth watching. */
      { threshold: 0.6 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className={s.row} data-state={state}>
      {PILLARS.map(({ label, Icon }) => (
        <li key={label}>
          {/* Decorative: the word beside it is the pillar's name, so the mark
              is hidden rather than read out before it. */}
          <span className={s.icon} aria-hidden="true">
            <Icon />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
