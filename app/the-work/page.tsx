import type { Metadata } from "next";
import WorkHero from "@/components/Work/WorkHero";
import WorkRows from "@/components/Work/WorkRows";
import MeshField from "@/components/MeshField/MeshField";

export const metadata: Metadata = {
  title: "Our Work — LSeT Foundation",
  description:
    "Every project prototyped, deployed, and in use by the partner who asked for it. Five species programmes across Bhutan, Mauritania, Sumatra and Australia.",
};

/**
 * Figma `Our Work — Desktop 1444`, node 1738:184516 — content area only.
 *
 * The nav calls this Our Work, as Figma's own frame and header kicker do.
 * The route stays /the-work, which is what the nav pointed at before the
 * label changed — renaming it would break any link already shared for the
 * cost of matching a word. It replaces the
 * nav's old "/#the-work" target, which pointed at the homepage's <ProofWall>
 * arc; that section keeps its id and its place on the homepage, and now reads
 * as the teaser for this page rather than as the whole of it.
 *
 * One <MeshField> around the rows, matching the other three pages: the band is
 * a single light run between a dark banner and the dark footer, so nothing
 * else needs wrapping.
 */
export default function TheWorkPage() {
  return (
    <>
      <main>
        <WorkHero />
        <MeshField>
          <WorkRows />
        </MeshField>
      </main>
    </>
  );
}
