import LeafSprig from "@/components/icons/LeafSprig";
import s from "./LeafStatement.module.css";

/**
 * Figma node 2124:9475 ("Frame 1984078220") from `Desktop - 4`, 1440x482 — a
 * centred column: a dotted kicker, a paragraph or two, and the leaf sprig
 * closing it.
 *
 * Built for the homepage's "Who we are", under the partner logos, and since
 * lifted out of it so the education page can carry the same band above its
 * campus photograph. The two are the same block with different words, which
 * is the point: a second copy of this markup would drift from it the first
 * time either was touched.
 *
 * Sets no background — both callers place it on a <MeshField>, and anything
 * opaque here paints the mesh out.
 */
export default function LeafStatement({
  id,
  kicker,
  paragraphs,
}: {
  id: string;
  kicker: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} className={s.who}>
      <div className={s.inner}>
        {/* Figma keeps the kicker and the paragraphs in one frame with 24px
            between them, and puts only 6px between that frame and the leaf.
            Nesting it the same way is what makes the two gaps independent. */}
        <div className={s.head}>
          <p className={`${s.kicker} wf-subtitle wf-dotted`}>{kicker}</p>

          <div className={s.copy}>
            {paragraphs.map((para) => (
              <p className={s.para} key={para}>
                {para}
              </p>
            ))}
          </div>
        </div>

        <LeafSprig className={s.sprig} />
      </div>
    </section>
  );
}
