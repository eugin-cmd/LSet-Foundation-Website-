"use client";

import { useEffect, useRef, useState } from "react";
import s from "./Education.module.css";

/**
 * "Hear from our best" — the institute's own film, in the frame that overhangs
 * the showcase band.
 *
 * It is on YouTube rather than in this repo, so this is an embed and not the
 * <video> the banners use. The player is only mounted once it is wanted:
 * before that the frame is the film's own poster behind a play control, which
 * keeps YouTube's script, its cookies and a second network connection off the
 * page for every reader who never looks at it.
 *
 * Two ways in, and they are not the same:
 *
 *   - **Scrolling stops on it.** The frame has grown to full size, the reader
 *     is looking at it, and the film starts on its own. Muted, because every
 *     browser blocks an unmuted autoplay and a blocked one would leave a dead
 *     frame instead of a playing film.
 *   - **A click.** That is a user gesture, so the film can start with its
 *     sound on, which is what someone who clicked a play button asked for.
 *
 * Reduced motion gets neither: no growth, and nothing starts itself. The
 * button still works, so the film is never unreachable.
 */

const VIDEO_ID = "j8eiWqNMI14";
/** How long the page has to be still before the film takes that as "stopped". */
const IDLE_MS = 420;
/** How much of the frame has to be on screen for it to count as being looked
 *  at. Above half: enough that it is the thing in view, not a sliver of it. */
const IN_VIEW = 0.55;

export default function ShowcaseFilm() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState<null | "auto" | "user">(null);

  useEffect(() => {
    if (started) return;
    const el = ref.current;
    if (!el) return;

    /* Tracked in a ref rather than state: this changes on every scroll frame,
       and re-rendering the frame for it would be work for nothing. */
    const visible = { current: false };
    const io = new IntersectionObserver(
      ([entry]) => {
        visible.current = entry.intersectionRatio >= IN_VIEW;
      },
      { threshold: [0, IN_VIEW, 1] },
    );
    io.observe(el);

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => io.disconnect();
    }

    let timer = 0;
    const arm = () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (visible.current) setStarted("auto");
      }, IDLE_MS);
    };

    /* Armed once on mount as well as on scroll: a reader can arrive with the
       band already in view — a reload part-way down the page, or a jump to an
       anchor — and never scroll at all. */
    arm();
    window.addEventListener("scroll", arm, { passive: true });
    return () => {
      io.disconnect();
      clearTimeout(timer);
      window.removeEventListener("scroll", arm);
    };
  }, [started]);

  /* nocookie, and no related videos from other channels at the end. */
  const src =
    `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
    `?autoplay=1&playsinline=1&rel=0&modestbranding=1` +
    `&mute=${started === "user" ? 0 : 1}`;

  return (
    <div className={s.showcaseFrame} ref={ref}>
      {started ? (
        <iframe
          className={s.filmPlayer}
          src={src}
          title="Hear from our best — the LSeT film"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className={s.filmPoster}
          onClick={() => setStarted("user")}
        >
          <img
            src="/assets/edu/film-poster.webp"
            alt=""
            aria-hidden="true"
            width={1280}
            height={690}
          />
          <span className={s.filmScrim} aria-hidden="true" />
          <span className={s.filmPlay} aria-hidden="true">
            <svg viewBox="0 0 12 15" fill="currentColor" aria-hidden="true">
              <path d="M0 0v15l12-7.5z" />
            </svg>
          </span>
          <span className="sr-only">
            Play the film: hear from our best
          </span>
        </button>
      )}
    </div>
  );
}
