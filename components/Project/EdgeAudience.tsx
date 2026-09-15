import WaveRule from "@/components/WaveRule/WaveRule";
import { EDGE_AUDIENCE } from "./edgeAudience.data";
import s from "./Project.module.css";

/**
 * "Who it's for" — the five places Antz Edge is deployed, in the stacked cards
 * antzsystems.com/antz-edge runs them in.
 *
 * The stack is the point: each card is sticky, pinned a little lower than the
 * one before it and stacked a little higher, so scrolling deals them onto each
 * other rather than scrolling them past. It is pure CSS — `position: sticky`
 * with a stepped `top` and `z-index` — so it needs no script and degrades to a
 * plain column wherever sticky is unavailable.
 *
 * It replaces the photo carousel on this page, by direction.
 */
export default function EdgeAudience() {
  return (
    <section className={s.audience} aria-labelledby="edge-audience">
      <WaveRule className={s.rule} />

      <div className={s.audienceHead}>
        <p className={`${s.audienceKicker} wf-subtitle wf-dotted`}>
          WHO IT&rsquo;S FOR
        </p>
        <h2 id="edge-audience" className={`${s.audienceTitle} wf-display-l`}>
          Deployment environments
        </h2>
        <p className={`${s.audienceLede} wf-body-l`}>
          On-premises processing at the site itself, which is what makes it work
          in the places conventional networks do not reach.
        </p>
      </div>

      <div className={s.audienceStack}>
        {EDGE_AUDIENCE.map((item, i) => (
          <article
            className={s.audienceCard}
            key={item.slug}
            /* The step for this card's sticky offset and its stacking order.
               One property, read by both, so a sixth entry needs no new CSS. */
            style={{ "--i": i } as React.CSSProperties}
          >
            <img
              className={s.audiencePhoto}
              src={`/assets/antz/edge-apps/${item.slug}.webp`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1400}
              height={788}
            />
            <span className={s.audienceScrim} aria-hidden="true" />

            <div className={s.audienceBody}>
              <div className={s.audienceLead}>
                <img
                  className={s.audienceIcon}
                  src={`/assets/antz/edge-apps/icon-${item.slug}.svg`}
                  alt=""
                  aria-hidden="true"
                  width={90}
                  height={90}
                />
                <div>
                  <p className={`${s.audienceEyebrow} wf-small`}>Designed for</p>
                  <h3 className={s.audienceName}>{item.title}</h3>
                </div>
              </div>

              {/* The glass panel their cards carry, and the same construction
                  the contact page's fields use. */}
              <div className={s.audiencePanel}>
                <p className="wf-body-l">{item.body}</p>
                <span className={s.audienceRule} aria-hidden="true" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
