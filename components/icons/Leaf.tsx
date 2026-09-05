/**
 * Conservation, drawn as a leaf: an almond of two symmetric arcs, a midrib and
 * a stem.
 *
 * This started as a paw print, which is the better idea for a wildlife charity
 * but does not survive the size. Four outlined toes inside a 20px box leave
 * each ring about 3px across against a 1.6px stroke, so the stroke all but
 * fills them and they merge into a lump. Three large forms read cleanly
 * instead, and "habitat protection" is in the row's own copy.
 */
export default function Leaf() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M7 25Q7 7 25 7Q25 25 7 25Z" />
      <path d="M10.2 21.8 21.8 10.2" />
      <path d="M5.2 26.8 7 25" />
    </svg>
  );
}
