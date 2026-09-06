export type Destination = {
  /** Keys the icon map in NavDrawer.tsx, the same way Pillars does. */
  key: "conservation" | "education" | "technology";
  index: string;
  title: string;
  description: string;
  href: string;
};

/** Figma `destinations` rows, node 1959:12501. */
export const DESTINATIONS: Destination[] = [
  {
    index: "01",
    key: "conservation",
    title: "Conservation",
    description:
      "Drones, edge AI, bioacoustics and sensors — built for the field, repairable on the truck.",
    /* The homepage. This row IS the Foundation — conservation is the arm the
       FOUNDATION brand covers — and it had been a bare "#conservation" with no
       target on either page. */
    href: "/",
  },
  {
    index: "02",
    key: "education",
    title: "Education",
    description:
      "Boot camps, field-team training and capacity building for partner organisations.",
    href: "/education",
  },
  {
    index: "03",
    key: "technology",
    title: "Technology",
    description:
      "The platform our partners run on — animal records, welfare and operations in one place.",
    href: "#technology",
  },
];

/** Figma `promo`, node 1959:12517. */
export const PROMO = {
  kicker: "FEATURED",
  title: "Twelve weeks, ridgeline to deployment",
  body:
    "How the heron diverter programme went from a conversation to live transmission lines in Bhutan.",
  cta: "Read the project",
  href: "#white-bellied-heron",
  /* The node's fill is the same photograph the Proof Wall already ships as
     proof-1.jpg — compared pixel by pixel, mean absolute difference 0.39/255,
     i.e. JPEG recompression only. Reused rather than duplicated. */
  image: "/assets/proof-1.jpg",
} as const;
