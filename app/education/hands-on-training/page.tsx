import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectGallery from "@/components/Project/ProjectGallery";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  EDU_HANDS_ON,
  EDUCATION_TOPICS,
} from "@/components/Project/educationTopics.data";

export const metadata: Metadata = {
  title: "Hands-On Training — LSeT Education",
  description:
    "Daily husbandry, enrichment and handling practised on a working farm in Bengaluru, 6am to 6pm, from the first week.",
};

/**
 * Reached from "Know More" on the education accordion's own row.
 *
 * Condensed from lifesciencetrust.org, the institute's own campus and course pages.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * education set instead of the projects, so the mast, the parallax, the pager,
 * the carousel and the neighbour cards are the site's own rather than a third
 * implementation that would drift from them.
 */
export default function HandsOnTrainingPage() {
  const set = {
    base: "/education",
    order: EDUCATION_TOPICS,
    backLabel: "Education",
    pagerLabel: "Education",
  };

  return (
    <>
      <main>
        <ProjectHero project={EDU_HANDS_ON} {...set} />
        <MeshField>
          <ProjectBody project={EDU_HANDS_ON} />
          <ProjectGallery project={EDU_HANDS_ON} />
          <ProjectNeighbours
            project={EDU_HANDS_ON}
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
