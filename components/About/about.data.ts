export type TeamMember = {
  src: string;
  name: string;
  /** The person's own title, verbatim from lifesciencetrust.org/about. */
  role: string;
};

/**
 * The governing council, exactly as the institute's own About page lists it:
 * the same ten people, in the same order, with their own role lines.
 *
 * Portraits are reused from the education topic pages where the same person
 * appears on both, rather than kept twice under two names.
 *
 * Their site also carries a second tab, Faculty, which this grid does not:
 * one group needs no tab bar, and a bar with a single tab is worse than none.
 */
export const TEAM: TeamMember[] = [
  {
    src: "/assets/edu/faculty-anil.webp",
    name: "Mr. Anil Garg",
    role: "Founder, LSeT Foundation",
  },
  {
    src: "/assets/edu/faculty-neetu.webp",
    name: "Mrs. Neetu Garg",
    role: "Principal, LSeT Foundation",
  },
  {
    src: "/assets/edu/faculty-rajesh.webp",
    name: "Mr. Rajesh M",
    role: "Director, LSeT Foundation",
  },
  {
    src: "/assets/edu/faculty-meera.webp",
    name: "Prof. Meera Deobhakta",
    role: "Hon. Director, LSeT Foundation",
  },
  {
    src: "/assets/about/madhav.webp",
    name: "Prof. Madhav Deobhakta",
    role: "Ex. President, Indian Institute of Architects",
  },
  {
    src: "/assets/about/benty.webp",
    name: "Mr. Arun Benty",
    role: "Core Team Member, LSeT Foundation",
  },
  {
    src: "/assets/edu/faculty-gounder.webp",
    name: "Mr. Subhash Gounder",
    role: "Tech, R&D",
  },
  {
    src: "/assets/edu/faculty-valentine.webp",
    name: "Mr. Iain Valentine",
    role: "Zoo & Habitat Design",
  },
  {
    src: "/assets/edu/faculty-mukherjee.webp",
    name: "Mr. Soham Mukherjee",
    role: "Zoo Specialist",
  },
  {
    src: "/assets/about/lunavat.webp",
    name: "Mr. Gaurav Lunavat",
    role: "Secretary",
  },
];

/** Mission, vision and values, condensed from the institute's own statements. */
export const CREED = [
  {
    kicker: "MISSION",
    body: "To close the gap between passion and profession in animal care, training skilled and ethical practitioners through immersive education grounded in the Five Freedoms of Animal Welfare.",
  },
  {
    kicker: "VISION",
    body: "A future in which every zoo, sanctuary and animal facility in India is staffed by professionally trained, welfare-first caregivers, and in which the tools they work with were built for the animals rather than borrowed from another industry.",
  },
  {
    kicker: "VALUES",
    body: "We learn by doing. We put the species first. We hold ourselves to the highest standard of ethical practice. Good animal care starts with good people: trained, committed, and ready for the real work.",
  },
];

/** The four the institute states as what it stands for. */
export const STANDS_FOR = [
  "Learning by doing",
  "Species first",
  "Expert mentorship",
  "Ethical practice",
];
