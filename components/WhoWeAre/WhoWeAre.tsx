import LeafStatement from "@/components/LeafStatement/LeafStatement";

/**
 * The homepage's band under the partner logos. The markup, the measurements
 * and the leaf live in <LeafStatement>, which the education page's campus
 * band also uses; this file is the homepage's words.
 */
export default function WhoWeAre() {
  return (
    <LeafStatement
      id="who-we-are"
      kicker="WHO WE ARE"
      paragraphs={[
        "The LSeT Foundation is a multidisciplinary organisation dedicated to the advancement of life science across four interconnected pillars: education, technology, conservation, and living systems design.",
        "Founded on the belief that conservation challenges demand integrated solutions, we bring together educators, technologists, biologists, veterinarians, architects, and animal care professionals under one unified mission.",
      ]}
    />
  );
}
