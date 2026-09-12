/**
 * Antz Edge's "no connectivity required", drawn as a transmitting node struck
 * through.
 *
 * The arcs are <IotNode>'s own, at its radii — the two marks sit on the same
 * card, and drawing the broadcast differently in each would read as two
 * different ideas rather than as one idea denied. The slash is what denies it,
 * and it runs corner to corner so it cannot be mistaken for a third arc.
 *
 * Four elements, none under 4 units. Left unstroked: the caller supplies
 * currentColor at the row's weight, as every outline mark in this set does.
 */
export default function NoSignal() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="21.6" r="1.9" />
      <path d="M11.9 18.1a6.6 6.6 0 0 1 8.2 0" />
      <path d="M8.6 14.6a11.1 11.1 0 0 1 14.8 0" />
      <path d="M6.4 26.4 25.6 7.2" />
    </svg>
  );
}
