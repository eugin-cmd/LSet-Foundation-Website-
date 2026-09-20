import type { AccordionItem } from "@/components/Pillars/Accordion";
import {
  EDU_HANDS_ON,
  EDU_FACULTY,
  EDU_SPECIES,
} from "@/components/Project/educationTopics.data";

/** Figma nodes 1962:18121 / 18127 / 18136. */
/** The accordion's own item plus the key its icon is looked up by. */
export type EducationRow = AccordionItem & {
  key: "hands" | "faculty" | "species";
};

export const EDUCATION_ROWS: EducationRow[] = [
  /* Each row's sentence is read from the page its "Know More" opens, not
     repeated here: the two would drift the first time either was edited.
     The hrefs were dead anchors until those pages existed. */
  {
    index: "01",
    key: "hands",
    title: "Hands-on Training",
    description: EDU_HANDS_ON.lede!,
    href: "/education/hands-on-training",
  },
  {
    index: "02",
    key: "faculty",
    title: "Multinational Faculty",
    description: EDU_FACULTY.lede!,
    href: "/education/multinational-faculty",
  },
  {
    index: "03",
    key: "species",
    title: "Species Exposure",
    description: EDU_SPECIES.lede!,
    href: "/education/species-exposure",
  },
];

export type Course = {
  duration: string;
  /** Figma sets the second card's name on two explicit lines. Longer names
   *  carry their own break here rather than being wrapped by the box, which
   *  would break them differently at every width. */
  titleLines: string[];
  description: string;
  image: string;
  href: string;
};

/**
 * Every course the institute runs, from lifesciencetrust.org/course, in the
 * order its own courses page lists them: the two long residential diplomas
 * first, then the certificates.
 *
 * Figma nodes 1962:12759 / 12760 / 12761 drew three cards. These are eight,
 * which is what the institute actually teaches, and the arc's stagger below
 * is derived for that count rather than the design's three.
 *
 * Each card links out to that course's own page, where the full syllabus,
 * the intake dates and the application live. Those were dead anchors until
 * now. The snippet is a line drawn from the course's own description; the
 * photograph is the one its page opens with.
 */
export const COURSES: Course[] = [
  {
    duration: "3 MONTHS, RESIDENTIAL",
    titleLines: ["Zoo Animal Keeper", "Small Captive Animals"],
    description:
      "Entry-level immersion with 150+ exotic species, 6am to 6pm. No prior degree required.",
    image: "/assets/edu/courses/keeper.webp",
    href: "https://lifesciencetrust.org/course/animal-zoo-keeper-small-captive-animals",
  },
  {
    duration: "1 YEAR, RESIDENTIAL",
    titleLines: ["Diploma in Animal", "Care & Management"],
    description:
      "Two semesters inside the living laboratory, from taxonomy and nutrition to zoo management.",
    image: "/assets/edu/courses/dacm.webp",
    href: "https://lifesciencetrust.org/course/diploma-in-animal-care-management",
  },
  {
    duration: "1 YEAR, RESIDENTIAL",
    titleLines: ["Advanced Diploma in", "Animal Care Research"],
    description:
      "Research design, biostatistics and scientific writing, ending in an independent dissertation.",
    image: "/assets/edu/courses/research.webp",
    href: "https://lifesciencetrust.org/course/new-course",
  },
  {
    duration: "3 MONTHS, ON-SITE",
    titleLines: ["Orientation to", "Zoo Design"],
    description:
      "Habitat planning, enclosure design and circulation, for architects and landscape designers.",
    image: "/assets/edu/courses/zoo-design.webp",
    href: "https://lifesciencetrust.org/course/orientation-to-zoo-design",
  },
  {
    duration: "3 MONTHS, ON-SITE",
    titleLines: ["Aquarium", "Technician Programme"],
    description:
      "Freshwater and marine systems, from home aquariums to the ornamental fish trade.",
    image: "/assets/edu/courses/aquarium.webp",
    href: "https://lifesciencetrust.org/course/aquarium-technician-program",
  },
  {
    duration: "1 MONTH, DAWN TO DUSK",
    titleLines: ["Basics of Equine", "Care & Management"],
    description:
      "Stable management, nutrition, hoof care and behaviour, with Bangalore Horse Riding School.",
    image: "/assets/edu/courses/equine.webp",
    href: "https://lifesciencetrust.org/course/basics-of-equine-care-management",
  },
  {
    duration: "300 HOURS, ON-SITE",
    titleLines: ["Assistant", "Gardener Course"],
    description:
      "Horticulture, propagation and landscape maintenance, with on-the-job training.",
    image: "/assets/edu/courses/gardener.webp",
    href: "https://lifesciencetrust.org/course/assistant-gardener-course",
  },
  {
    duration: "4 SUNDAYS, ON-SITE",
    titleLines: ["Insect Rearing &", "Culture Techniques"],
    description:
      "Insect biology and behaviour through to captive breeding and farm-scale production.",
    image: "/assets/edu/courses/insects.webp",
    href: "https://lifesciencetrust.org/course/insect-rearing-culture-techniques",
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
