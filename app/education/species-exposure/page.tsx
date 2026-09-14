import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  EDU_SPECIES,
  EDUCATION_TOPICS,
} from "@/components/Project/educationTopics.data";

export const metadata: Metadata = {
  title: "Species Exposure — LSeT Education",
  description:
    "Over 200 species on one working farm, from small captive mammals to birds, reptiles and primates, with the breeding and welfare research they support.",
};

/**
 * Reached from "Know More" on the education accordion's own row.
 *
 * Condensed from lifesciencetrust.org, the institute's own research pages.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * education set instead of the projects, so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own rather than a third
 * implementation that would drift from them.
 */
export default function SpeciesExposurePage() {
  const set = {
    base: "/education",
    order: EDUCATION_TOPICS,
    backLabel: "Education",
    pagerLabel: "Education",
  };

  return (
    <>
      <main>
        <ProjectHero project={EDU_SPECIES} {...set} />
        <MeshField>
          <ProjectBody project={EDU_SPECIES} />
          <ProjectGallery project={EDU_SPECIES} />
          <ProjectNeighbours
            project={EDU_SPECIES}
            base="/education"
            order={EDUCATION_TOPICS}
            label="More on the institute"
          />
          <ProjectCta />
        </MeshField>
      </main>
    </>
  );
}
