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

      {/* The statement and its line are one block: the parallax below moves
          this wrapper, so the two travel together rather than drifting apart
          at different rates. */}
      <div className={s.statementCopy}>
        <p className={`${s.statementLine} wf-display-xl`}>
          {/* Verbatim from Figma, including the missing space after the second
              full stop. Flagged in the README. */}
          WE TRAIN. WE IMMERSE.WE MENTOR.{" "}
          <span className={s.statementAccent}>TO PLACE THEM IN THE FIELD.</span>
        </p>

        {/* What the claim above rests on, in the institute's own figures:
            residential, a working farm, 200+ species, fifteen to a cohort.
            The second sentence is what "in the field" actually means here —
            the work is the course, not something waiting after it. */}
        <p className={s.statementSub}>
          Three months to a year, residential, on a working farm of more than
          200 species with fifteen students to a cohort. The work starts in the
          first week, so what waits at the end is a job and not an
          introduction.
        </p>
      </div>
    </section>
  );
}
