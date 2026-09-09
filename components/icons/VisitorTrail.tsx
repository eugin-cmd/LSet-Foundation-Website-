/**
 * Antz Trails, drawn as one pin on a route.
 *
 * "The visitor app powered by your live operational data - you control what
 * visitors see, and when." A phone outline would have named the medium rather
 * than the thing; the pin standing on a dashed route is the visitor's way
 * through the collection.
 *
 * Three elements, and the pin is 12 units tall. An earlier version drew two
 * small pins joined by a winding path — at 34px the pins were unreadable blobs
 * and the path read as a squiggle.
 */
export default function VisitorTrail() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M22 11.4c0 6-6 11.6-6 11.6s-6-5.6-6-11.6a6 6 0 0 1 12 0Z" />
      <circle cx="16" cy="11.4" r="2.2" />
      <path d="M5.4 27.2h21.2" strokeDasharray="3.4 3.4" />
    </svg>
  );
}
