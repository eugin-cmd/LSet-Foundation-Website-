import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import { SIAMANG_GIBBON } from "@/components/Project/project.data";

export const metadata: Metadata = {
  title: "Siamang Gibbon — LSeT Foundation",
  description:
    "Solar-powered forest recorders and SonicDNA voiceprint mapping to find released gibbons by their calls in Southern Sumatra and Java, with The Aspinall Foundation.",
};

/**
 * Figma `Siamang Gibbon`, node 1738:184970 — content area only.
 *
 * The third page on the same template, and identical in shape to its two
 * siblings: a record in, the shared <Project*> components out. Nothing in
 * components/Project was added for it.
 */
export default function SiamangGibbonPage() {
  return (
    <>
      <main>
        <ProjectHero project={SIAMANG_GIBBON} />
        <MeshField>
          <ProjectBody project={SIAMANG_GIBBON} />
          <ProjectGallery project={SIAMANG_GIBBON} />
          <ProjectNeighbours project={SIAMANG_GIBBON} />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
