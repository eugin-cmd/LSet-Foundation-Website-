import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  ANTZ_EDGE,
  ANTZ_PRODUCTS,
} from "@/components/Project/antzProducts.data";

export const metadata: Metadata = {
  title: "Antz Edge — LSeT Foundation",
  description:
    "On-premises AI for wildlife monitoring — species identification and behaviour analysis running locally on a low-power device, with no network required.",
};

/**
 * Condensed from antzsystems.com/antz-edge.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * product set instead of the projects — so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own, not a second
 * implementation that would drift from them.
 */
export default function EdgePage() {
  const set = {
    base: "/technology",
    order: ANTZ_PRODUCTS,
    backLabel: "Antz Systems",
    pagerLabel: "Antz products",
  };

  return (
    <>
      <main>
        <ProjectHero project={ANTZ_EDGE} {...set} />
        <MeshField>
          <ProjectBody project={ANTZ_EDGE} />
          <ProjectGallery project={ANTZ_EDGE} />
          <ProjectNeighbours
            project={ANTZ_EDGE}
            base="/technology"
            order={ANTZ_PRODUCTS}
            label="Other Antz products"
          />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
