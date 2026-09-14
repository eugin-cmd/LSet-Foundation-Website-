import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import WaveText from "@/components/WaveText/WaveText";
import CuppedHands from "@/components/icons/CuppedHands";
import s from "./About.module.css";

/**
 * The About banner.
 *
 * The same band the other section pages wear: shared height, flat tint, the
 * two scrim stops, the blinder, the icon drop, the holographic heading and the
 * load wave, with a kicker above it as the Our Work banner has. Nothing here
 * is new; it is that banner with this page's photograph and words.
 *
 * Cupped hands rather than a globe or a leaf: the page is about the people who
 * do this work, and that mark is already the education board's for care given
 * by hand.
 */
export default function AboutHero() {
  return (
    <section className={s.hero}>
      <div className={s.heroTint} aria-hidden="true" />
      <div className={s.heroScrim} aria-hidden="true" />

      <Blinder />

      <div className={s.heroTitle}>
        <div className={s.heroInner}>
          <div className={s.heroIcons} aria-hidden="true">
            <CuppedHands />
          </div>

          <p className={`${s.heroKicker} wf-subtitle wf-dotted`}>ABOUT US</p>

          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label="One mission, four pillars"
          >
            <WaveText text={"One mission, four pillars"} />
          </h1>

          <p className={`${s.heroLede} wf-body-l`}>
            Educators, technologists, biologists, veterinarians, architects and
            animal care professionals, working on the same problems from
            different sides.
          </p>
        </div>
      </div>

      <ScrollCue href="#why-we-exist" label="Scroll to why we exist" />
    </section>
  );
}
