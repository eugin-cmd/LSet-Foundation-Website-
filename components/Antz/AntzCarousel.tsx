"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Lightbox from "@/components/Lightbox/Lightbox";
import s from "./Antz.module.css";

/**
 * Antz Platform module carousel — the active slide centred with its neighbours
 * stacked *behind* it, pushed back in 3D and offset so only a sliver of each
 * peeks out. Ported from the Antz Systems website's own <ModuleCarousel>, which
 * is where these slides come from.
 *
 * Two deliberate departures from that original:
 *
 *  - **CSS transitions, not framer-motion.** This project has no motion library
 *    and every other animation on the site is CSS, so adding one for a single
 *    component would be the odd choice. The original's spring (stiffness 200,
 *    damping 30) is approximated by a firm ease-out; it settles rather than
 *    overshooting, which is also kinder to the 12px blur on the neighbours.
 *  - **No wheel handler.** The original's own note says macOS eats the gesture
 *    unless "Swipe between pages" is off, and pointer drag covers the same
 *    intent on every device. Drag, arrows, dots and the keyboard are all here.
 *
 * The slide geometry is carried by `data-state` and `--dir` rather than inline
 * transforms, so the whole presentation stays in the stylesheet — and so the
 * snapshot's script-free copy only has to move attributes. See the vanilla
 * mirror in scripts/build_preview.py and keep the two in step.
 */

export type Slide = { id: string; label: string; image: string };

/** The viewer is a phone affordance: with a real pointer a slide behaves as it
 *  always has. The same test usePointerMesh makes, from the other side. */
const isTouch = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: none), (pointer: coarse)").matches;

const BASE = "/assets/antz-carousel";
const SLIDES: Slide[] = [
  { id: "dashboard", label: "Platform dashboard", image: `${BASE}/antz_dashboard.webp` },
  { id: "collection", label: "Collection module", image: `${BASE}/antz_collection_module.webp` },
  { id: "housing", label: "Housing module", image: `${BASE}/antz_housing_module.webp` },
  { id: "hospital", label: "Hospital module (HIMS)", image: `${BASE}/antz_hospital_module.webp` },
  { id: "lab", label: "Lab module (LIMS)", image: `${BASE}/antz_lab_module.webp` },
  { id: "pharmacy", label: "Pharmacy module", image: `${BASE}/antz_pharmacy_module.webp` },
  { id: "egg", label: "Egg module", image: `${BASE}/antz_egg_module.webp` },
];

/** Autoplay cadence, and how long a manual interaction holds it off. */
const AUTOPLAY_MS = 4500;
const RESUME_AFTER_MS = 8000;
/** Horizontal travel before a drag counts as a swipe. */
const DRAG_THRESHOLD = 45;

/**
 * The slides are a prop, defaulting to the platform modules — exactly as the
 * original takes them. The EthoStudio page on antzsystems.com calls this same
 * component with its laptop screens rather than a second carousel, and the
 * EthoStudio page here does the same.
 *
 * `noun` names the thing being paged, for the arrows and the dots. The
 * script-free mirror in scripts/build_preview.py binds the arrows by the
 * "previous"/"next" prefix on their labels, so keep those words leading.
 */
