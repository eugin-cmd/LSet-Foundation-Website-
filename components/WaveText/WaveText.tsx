import s from "./WaveText.module.css";

/** Per-character index, for the stagger. */
type CharVars = React.CSSProperties & { "--i": number };

/**
 * Splits a heading into per-character spans so a ripple can travel through it
 * on load. "\n" becomes a line break.
 *
 * Words are wrapped too, and that is structural rather than cosmetic: a line
 * can break between any two inline-level boxes, so per-character spans alone
 * would let the heading break mid-word. The word wrapper is the inline-block;
 * the characters inside it stay inline.
 *
 * The spans are hidden from assistive tech and the caller puts the real string
 * back as an aria-label. Splitting does not change the accessible name, but
 * some screen readers pause at every inline boundary, which would spell the
 * heading out letter by letter.
 */
export default function WaveText({ text }: { text: string }) {
  let i = 0;
  return (
    <span className={s.wave} aria-hidden="true">
      {text.split("\n").map((line, li) => (
        <span key={li} className={s.line}>
          {li > 0 && <br />}
          {line.split(" ").map((word, wi) => (
            <span key={`${li}-${wi}`}>
              {wi > 0 && " "}
              <span className={s.word}>
                {[...word].map((ch, ci) => (
                  <span
                    key={`${li}-${wi}-${ci}`}
                    className={s.char}
                    style={{ "--i": i++ } as CharVars}
                  >
                    {ch}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
