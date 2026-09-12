/**
 * Antz Trails' "branded as the institution's own", drawn as a label tag.
 *
 * A tag rather than a palette or a swatch: what the fact promises is that the
 * product carries the zoo's name, colours and voice — it is whose it is, not
 * what colour it is. The punched hole is what makes the shape a tag at 14px;
 * without it the outline reads as a rotated square.
 *
 * Two elements. Left unstroked, like its siblings.
 */
export default function BrandTag() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M17.4 5.2h8.2c.7 0 1.2.5 1.2 1.2v8.2c0 .6-.2 1.1-.7 1.5l-9.8 9.8c-.8.8-2.1.8-2.9 0l-8.3-8.3c-.8-.8-.8-2.1 0-2.9l9.8-9.8c.4-.4.9-.7 1.5-.7Z" />
      <circle cx="21.6" cy="10.6" r="1.9" />
    </svg>
  );
}
