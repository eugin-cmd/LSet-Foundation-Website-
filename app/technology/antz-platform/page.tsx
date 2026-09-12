import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  ANTZ_PLATFORM,
  ANTZ_PRODUCTS,
} from "@/components/Project/antzProducts.data";

export const metadata: Metadata = {
  title: "Antz Platform — LSeT Foundation",
  description:
    "The operating system a zoo runs on every day — one record per animal, from accession to outcome, with reporting for AZA, EAZA, BIAZA, CITES and studbooks.",
};

/**
 * Condensed from antzsystems.com/antz-platform.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * product set instead of the projects — so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own, not a second
 * implementation that would drift from them.
 */
export default function AntzPlatformPage() {
  const set = {
    base: "/technology",
    order: ANTZ_PRODUCTS,
    backLabel: "Antz Systems",
    pagerLabel: "Antz products",
  };

  return (
    <>
      <main>
        <ProjectHero project={ANTZ_PLATFORM} {...set} />
        <MeshField>
          <ProjectBody project={ANTZ_PLATFORM} />
          <ProjectGallery project={ANTZ_PLATFORM} />
          <ProjectNeighbours
            project={ANTZ_PLATFORM}
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
