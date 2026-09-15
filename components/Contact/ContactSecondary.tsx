import PillCta from "@/components/PillCta/PillCta";
import s from "./Contact.module.css";

/** Figma node 1993:3327 — the band closing the page, above the footer. */
export default function ContactSecondary() {
  return (
    <section className={s.secondary} aria-labelledby="contact-secondary">
      <h2 id="contact-secondary" className={`${s.secondaryTitle} wf-display-s`}>
        Prefer to see the work first?
      </h2>

      <div className={s.secondaryRow}>
        <PillCta href="/the-work">All Projects</PillCta>
        <PillCta href="/#from-the-field">From the Field</PillCta>
      </div>
    </section>
  );
}
