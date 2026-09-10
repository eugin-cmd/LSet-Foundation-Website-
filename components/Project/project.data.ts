/** The filled mark beside a fact label. Named rather than imported here so the
 *  data file stays free of components and a project page can be authored
 *  without touching the icon set. */
export type FactIcon = "partner" | "timeline" | "status" | "next";

export type ProjectFact = {
  /** The orange kicker above the value — PARTNER, TIMELINE, STATUS. */
  label: string;
  icon: FactIcon;
  value: string;
  /** The card's headline fact, set larger and semibold. The partner carries
   *  the card in Figma's hierarchy — it is the one name a reader is looking
   *  for — so it is flagged here rather than inferred from being first. */
  lead?: boolean;
  /** Only the partner fact carries a mark in Figma.
   *  `width`/`height` are the file's own pixels; `box` is the size Figma draws
   *  it at, which is not the same shape for every partner — two of the three
   *  marks are square discs and the Aspinall wordmark is landscape. Carrying
   *  the box per project is what stops a wide logo being crushed into a square
   *  slot; `object-fit: contain` then keeps each mark's own proportions inside
   *  whatever box it is given. */
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    box: { w: number; h: number };
  };
};

/** The mark beside a tech chip, named for the same reason FactIcon is. */
export type TechIcon =
  | "drone"
  | "ai"
  | "vision"
  | "payload"
  | "camera"
  | "acoustic"
  | "voiceprint"
  | "platform"
  | "board"
  | "lever"
  | "iot";

export type ProjectTech = {
  label: string;
  icon: TechIcon;
};

export type ProjectSection = {
  /** The darkblue kicker — PROJECT OVERVIEW, THE CHALLENGE, OUR SOLUTION. */
  kicker: string;
  body: string;
};

export type ProjectPhoto = {
  src: string;
  alt: string;
};

export type Project = {
  /** The page's own route segment under /the-work, so a project can name its
   *  neighbours without the components importing five records each. */
  slug: string;
  /** Matches the row on Our Work, so the two stay recognisably one record. */
  status: "CR" | "EN";
  statusLabel: string;
  location: string;
  title: string;
  /** Banner photograph, used as a CSS background like every other banner. */
  hero: string;
  facts: ProjectFact[];
  sections: ProjectSection[];
  tech: ProjectTech[];
  gallery: ProjectPhoto[];
};

/**
 * Figma `White-Bellied Heron`, node 1738:184704 — the first project page.
 *
 * Copy is Figma's own, verbatim, with one exception: PROJECT OVERVIEW and THE
 * CHALLENGE were byte-identical in the design — a placeholder that had not been
 * filled in. The challenge keeps that paragraph, which is challenge-shaped, and
 * the overview has been written. See the note on it below.
 *
 * The four remaining species on Our Work use this same Figma template, so the
 * page components take a `Project` and this file is what a second one costs.
 */
export const WHITE_BELLIED_HERON: Project = {
  slug: "white-bellied-heron",
  status: "CR",
  statusLabel: "Critically endangered",
  location: "BHUTAN",
  title: "White-Bellied Heron",
  hero: "/assets/heron-hero.jpg",

  facts: [
    {
      label: "Partner",
      icon: "partner",
      value: "Royal Society for the Protection of Nature (RSPN)",
      lead: true,
      logo: {
        src: "/assets/heron-partner-rspn.png",
        alt: "Royal Society for the Protection of Nature",
        width: 410,
        height: 400,
        box: { w: 83, h: 81 },
      },
    },
    {
      label: "Timeline",
      icon: "timeline",
      value: "12 weeks · prototype to deployment",
    },
    { label: "Status", icon: "status", value: "Active" },
    {
      label: "What's next",
      icon: "next",
      value:
        "Scaling to all of Bhutan's high-risk transmission corridors by 2027.",
    },
  ],

  sections: [
    {
      kicker: "Project Overview",
      /* Written to replace Figma's placeholder, which repeated THE CHALLENGE
         verbatim. Deliberately built only from what this site already states —
         the rarity from the Our Work row, the last breeding population from
         the challenge, the partner and the twelve weeks from the fact card. No
         population figure: the site quotes none, and inventing one on a
         conservation page would be inventing a fact about a real programme.
         "drone-flown and deployed" is the client's own phrase, parenthesised
         rather than run in front of the noun so it reads as the system's
         defining property instead of a third adjective. Parentheses by
         direction; the em dashes this page uses elsewhere were rejected
         here. */
      body: "The White-bellied Heron is one of the rarest birds on Earth, and its last breeding population lives on the rivers of Bhutan. With the Royal Society for the Protection of Nature, we took a diverter system (drone-flown and deployed) from prototype to live installation in twelve weeks.",
    },
    {
      kicker: "The Challenge",
      body: "Power-line collisions threaten the last breeding population. Manual installation of bird diverters across remote ridgelines is slow, dangerous, and incomplete.",
    },
    {
      kicker: "Our Solution",
      body: "Custom drone payloads that fly diverter clamps directly onto live transmission lines - surveyed, planned, and installed in days, not seasons.",
    },
  ],

  tech: [
    { label: "Heavy-lift drones", icon: "drone" },
    { label: "AI flight planning", icon: "ai" },
    { label: "Computer vision", icon: "vision" },
    { label: "Custom payload", icon: "payload" },
  ],

  gallery: [
    {
      src: "/assets/heron-gallery-1.jpg",
      alt: "The field team assembling a heavy-lift drone before a diverter flight.",
    },
    {
      src: "/assets/heron-gallery-2.jpg",
      alt: "Flight-planning software mapping a route along a transmission line.",
    },
    {
      src: "/assets/heron-gallery-3.jpg",
      alt: "A White-bellied Heron standing in shallow water.",
    },
  ],
};

