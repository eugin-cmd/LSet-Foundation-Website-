import ShowcaseFilm from "./ShowcaseFilm";
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
          join is the film rather than the still it used to be. */}
      <ShowcaseFilm />
    </section>
  );
}
