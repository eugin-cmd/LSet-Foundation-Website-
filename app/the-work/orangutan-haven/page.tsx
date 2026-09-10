import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import { ORANGUTAN_HAVEN } from "@/components/Project/project.data";

export const metadata: Metadata = {
  title: "Orangutan Haven — LSeT Foundation",
  description:
    "The ANTZ Management Platform for sanctuary records and health tracking, with a Raspberry Pi music enrichment system on a tactile lever, at PT Orangutan Haven in Sumatra.",
};

/**
 * Figma `Orangutan Haven`, node 1738:185229 — content area only.
 *
 * The fourth page on the same template. As with its three siblings: a record
 * in, the shared <Project*> components out, nothing added to build it.
 */
export default function OrangutanHavenPage() {
  return (
    <>
      <main>
        <ProjectHero project={ORANGUTAN_HAVEN} />
        <MeshField>
          <ProjectBody project={ORANGUTAN_HAVEN} />
          <ProjectGallery project={ORANGUTAN_HAVEN} />
          <ProjectNeighbours project={ORANGUTAN_HAVEN} />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