/**
 * Figma `Mediterranean Monk Seal`, node 1738:184838 — the second project page.
 *
 * The same template as the heron, which is the whole point of the shape: this
 * file is the entire page. No component, style or animation was added for it.
 *
 * Copy is Figma's own, verbatim. Two things about the design worth recording:
 *
 *  - Its overview and challenge are genuinely different paragraphs, unlike the
 *    heron node where both slots held the same placeholder.
 *  - Its photo strip is the heron page's three photographs — the same three
 *    Figma asset hashes, under the same layer names. That is a duplicated
 *    frame nobody re-shot, and reproducing it would have put drone diverter
 *    work and a heron on a monk seal page. The gallery here is the seal
 *    imagery the project actually holds. **Replace when the real photographs
 *    of this programme exist.**
 */
export const MEDITERRANEAN_MONK_SEAL: Project = {
  slug: "mediterranean-monk-seal",
  status: "CR",
  statusLabel: "Critically endangered",
  location: "CAP BLANC, MAURITANIA",
  title: "Mediterranean Monk Seal",
  hero: "/assets/seal-hero.jpg",

  facts: [
    {
      label: "Partner",
      icon: "partner",
      value: "CBD-H\u00e1bitat",
      lead: true,
      logo: {
        src: "/assets/seal-partner-cbd.png",
        alt: "CBD-H\u00e1bitat",
        width: 588,
        height: 588,
        box: { w: 81, h: 81 },
      },
    },
    {
      label: "Timeline",
      icon: "timeline",
      value: "AI model trained 2026 \u00b7 accuracy refinement ongoing",
    },
    { label: "Status", icon: "status", value: "Active" },
    {
      label: "What's next",
      icon: "next",
      value:
        "Improve identification accuracy to directly support protection efforts.",
    },
  ],

  sections: [
    {
      kicker: "Project Overview",
      body: "With only 350-400 Mediterranean Monk Seals left worldwide, population estimates aren't good enough anymore - every individual needs to be known and tracked.",
    },
    {
      kicker: "The Challenge",
      body: "Mauritania's Cap Blanc cove is the species' last major breeding site - remote, hard to access, and impossible to monitor closely by hand.",
    },
    {
      kicker: "Our Solution",
      body: "A computer-vision AI model that identifies each seal by its natural markings, turning camera footage into precise counts and movement-pattern data for survival and breeding.",
    },
  ],

  /* Three, where the heron has four. The chip row wraps on its own. */
  tech: [
    { label: "Computer vision", icon: "vision" },
    { label: "Individual re-identification AI", icon: "ai" },
    { label: "Camera monitoring", icon: "camera" },
  ],

  gallery: [
    {
      src: "/assets/seal-gallery-1.jpg",
      alt: "Mediterranean Monk Seals hauled out on a rock at Cap Blanc.",
    },
    {
      src: "/assets/seal-gallery-2.jpg",
      /* Deliberately unspecific: this is Figma's own photograph for the page
         and its exact subject has not been confirmed, so the alt says where it
         comes from rather than asserting what it shows. */
      alt: "Photograph from the Cap Blanc monitoring programme.",
    },
  ],
};

/**
 * Figma `Siamang Gibbon`, node 1738:184970 — the third project page.
 *
 * Two things here differ from the first two records rather than just carrying
 * different words:
 *
 *  - **Status is "Scoping", not Active.** The partnership is agreed and the
 *    pilot has not started. Note that the Our Work row for this species still
 *    shows the "Active Project" badge; the two disagree, and this page is the
 *    more specific statement.
 *  - **The partner mark is landscape** (180x80) where the other two are square
 *    discs, which is why `logo.box` exists at all.
 *
 * Its photo strip is the heron page's three photographs again — the same asset
 * hashes under the same layer names, a duplicated frame nobody re-shot. The
 * gallery here is the gibbon imagery the project holds. **Replace when the real
 * photographs of this programme exist.**
 */
