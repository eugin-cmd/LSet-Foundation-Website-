import type { Project } from "./project.data";

/**
 * The four Antz Systems products, as pages on this site.
 *
 * They are `Project` records and they render through the same <Project*>
 * components the species pages use — the same mast, parallax, leaf, pager,
 * carousel, neighbour cards and closing band. That is the point: a reader
 * moving from the White-bellied Heron to Antz Edge should not feel the join.
 *
 * Content is condensed from antzsystems.com — /antz-platform, /antz-ethostudio,
 * /antz-edge and /antz-trails — rather than copied. Those pages run five to
 * seven sections each with problem/solution/how-it-works framing; this template
 * carries three prose blocks, so each product is cut down to what a reader of
 * the Foundation site needs: what it is, what it is for, and how it works.
 * Product names, module names and the accreditation bodies are verbatim, since
 * those are facts rather than voice.
 *
 * The facts card carries what a partner would ask before a demo — where it
 * runs, what it needs, who it is for — in place of the species pages'
 * partner/timeline/status.
 *
 * Every one sets `heroCentred`, by direction: the product masts are presented
 * the way the Foundation hero is — the stack centred in the band and the
 * heading in the homepage's pastel sheen — rather than anchored bottom-left
 * like a species record. It is set per record rather than once on the set so
 * that paging between them cannot land on a banner that forgot it; a fifth
 * product copies the shape and gets it.
 */

export const ANTZ_PLATFORM: Project = {
  slug: "antz-platform",
  statusLabel: "",
  location: "ANTZ SYSTEMS",
  title: "Antz Platform",
  hero: "/assets/antz/platform-hero-poster.jpg",
  heroVideo: "/assets/antz/platform-hero.mp4",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "The operating system an institution runs on every day. One record per animal, from accession to outcome.",

  facts: [
    {
      label: "What it is",
      icon: "platform",
      value: "The operating system a zoo runs on every day",
      lead: true,
    },
    {
      label: "Built around",
      icon: "record",
      value: "One record per animal, from accession to outcome",
    },
    {
      label: "Reporting",
      icon: "compliance",
      value: "AZA, EAZA, BIAZA, ZAA, SEAZA, USDA, CITES and studbooks",
    },
    {
      label: "Reach",
      icon: "globe",
      value:
        "Eight languages, and data hosted in the region an institution requires",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "The data an institution produces does not live in one place. It sits in keepers' heads, on paper, in spreadsheets, or in tools designed for other industries entirely.",
    },
    {
      /* The six were listed here until the capability cards went in below.
         Naming them twice on one page made the paragraph a table of contents
         for the rail a screen further down. */
      kicker: "The Platform",
      body: "Six capability families, each a working part of the same animal record, each built around the welfare of the animals in an institution's care.",
    },
    {
      kicker: "The Result",
      body: "One record per animal. Veterinary history, behavioural assessments, husbandry decisions, transfer logs, lab results and diet plans in the same place, in the order they happened — so a keeper's observation is visible to the vet, and the registrar's return is drawn from live operational data.",
    },
  ],

  tech: [
    { label: "Animal record", icon: "platform" },
    { label: "Veterinary and pharmacy", icon: "status" },
    { label: "Husbandry and transfers", icon: "iot" },
    { label: "Compliance reporting", icon: "camera" },
    { label: "Insight and analytics", icon: "ai" },
  ],

  external: {
    href: "https://www.antzsystems.com/antz-platform",
    label: "Antz Platform on antzsystems.com",
  },

  /* The capability slider from antzsystems.com/antz-platform, in place of the
     module screenshots this page opened with — those already carry the Antz
     Systems page's own carousel on /technology, and repeating them here said
     nothing the reader had not just seen.
     
     Its six families in its order, its photographs and its marks. The copy is
     theirs, with the hyphens they set as dashes turned into the em dashes this
     site uses. `alt` is the card's own description rather than the picture's:
     the picture is hidden, and this is what a reader of the rail is told the
     card is. */
  galleryStyle: "cards",
  gallery: [
    {
      src: "/assets/antz/cards/record.jpg",
      icon: "/assets/antz/cards/ic-record.svg",
      alt: "The Animal Record",
      title: "The Animal Record",
      body: "Every animal in your care, traceable from accession to outcome. Inventory and classification, animal management with identifiers and media, egg lifecycle from nest through nursery, mortality and fetal death, necropsy.",
    },
    {
      src: "/assets/antz/cards/observation.jpg",
      icon: "/assets/antz/cards/ic-observation.svg",
      alt: "Daily Observation And Assessment",
      title: "Daily Observation And Assessment",
      body: "The ways in which your team watches the animals are captured in a system, not a notebook. Mobile-first observation logging, animal and enclosure welfare assessments across health, behaviour, environment, nutrition and mental well-being, notes and incident logging, key insights for natality, mortality and arrivals.",
    },
    {
      src: "/assets/antz/cards/veterinary.jpg",
      icon: "/assets/antz/cards/ic-veterinary.svg",
      alt: "Veterinary And Medical",
      title: "Veterinary And Medical",
      body: "The full clinical surface of your zoo, joined up. Medical records and prescriptions, treatment administration and tracking, pharmacy inventory and dispense, lab tests and sample tracking, vaccination, deworming, hospital admissions and discharge.",
    },
    {
      src: "/assets/antz/cards/husbandry.jpg",
      icon: "/assets/antz/cards/ic-husbandry.svg",
      alt: "Husbandry And Operations",
      title: "Husbandry And Operations",
      body: "The working life of the zoo — housing, feeding, moving, securing — in one system. Housing across sites, sections, enclosures and clusters; diet from ingredients and recipes through meal groups; in-house, inter-site and external transfers; missing-animal incident handling; requests, announcements, security check-in and check-out.",
    },
    {
      src: "/assets/antz/cards/compliance.jpg",
      icon: "/assets/antz/cards/ic-compliance.svg",
      alt: "Compliance And Traceability",
      title: "Compliance And Traceability",
      body: "Every action across the platform is logged, attributable, and reportable on demand. User journal across every module; user management with role-based access; reports for AZA, EAZA, BIAZA, ZAA, SEAZA, USDA, CITES and studbooks, drawn from your live operational data.",
    },
    {
      src: "/assets/antz/cards/insight.jpg",
      icon: "/assets/antz/cards/ic-insight.svg",
      alt: "Insight And Analytics",
      title: "Insight And Analytics",
      body: "Your operational data, turned into welfare decisions. Reports across species, mortality, transfers and assessments; dashboards for births, deaths and arrivals; trend monitoring across the metrics your director needs.",
    },
  ],
};

