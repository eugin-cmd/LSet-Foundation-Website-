/* Client, because the icon components below are passed to <Accordion>, which is
   itself a client component — function references cannot cross a server
   boundary. Pillars held the accordion's state before it was extracted, so this
   is where the directive already lived. */
"use client";

import Leaf from "@/components/icons/Leaf";
import OpenBook from "@/components/icons/OpenBook";
import NodeNetwork from "@/components/icons/NodeNetwork";
import Accordion, { type AccordionItem } from "./Accordion";
import type { Pillar } from "./pillars.data";
import { PILLARS } from "./pillars.data";
import s from "./Pillars.module.css";

/* Line art, stroked in the row's own colour by .indexRow svg. */
const ICONS: Record<Pillar["key"], React.ComponentType> = {
  conservation: Leaf,
  education: OpenBook,
  technology: NodeNetwork,
};

const ITEMS: AccordionItem[] = PILLARS.map((p) => ({ ...p, icon: ICONS[p.key] }));

export default function Pillars() {
  return (
    <section className={s.pillars}>
      {/* Figma overhangs a field photograph from here into the approach
          section above. Removed by direction, along with its rise and the
          timeline-scope in globals.css that only existed to let a child of
          this section key off that section's timeline. */}
      <Accordion items={ITEMS} />
    </section>
  );
}
