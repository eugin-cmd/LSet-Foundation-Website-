import type { Metadata } from "next";
import MeshField from "@/components/MeshField/MeshField";
import { PRIVACY, UPDATED } from "@/components/Legal/legal.data";
import s from "@/components/Legal/Legal.module.css";

export const metadata: Metadata = {
  title: "Privacy | LSeT Foundation",
  description:
    "What this site collects, which is almost nothing: no cookies, no analytics, and two third parties explained plainly.",
};

/**
 * The privacy notice. No Figma node — the footer has always carried a Privacy
 * row and it pointed at "#".
 *
 * The copy is in legal.data.ts, written against what this site actually does.
 * It is a draft for the trust to review, not legal advice, and it carries one
 * marked placeholder: the hosting provider.
 */
export default function PrivacyPage() {
  return (
    <>
      <main>
        <header className={s.hero}>
          <div className={s.heroInner}>
            <p className={`${s.kicker} wf-label`}>LEGAL</p>
            <h1 className={`${s.title} wf-display-xl`}>Privacy</h1>
            <p className={`${s.updated} wf-small`}>Last updated {UPDATED}</p>
          </div>
        </header>

        <MeshField>
          <section className={s.body} aria-label="Privacy notice">
            <div className={s.bodyInner}>
              {PRIVACY.map((section) => (
                <section className={s.section} key={section.heading}>
                  <h2 className={s.heading}>{section.heading}</h2>
                  {section.body.map((para) => (
                    <p className={s.para} key={para.slice(0, 40)}>
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </section>
        </MeshField>
      </main>
    </>
  );
}
