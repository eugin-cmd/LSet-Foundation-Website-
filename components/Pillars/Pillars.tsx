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
      {/* Figma parents this photo to the pillars frame at top -615px so it
          overhangs the deep-green block of the section above. */}
      <div className={s.photo}>
        <div className={s.photoInner}>
          <img src="/assets/approach-photo.jpg" alt="Field team feeding rescued cranes" />
        </div>
      </div>

      {/* Figma ships the board with row 02 (Education) expanded. */}
      <Accordion items={ITEMS} defaultOpen={1} />
    </section>
  );
}
