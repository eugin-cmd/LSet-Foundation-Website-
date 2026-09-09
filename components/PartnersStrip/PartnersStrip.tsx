import WaveRule from "@/components/WaveRule/WaveRule";
import s from "./PartnersStrip.module.css";

/** Scale applied to the Figma dimensions below — kept explicit so the base
 *  numbers stay the ones in the design file. */
const LOGO_SCALE = 1.15;

/** Exact Figma dimensions per logo — these are unlike assets, so each keeps its own box. */
const PARTNERS = [
  { src: "/assets/partner-rspn.svg", alt: "RSPN Bhutan", width: 52.957, height: 51.745 },
  { src: "/assets/partner-mtkenya.svg", alt: "Mount Kenya Trust", width: 98.055, height: 51.757 },
  { src: "/assets/partner-aspinall.svg", alt: "The Aspinall Foundation", width: 114.604, height: 50.935 },
  { src: "/assets/partner-04.svg", alt: "CBD-Habitat", width: 51.572, height: 51.572 },
  { src: "/assets/partner-05.svg", alt: "Orangutan Haven", width: 138.057, height: 38.838 },
  { src: "/assets/partner-06.svg", alt: "AussieArk", width: 123.995, height: 48.388 },
];

const px = (n: number) => `${(n * LOGO_SCALE).toFixed(2)}px`;

/** Width goes through a custom property so CSS can cap it below its intrinsic
 *  size on narrow screens; an inline width could not be overridden. */
type LogoVars = React.CSSProperties & { "--logo-w": string };

export default function PartnersStrip() {
  return (
    <div id="partners" className={s.strip}>
      <p className={s.label}>In the field with leading conservation partners</p>
      <div className={s.logos}>
        {PARTNERS.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            style={{ "--logo-w": px(logo.width) } as LogoVars}
          />
        ))}
      </div>

      <WaveRule className={s.rule} />
    </div>
  );
}
