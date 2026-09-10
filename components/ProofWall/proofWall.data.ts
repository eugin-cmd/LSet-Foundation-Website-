export type ProofCard = {
  location: string;
  /** Figma sets the species name on two explicit lines. */
  titleLines: [string, string];
  description: string;
  image: string;
  /** Figma's per-card image crop, kept verbatim so each photo frames as designed. */
  crop: { top: string; left: string; width: string; height: string };
  href: string;
};

/** Cards 4 and 5 have no Figma source: `object-fit: cover` frames them instead. */
const COVER = { top: "0", left: "0", width: "100%", height: "100%" } as const;

export const PROOF_CARDS: ProofCard[] = [
  {
    location: "BHUTAN",
    titleLines: ["White-Bellied", "Heron"],
    description: "Drones flying bird diverters onto live power lines in Himalayan terrain.",
    image: "/assets/proof-1.jpg",
    crop: { top: "-21.95%", left: "-0.03%", width: "100%", height: "124%" },
    href: "/the-work/white-bellied-heron",
  },
  {
    location: "CAP BLANC, MAURITANIA",
    titleLines: ["Mediterranean", "Monk Seal"],
    description: "Computer vision identifying every seal in the colony, week over week.",
    image: "/assets/proof-2.jpg",
    crop: { top: "-21.95%", left: "-0.03%", width: "100%", height: "124%" },
    href: "/the-work/mediterranean-monk-seal",
  },
  {
    // Figma repeated the Monk Seal name and copy here, which the arc now shows
    // side by side with the real Monk Seal card. PLACEHOLDER copy in its place,
    // matched to the photo and the location — replace with the real programme.
    location: "BARRINGTON TOPS, AUSTRALIA",
    titleLines: ["Broad-Toothed", "Rat"],
    description: "Camera traps and acoustics mapping a retreating alpine heath population.",
    image: "/assets/proof-3.jpg",
    crop: { top: "-13.13%", left: "-12.1%", width: "114.71%", height: "113.06%" },
    href: "/the-work/broad-toothed-rat",
  },
  {
    // PLACEHOLDER: not in Figma. Photo is a frame lifted from the hero footage.
    // Replace both before launch.
    location: "KUTAI, INDONESIA",
    titleLines: ["Bornean", "Orangutan"],
    description: "Canopy microphones separating individual long calls across the reserve.",
    image: "/assets/proof-5.jpg",
    crop: { ...COVER },
    href: "#bornean-orangutan",
  },
];
