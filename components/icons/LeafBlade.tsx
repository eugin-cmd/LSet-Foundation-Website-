/**
 * A leaf drawn front-on: a symmetric blade, its midrib, one pair of veins and
 * a stem below.
 *
 * Its own drawing rather than <Leaf>, which the homepage's Conservation row,
 * the About banner and the nav drawer all wear and which is staying as it is.
 * That one is an almond between two tips with a single rib across the
 * diagonal, and at the 34px a banner icon row runs it reads closer to a
 * feather than a leaf: the rib is the long axis rather than a spine, and
 * nothing crosses it.
 *
 * So this is built the other way about. The blade stands upright and symmetric
 * about a vertical midrib, which is the arrangement every reader already has
 * for "leaf", and the vein pair crossing it is what says the shape is foliage
 * rather than an eye or a hull. One pair, not two: two is more explicitly
 * botanical and was tried, but it is the busiest thing in a row whose other
 * marks are a paw, a book and a globe, and this has to sit among them.
 *
 * The stem carries past the foot of the blade. It settles which way up the
 * shape is at a glance, and it is the one feature <Leaf> has that was worth
 * keeping.
 *
 * Stroke, cap and join come from the row — .heroIcons svg sets 1.5 and round —
 * so nothing is declared here and the same drawing takes whatever weight the
 * caller runs.
 */
export default function LeafBlade() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M16 25.5C5.5 20.5 5 9 16 4C27 9 26.5 20.5 16 25.5Z" />
      {/* Midrib and stem in one stroke: it starts inside the blade's tip and
          runs past its foot, so the two never disagree about where the spine
          is. */}
      <path d="M16 4.5v23.5" />
      <path d="M16 15 9.5 11M16 15 22.5 11" />
    </svg>
  );
}
