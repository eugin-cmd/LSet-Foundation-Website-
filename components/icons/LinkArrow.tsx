import s from "./LinkArrow.module.css";

/**
 * The mark that closes a text link — a solid triangle pointing right.
 *
 * One component for all of them, because there were nine `&rarr;` characters
 * scattered across seven files and they were the same intent nine times. A
 * glyph also inherits whatever the font decides an arrow looks like, which
 * differs between the three families this site loads; a drawn triangle is the
 * same shape everywhere.
 *
 * Sized in `em`, so it takes the size of whatever link it closes — from the
 * 12.5px proof-wall card to the 18px mast link — without any caller setting a
 * size. It inherits `currentColor` for the same reason.
 *
 * Decorative: the link's own words say where it goes.
 */
export default function LinkArrow() {
  return (
    <svg
      className={s.arrow}
      viewBox="0 0 10 12"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {/* Slightly rounded at the corners: at 8px a hard point renders as a
          single stray pixel, and the join reads as a burr rather than a tip. */}
      <path d="M1.1 1.15a.55.55 0 0 1 .84-.47l6.9 4.85a.55.55 0 0 1 0 .94l-6.9 4.85a.55.55 0 0 1-.84-.47Z" />
    </svg>
  );
}
