import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import WaveText from "@/components/WaveText/WaveText";
import CuppedHands from "@/components/icons/CuppedHands";
import OpenBook from "@/components/icons/OpenBook";
import NodeNetwork from "@/components/icons/NodeNetwork";
import Leaf from "@/components/icons/Leaf";
import HabitatPlan from "@/components/icons/HabitatPlan";
import s from "./About.module.css";

/** The four the banner heading counts. The same four the homepage's "Who we
 *  are" names, in the same order.
 *
 *  Three of the marks are the ones the homepage's own pillars board gives
 *  them, so a pillar wears the same drawing wherever it is named. Living
 *  systems design has no board row, so it has a mark of its own: two blocks
 *  of different size on a ground line, which says designed where the other
 *  three say taught, connected and grown. */
const PILLARS = [
  { label: "Education", Icon: OpenBook },
  { label: "Technology", Icon: NodeNetwork },
  { label: "Conservation", Icon: Leaf },
  { label: "Living systems design", Icon: HabitatPlan },
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
            aria-label="One mission. Four pillars."
          >
            <WaveText text={"One mission. Four pillars."} />
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
        </div>
      </div>

      <ScrollCue href="#why-we-exist" label="Scroll to why we exist" />
    </section>
  );
}
