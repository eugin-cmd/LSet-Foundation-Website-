/**
 * Row 05, "Analytics your director uses" — three bars climbing off a baseline.
 *
 * Vertical and anchored, against <RecordStack>'s horizontal unanchored bands
 * in row 01: the two are the only bar forms in the set, so the orientation and
 * the baseline are what separate them. Bars rather than a plotted line because
 * the row promises figures clear enough for a board meeting, and a line needs
 * axes to mean anything.
 */
export default function TrendBars() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 25.6h22" />
      <path d="M9.4 25.6v-5.4" />
      <path d="M16 25.6v-10.4" />
      <path d="M22.6 25.6v-15.6" />
    </svg>
  );
}
