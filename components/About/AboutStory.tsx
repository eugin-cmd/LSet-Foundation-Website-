import LeafStatement from "@/components/LeafStatement/LeafStatement";
import WaveRule from "@/components/WaveRule/WaveRule";
import s from "./About.module.css";

/**
 * The band under the banner: the same block the homepage carries under its
 * partner logos and the education page under its own, with this page's words.
 *
 * It says why the Foundation is one organisation rather than three, which is
 * the question an About page exists to answer and the one the homepage's
 * "Who we are" only has room to state.
 */
export default function AboutStory() {
  return (
    <>
      <LeafStatement
        id="why-we-exist"
        kicker="WHY WE EXIST"
        paragraphs={[
          "Conservation problems do not arrive sorted by discipline. A heron colliding with a transmission line is an engineering problem, a monitoring problem, a training problem and a partnership problem at once, and answering only one of them changes nothing on the ground.",
          "So the LSeT Foundation works across three connected pillars: education, technology and conservation. The people who train animal care professionals are the people who build the software zoos run on, and who fly the diverters that keep herons off the lines.",
        ]}
      />

      {/* The squiggle closing this band, as it closes the partner strip above
          it. Here rather than inside <LeafStatement>: that component is shared
          with the homepage and the education page, and neither of those wants
          a rule under it. */}
      <WaveRule className={s.storyRule} />
    </>
  );
}
