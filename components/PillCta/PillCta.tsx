import s from "./PillCta.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  /**
   * `inverse` is the white-ground treatment: it reads as a light pill on the
   * dark banner. Used by the nav bar and, matching it, the CTA band, so `solid`
   * currently has no caller and is kept only as the Figma default.
   *
   * Both variants take the site's holographic hover from `.wf-holo-hover`.
   */
  variant?: "solid" | "inverse";
};

/** Figma component `pill-cta` — reused in the nav bar and the CTA band. */
export default function PillCta({ children, href = "#", variant = "solid" }: Props) {
  const inverse = variant === "inverse";

  return (
    <a
      href={href}
      className={`${s.pill} ${inverse ? s.inverse : ""} wf-nav wf-holo-hover`.trim()}
    >
      {/* The green centre-out wipe this variant used to carry is gone: every
          button on the site now takes the same holographic hover, and two fills
          racing each other across one pill is one too many. What is left of the
          inverse treatment is its white ground and the 1.02 rush. */}
      <span className={s.label}>{children}</span>
    </a>
  );
}
