import s from "./Education.module.css";

/**
 * Figma node 1962:12736 — 1440x1452: a 1050px photo above a 402px deep block,
 * with the statement laid over the join. The export has the node's scrims
 * composited in, as on the homepage's approach band.
 */
export default function EducationStatement() {
  return (
    <section className={s.statement}>
      {/* One block, not Figma's photo-over-deep pair: the photo is cropped to
          where its baked scrim reaches that block's own colour, so the band
          ends in the scrim's resting tone and the second block is redundant. */}
      <div className={s.statementPhoto} aria-hidden="true" />

      <p className={`${s.statementCopy} wf-display-xl`}>
        {/* Verbatim from Figma, including the missing space after the second
            full stop. Flagged in the README. */}
        WE TRAIN. WE IMMERSE.WE MENTOR.{" "}
        <span className={s.statementAccent}>TO PLACE THEM IN THE FIELD.</span>
      </p>
    </section>
  );
}
