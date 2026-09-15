import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import ProjectHero from "@/components/Project/ProjectHero";
import ProjectBody from "@/components/Project/ProjectBody";
import ProjectNeighbours from "@/components/Project/ProjectNeighbours";
import ProjectCta from "@/components/Project/ProjectCta";
import {
  EDU_FACULTY,
  EDUCATION_TOPICS,
} from "@/components/Project/educationTopics.data";

export const metadata: Metadata = {
  title: "Multinational Faculty | LSeT Education",
  description:
    "Mentored daily by practitioners from six countries, alongside India's leading zoo directors, veterinarians and conservation researchers.",
};

/**
 * Reached from "Know More" on the education accordion's own row.
 *
 * Condensed from lifesciencetrust.org, the institute's own About page.
 *
 * Built from the same <Project*> components the species pages use, passing the
 * education set instead of the projects, so the mast, the parallax, the pager
 * and the neighbour cards are the site's own rather than a third
 * implementation that would drift from them.
 *
 * No gallery on this page, by direction: it carried a card carousel of the
 * mentors, which is the one thing here a reader does not need shown twice.
 */
export default function MultinationalFacultyPage() {
  const set = {
    base: "/education",
    order: EDUCATION_TOPICS,
    backLabel: "Education",
    pagerLabel: "Education",
  };

  return (
    <>
      <main>
        <ProjectHero project={EDU_FACULTY} {...set} />
        <MeshField>
          <ProjectBody project={EDU_FACULTY} />
          <ProjectNeighbours
            project={EDU_FACULTY}
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
