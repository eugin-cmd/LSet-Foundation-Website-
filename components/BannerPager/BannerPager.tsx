import Link from "next/link";
import s from "./BannerPager.module.css";

export type PagerItem = {
  href: string;
  /** Named on the control, so "previous" is never the whole announcement. */
  title: string;
};

/**
 * Paging between the pages of a set, from inside a banner: an arrow at each
 * margin and a row of dots at the foot.
 *
 * Two sets use it — the five project pages, and the three brand pages
 * (Foundation, Education, Antz Systems) — which is why it takes a list rather
 * than importing one. It positions itself absolutely, so its caller only has
 * to be a positioned banner; every hero on the site already is, because each
 * one holds a <ScrollCue> the same way.
 *
 * Both ends wrap. A set of three or five has no natural first or last from
 * inside it, and a disabled arrow at either end would be a dead control on
 * two of the pages.
 */
export default function BannerPager({
  items,
  current,
  label = "Pages",
}: {
  items: PagerItem[];
  /** The current page's own href, matched against `items`. */
  current: string;
  label?: string;
}) {
  const i = items.findIndex((p) => p.href === current);
  /* An unknown current page would put the arrows on items 0 and 1 and light no
     dot, which reads as a broken control rather than an absent one. */
  if (i < 0) return null;

  const n = items.length;
  const prev = items[(i - 1 + n) % n];
  const next = items[(i + 1) % n];

  return (
    /* One landmark for both controls — they page the same set, and two
       navigation landmarks called almost the same thing is noise for anyone
       listing them. The wrapper does no positioning; the rail and the row each
       place themselves. */
    <nav aria-label={label}>
      <div className={s.pager}>
        <Link
          href={prev.href}
          className={s.pagerBtn}
          aria-label={`Previous: ${prev.title}`}
        >
          <PagerChevron />
        </Link>
        <Link
          href={next.href}
          className={`${s.pagerBtn} ${s.pagerNext}`}
          aria-label={`Next: ${next.title}`}
        >
          <PagerChevron />
        </Link>
      </div>

      {/* An ordered list because the set runs in a defined order, and the dot
          for the page you are on is marked rather than merely lit — colour
          alone would say nothing to a screen reader. */}
      <ol className={s.dots}>
        {items.map((p) => {
          const here = p.href === current;
          return (
            <li key={p.href}>
              <Link
                href={p.href}
                className={`${s.dot} ${here ? s.dotHere : ""}`.trim()}
                aria-label={p.title}
                aria-current={here ? "page" : undefined}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** The pager glyph. Its own rather than <Chevron>, which is fixed at 8x15 with
 *  `preserveAspectRatio="none"` for the accordion and distorts at any other
 *  size. This one scales with the button and keeps its stroke weight. */
function PagerChevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M15 4.5 7.5 12l7.5 7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        /* The weight is held independent of the arrow's size. Without this the
           stroke is scaled with the glyph, so every resize silently rewrites
           it: 1.8 at a 22px arrow read fine, then thickened to 2.5px when the
           arrow grew, was thinned to 1.2, and thickened straight back to
           2.35px at 47px. `non-scaling-stroke` renders 1.4 device pixels at
           any glyph size, so the two can be tuned separately. */
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
