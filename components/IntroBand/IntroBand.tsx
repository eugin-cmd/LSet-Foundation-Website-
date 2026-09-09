import s from "./IntroBand.module.css";

/**
 * Figma's centred paragraph band, `Frame 1984078023` — the same node id in the
 * homepage, education and Antz Systems frames, which is why this is a shared
 * component rather than three copies.
 *
 * Two knobs, because the frames differ in exactly two ways: the homepage
 * direction turned the band white while Antz keeps Figma's mint, and the
 * measure is 964px there against 666px here.
 */
export default function IntroBand({
  children,
  id,
  tone = "plain",
  measure = 964,
}: {
  children: React.ReactNode;
  id?: string;
  /** `mint` is Figma's #edffe8 ground; `plain` follows --surface-band. */
  tone?: "plain" | "mint";
  /** Copy measure in px, capped to the band's own width on narrow screens. */
  measure?: number;
}) {
  return (
    <section
      id={id}
      className={`${s.band} ${tone === "mint" ? s.mint : ""}`.trim()}
      style={{ "--intro-measure": `${measure}px` } as React.CSSProperties}
    >
      <p className={`${s.copy} wf-body-l`}>{children}</p>
    </section>
  );
}
