import type { Project } from "./project.data";

/**
 * The three rows of the education accordion, as pages on this site.
 *
 * They are `Project` records and they render through the same <Project*>
 * components the species pages and the Antz product pages use: the same mast,
 * parallax, leaf, pager, carousel, neighbour cards and closing band. A reader
 * moving from the White-bellied Heron to Antz Edge to Hands-On Training should
 * not feel the join.
 *
 * Content is gleaned from lifesciencetrust.org, the institute's own site, and
 * condensed rather than copied. Its figures are facts and are kept verbatim:
 * founded 2021, 2.5 acres at Yelahanka, 30,000 sq ft of workshops, six
 * workshops, 200+ species, cohorts of fifteen, faculty from six countries,
 * 6am to 6pm. So are the names and titles of the people, which are theirs.
 *
 * No em dashes anywhere in this file, by direction, as with the education
 * page's own band of copy.
 *
 * Every one sets `heroCentred`, as the Antz product pages do: these are topic
 * pages rather than records of a single animal, so the mast is presented the
 * way the Foundation hero is, the stack centred and the heading in the
 * homepage's pastel sheen.
 */

export const EDU_HANDS_ON: Project = {
  slug: "hands-on-training",
  statusLabel: "",
  location: "LSET EDUCATION",
  title: "Hands-On Training",
  hero: "/assets/edu/hands-hero.jpg",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "Daily husbandry, enrichment and handling practised on the farm, not demonstrated on a screen.",

  facts: [
    {
      label: "What it is",
      icon: "hands",
      value: "Learning by doing, from the first day",
      lead: true,
    },
    {
      label: "A day",
      icon: "calendar",
      value: "6am to 6pm, on the farm, with the animals",
    },
    {
      label: "Workshops",
      icon: "lever",
      value: "Six of them, across 30,000 sq ft of industry-grade facilities",
    },
    {
      label: "Entry",
      icon: "next",
      value: "No prior degree for the keeper course, and cohorts of fifteen",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "Animal care cannot be taught in a lecture hall. A student can learn the theory of husbandry, nutrition and welfare and still have never read an animal in front of them, never assessed an enclosure, never had to decide anything before six in the morning.",
    },
    {
      kicker: "Our Approach",
      body: "The enclosure is the classroom and the animals are the curriculum. Students live on a working farm and work the day it actually takes: behaviour observation, welfare protocols, nutrition, hygiene, enrichment and daily husbandry, under expert supervision, from the first week rather than the final term.",
    },
    {
      kicker: "The Workshops",
      body: "Making is part of the education. Six workshops cover carpentry, metalwork, fibreglass, terracotta, robotics and animal technology, so a student who has designed an enrichment device or an enclosure fitting can build it, install it, and watch an animal use it.",
    },
  ],

  tech: [
    { label: "Daily husbandry", icon: "hands" },
    { label: "Behaviour observation", icon: "vision" },
    { label: "Welfare assessment", icon: "compliance" },
    { label: "Enrichment design", icon: "lever" },
    { label: "On-the-job training", icon: "calendar" },
  ],

  external: {
    href: "https://lifesciencetrust.org/infrastructure",
    label: "The campus on lifesciencetrust.org",
  },

  gallery: [
    { src: "/assets/edu/hands-1.webp", alt: "The carpentry workshop." },
    { src: "/assets/edu/hands-2.webp", alt: "The metalwork workshop." },
    { src: "/assets/edu/hands-3.webp", alt: "The fibreglass workshop." },
    { src: "/assets/edu/hands-4.webp", alt: "The terracotta workshop." },
    { src: "/assets/edu/hands-5.webp", alt: "The robotics and AI workshop." },
    { src: "/assets/edu/hands-6.webp", alt: "The animal technology workshop." },
  ],
};

