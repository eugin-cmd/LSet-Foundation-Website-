import { EDU_PARTNERS } from "./education.data";
import s from "./Education.module.css";

/** Width goes through a custom property so CSS can cap it below its intrinsic
 *  size on narrow screens; an inline width could not be overridden. */
type LogoVars = React.CSSProperties & { "--logo-w": string };

/**
 * Figma node 1965:21318, moved out of the courses section to sit directly
 * under the banner — the slot the institute paragraph used to hold.
 *
 * The band stays on `--surface-darker`. Every logo is exported fully opaque
 * with that exact colour (rgb 5 21 12) composited in, so on any other ground
 * they would read as seven rectangles rather than seven marks.
 */
export default function EducationPartners() {
  return (
    <section id="edu-partners" className={s.partnersBand}>
      <div className={s.partners}>
        {/* Figma's own text is missing the "I" of "In"; corrected here. */}
        <p className={s.partnersLabel}>In association with leading partners</p>
        <div className={s.partnersLogos}>
          {EDU_PARTNERS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              style={{ "--logo-w": `${logo.width}px` } as LogoVars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
