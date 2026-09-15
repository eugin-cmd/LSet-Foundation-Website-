import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import { BROAD_TOOTHED_RAT } from "@/components/Project/project.data";

export const metadata: Metadata = {
  title: "Broad-toothed Rat | LSeT Foundation",
  description:
    "An AI model automating day-to-day monitoring of the world's first successful captive breeding programme for the Broad-toothed Rat, with Aussie Ark at Barrington Tops.",
};

/**
 * Figma `Broad-toothed Rat`, node 1738:185363 — content area only.
 *
 * The fifth and last of the project pages, and the fifth built from the same
 * record-in/components-out shape. Every row on Our Work now leads somewhere.
 */
export default function BroadToothedRatPage() {
  return (
    <>
      <main>
        <ProjectHero project={BROAD_TOOTHED_RAT} />
        <MeshField>
          <ProjectBody project={BROAD_TOOTHED_RAT} />
          <ProjectGallery project={BROAD_TOOTHED_RAT} />
          <ProjectNeighbours project={BROAD_TOOTHED_RAT} />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
