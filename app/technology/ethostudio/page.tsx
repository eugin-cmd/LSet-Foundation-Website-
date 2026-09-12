import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  ANTZ_ETHOSTUDIO,
  ANTZ_PRODUCTS,
} from "@/components/Project/antzProducts.data";

export const metadata: Metadata = {
  title: "EthoStudio — LSeT Foundation",
  description:
    "Keeper-trained behaviour and recognition AI: design the study, build the ethogram, label the footage, and train a model on your own species.",
};

/**
 * Condensed from antzsystems.com/antz-ethostudio.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * product set instead of the projects — so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own, not a second
 * implementation that would drift from them.
 */
export default function EthostudioPage() {
  const set = {
    base: "/technology",
    order: ANTZ_PRODUCTS,
    backLabel: "Antz Systems",
    pagerLabel: "Antz products",
  };

  return (
    <>
      <main>
        <ProjectHero project={ANTZ_ETHOSTUDIO} {...set} />
        <MeshField>
          <ProjectBody project={ANTZ_ETHOSTUDIO} />
          <ProjectGallery project={ANTZ_ETHOSTUDIO} />
          <ProjectNeighbours
            project={ANTZ_ETHOSTUDIO}
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
