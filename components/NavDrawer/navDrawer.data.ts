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
      "Drones, edge AI, bioacoustics and sensors: built for the field, repairable on the truck.",
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
      "The platform our partners run on: animal records, welfare and operations in one place.",
    href: "/technology",
  },
];

/** Figma `promo`, node 1959:12517. */
export const PROMO = {
  kicker: "FEATURED",
  title: "Twelve weeks, ridgeline to deployment",
  body:
    "How the heron diverter programme went from a conversation to live transmission lines in Bhutan.",
  cta: "Read the project",
  /* The project page, which exists now; this was "#white-bellied-heron", an
     anchor that matched nothing on any page. */
  href: "/the-work/white-bellied-heron",
  /* The heron project's own banner photograph, cut to the 278x130 slot this
     panel draws and shipped at 2x.

     It was proof-1.jpg, the Proof Wall's card image: 786x1060, a PORTRAIT
     photograph shown in a 2.14:1 landscape frame, so all that reached the
     drawer was a thin band across its middle. Measured on the crop the panel
     actually shows, it came out the flattest picture in the set — sharpness
     28.6 and contrast 10.5, against 46.4 and 55.6 for this one — and at
     89KB against 30KB, because a 2400px original was being scaled down in
     the browser rather than cut to size here. */
  image: "/assets/drawer-heron.jpg",
} as const;
