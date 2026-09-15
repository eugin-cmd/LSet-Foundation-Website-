import s from "./Antz.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma node 1974:33649 — the closing band.
 *
 * Its two pills are a sage-on-dark pair that appears nowhere else on the site,
 * so they are written here rather than added as two more variants to the shared
 * <PillCta>, whose one job is the green/white pair with the wipe. Same
 * geometry as that component, though — 100px radius, 12px/22px padding, 13px
 * medium label — so the two read as the same family of button.
 */
export default function AntzCta() {
  return (
    <section className={s.cta}>
      <p className={`${s.ctaTitle} wf-display-s`}>Have a similar challenge?</p>
      <p className={`${s.ctaBody} wf-body`}>
        If you&rsquo;re a conservation organisation working on something adjacent,
        bring it to us. We answer every submission within five working days.
      </p>
      <div className={s.ctaRow}>
        <a href="#" className={`${s.ctaBtn} ${s.ctaBtnFilled} wf-holo-hover`}>
          Submit a Challenge <LinkArrow />
        </a>
        <a href="#" className={`${s.ctaBtn} ${s.ctaBtnOutline} wf-holo-hover`}>
          View all projects
        </a>
      </div>
    </section>
  );
}