export const ANTZ_ETHOSTUDIO: Project = {
  slug: "ethostudio",
  statusLabel: "",
  location: "ANTZ SYSTEMS",
  title: "EthoStudio",
  hero: "/assets/antz/ethostudio-hero-poster.jpg",
  heroVideo: "/assets/antz/ethostudio-hero.mp4",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "Keeper-trained behaviour and recognition AI. Your team designs the study, labels the footage, and trains a model on your own species.",

  facts: [
    {
      label: "What it is",
      icon: "behaviour",
      value: "Keeper-trained behaviour and recognition AI",
      lead: true,
    },
    {
      label: "Sampling",
      icon: "vision",
      value: "Focal-animal, scan, all-occurrence and ad-libitum",
    },
    { label: "Media", icon: "camera", value: "Video, audio and images in one place" },
    {
      label: "What's next",
      icon: "next",
      value: "The trained model moves to Antz Edge, and starts watching",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "There is never enough useful behavioural data. Keepers generate it by hand, and off-the-shelf computer vision does not know the species, the enclosure or the individuals it is being asked about.",
    },
    {
      kicker: "Our Approach",
      body: "EthoStudio works the other way around. Rather than asking an institution to fit a generic AI, its keepers teach an AI to fit the institution — designing the study, choosing the sampling method, naming the focal animals and building the ethogram themselves.",
    },
    {
      kicker: "Labelling, The Way Keepers Work",
      body: "Score live in the field or annotate uploaded footage frame by frame. As the model improves it pre-labels new video, so a team corrects rather than starts from scratch — and audio carries waveform and spectrogram views, so a behaviour and its sound are scored together.",
    },
  ],

  tech: [
    { label: "Study designer", icon: "platform" },
    { label: "Ethogram builder", icon: "voiceprint" },
    { label: "Video and live annotation", icon: "camera" },
    { label: "Model training", icon: "ai" },
  ],

  external: {
    href: "https://www.antzsystems.com/antz-ethostudio",
    label: "EthoStudio on antzsystems.com",
  },

  /* The carousel from antzsystems.com/antz-ethostudio, whole: its five laptop
     frames, in its order, in the stack it runs them in. Re-encoded to WebP at
     1400px, alpha kept — they are cut-outs whose shadow fades into the page. */
  galleryStyle: "stack",
  gallery: [
    { src: "/assets/antz/ethostudio-1.webp", alt: "The EthoStudio labelling interface, scoring a meerkat observation against a behaviour palette." },
    { src: "/assets/antz/ethostudio-2.webp", alt: "Choosing a sampling method while creating a new study." },
    { src: "/assets/antz/ethostudio-3.webp", alt: "A meerkat ethogram of fifteen behaviours, each with its code and colour." },
    { src: "/assets/antz/ethostudio-4.webp", alt: "A study's own record — species, sampling method, individuals and research goals." },
    { src: "/assets/antz/ethostudio-5.webp", alt: "A completed session: behaviour breakdown, group distribution, timeline and export." },
  ],
};

