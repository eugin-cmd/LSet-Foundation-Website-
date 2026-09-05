/**
 * AI, drawn as a processor: a chip outline with pins and an inner core.
 *
 * A neural-node graph was the first attempt and had to go — five circles joined
 * in an X is almost the same silhouette as the drone beside it, so at a glance
 * the row read as two of the same icon. A chip is angular and pinned, which
 * separates it from both the drone's X and the rounded housings of the sensor
 * and recorder.
 */
export default function AiChip() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="8.5" y="8.5" width="15" height="15" rx="2.6" />
      <rect x="13.2" y="13.2" width="5.6" height="5.6" rx="1.2" />
      <path d="M13 8.5V4.9M19 8.5V4.9M13 23.5v3.6M19 23.5v3.6" />
      <path d="M8.5 13H4.9M8.5 19H4.9M23.5 13h3.6M23.5 19h3.6" />
    </svg>
  );
}
