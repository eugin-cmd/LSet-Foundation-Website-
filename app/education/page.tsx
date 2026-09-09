import type { Metadata } from "next";
import EducationHero from "@/components/Education/EducationHero";
import EducationPartners from "@/components/Education/EducationPartners";
import EducationStatement from "@/components/Education/EducationStatement";
import EducationPillars from "@/components/Education/EducationPillars";
import MeshField from "@/components/MeshField/MeshField";
import EducationShowcase from "@/components/Education/EducationShowcase";
import EducationCourses from "@/components/Education/EducationCourses";

export const metadata: Metadata = {
  title: "LSeT Education — Institute of Animal Care & Management",
  description:
    "India's only residential institute for exotic animal care education, built on a working farm in Bengaluru.",
};

/** Figma `Desktop - 5`, node 1962:12731. */
export default function EducationPage() {
  return (
    <>
      <main>
        <EducationHero />
        <EducationPartners />
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
