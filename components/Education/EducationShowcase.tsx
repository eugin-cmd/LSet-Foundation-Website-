import ShowcaseFilm from "./ShowcaseFilm";
import People from "@/components/icons/People";
import s from "./Education.module.css";

/**
 * Figma node 1962:18246 — the second photo band, same construction as the
 * statement band but with a framed photo overhanging the join (1962:18205).
 */
export default function EducationShowcase() {
  return (
    <section className={s.showcase}>
      <div className={s.showcasePhoto} aria-hidden="true" />
      <div className={s.showcaseDeep} aria-hidden="true" />

      {/* The band's two photographic layers are untouched; what overhangs the
          join is the film rather than the still it used to be.

          The heading and the frame are one stack, centred as a pair, so the
          film sits under its own title rather than beside a caption pinned
          somewhere else in the band. The growth on scroll belongs to the frame
          alone, which is why the title holds still while the film opens. */}
      <div className={s.showcaseStage}>
        {/* Decorative: the heading under it says whose voices these are, so the
            mark is hidden rather than read as a loose noun above a title. The
            same treatment the banner icon rows get. */}
        <span className={s.showcaseIcon} aria-hidden="true">
          <People />
        </span>

        <h2 className={`${s.showcaseHeading} wf-display-l`}>
          Hear from our best
        </h2>
        <ShowcaseFilm />
      </div>
    </section>
  );
}
