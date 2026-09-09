import ProofCard from "./ProofCard";
import { PROOF_CARDS } from "./proofWall.data";
import s from "./ProofWall.module.css";

export default function ProofWall() {
  return (
    /* id is the nav's "The Work" destination. */
    <section id="the-work" className={s.proof}>
      {/* .track is twice the viewport tall and drives the scroll timeline;
          .stage pins inside it. Below the arc breakpoint both collapse and
          .wheel is the Figma rail again. */}
      <div className={s.track}>
        <div className={s.stage}>
          <div className={s.heading}>
            <p className={`${s.kicker} wf-subtitle wf-dotted`}>Real Species Real Timeline</p>
            <div className={s.titleWrap}>
              <div className={s.titleClip}>
                <h2 className={`${s.title} wf-display-xl`}>The Proof Wall.</h2>
              </div>
            </div>
          </div>

          <div className={s.wheel}>
            {PROOF_CARDS.map((card) => (
              /* Each pivot is a zero-size point at the centre of a shared
                 circle; its card hangs at the top of that circle, so rotating
                 the pivot swings the card along the arc. */
              <div className={s.pivot} key={card.href}>
                <ProofCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
