"use client";

import Accordion from "@/components/Pillars/Accordion";
import type { AccordionItem } from "@/components/Pillars/Accordion";
import CuppedHands from "@/components/icons/CuppedHands";
import Globe from "@/components/icons/Globe";
import Birds from "@/components/icons/Birds";
import type { EducationRow } from "./education.data";
import { EDUCATION_ROWS } from "./education.data";
import s from "./Education.module.css";

/**
 * Figma node 1962:18119 — the same numbered disclosure board as the homepage,
 * so it reuses that component; only the shell and the copy are new. Figma ships
 * row 02 expanded.
 *
 * "use client" is required, not incidental: Accordion is a client component and
 * these icons are passed to it as component references, which cannot cross a
 * server-to-client boundary. Pillars.tsx carries the same directive for the
 * same reason.
 */
/* Line art, stroked in the row's own colour by .indexRow svg. */
const ICONS: Record<EducationRow["key"], React.ComponentType> = {
  hands: CuppedHands,
  faculty: Globe,
  species: Birds,
};

const ITEMS: AccordionItem[] = EDUCATION_ROWS.map((r) => ({
  ...r,
  icon: ICONS[r.key],
}));
export default function EducationPillars() {
  return (
    <section className={s.rows}>
      <div className={s.rowsInner}>
        <Accordion items={ITEMS} defaultOpen={1} />
      </div>
    </section>
  );
}
