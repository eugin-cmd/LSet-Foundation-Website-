import {
  ANTZ_EDGE,
  ANTZ_ETHOSTUDIO,
  ANTZ_PLATFORM,
  ANTZ_TRAILS,
} from "@/components/Project/antzProducts.data";

export type AntzRow = {
  index: string;
  /** Keys the row's icon in AntzRows.tsx. Separate from `title` so re-wording a
   *  heading cannot silently drop the icon — the same arrangement the other two
   *  boards use. */
  key: "platform" | "ethostudio" | "edge" | "trails";
  title: string;
  description: string;
  href: string;
};

/**
 * The four Antz products, each opening onto its own page.
 *
 * This board used to list five capability areas of the platform — records,
 * observations, operations, compliance, analytics — four of them written as
 * placeholders because Figma only opened one row. It lists the products
 * instead, which is what antzsystems.com is organised around and what the
 * "Know More" links now have somewhere to go to.
 *
 * The copy here is deliberately a line or two: the board is a contents page,
 * and each product's own page carries the detail. Taglines are condensed from
 * antzsystems.com rather than lifted, except the product names themselves.
 *
 * The descriptions are not written here — each is the `lede` from that
 * product's own record, which is also the line its banner carries under the
 * heading. Stated once, so the board and the page cannot come to disagree
 * about what a product is.
 */
export const ANTZ_ROWS: AntzRow[] = [
  {
    index: "01",
    key: "platform",
    title: "Antz Platform",
    description: ANTZ_PLATFORM.lede!,
    href: "/technology/antz-platform",
  },
  {
    index: "02",
    key: "ethostudio",
    title: "EthoStudio",
    description: ANTZ_ETHOSTUDIO.lede!,
    href: "/technology/ethostudio",
  },
  {
    index: "03",
    key: "edge",
    title: "Antz Edge",
    description: ANTZ_EDGE.lede!,
    href: "/technology/edge",
  },
  {
    index: "04",
    key: "trails",
    title: "Antz Trails",
    description: ANTZ_TRAILS.lede!,
    href: "/technology/trails",
  },
];
