import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import WaveText from "@/components/WaveText/WaveText";
import Leaves from "@/components/icons/Leaves";
import Globe from "@/components/icons/Globe";
import s from "./Work.module.css";

/**
 * The Our Work banner.
 *
 * Figma's `Our Work — Desktop 1444` opens on a white header block — a small
 * "OUR WORK" kicker over a 72px teal "THE PROOF WALL" and a lede — not a
 * banner. That block is not reproduced: by direction this page wears the same
 * banner as the other three, so the heading moves into a full-bleed band with
 * the shared height, tint, scrims, blinder and scroll cue, takes the
 * holographic fill and the load wave, and keeps Figma's lede underneath it.
 *
 * The heading is Figma's own "THE PROOF WALL". It fits the Foundation hero's
 * full 80px on one line at every width — 773px in the 1276px column, 503px
 * clear — so no step down was needed to take the longer wording.
 *
 * The photograph is the first project's own — the White-bellied Heron, from the
 * 4094px original behind that card — and is explicitly a stand-in. The other
 * three banners all carry video now, so swapping this for footage is the same
 * two-layer change they each took; the CSS keeps the overscan token ready.
 */
export default function WorkHero() {
  return (
    <section className={s.hero}>
      {/* Flat 25% black over the photograph, under the gradient scrims so
          those keep full strength. As on the other three banners. */}
      <div className={s.heroTint} aria-hidden="true" />

      {/* This band has no baked Figma export to carry them, so the node's
          scrim gradients are a layer of their own, as on the education and
          Antz banners. */}
      <div className={s.heroScrim} aria-hidden="true" />

      {/* Opens on load, over everything else in the banner. */}
      <Blinder />

      {/* .heroTitle centres the stack in the band; .heroInner is the column. */}
      <div className={s.heroTitle}>
        <div className={s.heroInner}>
          {/* Decorative: the heading names the page, so the mark is hidden
              from assistive tech rather than read as a stray noun — the same
              treatment the other three banners' rows get. A globe because this
              wall is five programmes on four continents, and because the rows
              below are location-led. Reused rather than drawn: it is already
              the education board's mark for reach. */}
          <div className={s.heroIcons} aria-hidden="true">
            <Globe />
          </div>

          {/* Figma's own kicker, from the header block this banner replaces. It
              takes the site's kicker treatment rather than Figma's brick
              14px/5.6px: .wf-subtitle for the type and .wf-dotted for the 3px
              dot either side, exactly as WHO WE ARE and OUR APPROACH wear it.
              The caps are in the string, since neither utility transforms. */}
          <p className={`${s.heroKicker} wf-subtitle wf-dotted`}>OUR WORK</p>

          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label="The proof wall"
          >
            <WaveText text={"The proof wall"} />
          </h1>

          {/* Figma's own lede, from the header block this banner replaces. */}
          <p className={`${s.heroLede} wf-body-l`}>
            Every project here was prototyped, deployed, and is being used by the
            partner who asked for it. No demos, no slideware.
          </p>

          {/* The flourish that closes all three other banners' copy columns. */}
          <Leaves />
        </div>
      </div>

      <ScrollCue href="#projects" label="Scroll to the projects" />
    </section>
  );
}
