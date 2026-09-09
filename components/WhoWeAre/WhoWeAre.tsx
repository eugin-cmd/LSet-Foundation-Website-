import LeafSprig from "@/components/icons/LeafSprig";
import s from "./WhoWeAre.module.css";

/**
 * Figma node 2124:9475 ("Frame 1984078220") from `Desktop - 4`, 1440x482.
 *
 * Sits on the <MeshField> with the partners strip above it, so it sets no
 * background of its own — a white background here would paint over the mesh.
 */
export default function WhoWeAre() {
  return (
    <section id="who-we-are" className={s.who}>
      <div className={s.inner}>
        {/* Figma keeps the kicker and the paragraphs in one frame with 24px
            between them, and puts only 6px between that frame and the leaf.
            Nesting it the same way is what makes the two gaps independent. */}
        <div className={s.head}>
          <p className={`${s.kicker} wf-subtitle wf-dotted`}>WHO WE ARE</p>

          <div className={s.copy}>
            <p className={s.para}>
              The LSeT Foundation is a multidisciplinary organisation dedicated to
              the advancement of life science across four interconnected
              pillars: education, technology, conservation, and living systems
              design.
            </p>
            <p className={s.para}>
              Founded on the belief that conservation challenges demand
              integrated solutions, we bring together educators, technologists,
              biologists, veterinarians, architects, and animal care
              professionals under one unified mission.
            </p>
          </div>
        </div>

        <LeafSprig className={s.sprig} />
      </div>
    </section>
  );
}
