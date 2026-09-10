/**
 * SonicDNA, drawn as a voiceprint: six bars of unequal length, centred on a
 * common axis.
 *
 * Centred and irregular, which is what separates it from <TrendBars> — those
 * climb off a baseline and read as analytics. A voiceprint is symmetric about
 * its axis and has no order to its heights, and that is the whole difference
 * between "figures" and "a sound belonging to an individual".
 *
 * Drawn on the shared 32 grid and left unstroked, so the caller supplies
 * currentColor at the row's weight. The round caps come from the caller too.
 */
export default function Voiceprint() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M4.5 13v6" />
      <path d="M9.1 9v14" />
      <path d="M13.7 5.2v21.6" />
      <path d="M18.3 11v10" />
      <path d="M22.9 7.4v17.2" />
      <path d="M27.5 12.4v7.2" />
    </svg>
  );
}
