export type Pillar = {
  index: string;
  /** Keys the row's icon in Pillars.tsx. Separate from `title` so re-wording a
   *  heading cannot silently drop the icon. */
  key: "conservation" | "education" | "technology";
  title: string;
  /** Three short sentences each, in the same shape: what we do, what we do it
   *  to, and who is left holding it. They were comma-separated lists of nouns
   *  ("Species monitoring, habitat protection, partner-led field programmes."),
   *  which read as an index rather than as the board saying what it does.
   *
   *  The rhythm is the proof wall's, "Real Species. Real Timeline.", a few
   *  hundred pixels further down the same page — short declaratives are the
   *  page's punchiest register and these rows are its plainest statement of
   *  what the Foundation is for.
   *
   *  Keep the parallel if any of these is rewritten. Three beats in one row and
   *  a flowing sentence in the next reads as two different voices, which is
   *  what it did look like while only Conservation had been done. Figma
   *  supplied the Education copy; all three are a departure from it now. */
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
    description:
      "We count the species. We protect the ground they live on. We back the partners who do the work.",
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
    description:
      "We run the boot camps. We train the field teams. We build the people who train the next ones.",
    href: "/education",
  },
  {
    index: "03",
    key: "technology",
    title: "Technology",
    description:
      "We build Antz Systems. We fly the drones. We make hardware that survives the field.",
    href: "/technology",
  },
];
