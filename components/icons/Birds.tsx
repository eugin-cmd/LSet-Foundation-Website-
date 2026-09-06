/**
 * Species exposure, drawn as two birds in flight.
 *
 * Each is a shallow V with curved arms — wingtips high, body dipping in the
 * middle. Drawn the other way up, peaking in the centre, it renders at 20px as
 * a caret rather than a bird, which is how the first attempt read.
 *
 * The dips are 5 and 3.3 units deep rather than the 2 a bird glyph is usually
 * drawn with: at 20px a shallower curve flattens into a wavy line once the
 * 1.0px stroke is on it and stops reading as wings.
 */
export default function Birds() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 16c4 0 7 1.7 8.5 5 1.5-3.3 4.5-5 8.5-5" />
      <path d="M17 9c2.6 0 4.6 1.1 5.6 3.3 1-2.2 3-3.3 5.6-3.3" />
    </svg>
  );
}
