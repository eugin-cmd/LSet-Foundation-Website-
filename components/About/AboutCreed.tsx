import { CREED, STANDS_FOR } from "./about.data";
import s from "./About.module.css";

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
          {CREED.map((block) => (
            <div className={s.creedBlock} key={block.kicker}>
              <p className={s.creedKicker}>{block.kicker}</p>
              <p className={s.creedBody}>{block.body}</p>
            </div>
          ))}
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
