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
    /* Replaces a "Bornean Orangutan" placeholder that was never in Figma and
       led nowhere. Ahead of the rat, which puts the arc in the same order as
       the Our Work rows — the siamang is the only one of the five the arc does
       not carry.

       The photograph is this project's own page banner, cropped to the card's
       portrait box around the animal rather than centred: the banner is a 2:1
       landscape and a straight centre crop cuts the orangutan in half. */
    location: "SUMATRA, INDONESIA",
    titleLines: ["Orangutan", "Haven"],
    description: "Sanctuary records on one system, and music the orangutans choose themselves.",
    image: "/assets/proof-orangutan-haven.jpg",
    crop: { ...COVER },
    href: "/the-work/orangutan-haven",
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
];
