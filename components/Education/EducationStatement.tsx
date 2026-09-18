import DropIcon from "@/components/DropIcon/DropIcon";
import OpenBook from "@/components/icons/OpenBook";
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
        {/* The open book, which is what education is drawn as across the
            site. Every other mark that would suit this page is already on it —
            cupped hands, the globe and the birds head the board below, and the
            banner's row carries the print and the book — so this repeats the
            banner's book rather than introducing a fifth idea. Repeating a
            mark that means the one thing is the lesser cost.

            Drops as the homepage's does, on the same shared <DropIcon>. */}
        <DropIcon className={s.statementIcon}>
          <OpenBook />
        </DropIcon>

        {/* The homepage's approach kicker, in its form exactly: .wf-subtitle
            for the type and .wf-dotted for the 3px dot either side. The page
            already carries WHAT WE BELIEVE and Real Courses. Real Careers.,
            and neither claims this one. */}
        <p className={`${s.statementKicker} wf-subtitle wf-dotted`}>
          OUR APPROACH
        </p>

        <p className={`${s.statementLine} wf-display-xl`}>
          {/* One sentence, by direction, where Figma set four: "WE TRAIN. WE
              IMMERSE.WE MENTOR. TO PLACE THEM IN THE FIELD." The three verbs
              share a subject now and the last clause is what they are for,
              which is what the full stops were breaking apart. No closing one
              either: the band is a statement standing on its own, as the
              homepage's approach mast is, and the mark was the last thing left
              of the four-sentence version.

              It also retires the missing space after the second full stop —
              carried verbatim from Figma and flagged in the README, which can
              lose that note with it. */}
          WE TRAIN, IMMERSE &amp; MENTOR{" "}
          <span className={s.statementAccent}>TO PLACE THEM IN THE FIELD</span>
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
