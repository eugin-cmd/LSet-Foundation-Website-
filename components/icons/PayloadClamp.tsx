/**
 * Custom payload: the diverter module and its clamp, hung on a live line.
 *
 * Literal rather than generic — a plain box would have read as cargo, and this
 * project's payload is a specific thing, a clamp that grips a transmission
 * line. Drawn on the shared 32 grid and left unstroked, so the caller supplies
 * currentColor at the row's weight, as the rest of the set does.
 *
 * Its silhouette is a line over a box, which is what keeps it apart from the
 * three icons beside it: the drone's X of rotors, the chip's pinned square and
 * the eye's unbroken curve.
 */
export default function PayloadClamp() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      {/* the transmission line */}
      <path d="M3 8.5h26" />
      {/* the clamp, closed over it */}
      <path d="M12.4 8.5V6.9a3.6 3.6 0 0 1 7.2 0v1.6" />
      {/* the hanger */}
      <path d="M16 8.5v5.6" />
      {/* the module */}
      <rect x="9.4" y="14.1" width="13.2" height="11.4" rx="2.6" />
      <path d="M12.8 19.8h6.4" />
    </svg>
  );
}
