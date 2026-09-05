import s from "./IntroBand.module.css";

/**
 * Figma's centred paragraph band. Built for the homepage, where the copy later
 * moved into the hero, and now carrying the education page's institute
 * paragraph — the band's measurements are the same in both frames.
 */
export default function IntroBand({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={s.band}>
      <p className={`${s.copy} wf-body-l`}>{children}</p>
    </section>
  );
}
