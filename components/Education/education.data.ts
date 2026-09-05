import type { AccordionItem } from "@/components/Pillars/Accordion";

/** Figma nodes 1962:18121 / 18127 / 18136. */
export const EDUCATION_ROWS: AccordionItem[] = [
  {
    index: "01",
    title: "Hands-on Training",
    // PLACEHOLDER: Figma leaves rows 01 and 03 collapsed and supplies no body
    // copy for them, exactly as the homepage's pillars board does.
    description:
      "Daily husbandry, enrichment and handling practised on the farm, not demonstrated on a screen.",
    href: "#hands-on-training",
  },
  {
    index: "02",
    title: "Multinational Faculty",
    description:
      "Mentored daily by international practitioners from six countries, alongside India's leading zoo directors, veterinarians, and conservation researchers.",
    href: "#multinational-faculty",
  },
  {
    index: "03",
    title: "Species Exposure",
    // PLACEHOLDER: see above.
    description:
      "Over 200 species under one roof, from small captive mammals to birds, reptiles and primates.",
    href: "#species-exposure",
  },
];

export type Course = {
  duration: string;
  /** Figma sets the second card's name on two explicit lines. */
  titleLines: string[];
  description: string;
  image: string;
  href: string;
};

/** Figma nodes 1962:12759 / 12760 / 12761. */
export const COURSES: Course[] = [
  {
    duration: "3 MONTHS, RESIDENTIAL",
    titleLines: ["Zoo Animal Keeper – Small Captive Animals"],
    description:
      "Entry-level immersion into professional animal care, no prior degree required.",
    image: "/assets/edu-course-1.jpg",
    href: "#zoo-animal-keeper",
  },
  {
    duration: "1 YEAR, RESIDENTIAL",
    titleLines: ["Diploma in Animal", "Care & Management"],
    description:
      "India's only residential research diploma in exotic animal care, culminating in an independent dissertation.",
    image: "/assets/edu-course-2.jpg",
    href: "#diploma-animal-care",
  },
  {
    duration: "1 YEAR, RESIDENTIAL",
    titleLines: ["Advanced Diploma in Animal Care Research"],
    description: "Research methodology, biostatistics, and ex-situ conservation.",
    image: "/assets/edu-course-3.jpg",
    href: "#advanced-diploma",
  },
];

/** Figma node 1965:21320. Each logo keeps its own Figma box — unlike assets. */
export const EDU_PARTNERS = [
  { src: "/assets/edu-partner-1.png", alt: "Avian Society of India", width: 111.273, height: 101.278 },
  { src: "/assets/edu-partner-2.svg", alt: "Sanjeevan Rescue Society", width: 164.511, height: 94.853 },
  { src: "/assets/edu-partner-3.png", alt: "Sri Chamarajendra Zoological Gardens, Mysuru", width: 56.707, height: 56.707 },
  { src: "/assets/edu-partner-4.png", alt: "Indore Zoo", width: 56.897, height: 42.922 },
  { src: "/assets/edu-partner-5.png", alt: "Sardar Patel Zoological Park", width: 91.659, height: 41.996 },
  { src: "/assets/edu-partner-6.png", alt: "Vivekanand Education Society", width: 112.039, height: 35.679 },
  { src: "/assets/edu-partner-7.png", alt: "TiCi NatureLab", width: 73.0, height: 40.0 },
];
