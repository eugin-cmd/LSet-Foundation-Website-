/**
 * "Who it's for" on antzsystems.com/antz-edge — the APPLICATIONS section, five
 * deployment environments stacked as sticky cards.
 *
 * Their copy verbatim, their photographs and their marks. What is not here is
 * the motion: each card on that page is a looping video, and the five together
 * are 95MB. The posters they already ship carry the same frames at 1.1MB, and
 * a `poster` on a <video> is the first frame of exactly that footage — so the
 * cards are stills until somebody decides the weight is worth it.
 */

export type EdgeAudience = {
  slug: string;
  title: string;
  body: string;
};

export const EDGE_AUDIENCE: EdgeAudience[] = [
  {
    slug: "conservation",
    title: "Wildlife Conservation & National Parks",
    body: "Enables continuous, round-the-clock monitoring of species and their behaviours in remote conservation areas without relying on external network infrastructure.",
  },
  {
    slug: "forest",
    title: "Forest Departments & Biodiversity Assessment",
    body: "Automates species identification and local counting to streamline ecosystem surveys and eliminate thousands of hours of manual footage review.",
  },
  {
    slug: "migration",
    title: "Animal Migration Studies",
    body: "Tracks movement patterns and spatial group dynamics locally over time without missing key events due to storage or network limits.",
  },
  {
    slug: "conflict",
    title: "Human-Wildlife Conflict Management",
    body: "Detects animals approaching boundaries or human settlements early on, generating immediate alerts to help prevent dangerous encounters.",
  },
  {
    slug: "zoos",
    title: "Zoos, Sanctuaries & Breeding Programmes",
    body: "Delivers non-invasive monitoring for captive environments, analysing health, injuries, spatial enclosure usage, and heat-cycle detection to assist timing for animal pairing.",
  },
];
