import { WORK_PROJECTS } from "./work.data";
import s from "./Work.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma node 1738:184542 — five project rows, copy left and photograph right.
 *
 * A list, not a stack of sections: the rows are one repeating record, and the
 * hairline that separates them is Figma's own `border-top` on each row rather
 * than a divider element, so the first row carries no rule and the set cannot
 * end on a dangling one.
 *
 * <ol> because the wall is ordered — Figma leads on the heron and the sequence
 * is the editorial one. The marker is suppressed in CSS; the number is not
 * shown, which is why the status chip carries a spelt-out label instead of
 * standing in as an index.
 */
export default function WorkRows() {
  return (
    <section id="projects" className={s.rows} aria-labelledby="projects-title">
      {/* The band is titled by the banner's own h1, so this heading exists for
          the landmark and is not painted. */}
      <h2 id="projects-title" className={s.srOnly}>
        Projects
      </h2>

      <ol className={s.list}>
        {WORK_PROJECTS.map((p) => (
          <li className={s.row} key={p.title}>
            <div className={s.copy}>
              <div className={s.copyInner}>
                <div className={s.meta}>
                  {/* The IUCN code is the visible chip; the full phrase is what
                      assistive tech reads, since "CR" alone is opaque. */}
                  <span className={s.status}>
                    <span aria-hidden="true">{p.status}</span>
                    <span className={s.srOnly}>{p.statusLabel}</span>
                  </span>
                  <span className={s.location}>{p.location}</span>
                </div>

                <h3 className={`${s.title} wf-display-l`}>{p.title}</h3>

                <p className={s.body}>{p.description}</p>
              </div>

              <a href={p.href} className={s.cta}>
                View Project <LinkArrow />
                <span className={s.srOnly}>: {p.title}</span>
              </a>
            </div>

            {/* The photograph is a second way into the project, by direction.
                A plain link, not an aria-hidden one: hiding it would take the
                whole subtree out of the accessibility tree with it, silently
                costing the photograph's alt text and the "Active Project"
                badge. The <img> alt names this link, so it announces as the
                species rather than as a second bare "View Project". */}
            <a href={p.href} className={s.figure}>
              {/* Figma's own 619x356 crop per card, exported at 2x. The photos
                  are content here — each names its species — so they carry alt
                  text rather than being hidden. */}
              <img
                className={s.photo}
                src={p.image}
                alt={p.imageAlt}
                width={1238}
                height={712}
                loading="lazy"
                decoding="async"
              />

              {p.active && <span className={s.badge}>Active Project</span>}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
