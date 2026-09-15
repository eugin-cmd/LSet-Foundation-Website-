import { LEADERS } from "./about.data";
import s from "./About.module.css";

/**
 * The founder and the honorary director, each with a section of their own
 * above the team grid — the arrangement the institute's own About page uses,
 * and for the same reason: these two are the account of why the place exists,
 * which a 225px tile cannot carry.
 *
 * Their layout too: the words beside a 4:5 portrait at a 20px radius, and the
 * second block mirrored so the two portraits sit on opposite sides. The type
 * and the ink are this site's.
 */
export default function AboutLeaders() {
  return (
    <section className={s.leaders} aria-label="Founder and honorary director">
      <div className={s.leadersInner}>
        {LEADERS.map((leader, i) => (
          <article
            className={s.leader}
            /* The second mirrors, so the page alternates rather than running
               two identical rows. Attribute rather than a second class: it is
               one property of this block, not a different kind of block. */
            data-mirrored={i % 2 === 1 ? "true" : undefined}
            key={leader.name}
          >
            <div className={s.leaderText}>
              <h3 className={s.leaderName}>{leader.name}</h3>
              <p className={s.leaderRole}>{leader.role}</p>
              <div className={s.leaderBody}>
                {leader.body.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
            </div>

            {/* The heading directly beside it names the person, so the
                portrait is hidden rather than read as a second copy. */}
            <div className={s.leaderPortrait}>
              <img
                src={leader.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={480}
                height={600}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
