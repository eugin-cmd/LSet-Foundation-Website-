export type WorkProject = {
  /** IUCN Red List code, as the chip in Figma shows it. */
  status: "CR" | "EN";
  /** Spelt out for assistive tech, since "CR" alone reads as noise. */
  statusLabel: string;
  location: string;
  title: string;
  description: string;
  image: string;
  /** Alt text for the photograph, which is content rather than decoration. */
  imageAlt: string;
  /** Figma's badge on every card. Kept as data so a finished project can drop
   *  it without touching the component. */
  active: boolean;
  href: string;
};

/**
 * Figma node 1738:184542 — the five project rows of `Our Work — Desktop 1444`.
 *
 * Copy is Figma's own, verbatim, including its em-dash and hyphen choices. Note
 * that three of these species also appear on the homepage's <ProofWall> arc,
 * where they carry one-line summaries instead; that component keeps its own
 * data, because the arc needs a phrase and this page needs a paragraph.
 *
 * Four of the five now have real project pages. Only the Broad-toothed Rat is
 * still a placeholder: Figma's "View project →" points nowhere and those pages do not
 * exist yet. **Replace when they do.**
 */
export const WORK_PROJECTS: WorkProject[] = [
  {
    status: "CR",
    statusLabel: "Critically endangered",
    location: "BHUTAN",
    title: "White-Bellied Heron",
    description:
      "The White-bellied Heron is one of the rarest birds on Earth. Found in the wetlands and river systems of Bhutan, this critical indicator species for healthy aquatic ecosystems faces mounting threats from hydropower development, transmission line collisions, and habitat degradation.",
    image: "/assets/work-heron.jpg",
    imageAlt:
      "A White-bellied Heron standing in a Bhutanese river with a fish in its bill.",
    active: true,
    href: "/the-work/white-bellied-heron",
  },
  {
    status: "EN",
    statusLabel: "Endangered",
    location: "CAP BLANC, MAURITANIA",
    title: "Mediterranean Monk Seal",
    description:
      "The Mediterranean Monk Seal is one of the world’s most endangered marine mammals, with only 350-400 individuals left globally. Found along Mauritania’s remote coastline, home to the species’ last major breeding colony - these seals face mounting pressure from habitat disturbance and a population too small to track by estimation alone.",
    image: "/assets/work-monk-seal.jpg",
    imageAlt: "Mediterranean Monk Seals hauled out on a rock at Cap Blanc.",
    active: true,
    href: "/the-work/mediterranean-monk-seal",
  },
  {
    status: "CR",
    statusLabel: "Critically endangered",
    location: "SUMATRA, INDONESIA",
    title: "Siamang Gibbon",
    description:
      "The Siamang Gibbon is an endangered primate reintroduced through active rewilding programs in Southern Sumatra. Found deep within dense rainforest canopy, released gibbons are almost impossible to track visually, making their calls, audible for miles - the only reliable trace of their survival",
    image: "/assets/work-siamang.jpg",
    imageAlt: "A Siamang Gibbon calling with its arms raised in the canopy.",
    active: true,
    href: "/the-work/siamang-gibbon",
  },
  {
    status: "CR",
    statusLabel: "Critically endangered",
    location: "SUMATRA, INDONESIA",
    title: "Orangutan-Haven",
    description:
      "The Sumatran Orangutan is critically endangered, with fewer than 14,600 individuals remaining in the wild. At Orangutan Haven, rescued individuals are supported with digital health records and a lever-controlled music enrichment system that gives them real agency over their environment.",
    image: "/assets/work-orangutan.jpg",
    imageAlt: "A Sumatran Orangutan seated in foliage at Orangutan Haven.",
    active: true,
    href: "/the-work/orangutan-haven",
  },
  {
    status: "CR",
    statusLabel: "Critically endangered",
    location: "BARRINGTON TOPS, AUSTRALIA",
    title: "Broad-Toothed Rat",
    description:
      "The Broad-toothed Rat survives only in a handful of remote sub-alpine swamps in Eastern Australia. Aussie Ark is running the world’s first successful captive breeding program for the species, with AI-powered monitoring now automating day-to-day tracking of the breeding population.",
    image: "/assets/work-broad-toothed-rat.jpg",
    imageAlt: "A Broad-toothed Rat feeding among sub-alpine grasses.",
    active: true,
    href: "/the-work/broad-toothed-rat",
  },
];
