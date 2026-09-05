import PillCta from "@/components/PillCta/PillCta";
import s from "./CtaBand.module.css";

export default function CtaBand() {
  return (
    <section className={s.cta}>
      <div className={s.bg} aria-hidden="true" />
      <div className={s.bgTint} aria-hidden="true" />
      <div className={s.content}>
        <h2 className={`${s.title} wf-display-xl`}>
          Conservation needs more than good intentions.
        </h2>
        <p className={`${s.sub} wf-subtitle`}>
          It needs practical solutions that help organisations monitor wildlife, make informed
          decisions and act when it matters most.
        </p>
        <PillCta variant="inverse">Book a demo</PillCta>
      </div>
    </section>
  );
}
