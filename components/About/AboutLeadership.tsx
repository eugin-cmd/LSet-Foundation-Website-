import WaveRule from "@/components/WaveRule/WaveRule";
import { TEAM } from "./about.data";
import s from "./About.module.css";

/**
 * The team, laid out as the institute's own About page lays it out: a grid of
 * portrait tiles, four across, each with the person's name and title under it.
 *
 * Their proportions, kept: a 225.33 x 281.67 tile at a 12.61px radius, which
 * is a 0.8 ratio, and the name above the role rather than beside it. What is
 * ours is the type and the ink, so the grid reads as part of this page rather
 * than as a panel lifted from another site.
 *
 * It was the card slider before. Ten people paged three at a time meant the
 * team was something a reader had to operate; a grid is the whole council at
 * once, which is what an About page is for.
 */
export default function AboutLeadership() {
  return (
    <section id="who-leads" className={s.people} aria-label="The team">
      <WaveRule className={s.peopleRule} />

      <div className={s.peopleHead}>
        <p className={`${s.peopleKicker} wf-subtitle wf-dotted`}>THE TEAM</p>
        <h2 className={`${s.peopleTitle} wf-display-l`}>Our Team</h2>
      </div>

      <ul className={s.grid}>
        {TEAM.map((member) => (
          <li className={s.member} key={member.name}>
            {/* The portrait is the person named directly below it, so it is
                hidden rather than read out as a second copy of the name. */}
            <div className={s.memberFrame}>
              <img
                src={member.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={226}
                height={282}
              />
            </div>
            <p className={s.memberName}>{member.name}</p>
            <p className={s.memberRole}>{member.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
