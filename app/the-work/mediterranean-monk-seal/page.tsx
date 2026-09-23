import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import { MEDITERRANEAN_MONK_SEAL } from "@/components/Project/project.data";

export const metadata: Metadata = {
  title: "Mediterranean Monk Seal | LSeT Foundation",
  description:
    "A computer-vision model that identifies every Mediterranean Monk Seal by its natural markings at Cap Blanc, Mauritania, the species' last major breeding site, with CBD-Hábitat.",
};

/**
 * Figma `Mediterranean Monk Seal`, node 1738:184838 — content area only.
 *
 * Identical in structure to the heron page, deliberately: the two are the same
 * template with different words, so this file differs from its sibling only in
 * the record it passes and the words in its metadata. Nothing in
 * components/Project was touched to add it.
 */
export default function MediterraneanMonkSealPage() {
  return (
    <>
      <main>
        <ProjectHero project={MEDITERRANEAN_MONK_SEAL} />
        <MeshField>
          <ProjectBody project={MEDITERRANEAN_MONK_SEAL} />
          {/* No <ProjectGallery> here, by direction. The record's photographs
              are left in place in project.data.ts — nothing else reads them,
              and deleting them would throw away the captions with the files. */}
          <ProjectNeighbours project={MEDITERRANEAN_MONK_SEAL} />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
