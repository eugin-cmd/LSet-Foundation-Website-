/**
 * Hands-on training, drawn as cupped hands supporting a small animal.
 *
 * Deliberately four simple shapes. At the accordion's 20px an icon's stroke
 * renders 1.0px, and detail finer than about 2px of clear space merges — the
 * reason a fingered hand is not drawn here, and the reason the hero's paw
 * print is not reused at this size (its rings leave a 1.5px hole and lump).
 */
export default function CuppedHands() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="11" r="4.2" />
      <path d="M6 18.5c0 5.2 4.5 8.8 10 8.8s10-3.6 10-8.8" />
      <path d="M6 18.5v-4" />
      <path d="M26 18.5v-4" />
    </svg>
  );
}
