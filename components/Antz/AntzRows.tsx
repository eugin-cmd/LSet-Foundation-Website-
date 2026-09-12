"use client";

import Accordion, { type AccordionItem } from "@/components/Pillars/Accordion";
import ConnectedRecords from "@/components/icons/ConnectedRecords";
import BehaviourModel from "@/components/icons/BehaviourModel";
import EdgeWatch from "@/components/icons/EdgeWatch";
import VisitorTrail from "@/components/icons/VisitorTrail";
import { ANTZ_ROWS, type AntzRow } from "./antz.data";
import s from "./Antz.module.css";

/**
 * Figma node 1965:18358 — the same numbered disclosure board as the homepage
 * and the education page, at the same 1101px list width and the same 78px/172px
 * frame, so it reuses <Accordion> rather than repeating it a third time.
 *
 * Figma ships row 02 expanded.
 *
 * Icons: the four product marks this codebase already carries — they were
 * drawn for these exact products, and were previously unused here because the
 * board listed capability areas rather than the products themselves.
 *
 * Looked up by `key` rather than taken from the data file directly, because a
 * component reference cannot cross the data module: these are passed to
 * <Accordion>, which holds the open row in state, and "use client" here is
 * what lets them.
 */
const ICONS: Record<AntzRow["key"], React.ComponentType> = {
  platform: ConnectedRecords,
  ethostudio: BehaviourModel,
  edge: EdgeWatch,
  trails: VisitorTrail,
};

const ITEMS: AccordionItem[] = ANTZ_ROWS.map((row) => ({
  ...row,
  icon: ICONS[row.key],
}));

export default function AntzRows() {
  return (
    <section className={s.rows}>
      <div className={s.rowsInner}>
        <Accordion items={ITEMS} defaultOpen={1} />
      </div>
    </section>
  );
}
