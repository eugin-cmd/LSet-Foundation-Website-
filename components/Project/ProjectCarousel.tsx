"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectPhoto } from "./project.data";
import s from "./Project.module.css";

/**
 * The project photo carousel — a horizontal rail, as the Antz Systems site's
 * step section runs: the current frame sits at the left of the viewport with
 * the next one peeking in past the right edge, and the pair of round arrows
 * sits at the bottom right rather than under the middle.
 *
 * Not the 3D stack that <AntzCarousel> uses for the platform modules. That one
 * centres a card and pushes its neighbours back; this one slides a row. The
 * two share their *cadence* — 4.5s autoplay, paused on hover, held off for 8s
 * after any manual input — so the site keeps one rhythm.
 *
 * **The loop.** The rail renders the photographs twice. Advancing past the last
 * one slides into the copy rather than snapping back, and once that slide has
 * finished the index is rebased to the real first frame with transitions off,
 * which is invisible because the two positions render identically. Going back
 * from the first frame does the same in reverse. Two frames of bookkeeping buy
 * a seam-free loop over three photographs.
 *
 * Without JavaScript the rail renders at rest — the first two frames and the
 * peek — which is a fair static state, so the snapshot builder needs no mirror
 * for it.
 */

/** Autoplay cadence, and how long a manual interaction holds it off. Both
 *  match <AntzCarousel> so the site has one rhythm rather than two. */
const AUTOPLAY_MS = 4500;
const RESUME_AFTER_MS = 8000;
/** Must match the rail's transition in Project.module.css. */
const SLIDE_MS = 620;
/** Horizontal travel before a drag counts as a swipe. */
const DRAG_THRESHOLD = 45;

