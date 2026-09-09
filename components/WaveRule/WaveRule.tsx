import s from "./WaveRule.module.css";

/**
 * The squiggle divider — a fine rounded wave whose ends fade into the page.
 *
 * Decoration with no semantics, so it is a bare `aria-hidden` div rather than
 * an `<hr>`: an `<hr>` announces a thematic break, and these two rules close a
 * band off visually without dividing the document's meaning.
 *
 * The component carries the paint; `className` carries the placement, because
 * its two users place it differently — the partners strip pins it to its own
 * bottom edge, the Antz platform section drops it in flow.
 */
export default function WaveRule({ className }: { className?: string }) {
  return (
    <div
      className={className ? `${s.rule} ${className}` : s.rule}
      aria-hidden="true"
    />
  );
}
