import LeafStatement from "@/components/LeafStatement/LeafStatement";
import PillarRow from "@/components/LeafStatement/PillarRow";

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
      /* The first sentence stops at the colon and <PillarRow> says the three
         names, each with the mark the pillars board gives it. They were set in
         the sentence before, which meant the page named them twice over — once
         here in running text and again in the board below — and neither naming
         carried the drawings. */
      afterFirstParagraph={<PillarRow />}
      paragraphs={[
        "The LSeT Foundation is a multidisciplinary organisation dedicated to the advancement of life science across three interconnected pillars:",
        "Founded on the belief that conservation challenges demand integrated solutions, we bring together educators, technologists, biologists, veterinarians, architects, and animal care professionals under one unified mission.",
      ]}
    />
  );
}
