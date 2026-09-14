import type { Metadata } from "next";
import AboutHero from "@/components/About/AboutHero";
import AboutStory from "@/components/About/AboutStory";
import AboutCreed from "@/components/About/AboutCreed";
import AboutLeadership from "@/components/About/AboutLeadership";
import AboutQuote from "@/components/About/AboutQuote";
import PartnersStrip from "@/components/PartnersStrip/PartnersStrip";
import CtaBand from "@/components/CtaBand/CtaBand";
import MeshField from "@/components/MeshField/MeshField";

export const metadata: Metadata = {
  title: "About Us — LSeT Foundation",
  description:
    "One mission across four pillars: education, technology, conservation and living systems design. The council and faculty behind the Institute of Animal Care and Management, and the work it puts into the field.",
};

/**
 * About Us.
 *
 * No Figma frame: the page is assembled from the bands the site already has,
 * which is the point — an About page that introduced a new layout would be the
 * one page that does not look like the rest of the site it is describing.
 *
 * Content is drawn from this site's own pages for the Foundation's shape, and
 * from lifesciencetrust.org for the institute's mission, vision, values, the
 * people and the graduate's account.
 *
 * One light run from the banner to the closing band. It was two, with the
 * stats band dark between them; with that gone the two fields would have met
 * each other, and each <MeshField> is anchored to its own box — two neighbours
 * painting their own mesh leave a visible step where they meet. So they are
 * one field, and a dark band is the only thing that would justify splitting
 * them again.
 */
export default function AboutPage() {
  return (
    <>
      <main>
        <AboutHero />
        {/* The homepage's own opening: the partner logos directly under the
            banner, closed by the wave rule they carry, and the band of copy
            below them. One <MeshField> around both, because the mesh is
            anchored to its own box and two neighbours painting their own leave
            a visible step where they meet. */}
        <MeshField>
          <PartnersStrip />
          <AboutStory />
          <AboutCreed />
          <AboutLeadership />
          <AboutQuote />
        </MeshField>
        <CtaBand />
      </main>
    </>
  );
}
