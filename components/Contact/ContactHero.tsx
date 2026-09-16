import Blinder from "@/components/Blinder/Blinder";
import WaveText from "@/components/WaveText/WaveText";
import Envelope from "@/components/icons/Envelope";
import s from "./Contact.module.css";

/**
 * Figma node 1993:3271 — the page header.
 *
 * Figma anchors the copy to the foot of a 412px band; this keeps that anchor
 * and that proportion rather than the site's full --banner-height, because the
 * photograph behind it runs on down the page instead of ending at the band.
 * The heading takes the site's own sheen, as every other page heading does.
 *
 * It opens on an icon, as the other banners do, and on the same terms: the
 * same size, the same white, and the same drop timed to land after the blinder
 * has opened. An envelope, this being the page you write to us from.
 */
export default function ContactHero() {
  return (
    <header className={s.header}>
      <Blinder />

      <div className={s.headerInner}>
        {/* aria-hidden and no label: the kicker under it already says CONTACT,
            and a second announcement of the same word is noise. */}
        <div className={s.heroIcons} aria-hidden="true">
          <Envelope />
        </div>

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
