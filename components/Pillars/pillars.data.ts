export type Pillar = {
  index: string;
  /** Keys the row's icon in Pillars.tsx. Separate from `title` so re-wording a
   *  heading cannot silently drop the icon. */
  key: "conservation" | "education" | "technology";
  title: string;
  /** Figma only supplies copy for the open row (Education). The other two are
   *  written in the same voice as placeholders — swap for real copy. */
  description: string;
  href: string;
};

export const PILLARS: Pillar[] = [
  {
    index: "01",
    key: "conservation",
    title: "Conservation",
    description: "Species monitoring, habitat protection, partner-led field programmes.",
    href: "#conservation",
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
    href: "#technology",
  },
];
