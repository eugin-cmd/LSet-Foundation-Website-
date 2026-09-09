/**
 * Antz Platform, drawn as one panelled system.
 *
 * The product's claim is that records, healthcare, nutrition, breeding,
 * transfers, inventory, compliance and reporting live "in one system", so the
 * mark is a single frame divided into panes — many things, one surface. Not
 * another node graph: NodeNetwork already stands for the Technology pillar on
 * the homepage.
 *
 * Three elements, none under 11 units. An earlier version drew three stacked
 * record cards on a spine with dotted terminals; rendered at its true 34px and
 * magnified, the terminals disappeared and the stack read as noise. At this
 * size the icon gets three strokes, not eight.
 */
export default function ConnectedRecords() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="4" y="6.2" width="24" height="19.6" rx="2.6" />
      <path d="M13.2 6.2v19.6" />
      <path d="M13.2 16h14.8" />
    </svg>
  );
}
