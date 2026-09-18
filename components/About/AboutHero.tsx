import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import Leaves from "@/components/icons/Leaves";
import WaveText from "@/components/WaveText/WaveText";
import CuppedHands from "@/components/icons/CuppedHands";
import OpenBook from "@/components/icons/OpenBook";
import NodeNetwork from "@/components/icons/NodeNetwork";
import Leaf from "@/components/icons/Leaf";
import s from "./About.module.css";

/** The four the banner heading counts. The same four the homepage's "Who we
 *  are" names, in the same order.
 *
 *  The marks are the ones the homepage's own pillars board gives them, so a
 *  pillar wears the same drawing wherever it is named. There were four: living
 *  systems design had no board row and carried a mark of its own, two blocks on
 *  a ground line. It has been dropped, by direction, and the row is the board's
 *  three. <HabitatPlan> is now unused. */
const PILLARS = [
  { label: "Education", Icon: OpenBook },
  { label: "Technology", Icon: NodeNetwork },
  { label: "Conservation", Icon: Leaf },
];

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
            aria-label="One mission. Three pillars."
          >
            <WaveText text={"One mission. Three pillars."} />
          </h1>

          {/* The four the heading counts, named. A list rather than a
              sentence with dots typed into it: these are four things, and a
              screen reader should meet them as four.

              The separators are U+00B7, which sits on the type's own middle
              rather than the baseline, so it reads as centred against the
              words either side of it. */}
          <ul className={s.heroPillars}>
            {PILLARS.map(({ label, Icon }) => (
              <li key={label}>
                {/* Decorative: the word it sits beside is the pillar's name,
                    so the mark is hidden rather than read before it. */}
                <span className={s.heroPillarIcon} aria-hidden="true">
                  <Icon />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <p className={`${s.heroLede} wf-body-l`}>
            Educators, technologists, biologists, veterinarians, architects and
            animal care professionals, working on the same problems from
            different sides.
          </p>

          {/* The flourish that closes every other banner's copy column. This
              one was the odd banner out. Nothing is configured here on
              purpose: <Leaves /> owns its size, its white, and its rise-then-
              stir on load, so every banner gets the identical thing by
              rendering it and knowing nothing else. */}
          <Leaves />
        </div>
      </div>

      <ScrollCue href="#why-we-exist" label="Scroll to why we exist" />
    </section>
  );
}