export const EDU_FACULTY: Project = {
  slug: "multinational-faculty",
  statusLabel: "",
  location: "LSET EDUCATION",
  title: "Multinational Faculty",
  hero: "/assets/edu/faculty-hero.jpg",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "Mentored daily by international practitioners from six countries, alongside India's leading zoo directors, veterinarians and conservation researchers.",

  facts: [
    {
      label: "What it is",
      icon: "globe",
      value: "Practitioners from six countries, teaching in person",
      lead: true,
    },
    {
      label: "Mentorship",
      icon: "partner",
      value: "Daily, and in the enclosure rather than the lecture hall",
    },
    {
      label: "Between them",
      icon: "book",
      value: "Zoo direction, habitat design, veterinary practice and research",
    },
    {
      label: "Cohort",
      icon: "status",
      value: "Fifteen students, so mentorship is a conversation",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "Exotic animal care is a small field, and most of what is known in it has never been written down. It lives with the people who have done the work: the curator who has bred the species, the designer who has built the enclosure, the vet who has treated the animal.",
    },
    {
      kicker: "Our Approach",
      body: "Bring those people to the students. LSeT is guided by a governing council of practitioners and taught by faculty drawn from six countries, so a cohort of fifteen is mentored by people who have run zoos, designed habitats, led rescues and published research.",
    },
    {
      kicker: "What It Means Day To Day",
      body: "Mentorship happens on the farm. Faculty teach where the work is, which is what lets a student ask about the animal in front of them rather than the one in the textbook, and it is why the diploma ends in an independent dissertation rather than an examination.",
    },
  ],

  /* No chips either, by direction. What this page is about is people, and a
     row of capability labels under their names read as a second, thinner
     version of the prose above it. */
  tech: [],

  /* No outbound link on this page, by direction. The other two topic pages
     keep theirs; this one's pointed at the same team it already shows. */

  /* No gallery, by direction. This page carried a card carousel of the seven
     mentors; the prose beside it already names what they bring, and the team
     is shown in full on /about. */
  gallery: [],
};

export const EDU_SPECIES: Project = {
  slug: "species-exposure",
  statusLabel: "",
  location: "LSET EDUCATION",
  title: "Species Exposure",
  hero: "/assets/edu/species-hero.jpg",
  heroCentred: true,
  heroLeaf: "sprig",
  lede:
    "Over 200 species under one roof, from small captive mammals to birds, reptiles and primates.",

  facts: [
    {
      label: "What it is",
      icon: "birds",
      value: "200+ species, on site, worked with daily",
      lead: true,
    },
    {
      label: "On the keeper course",
      icon: "vision",
      value: "150+ exotic species in three months",
    },
    {
      label: "Beyond husbandry",
      icon: "behaviour",
      value: "Breeding programmes, welfare research and ex-situ conservation",
    },
    {
      label: "What's next",
      icon: "next",
      value: "An independent dissertation, on an animal the student knows",
    },
  ],

  sections: [
    {
      kicker: "The Problem",
      body: "Species knowledge does not generalise. A keeper who has only worked with mammals cannot read a bird, and a curriculum built around the handful of animals a campus happens to hold produces graduates who can only work where they trained.",
    },
    {
      kicker: "Our Approach",
      body: "Breadth first, and real. The farm holds more than 200 species, and students work across them: primates, birds, reptiles, small mammals and insects, each with its own husbandry, its own diet, its own enrichment and its own way of telling you something is wrong.",
    },
    {
      kicker: "Where It Leads",
      body: "The collection is also the research. Recent work includes a five-year study of breeding success in the pygmy marmoset achieved through habitat-based husbandry, and an assessment of how auditory enrichment affects welfare and natural behaviour in meerkats.",
    },
  ],

  tech: [
    { label: "Primates", icon: "birds" },
    { label: "Birds and reptiles", icon: "vision" },
    { label: "Insect culture", icon: "record" },
    { label: "Ex-situ breeding", icon: "behaviour" },
    { label: "Welfare research", icon: "compliance" },
  ],

  external: {
    href: "https://lifesciencetrust.org/research",
    label: "Research on lifesciencetrust.org",
  },

  gallery: [
    { src: "/assets/edu/species-1.webp", alt: "A degu on the farm." },
    { src: "/assets/edu/species-2.webp", alt: "Dart frogs in the collection." },
    { src: "/assets/edu/species-3.webp", alt: "Cotton-top tamarins being raised on site." },
    { src: "/assets/edu/species-4.webp", alt: "Lemurs in the collection." },
    { src: "/assets/edu/species-5.webp", alt: "Insect culture and rearing." },
  ],
};

/** The order the accordion lists them in, which is also the order the banner
 *  pager and the neighbour cards walk. */
export const EDUCATION_TOPICS: Project[] = [
  EDU_HANDS_ON,
  EDU_FACULTY,
  EDU_SPECIES,
];
