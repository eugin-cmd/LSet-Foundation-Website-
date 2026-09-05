import s from "./PillCta.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  /**
   * `inverse` is the white-ground treatment: it reads as a light pill on the
   * dark banner and wipes to the green fill on hover, the reverse of the
   * reference button on antzsystems.com. Used by the nav bar and, matching it,
   * the CTA band — so `solid` currently has no caller and is kept only as the
   * Figma default.
   */
  variant?: "solid" | "inverse";
};

/** Figma component `pill-cta` — reused in the nav bar and the CTA band. */
export default function PillCta({ children, href = "#", variant = "solid" }: Props) {
  const inverse = variant === "inverse";

  return (
    <a
      href={href}
      className={`${s.pill} ${inverse ? s.inverse : ""} wf-nav`.trim()}
    >
      <span className={s.label}>{children}</span>

      {/* The wipe layer carries its own copy of the label so the text flips
          colour with the fill in one pass, rather than cross-fading against
          it. Absolutely positioned, so the pill's flex gap ignores it.
          aria-hidden: .label above is the accessible copy. */}
      {inverse && (
        <span className={s.wipe} aria-hidden="true">
          {children}
        </span>
      )}
    </a>
  );
}
