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

      <div className={s.showcaseFrame}>
        <img
          src="/assets/edu-overhang.jpg"
          alt="A keeper hand-feeding a bird of prey on the farm"
          width={646}
          height={438}
        />
      </div>
    </section>
  );
}
