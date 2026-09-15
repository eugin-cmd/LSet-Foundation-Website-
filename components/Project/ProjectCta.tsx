import Link from "next/link";
import s from "./Project.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma node 1738:184778 — the closing band.
 *
 * The same words as <AntzCta>, which closes the Antz Systems page. That one is
 * a sage-on-dark treatment; this is Figma's light-ground pair — a teal 48px
 * heading beside the copy, an orange filled pill and an outlined one. The two
 * are not shared: the only thing they have in common is the sentence, and
 * folding this into that component would mean a variant flag for every one of
 * its colours.
 */
export default function ProjectCta() {
  return (
    <section className={s.cta} aria-labelledby="project-cta-title">
      <div className={s.ctaInner}>
        <h2 id="project-cta-title" className={`${s.ctaTitle} wf-display-l`}>
          Have a similar challenge?
        </h2>

        <div className={s.ctaCol}>
          <p className={`${s.ctaBody} wf-body-l`}>
            If you&rsquo;re a conservation organisation working on something
            adjacent - bring it to us. We answer every submission within five
            working days.
          </p>

          <div className={s.ctaRow}>
            {/* Figma points this nowhere; the footer's own "Submit a challenge"
                is the same dead link, so it stays consistent with it. */}
            <a href="#" className={`${s.ctaBtn} ${s.ctaBtnFilled}`}>
              Submit a Challenge <LinkArrow />
            </a>
            <Link href="/the-work" className={`${s.ctaBtn} ${s.ctaBtnOutline}`}>
              View all projects <LinkArrow />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
