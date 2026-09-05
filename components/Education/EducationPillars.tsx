import Accordion from "@/components/Pillars/Accordion";
import { EDUCATION_ROWS } from "./education.data";
import s from "./Education.module.css";

/**
 * Figma node 1962:18119 — the same numbered disclosure board as the homepage,
 * so it reuses that component; only the shell and the copy are new. Figma ships
 * row 02 expanded.
 */
export default function EducationPillars() {
  return (
    <section className={s.rows}>
      <div className={s.rowsInner}>
        <Accordion items={EDUCATION_ROWS} defaultOpen={1} />
      </div>
    </section>
  );
}
