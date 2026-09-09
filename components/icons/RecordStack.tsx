/**
 * Row 01, "Records that grow with the animal" — three stacked bands, each
 * wider than the one above it.
 *
 * The row is about one record accumulating an animal's history rather than a
 * form that gets filled once, so the mark grows downward instead of sitting
 * square. Not another card: <ConnectedRecords> in this page's banner is
 * already a split rectangle, and two rectangles on one page would read as the
 * same idea twice.
 */
export default function RecordStack() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="10.4" y="6.8" width="11.2" height="4.8" rx="1.7" />
      <rect x="7.4" y="13.6" width="17.2" height="4.8" rx="1.7" />
      <rect x="4.4" y="20.4" width="23.2" height="4.8" rx="1.7" />
    </svg>
  );
}