export const SIAMANG_GIBBON: Project = {
  slug: "siamang-gibbon",
  status: "CR",
  statusLabel: "Critically endangered",
  location: "SUMATRA, INDONESIA",
  title: "Siamang Gibbon",
  hero: "/assets/gibbon-hero.jpg",

  facts: [
    {
      label: "Partner",
      icon: "partner",
      value: "The Aspinall Foundation",
      lead: true,
      logo: {
        src: "/assets/gibbon-partner-aspinall.png",
        alt: "The Aspinall Foundation",
        width: 1424,
        height: 634,
        box: { w: 180, h: 80 },
      },
    },
    {
      label: "Timeline",
      icon: "timeline",
      value: "Partnership agreed - pilot yet to commence.",
    },
    { label: "Status", icon: "status", value: "Scoping" },
    {
      label: "What's next",
      icon: "next",
      value:
        "Define the pilot project, agree the plan, and work toward implementation.",
    },
  ],

  sections: [
    {
      kicker: "Project Overview",
      body: "Reintroduced gibbons in Southern Sumatra and Java disappear into dense rainforest canopy the moment they're released - but their calls travel for miles.",
    },
    {
      kicker: "The Challenge",
      body: "Released gibbons are almost impossible to track visually, and biodiversity within the reintroduction sites has never been systematically measured.",
    },
    {
      kicker: "Our Solution",
      body: "Solar-powered forest recorders paired with AI-driven voiceprint mapping (SonicDNA) - filtering noise, matching calls to individuals, and confirming location without ever recapturing an animal.",
    },
  ],

  tech: [
    { label: "Bioacoustic recorders", icon: "acoustic" },
    { label: "SonicDNA voiceprint mapping", icon: "voiceprint" },
    { label: "AI noise-filtering", icon: "ai" },
  ],

  gallery: [
    {
      src: "/assets/gibbon-gallery-1.jpg",
      alt: "A Siamang Gibbon calling with its arms raised in the canopy.",
    },
    {
      src: "/assets/gibbon-gallery-2.jpg",
      /* As on the seal page: Figma's own photograph for this frame, described
         by where it comes from rather than by a subject not confirmed. */
      alt: "Photograph from the Sumatra reintroduction programme.",
    },
  ],
};

/**
 * Figma `Orangutan Haven`, node 1738:185229 — the fourth project page.
 *
 * Its overview carries a double space in the design, where the sentence wants
 * a dash: "rescued Sumatran Orangutans  threatened by habitat loss". It is a
 * single space here — HTML collapses the pair anyway, so reproducing it would
 * have changed nothing but the source. **The dash is probably what was meant;
 * confirm before this goes live.**
 *
 * Its photo strip is the heron page's three photographs, a fourth time. The
 * gallery here is the sanctuary imagery the project holds. **Replace when the
 * real photographs exist.**
 */
export const ORANGUTAN_HAVEN: Project = {
  slug: "orangutan-haven",
  status: "CR",
  statusLabel: "Critically endangered",
  location: "SUMATRA, INDONESIA",
  title: "Orangutan Haven",
  hero: "/assets/oh-hero.jpg",

  facts: [
    {
      label: "Partner",
      icon: "partner",
      value: "PT Orangutan Haven (Ian Singleton, Conservation Manager)",
      lead: true,
      logo: {
        src: "/assets/oh-partner.png",
        alt: "PT Orangutan Haven",
        width: 800,
        height: 225,
        box: { w: 217, h: 61 },
      },
    },
    {
      label: "Timeline",
      icon: "timeline",
      value: "Onboarded October 2025 \u00b7 active since",
    },
    { label: "Status", icon: "status", value: "Active" },
    {
      label: "What's next",
      icon: "next",
      value:
        "Complete the behavioural study and publish welfare-research findings.",
    },
  ],

  sections: [
    {
      kicker: "Project Overview",
      body: "Caring for rescued Sumatran Orangutans threatened by habitat loss, fires, hunting, and the pet trade - takes more than good intentions; it takes systems built for daily operations and genuine welfare.",
    },
    {
      kicker: "The Challenge",
      body: "Sanctuary teams needed a faster way to manage medical and operational records, plus a way to give orangutans - including blind individuals - real agency over their environment.",
    },
    {
      kicker: "Our Solution",
      body: "The ANTZ Management Platform for records, health tracking, and operations, paired with a Raspberry Pi-powered music enrichment system controlled by a tactile lever.",
    },
  ],

  tech: [
    { label: "ANTZ Management Platform", icon: "platform" },
    { label: "Raspberry Pi enrichment", icon: "board" },
    { label: "Tactile lever control", icon: "lever" },
    { label: "IoT tracking", icon: "iot" },
  ],

  gallery: [
    {
      src: "/assets/oh-gallery-1.jpg",
      alt: "A Sumatran Orangutan seated in foliage at Orangutan Haven.",
    },
    {
      src: "/assets/oh-gallery-2.jpg",
      alt: "Photograph from the Orangutan Haven sanctuary.",
    },
  ],
};