export default function AntzCarousel({
  slides = SLIDES,
  label = "Antz Platform modules",
  noun = "module",
}: {
  slides?: Slide[];
  label?: string;
  noun?: string;
} = {}) {
  const count = slides.length;
  /* Which module the viewer is showing, or null for closed. */
  const [viewing, setViewing] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);

  /* Functional updates keep these stable, so the key and drag listeners are
     attached once instead of being torn down on every slide change. */
  const go = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => setActive((a) => (a - 1 + count) % count), [count]);
  const next = useCallback(() => setActive((a) => (a + 1) % count), [count]);

  /* Autoplay pauses while the pointer is over the carousel and for a cooldown
     after any manual navigation. Both live in refs so the interval is never
     rebuilt — rebuilding it would restart the 4.5s clock on every render. */
  const hovered = useRef(false);
  const pauseUntil = useRef(0);
  const note = useCallback(() => {
    pauseUntil.current = Date.now() + RESUME_AFTER_MS;
  }, []);

  const handlePrev = useCallback(() => { note(); prev(); }, [note, prev]);
  const handleNext = useCallback(() => { note(); next(); }, [note, next]);
  const handleDot = useCallback((i: number) => { note(); go(i); }, [note, go]);

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    /* Reduced motion gets no autoplay at all, as in the original: the slides
       cross-fade only when asked for. */
    if (reduced) return;
    const id = setInterval(() => {
      if (hovered.current) return;
      if (Date.now() < pauseUntil.current) return;
      setActive((a) => (a + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced, count]);

  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  /* Pointer drag covers mouse, trackpad click-drag and touch swipe through one
     API. `dragged` also suppresses the click that trails a drag, so releasing
     over a neighbour does not advance twice. */
  const drag = useRef({ x: 0, y: 0, active: false });
  const dragged = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY, active: true };
    dragged.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d.active || dragged.current) return;
    const dx = e.clientX - d.x;
    const dy = e.clientY - d.y;
    /* Vertical-dominant gestures are left to the page: the track sets
       `touch-action: pan-y` so they scroll rather than being swallowed here. */
    if (Math.abs(dx) < DRAG_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    dragged.current = true;
    if (dx < 0) handleNext();
    else handlePrev();
  };
  const endDrag = () => { drag.current.active = false; };

  /* Signed shortest distance from the active slide, so the stack wraps rather
     than unwinding the long way round. */
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > count / 2) d -= count;
    if (d < -count / 2) d += count;
    return d;
  };

  return (
    <div
      ref={regionRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={s.carousel}
      onMouseEnter={() => { hovered.current = true; }}
      onMouseLeave={() => { hovered.current = false; }}
    >
      <div
        className={s.track}
        data-antz-carousel
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <button
          type="button"
          className={`${s.arrow} ${s.arrowPrev}`}
          onClick={handlePrev}
          aria-label={`Previous ${noun}`}
        >
          <Chevron />
        </button>

        {slides.map((slide, i) => {
          const o = offsetOf(i);
          const abs = Math.abs(o);
          const state = o === 0 ? "active" : abs === 1 ? "side" : "hidden";
          return (
            <div
              key={slide.id}
              className={s.slide}
              data-state={state}
              style={{ "--dir": Math.sign(o), zIndex: 10 - abs } as React.CSSProperties}
              /* A peeking neighbour is a shortcut to itself. */
              onClick={() => {
                if (dragged.current) return;
                /* A peeking neighbour is still a shortcut to itself; the one in
                   front is the one worth opening. */
                if (state === "side") handleDot(i);
                else if (isTouch()) setViewing(i);
              }}
            >
              <img
                src={slide.image}
                alt={slide.label}
                draggable={false}
                width={1100}
                height={619}
                /* The active slide is the one worth fetching eagerly; the rest
                   are one interaction away at most. */
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        <button
          type="button"
          className={`${s.arrow} ${s.arrowNext}`}
          onClick={handleNext}
          aria-label={`Next ${noun}`}
        >
          <Chevron />
        </button>
      </div>

      {/* Figma's indicator, extended from its four placeholder steps to one per
          slide and made operable — it was decoration before there was anything
          to page through. */}
      <div className={s.dots}>
        {slides.map((slide, i) => (
          <button
            type="button"
            key={slide.id}
            className={`${s.dot} ${i === active ? s.dotActive : ""}`}
            onClick={() => handleDot(i)}
            aria-label={`Show ${slide.label}`}
            aria-current={i === active}
          />
        ))}
      </div>

      {viewing !== null && (
        <Lightbox
          slides={slides.map((sl) => ({ src: sl.image, alt: sl.label }))}
          startIndex={viewing}
          label={label}
          onClose={() => setViewing(null)}
        />
      )}
    </div>
  );
}

/** 14px Material `arrow_back_ios`, as the original's arrows use. */
function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15.5 4.5 8 12l7.5 7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
