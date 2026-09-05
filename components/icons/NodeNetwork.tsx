/**
 * Technology, drawn as three linked nodes.
 *
 * Deliberately not another chip: the hero's AI mark is already a processor with
 * pins, and a platform of connected field systems is what this pillar is about.
 * The connectors stop short of each circle so nothing overlaps at small sizes.
 */
export default function NodeNetwork() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="16" cy="7.8" r="3.1" />
      <circle cx="8.2" cy="22.6" r="3.1" />
      <circle cx="23.8" cy="22.6" r="3.1" />
      <path d="M14.56 10.54 9.65 19.86" />
      <path d="M17.44 10.54 22.35 19.86" />
      <path d="M11.3 22.6h9.4" />
    </svg>
  );
}
