"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import s from "./Lightbox.module.css";

export type LightboxSlide = { src: string; alt: string };

/**
 * A full-screen viewer for a carousel's slides, opened by tapping one.
 *
 * Rendered through a portal to <body>, and that is not tidiness. Both carousels
 * sit inside sections carrying scroll-driven transforms, and a transformed
 * ancestor becomes the containing block for `position: fixed` — the overlay
 * would be pinned inside the gallery it came from rather than over the page.
 * A portal puts it outside every one of them.
 *
 * Mounted only while open, so nothing here costs anything on a page nobody has
 * tapped. The caller owns `open`; this owns which slide is showing once it is.
 */
export default function Lightbox({
  slides,
  startIndex,
  label,
  onClose,
}: {
  slides: LightboxSlide[];
  startIndex: number;
  /** Names the dialog, e.g. "Orangutan Haven photographs". */
  label: string;
  onClose: () => void;
}) {
  const [i, setI] = useState(startIndex);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnTo = useRef<Element | null>(null);

  const count = slides.length;
  const go = useCallback(
    (d: number) => setI((n) => (n + d + count) % count),
    [count],
  );

  useEffect(() => setMounted(true), []);

  /* The page must not scroll under the viewer. Saved and restored rather than
     cleared, so a page that was already locked — the nav drawer does it — is
     not unlocked by this closing. */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  /* Focus moves in and comes back. Without the return, dismissing the viewer
     drops focus to the top of the document and a keyboard reader loses the
     carousel they opened it from. */
  useEffect(() => {
    returnTo.current = document.activeElement;
    dialogRef.current?.focus();
    return () => {
      const el = returnTo.current;
      if (el instanceof HTMLElement) el.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  /* Swipe. Horizontal pages, a downward drag dismisses — the gesture a photo
     viewer is expected to answer to. The axis is decided by whichever distance
     is larger, so a sloppy horizontal swipe does not close the thing. */
  const start = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    start.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const from = start.current;
    start.current = null;
    if (!from) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - from.x;
    const dy = t.clientY - from.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
    } else if (dy > 80) {
      onClose();
    }
  };

  if (!mounted) return null;

  const slide = slides[i];

  return createPortal(
    <div
      ref={dialogRef}
      className={s.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      /* The backdrop dismisses; the figure inside stops the click so tapping
         the photograph itself does not close what you opened to look at. */
      onClick={onClose}
    >
      <button
        type="button"
        className={s.close}
        onClick={onClose}
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.6"
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <figure className={s.figure} onClick={(e) => e.stopPropagation()}>
        <img className={s.image} src={slide.src} alt={slide.alt} />
        {slide.alt ? (
          <figcaption className={`${s.caption} wf-small`}>{slide.alt}</figcaption>
        ) : null}
      </figure>

      {count > 1 && (
        <p className={`${s.counter} wf-meta`} aria-live="polite">
          {i + 1} / {count}
        </p>
      )}
    </div>,
    document.body,
  );
}
