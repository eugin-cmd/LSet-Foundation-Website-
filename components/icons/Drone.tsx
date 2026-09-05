/**
 * Quadcopter, front-on: body, four arms, four rotors.
 *
 * Drawn at 88% inside the shared 32x32 box. Its rotors reach the corners while
 * the other three icons sit well inside theirs, so at matched box sizes the
 * drone read optically larger than the rest of the row.
 *
 * The scale is a transform rather than a smaller rendered box so the box stays
 * identical to its siblings; `vectorEffect="non-scaling-stroke"` then keeps the
 * stroke at the row's 1.5px instead of shrinking to 1.32 with the geometry —
 * a mismatched stroke weight would read worse than the size difference did.
 */
const SCALE = 0.88;

export default function Drone() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <g transform={`translate(16 16) scale(${SCALE}) translate(-16 -16)`}>
        <rect
          x="11.5"
          y="11.5"
          width="9"
          height="9"
          rx="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M11.8 11.8 7.4 7.4M20.2 11.8l4.4-4.4M11.8 20.2l-4.4 4.4M20.2 20.2l4.4 4.4"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="6.1" cy="6.1" r="3.4" vectorEffect="non-scaling-stroke" />
        <circle cx="25.9" cy="6.1" r="3.4" vectorEffect="non-scaling-stroke" />
        <circle cx="6.1" cy="25.9" r="3.4" vectorEffect="non-scaling-stroke" />
        <circle cx="25.9" cy="25.9" r="3.4" vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}
