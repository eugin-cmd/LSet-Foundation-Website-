import { COURSES } from "./education.data";
import s from "./Education.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma node 1962:12752 — "Our Courses" on surface/darker. The partner strip
 * that followed it here (1965:21318) now sits under the banner, in
 * EducationPartners.
 *
 * The cards are the same 457.183 x 304.789 construction as the Proof Wall's:
 * one photo behind the whole card, an uncovered media area, then a scrimmed
 * body. Figma starts the row at x 301.77 so the third card runs off the right
 * edge, as the Proof Wall's does.
 */
export default function EducationCourses() {
  return (
    <section id="courses" className={s.courses}>
      {/* Same construction as the Proof Wall's: .coursesTrack is twice the
          viewport tall and drives the scroll timeline, .coursesStage pins
          inside it. Below the arc's breakpoint both collapse and .rail is the
          Figma rail again. */}
      <div className={s.coursesTrack}>
        <div className={s.coursesStage}>
          <div className={s.coursesHead}>
            <p className={`${s.coursesKicker} wf-subtitle wf-dotted`}>
              Real Courses. Real Careers.
            </p>
            <h2 className={`${s.coursesTitle} wf-display-xl`}>our courses</h2>
          </div>

          <div className={s.rail}>
            {COURSES.map((course) => (
              /* Each pivot is a zero-size point at the centre of a shared
                 circle; its card hangs at the top of that circle, so rotating
                 the pivot swings the card along the arc. */
              <div className={s.pivot} key={course.href}>
                <article className={`${s.card} wf-holo-edge`}>
                  {/* Out to the course's own page on the institute's site,
                      which holds the syllabus, the intake dates and the
                      application. Marked the way every other outbound link
                      here is: new tab, and said so for a screen reader rather
                      than left to be discovered. */}
                  <a
                    href={course.href}
                    className={s.cardHit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={s.cardBg} aria-hidden="true">
                      <img src={course.image} alt="" />
                    </div>

                    <div className={s.cardMedia} />

                    <div className={s.cardBody}>
                      <p className={`${s.cardDuration} wf-small`}>
                        {course.duration}
                      </p>
                      <h3 className={`${s.cardTitle} wf-display-l`}>
                        {course.titleLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </h3>
                      <p className={`${s.cardDesc} wf-body`}>
                        {course.description}
                      </p>
                      <span className={`${s.cardLink} wf-small`}>
                        View Course <LinkArrow />
                      </span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </div>
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
