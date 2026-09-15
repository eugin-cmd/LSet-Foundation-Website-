import type { Metadata } from "next";
import EducationHero from "@/components/Education/EducationHero";
import EducationPartners from "@/components/Education/EducationPartners";
import EducationStatement from "@/components/Education/EducationStatement";
import EducationPillars from "@/components/Education/EducationPillars";
import MeshField from "@/components/MeshField/MeshField";
import EducationPhilosophy from "@/components/Education/EducationPhilosophy";
import EducationShowcase from "@/components/Education/EducationShowcase";
import EducationCourses from "@/components/Education/EducationCourses";

export const metadata: Metadata = {
  title: "LSeT Education: Institute of Animal Care & Management",
  description:
    "India's only residential institute for exotic animal care education, built on a working farm in Bengaluru.",
};

/** Figma `Desktop - 5`, node 1962:12731. */
export default function EducationPage() {
  return (
    <>
      <main>
        <EducationHero />
        {/* The light run under the banner, on one holographic mesh, in the
            homepage's own order: the field starts directly under the hero, the
            partner logos come first and the band of copy follows them.
            One field around both rather than a backdrop each: the mesh is
            anchored to its own box, so two neighbours painting their own leave
            a visible step where they meet. Both must stay transparent. */}
        <MeshField>
          <EducationPartners />
          <EducationPhilosophy />
        </MeshField>
        <EducationStatement />
        <MeshField>
          <EducationPillars />
        </MeshField>
        <EducationShowcase />
        <EducationCourses />
      </main>
    </>
  );
}