export default function ProjectCarousel({
  photos,
  label,
  /* `cards` is the same rail, one card a view rather than a photograph and a
     half. Everything below — the loop, the autoplay, the drag, the arrows —
     is shared; only the width of a slide and what is drawn inside it differ,
     which is why this is a flag and not a second component. */
  variant = "photos",
  /* Names one slide, for the arrows and the live region. */
  noun,
  /* The frame's shape, where the rail's own landscape box is wrong for what
     this record carries. */
  aspect,
  /* Draws the slides at a fixed height rather than fitting them to the frame. */
  fixedHeight = false,
  /* Puts the arrows under the middle of the rail rather than at its end. */
  centredControls = false,
  /* Keeps turning while the pointer is over the rail. */
  autoplayThroughHover = false,
  /* The frame's width and the space between frames, where the rail's own are
     wrong for what this record carries. */
  cardWidth,
  gap,
}: {
  photos: ProjectPhoto[];
  label: string;
  variant?: "photos" | "cards";
  noun?: string;
  aspect?: string;
  fixedHeight?: boolean;
  centredControls?: boolean;
  autoplayThroughHover?: boolean;
  cardWidth?: string;
  gap?: string;
}) {
  const item = noun ?? (variant === "cards" ? "capability" : "photograph");
  const Item = item.charAt(0).toUpperCase() + item.slice(1);
  const count = photos.length;
  /* The rail carries the set twice; only the first band is ever a resting
     position, the second exists so the wrap has somewhere to slide to. */
  const rail = [...photos, ...photos];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pendingPrev = useRef(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? -1 : i - 1)), []);

  /* Rebasing. Out-of-range is transient: it is how a wrap is expressed, and
     this puts the index back inside the first band without a visible jump. */
  useEffect(() => {
    if (index >= count) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, SLIDE_MS + 20);
      return () => clearTimeout(t);
    }
    if (index < 0) {
      /* Going back from the first frame: land on its twin in the second band
         instantly, then step back from there on the next frame. */
      pendingPrev.current = true;
      setAnimate(false);
      setIndex(count);
    }
  }, [index, count]);

  /* Re-arm the transition a frame after any silent rebase — one frame is not
     enough, the browser has to have painted the rebased position first. */
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnimate(true);
        if (pendingPrev.current) {
          pendingPrev.current = false;
          setIndex(count - 1);
        }
      }),
    );
    return () => cancelAnimationFrame(id);
  }, [animate, count]);

  /* Autoplay pauses while the pointer is over the carousel and for a cooldown
     after any manual navigation. Both live in refs so the interval is never
     rebuilt — rebuilding it would restart the 4.5s clock on every render. */
  const hovered = useRef(false);
  const pauseUntil = useRef(0);
  const note = useCallback(() => {
    pauseUntil.current = Date.now() + RESUME_AFTER_MS;
  }, []);

  const handlePrev = useCallback(() => {
    note();
    prev();
  }, [note, prev]);
  const handleNext = useCallback(() => {
    note();
    next();
  }, [note, next]);

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    /* Reduced motion gets no autoplay at all: the rail moves only when asked. */
    if (reduced) return;
    const id = setInterval(() => {
      /* A rail that is meant to be watched keeps going under the pointer;
         everywhere else hovering holds it, so a screenshot can be read. */
      if (hovered.current && !autoplayThroughHover) return;
      if (Date.now() < pauseUntil.current) return;
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [reduced, autoplayThroughHover]);

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
     API. The rail sets `touch-action: pan-y`, so vertical gestures scroll the
     page rather than being swallowed here. */
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
    if (Math.abs(dx) < DRAG_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    dragged.current = true;
    if (dx < 0) handleNext();
    else handlePrev();
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  /* Which real photograph is leading, for the live region. */
  const shown = ((index % count) + count) % count;

  return (
    <div
      ref={regionRef}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      className={s.carousel}
      data-variant={variant}
      data-fixed-height={fixedHeight ? "true" : undefined}
      data-controls={centredControls ? "centre" : undefined}
      style={
        {
          ...(aspect ? { "--frame-aspect": aspect } : null),
          ...(cardWidth ? { "--card": cardWidth } : null),
          ...(gap ? { "--rail-gap": gap } : null),
        } as React.CSSProperties
      }
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
    >
      <div
        className={s.viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <ul
          className={s.rail}
          data-carousel
          style={{
            transform: `translateX(calc(${-index} * (var(--card) + var(--rail-gap))))`,
            transition: animate ? undefined : "none",
          }}
        >
          {rail.map((photo, i) => (
            <li
              className={s.frame}
              data-card={variant === "cards" ? "true" : undefined}
              key={`${photo.src}-${i}`}
              /* The second band is the same photographs again; hiding it keeps
                 a screen reader from reading the set twice. */
              aria-hidden={i >= count ? true : undefined}
            >
              {variant === "cards" ? (
                <article className={s.cardSlide}>
                  <div className={s.cardArt}>
                    {/* The picture is atmosphere — the heading beside it names
                        the card and the paragraph says what it holds — so it
                        is hidden rather than described twice. The mark on top
                        of it is decorative for the same reason. */}
                    <img
                      className={s.cardPhoto}
                      src={photo.src}
                      alt=""
                      aria-hidden="true"
                      draggable={false}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <span className={s.cardTint} aria-hidden="true" />
                    {photo.icon && (
                      <img
                        className={s.cardIcon}
                        src={photo.icon}
                        alt=""
                        aria-hidden="true"
                        draggable={false}
                        width={93}
                        height={93}
                      />
                    )}
                  </div>

                  <div className={s.cardText}>
                    <h3 className={s.cardTitle}>{photo.title}</h3>
                    <p className={s.cardBody}>{photo.body}</p>
                  </div>
                </article>
              ) : (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  data-fit={photo.fit ?? "cover"}
                  draggable={false}
                  width={1238}
                  height={712}
                  loading={i === 0 ? "eager" : "lazy"}
                  style={
                    photo.scale
                      ? ({ "--slide-scale": photo.scale } as React.CSSProperties)
                      : undefined
                  }
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom right, as the reference runs them. */}
      <div className={s.controls}>
        <button
          type="button"
          className={s.arrow}
          onClick={handlePrev}
          aria-label={`Previous ${item}`}
        >
          <Chevron />
        </button>
        <button
          type="button"
          className={`${s.arrow} ${s.arrowNext}`}
          onClick={handleNext}
          aria-label={`Next ${item}`}
        >
          <Chevron />
        </button>
      </div>

      {/* The arrows move a rail rather than swapping a panel, so nothing about
          the change is announced on its own. */}
      <p className={s.srOnly} aria-live="polite">
        {variant === "cards"
          ? `${photos[shown].title}, ${shown + 1} of ${count}`
          : `${Item} ${shown + 1} of ${count}`}
      </p>
    </div>
  );
}

/** 14px Material `arrow_back_ios`, the same glyph the Antz arrows take. The
 *  next button flips it in CSS rather than carrying a mirrored copy. */
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
