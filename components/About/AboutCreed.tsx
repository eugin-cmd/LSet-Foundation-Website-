import OpenBook from "@/components/icons/OpenBook";
import ObservationEye from "@/components/icons/ObservationEye";
import ComplianceShield from "@/components/icons/ComplianceShield";
import { CREED, STANDS_FOR } from "./about.data";
import s from "./About.module.css";

/** The data names a mark; this is where the name becomes a component, so the
 *  data file stays free of imports.
 *
 *  A book for the mission, because the mission here IS education: training
 *  practitioners is the whole of it. An eye for the vision, the one mark in
 *  this set with no straight edges. A shield with a tick for the values, which
 *  are a statement about standards held rather than about care given. All
 *  three are outline marks, so the row reads as one set. */
const ICONS = {
  mission: OpenBook,
  vision: ObservationEye,
  values: ComplianceShield,
};

/**
 * Mission, vision and values, in the three-block shape the project pages give
 * their prose: a small kicker over a paragraph, three across at full width and
 * stacked below it.
 *
 * The four things the institute states it stands for close the section as a
 * row of their own. They are a summary of the values paragraph above them
 * rather than four new claims, which is why they are set as labels and not as
 * a fourth block.
 */
export default function AboutCreed() {
  return (
    <section className={s.creed} aria-label="Mission, vision and values">
      <div className={s.creedInner}>
        <div className={s.creedBlocks}>
          {CREED.map((block) => {
            const Icon = ICONS[block.key];
            return (
              <div className={s.creedBlock} key={block.kicker}>
                {/* Decorative: the kicker under it names the block, so the
                    mark is hidden rather than read as a stray noun before
                    every heading. */}
                <span className={s.creedIcon} aria-hidden="true">
                  <Icon />
                </span>
                <p className={s.creedKicker}>{block.kicker}</p>
                <p className={s.creedBody}>{block.body}</p>
              </div>
            );
          })}
        </div>

        <ul className={s.stands}>
          {STANDS_FOR.map((item) => (
            <li className={s.standsItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
