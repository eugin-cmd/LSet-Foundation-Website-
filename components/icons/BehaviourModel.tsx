/**
 * Antz EthoStudio, drawn as your own footage plus a spark.
 *
 * "Expertise within your team, turned into AI. Build custom behavioural models
 * trained on your own animals, your own footage." The frame and play triangle
 * are the footage; the spark is what the training adds. A lone brain glyph
 * would have said "AI" without saying whose data it learns from, which is the
 * product's whole argument.
 *
 * Three elements. An earlier version put a sprocketed film frame beside three
 * linked weights and an arrow: eight strokes, and at 34px the weights collapsed
 * into a smudge.
 */
export default function BehaviourModel() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.6" y="8.6" width="18.4" height="16.4" rx="2.6" />
      <path d="M10.6 13.6 16.8 16.8 10.6 20z" />
      <path d="M26.4 5.4v5.2M23.8 8h5.2" />
    </svg>
  );
}
