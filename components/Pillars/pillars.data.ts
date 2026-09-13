export type Pillar = {
  index: string;
  /** Keys the row's icon in Pillars.tsx. Separate from `title` so re-wording a
   *  heading cannot silently drop the icon. */
  key: "conservation" | "education" | "technology";
  title: string;
  /** Figma only supplies copy for the open row (Education). The other two are
   *  written in the same voice as placeholders — swap for real copy. */
  description: string;
  /** Where the row's link goes. Every pillar carries one: Education and
   *  Technology to their own landing pages, Conservation to Our Work — the
   *  conservation pillar has no page of its own, but the projects are what it
   *  is made of, so that is where reading on leads. */
  href?: string;
  /** Overrides the link's "Know More". */
  moreLabel?: string;
};

export const PILLARS: Pillar[] = [
  {
    index: "01",
    key: "conservation",
    title: "Conservation",
    description: "Species monitoring, habitat protection, partner-led field programmes.",
    /* Our Work rather than a conservation landing page, which does not exist —
       and "Read More", not the other two rows' "Know More", by direction: this
       one carries on into the projects rather than explaining a pillar.

       It carried no link at all until now, and before that an anchor
       ("#conservation") that existed nowhere on the page. */
    href: "/the-work",
    moreLabel: "Read More",
  },
  {
    index: "02",
    key: "education",
    title: "Education",
    description: "Boot camps, field team training, capacity building.",
    href: "/education",
  },
  {
    index: "03",
    key: "technology",
    title: "Technology",
    description: "Antz Systems, computer vision, drones, field-ready hardware.",
    href: "/technology",
  },
];