export const ANTZ_EDGE: Project = {
  slug: "edge",
  statusLabel: "",
  location: "ANTZ SYSTEMS",
  title: "Antz Edge",
  hero: "/assets/antz/edge-hero-poster.jpg",
  heroVideo: "/assets/antz/edge-hero.mp4",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "On-premises AI for wildlife monitoring. It reads your camera feeds where they already are, with no network required.",

  facts: [
    {
      label: "What it is",
      icon: "iot",
      value: "On-premises AI for wildlife monitoring and behaviour analysis",
      lead: true,
    },
    {
      label: "Runs on",
      icon: "board",
      value: "A Raspberry Pi, or an NVIDIA Jetson where inference is heavier",
    },
    {
      label: "Connectivity",
      icon: "offline",
      value: "None required — every frame is processed on the device",
    },
    {
      label: "Deployed in",
      icon: "globe",
      value: "Parks, forests, reserves, zoos, sanctuaries and breeding programmes",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "Camera traps produce vast amounts of unfiltered footage that somebody has to watch. They record leaves, shadows and empty frames, they run out of power, and in remote country they have no network to send anything anywhere.",
    },
    {
      kicker: "Our Solution",
      body: "Bring the AI to the animal rather than the footage to the cloud. Antz Edge is a compact low-power computer that reads existing camera feeds where they already are, identifies the species, and records only when there is an animal to record.",
    },
    {
      kicker: "What It Understands",
      body: "Feeding, hunting, resting, nesting, group movement, aggression and mating; how an enclosure is used and which animals are near each other; reproductive state, non-invasively, to time pairing. Poaching, intrusion and injury raise an alert the moment they are seen.",
    },
  ],

  tech: [
    { label: "On-device identification", icon: "ai" },
    { label: "Behaviour analysis", icon: "voiceprint" },
    { label: "Event-based recording", icon: "camera" },
    { label: "Real-time alerts", icon: "iot" },
  ],

  external: {
    href: "https://www.antzsystems.com/antz-edge",
    label: "Antz Edge on antzsystems.com",
  },

  gallery: [
    { src: "/assets/antz/edge-1.jpg", alt: "Wildlife monitoring in the field." },
    { src: "/assets/antz/edge-2.jpg", alt: "A remote site with no network coverage." },
    { src: "/assets/antz/edge-3.jpg", alt: "Camera-trap footage of an empty frame." },
    { src: "/assets/antz/edge-4.jpg", alt: "Manual review of camera-trap imagery." },
  ],
};

export const ANTZ_TRAILS: Project = {
  slug: "trails",
  statusLabel: "",
  location: "ANTZ SYSTEMS",
  title: "Antz Trails",
  hero: "/assets/antz/trails-hero-poster.jpg",
  heroVideo: "/assets/antz/trails-hero.mp4",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "The AI companion a visitor carries through the zoo. A planned day before they arrive, and an exhibit that answers for itself at the fence.",

  facts: [
    {
      label: "What it is",
      icon: "trail",
      value: "The AI companion a visitor carries through the zoo",
      lead: true,
    },
    {
      label: "Begins",
      icon: "calendar",
      value: "Days before arrival, with a planned and personalised route",
    },
    {
      label: "At the fence",
      icon: "camera",
      value: "Scan a marker and the exhibit answers for itself",
    },
    {
      label: "Branded",
      icon: "brand",
      value: "As the institution's own — its colours, logo and voice",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "Visitors arrive curious and most leave without answers. A placard says a little, a generic search says something about the species in general, and neither says anything about the animal in front of them.",
    },
    {
      kicker: "The Visit",
      body: "It starts before arrival: a five-step flow gathers who is coming, how long they have and what they care about, then builds a route through the zoo. The plan lays the day out as a journey rather than a list — exhibits to reach, feeding times to catch, breaks built in — and completed stops light up as the day unfolds.",
    },
    {
      kicker: "At The Fence",
      body: "Scan the marker and the exhibit comes alive: its name, its story, what it is doing right now. No typing in the sunlight — the card offers a handful of tappable prompts, including questions a visitor had not thought to ask.",
    },
  ],

  tech: [
    { label: "Trip planner", icon: "platform" },
    { label: "Marker scanning", icon: "camera" },
    { label: "Living itinerary", icon: "timeline" },
    { label: "Operator console", icon: "ai" },
  ],

  external: {
    href: "https://www.antzsystems.com/antz-trails",
    label: "Antz Trails on antzsystems.com",
  },

  gallery: [
    { src: "/assets/antz/trails-1.jpg", alt: "A planned day in Antz Trails.", fit: "contain" },
    { src: "/assets/antz/trails-2.jpg", alt: "A step in the trip planner.", fit: "contain" },
    { src: "/assets/antz/trails-3.jpg", alt: "The visitor's itinerary.", fit: "contain" },
    { src: "/assets/antz/trails-4.jpg", alt: "Sage, the operator console's assistant.", fit: "contain" },
  ],
};

/** The order the accordion lists them in, which is also the order the banner
 *  pager and the neighbour cards walk. */
export const ANTZ_PRODUCTS: Project[] = [
  ANTZ_PLATFORM,
  ANTZ_ETHOSTUDIO,
  ANTZ_EDGE,
  ANTZ_TRAILS,
];
