import Blinder from "@/components/Blinder/Blinder";
import WaveText from "@/components/WaveText/WaveText";
import s from "./Contact.module.css";

/**
 * Figma node 1993:3271 — the page header.
 *
 * Figma anchors the copy to the foot of a 412px band; this keeps that anchor
 * and that proportion rather than the site's full --banner-height, because the
 * photograph behind it runs on down the page instead of ending at the band.
 * The heading takes the site's own sheen, as every other page heading does.
 */
export default function ContactHero() {
  return (
    <header className={s.header}>
      <Blinder />

      <div className={s.headerInner}>
        <p className={`${s.kicker} wf-label`}>CONTACT</p>

        <h1
          className={`${s.title} wf-display-xl wf-iridescent`}
          aria-label="Tell us what you're trying to do."
        >
          <WaveText text={"Tell us what you're trying to do."} />
        </h1>

        <p className={`${s.lede} wf-body-l`}>
          We answer every message within five working days.
        </p>
      </div>
    </header>
  );
}
