"use client";

import { useEffect, useRef } from "react";
import { STATS } from "./stats.data";
import s from "./StatsBand.module.css";

/**
 * Figma node 2127:9943 ("Frame 1984078221") from `Desktop - 4`, 1440x279.
 *
 * Its own dark teal band, so it deliberately sits OUTSIDE the <MeshField>: an
 * opaque section inside the field would paint the mesh out, and this band is
 * what separates the page's light run into the two runs the field wraps.
 *
 * The figures count up when the band scrolls into view. Two rules govern how
 * that is built:
 *
 *   1. The final figure is what renders on the server. Script then counts to
 *      it — never the other way round — so with no JavaScript, a failed
 *      hydration, or reduced motion, the real numbers are what is on screen.
 *      The shared snapshot strips every script and gets exactly that; a
 *      vanilla copy of this counter is re-added by scripts/build_preview.py,
 *      so keep the two in step.
 *   2. Nothing here transforms the digits. They carry the holographic fill,
 *      which is `background-clip: text`, and a transformed descendant is
 *      composited on its own layer and loses the ancestor's text clip — the
 *      hero headings were blanked that way once. Counting rewrites
 *      textContent, which is safe.
 */
const DURATION = 1100;
const STAGGER = 90;

export default function StatsBand() {
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const cells = Array.from(
      root.querySelectorAll<HTMLElement>("[data-count]"),
    );
    if (!cells.length) return;

    /* Reduced motion keeps the server-rendered figures exactly as they are. */
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finalText = new Map(cells.map((c) => [c, c.textContent ?? ""]));

    const run = (el: HTMLElement, delay: number) => {
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix ?? "";
      const start = performance.now() + delay;
      const tick = (now: number) => {
        if (now < start) return requestAnimationFrame(tick);
        const t = Math.min(1, (now - start) / DURATION);
        /* ease-out cubic: fast off the mark, settling onto the figure rather
           than arriving at full speed. */
        const eased = 1 - (1 - t) ** 3;
        el.textContent = `${Math.round(target * eased)}${suffix}`;
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = finalText.get(el) ?? el.textContent;
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            io.unobserve(el);
            run(el, cells.indexOf(el) * STAGGER);
          } else if (entry.boundingClientRect.bottom < 0) {
            /* Already scrolled past before this ran — the band is above the
               viewport, so there is no reveal left to animate. Leave the
               figure alone rather than resetting it to zero and stranding it
               there until the user scrolls back up. */
            io.unobserve(el);
          } else {
            /* Below the fold and yet to be reached: start from zero so the
               count is seen, instead of the figure being on screen already
               and then jumping back to zero to climb again. */
            el.textContent = `0${el.dataset.suffix ?? ""}`;
          }
        }
      },
      { threshold: 0.6 },
    );

    cells.forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section className={s.band} aria-label="Foundation at a glance">
      <dl ref={ref} className={s.grid}>
        {STATS.map(({ value, suffix, label }) => (
          <div key={label} className={s.stat}>
            <dt
              className={`${s.value} wf-iridescent`}
              data-count={value}
              data-suffix={suffix ?? ""}
            >
              {value}
              {suffix ?? ""}
            </dt>
            <dd className={`${s.label} wf-iridescent`}>{label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
