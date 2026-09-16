/** Contact, drawn as an envelope: the body and the flap folded into it.
 *
 *  Unstroked on the set's 32 grid, like every other icon here — the caller
 *  supplies the paint, which is how one mark serves a white banner and a dark
 *  fact card without a second copy of it. */
export default function Envelope() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="4" y="7" width="24" height="18" rx="2.5" />
      {/* The flap, taken from the body's own top corners so the two meet
          exactly rather than nearly. */}
      <path d="M5 8.6 16 17.2 27 8.6" />
    </svg>
  );
}
