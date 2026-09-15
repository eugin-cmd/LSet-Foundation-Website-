import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  ANTZ_TRAILS,
  ANTZ_PRODUCTS,
} from "@/components/Project/antzProducts.data";

export const metadata: Metadata = {
  title: "Antz Trails | LSeT Foundation",
  description:
    "The AI companion a visitor carries through the zoo: a planned day before they arrive, and an exhibit that answers for itself at the fence.",
};

/**
 * Condensed from antzsystems.com/antz-trails.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * product set instead of the projects — so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own, not a second
 * implementation that would drift from them.
 */
export default function TrailsPage() {
  const set = {
    base: "/technology",
    order: ANTZ_PRODUCTS,
    backLabel: "Antz Systems",
    pagerLabel: "Antz products",
  };

  return (
    <>
      <main>
        <ProjectHero project={ANTZ_TRAILS} {...set} />
        <MeshField>
          <ProjectBody project={ANTZ_TRAILS} />
          <ProjectGallery project={ANTZ_TRAILS} />
          <ProjectNeighbours
            project={ANTZ_TRAILS}
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
