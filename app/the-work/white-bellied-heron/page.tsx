import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import { WHITE_BELLIED_HERON } from "@/components/Project/project.data";

export const metadata: Metadata = {
  title: "White-Bellied Heron | LSeT Foundation",
  description:
    "Drone-flown bird diverters on live transmission lines in Bhutan, with the Royal Society for the Protection of Nature, protecting the last breeding population of the White-bellied Heron.",
};

/**
 * Figma `White-Bellied Heron`, node 1738:184704 — content area only.
 *
 * Nested under /the-work rather than sitting at /white-bellied-heron, so the
 * banner's "← All projects" is a real parent link and the URL says where the
 * page belongs. It is reached from two places: the heron card on the homepage
 * <ProofWall> arc, and the heron row's "View Project" on Our Work — both of
 * which pointed at placeholder anchors until this page existed.
 *
 * One <MeshField> around the light run, as on all four other pages: the banner
 * above is dark and the footer below is dark, so the three light sections
 * between them are a single run and nothing else needs wrapping.
 */
export default function WhiteBelliedHeronPage() {
  return (
    <>
      <main>
        <ProjectHero project={WHITE_BELLIED_HERON} />
        <MeshField>
          <ProjectBody project={WHITE_BELLIED_HERON} />
          <ProjectGallery project={WHITE_BELLIED_HERON} />
          <ProjectNeighbours project={WHITE_BELLIED_HERON} />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
