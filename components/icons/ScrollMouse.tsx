/** Scroll cue — a slim mouse outline whose wheel travels downward. */
export default function ScrollMouse() {
  return (
    <svg width="19" height="31" viewBox="0 0 19 31" fill="none" aria-hidden="true">
      <rect
        x="0.65"
        y="0.65"
        width="17.7"
        height="29.7"
        rx="8.85"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle className="scrollCueWheel" cx="9.5" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}
