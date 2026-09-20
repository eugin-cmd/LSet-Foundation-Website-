/**
 * A shaft leaving a corner — the arrow that slants up and to the right.
 *
 * Its own glyph rather than the pager chevron: that one means "along", and
 * this one means "away". It was drawn for the project pages' outbound link,
 * where "away" is literal — the link leaves the site. The board rows in
 * `Pillars/Accordion` borrow the same mark for links that stay on it, where
 * it reads as "go to this page" rather than "leave for another domain".
 * One shape, two readings of the same gesture; drawn once, by direction.
 *
 * No size of its own. Every caller has a slot for it already — the project
 * link's `.externalMark`, the board row's `.jump` — and a size here would
 * only be something for each of them to override. It takes `currentColor`
 * for the same reason.
 *
 * Decorative. The project link's words say where it goes; the board row's
 * anchor carries an `aria-label`, since its only content is this arrow.
 */
export default function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M8.5 15.5 15.5 8.5M9.8 8.5h5.7v5.7"
        stroke="currentColor"
        strokeWidth="1.6"
        /* The mark is drawn at 24 and used at 15–18, so the stroke would
           otherwise thin to about 1.1 and stop matching the 1.6 line art
           beside the row numbers. */
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
