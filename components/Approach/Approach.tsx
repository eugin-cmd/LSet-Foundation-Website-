import s from "./Approach.module.css";

export default function Approach() {
  return (
    <section id="approach" className={s.approach}>
      {/* The inner layer is oversized and drifts; the wrapper clips it. */}
      <div className={s.bgArea} aria-hidden="true">
        <div className={s.bg} />
        <div className={s.bgTint} />
      </div>
      <div className={s.deep} aria-hidden="true" />

      <div className={s.heading}>
        <p className={`${s.kicker} wf-subtitle wf-dotted`}>OUR APPROACH</p>
        <h2 className={`${s.title} wf-display-xl`}>
          We integrate. We prototype.
          <br />
          We field it. <span className={s.accent}>Then we teach it.</span>
        </h2>
      </div>
    </section>
  );
}
