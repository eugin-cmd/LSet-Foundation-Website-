/**
 * Living systems design, drawn as two blocks of different size.
 *
 * Structural rather than natural: the other three pillars already carry a
 * book, a network and a leaf, so this one has to say "designed" without
 * reaching for another growing thing. Two rectangles sharing a base line is
 * the shortest way to draw massing — it is how a site is sketched before it
 * is anything else.
 *
 * Two elements, not three. A ground line under them read well on the 32 grid
 * and closed up at the 19px this renders at in the banner: at that size a
 * 1.5 stroke is 0.89 of a pixel, so every extra line is one more thing
 * antialiasing has to halve. The blocks are as large as the grid allows for
 * the same reason, and the smaller one is still 5px across.
 *
 * Left unstroked, like every outline mark in this set: the caller supplies
 * currentColor at the row's weight.
 */
export default function HabitatPlan() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.5" y="7.5" width="15" height="17.5" rx="2.4" />
      <rect x="20.5" y="13.5" width="8.5" height="11.5" rx="2" />
    </svg>
  );
}
