export type Leader = {
  src: string;
  name: string;
  role: string;
  /** One paragraph per entry, in the order the institute runs them. */
  body: string[];
};

/**
 * The two the institute gives sections of their own, rather than a tile in the
 * grid: its founder and its honorary director.
 *
 * Their own words from lifesciencetrust.org/about, verbatim but for one mark
 * of punctuation — "working directly with animals-not merely studying them"
 * sets a hyphen where the sentence needs a comma.
 */
export const LEADERS: Leader[] = [
  {
    src: "/assets/about/leader-anil.webp",
    name: "Mr. Anil Garg",
    role: "Our Founder",
    body: [
      "With over four decades of hands-on experience in animal care and management, Anil Garg has devoted his life to working directly with animals, not merely studying them, but living alongside them, understanding their behaviour, ensuring their welfare, and developing one of India's most diverse collections of flora and fauna. This unparalleled experience forms the very foundation of LSeT, shaping every facility, every training module, and every practical learning experience offered at the institute.",
      "At LSeT, students are immersed in an environment created by a practitioner whose knowledge has been built through decades of real-world experience. Learning extends far beyond textbooks and classrooms, allowing students to observe, participate, and develop the practical skills required to excel in professional animal care.",
      "His philosophy is both simple and transformative: the most effective way to train future animal care professionals is by placing them in direct contact with animals under expert guidance. Guided by this vision, LSeT was established as a working animal care and conservation facility where education is driven by daily practice.",
    ],
  },
  {
    src: "/assets/about/leader-meera.webp",
    name: "Prof. Meera Deobhakta",
    role: "Hon. Director, LSeT Foundation",
    body: [
      "Prof. Meera Deobhakta is a distinguished architect, educator, and passionate aviculturist whose lifelong commitment to excellence has left a lasting impact in both the fields of architecture and animal care. Over the course of her career, she has mentored and inspired countless students while fostering a deep appreciation for ethical aviculture, responsible bird keeping, and conservation among bird enthusiasts.",
      "Her unwavering dedication to the welfare, conservation, and responsible management of avian species has earned her widespread respect within the avicultural community. In recognition of her exceptional contributions and lifelong service, LSeT conferred upon her the Lifetime Achievement Award, honouring her enduring legacy and invaluable role in advancing ethical animal care and conservation.",
      "As Honorary Director of LSeT, Prof. Deobhakta continues to guide the institution with vision, wisdom, and an unwavering commitment to nurturing both people and nature.",
    ],
  },
];

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

/** Mission, vision and values, condensed from the institute's own statements.
 *
 * `key` is what the section looks its mark up by, kept separate from `kicker`
 * so re-wording a heading cannot silently drop the icon — the same split the
 * homepage's pillars use. */
export const CREED = [
  {
    key: "mission" as const,
    kicker: "MISSION",
    body: "To close the gap between passion and profession in animal care, training skilled and ethical practitioners through immersive education grounded in the Five Freedoms of Animal Welfare.",
  },
  {
    key: "vision" as const,
    kicker: "VISION",
    body: "A future in which every zoo, sanctuary and animal facility in India is staffed by professionally trained, welfare-first caregivers, and in which the tools they work with were built for the animals rather than borrowed from another industry.",
  },
  {
    key: "values" as const,
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
