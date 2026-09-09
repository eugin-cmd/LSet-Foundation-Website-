/**
 * Row 03, "Daily operations, in one system" — a calendar carrying a tick.
 *
 * The two hangers above the frame are what make it a calendar rather than a
 * plain panel at 20px, where a month grid would collapse into noise. The tick
 * is the operations half: the day's diets, treatments and handovers done, not
 * merely scheduled.
 */
export default function DailyRounds() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="4.6" y="7.6" width="22.8" height="18" rx="2.4" />
      <path d="M4.6 13.4h22.8" />
      <path d="M11 5.4v4" />
      <path d="M21 5.4v4" />
      <path d="M11.4 19.4 14.6 22.4 20.8 16.2" />
    </svg>
  );
}
