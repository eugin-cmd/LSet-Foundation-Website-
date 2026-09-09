export type AntzRow = {
  index: string;
  /** Keys the row's icon in AntzRows.tsx. Separate from `title` so re-wording a
   *  heading cannot silently drop the icon — the same arrangement the other two
   *  boards use. */
  key: "records" | "observations" | "operations" | "compliance" | "analytics";
  title: string;
  description: string;
  href: string;
};

/**
 * Figma `Frame 1000004799` node 1965:18358 — five numbered rows.
 *
 * Only row 02 is open in the design, so only its body copy exists there. The
 * other four are written to the same voice and marked PLACEHOLDER, exactly as
 * the proof wall's additions are: the accordion has nothing to reveal without
 * them. **Replace them with real copy.**
 */
export const ANTZ_ROWS: AntzRow[] = [
  {
    index: "01",
    key: "records",
    title: "Records that grow with the animal",
    /* PLACEHOLDER */
    description:
      "One record per animal, from arrival to transfer, carrying its own history rather than pointing at a filing cabinet.",
    href: "#",
  },
  {
    index: "02",
    key: "observations",
    title: "Observations made for experts",
    /* Figma 1965:21186 — the one row the design leaves open. */
    description:
      "Mobile-first observation logging, fast and frictionless. Designed for the way keepers actually work.",
    href: "#",
  },
  {
    index: "03",
    key: "operations",
    title: "Daily operations, in one system",
    /* PLACEHOLDER */
    description:
      "Diets, treatments, enclosure moves and handovers in one place, so the shift that follows yours starts from what actually happened.",
    href: "#",
  },
  {
    index: "04",
    key: "compliance",
    title: "Compliance, drawn live",
    /* PLACEHOLDER */
    description:
      "The returns your regulator asks for, assembled from the records your teams already keep instead of rebuilt each reporting season.",
    href: "#",
  },
  {
    index: "05",
    key: "analytics",
    title: "Analytics your director uses",
    /* PLACEHOLDER */
    description:
      "Collection-level trends in welfare, breeding and cost, reported clearly enough to take into a board meeting.",
    href: "#",
  },
];
