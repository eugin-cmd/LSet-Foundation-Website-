/** Multinational faculty, drawn as a globe: outline, equator, one meridian. */
export default function Globe() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="11" />
      <path d="M5 16h22" />
      <ellipse cx="16" cy="16" rx="4.6" ry="11" />
    </svg>
  );
}
