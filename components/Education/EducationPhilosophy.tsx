import LeafStatement from "@/components/LeafStatement/LeafStatement";

/**
 * The band under the partner logos, on the mesh field that opens the page —
 * the same block in the same place the homepage carries it, in
 * <LeafStatement>, with this page's words.
 *
 * It opens the page's prose, so it says what the institute believes rather
 * than what it offers: the courses, the faculty and the farm are all further
 * down, and a reader who has just read the banner wants the reason before the
 * detail.
 *
 * Condensed from lifesciencetrust.org's own mission, vision and values. The
 * first sentence and "the enclosure is the classroom and the animals are the
 * curriculum" are theirs verbatim; the Five Freedoms and the staffing
 * ambition are their mission and vision statements, cut to a line each.
 *
 * No em dashes, by direction.
 */
export default function EducationPhilosophy() {
  return (
    <LeafStatement
      id="what-we-believe"
      kicker="WHAT WE BELIEVE"
      paragraphs={[
        "Animal care cannot be taught in a lecture hall. At LSeT the enclosure is the classroom and the animals are the curriculum, and students learn the work by doing it, under expert guidance, from their first day.",
        "Everything we teach is grounded in the Five Freedoms of Animal Welfare, and aimed at one future: every zoo, sanctuary and animal facility in India staffed by professionally trained, welfare-first caregivers. Good animal care starts with good people.",
      ]}
    />
  );
}