/**
 * Figma `Broad-toothed Rat`, node 1738:185363 — the fifth and last project page.
 *
 * Three small departures from its four siblings, all handled by the existing
 * shape rather than by new code:
 *
 *  - **Two tech chips**, where the others carry three or four. Both map to
 *    marks the set already had, so this page added no icon.
 *  - **The partner mark is an SVG**, not a raster — the first one that is. It
 *    needs no white knocked out, and it stays crisp at any size. Figma ships it
 *    with `preserveAspectRatio="none"`, which was removed: that attribute lets
 *    the artwork stretch to fill whatever box it is given, which is precisely
 *    what `logo.box` exists to prevent.
 *  - Figma sets its fact card 35px taller than the others, for the two longer
 *    values. Nothing to do — the card has never been a fixed height here.
 *
 * Note the species is "Broad-toothed Rat" on this page and "Broad-Toothed Rat"
 * on the Our Work row and the homepage arc. Figma spells it both ways; this
 * follows the page's own node.
 *
 * Its photo strip is the heron page's three photographs, a fifth time.
 */
export const BROAD_TOOTHED_RAT: Project = {
  slug: "broad-toothed-rat",
  status: "CR",
  statusLabel: "Critically endangered",
  location: "BARRINGTON TOPS, AUSTRALIA",
  title: "Broad-toothed Rat",
  hero: "/assets/rat-hero.jpg",

  facts: [
    {
      label: "Partner",
      icon: "partner",
      value: "Aussie Ark",
      lead: true,
      logo: {
        src: "/assets/rat-partner-aussieark.svg",
        alt: "Aussie Ark",
        width: 195,
        height: 76,
        box: { w: 195, h: 76 },
      },
    },
    {
      label: "Timeline",
      icon: "timeline",
      value:
        "Ongoing AI model training - second round now underway with a new algorithm",
    },
    { label: "Status", icon: "status", value: "Active" },
    {
      label: "What's next",
      icon: "next",
      value:
        "Deploy the trained model on existing facility cameras within 6 months, with ongoing support during rollout",
    },
  ],

  sections: [
    {
      kicker: "Project Overview",
      body: "Aussie Ark is running the world's first successful captive breeding program for the Broad-toothed Rat, an insurance population for a species now confined to a handful of remote swamps in Eastern Australia.",
    },
    {
      kicker: "The Challenge",
      body: "Monitoring a captive breeding population day-to-day by hand is slow and labour-intensive, and doesn't scale as the program grows.",
    },
    {
      kicker: "Our Solution",
      body: "An AI model trained to automate monitoring of captive animals, deployed on the breeding facility's existing cameras once accuracy is validated.",
    },
  ],

  tech: [
    { label: "AI/ML monitoring", icon: "ai" },
    { label: "Existing camera infrastructure", icon: "camera" },
  ],

  gallery: [
    {
      src: "/assets/rat-gallery-1.jpg",
      alt: "A Broad-toothed Rat feeding among sub-alpine grasses.",
    },
    {
      src: "/assets/rat-gallery-2.jpg",
      alt: "Photograph from the Aussie Ark breeding programme.",
    },
  ],
};

/**
 * The five project pages in order, which is the order the Our Work rows run in
 * — a reader paging through the banners walks the wall in the sequence they
 * saw it.
 *
 * Declared after the records rather than beside them so it cannot fall out of
 * step with a rename: adding a sixth project means adding it here, and the
 * banner arrows pick it up with no further change.
 */
export const PROJECT_ORDER: Project[] = [
  WHITE_BELLIED_HERON,
  MEDITERRANEAN_MONK_SEAL,
  SIAMANG_GIBBON,
  ORANGUTAN_HAVEN,
  BROAD_TOOTHED_RAT,
];

/** The record before and after `slug`, wrapping at both ends so neither arrow
 *  is ever a dead end. */
export function projectNeighbours(slug: string) {
  const i = PROJECT_ORDER.findIndex((p) => p.slug === slug);
  const n = PROJECT_ORDER.length;
  return {
    prev: PROJECT_ORDER[(i - 1 + n) % n],
    next: PROJECT_ORDER[(i + 1) % n],
  };
}
