/**
 * Animal care, drawn as a paw print: four toes over a pad.
 *
 * The geometry is measured, not eyeballed. An earlier outlined paw was tried
 * in the pillars accordion at 20px and failed — four rings that small leave a
 * ~1.5px hole against a 1.6px stroke, so each toe filled in and the print read
 * as a lump. At the hero's 34px the toes are r2 (4.25px across, a 2.66px hole)
 * and every gap between shapes stays at least 1.38px wide once both strokes
 * are drawn. Re-check those numbers before reusing this any smaller.
 *
 * Sized to sit beside OpenBook: ink 21.2 x 16.2 units against the book's
 * 20.2 x 16.9, with the two vertical ink centres level to 0.05px — the flex
 * row centres the 34px boxes, not the drawings inside them, so the artwork has
 * to be balanced here.
 */
export default function PawPrint() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="7.4" cy="15.8" r="2" />
      <circle cx="12.6" cy="11.3" r="2" />
      <circle cx="19.4" cy="11.3" r="2" />
      <circle cx="24.6" cy="15.8" r="2" />
      <ellipse cx="16" cy="21.6" rx="5" ry="3.9" />
    </svg>
  );
}
