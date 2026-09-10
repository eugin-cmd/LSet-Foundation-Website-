/**
 * The enrichment lever, drawn as a lever: a mount, a pivot, and an arm thrown
 * to one side with a knob on the end.
 *
 * Thrown rather than upright, because a lever standing straight up reads as a
 * mast or an aerial — the tilt is what says the thing has been pulled, which
 * is the whole point of giving an animal one.
 *
 * Drawn on the shared 32 grid and left unstroked, so the caller supplies
 * currentColor at the row's weight.
 */
export default function Lever() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M7.5 26.5h17" />
      <circle cx="15" cy="22.4" r="2.7" />
      <path d="M16.6 20.2 21.7 10.6" />
      <circle cx="23" cy="8.2" r="2.9" />
    </svg>
  );
}
