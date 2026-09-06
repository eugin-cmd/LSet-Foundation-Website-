import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import WaveText from "@/components/WaveText/WaveText";
import Leaves from "@/components/icons/Leaves";
import PawPrint from "@/components/icons/PawPrint";
import OpenBook from "@/components/icons/OpenBook";
import s from "./Education.module.css";

/**
 * Figma node 1962:12732, arranged like the Foundation hero rather than the
 * design file: the copy block is centred in the band instead of sitting at
 * Figma's y 660, the institute paragraph has moved up out of the band below to
 * sit directly under the heading, and Figma's "Scroll to know more" line is
 * replaced by the same leaf flourish and bouncing mouse cue the homepage uses.
 */
export default function EducationHero() {
  return (
    <section className={s.hero}>
      {/* Flat 25% black over the photograph. The export already carries the
          node's own scrim gradients; this sits on top of them. */}
      <div className={s.heroTint} aria-hidden="true" />

      {/* Opens on load, over everything else in the banner. */}
      <Blinder />

      {/* .heroTitle centres the stack in the band; .heroInner is the column. */}
      <div className={s.heroTitle}>
        <div className={s.heroInner}>
          {/* Decorative: the heading below names both, so the row is hidden
              from assistive tech rather than read as two nouns. */}
          <div className={s.heroIcons} aria-hidden="true">
            <PawPrint />
            <OpenBook />
          </div>

          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label="Institute of animal care & Management"
          >
            <WaveText text={"Institute of\nanimal care & Management"} />
          </h1>

          <p className={`${s.heroLede} wf-body-l`}>
            The Institute of Animal Care and Management is where the enclosure is
            the classroom and the animals are the curriculum. Founded in 2021, LSeT
            is India&rsquo;s only residential institute for exotic animal care
            education, built on a working farm in Bengaluru. We train skilled,
            ethical animal care professionals through immersive, hands-on learning
            guided by international faculty and 200+ species, all under one roof.
          </p>

          {/* Decorative flourish under the subtext. */}
          <Leaves className={s.heroLeaves} />
        </div>
      </div>

      <ScrollCue href="#edu-partners" label="Scroll to our education partners" />
    </section>
  );
}
