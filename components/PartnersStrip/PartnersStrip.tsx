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
  /* Named rather than numbered like its neighbours above, which is where this
     list was already heading — rspn, mtkenya and aspinall are named and only
     04 and 06 still are not. The artwork is the supplied file, whose own
     filename says "Heaven"; the partner is Orangutan Haven, so the alt and the
     asset keep the right spelling.

     invert: false, by direction. The strip inverts because most of these
     files are white artwork and the band sits on <MeshField>'s light surface,
     so flipping them is what makes them black enough to read. This one arrives
     black already, and inverting it turned it white against that light ground.
     Anything supplied dark wants the same flag. */
  { src: "/assets/partner-orangutan-haven.svg", alt: "Orangutan Haven", width: 139, height: 39, invert: false },
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
            /* Only written when it is off: the filter is the default and an
               attribute that is usually absent is easier to read in the DOM
               than one that is usually "true". */
            data-invert={logo.invert === false ? "false" : undefined}
            style={{ "--logo-w": px(logo.width) } as LogoVars}
          />
        ))}
      </div>

      <WaveRule className={s.rule} />
    </div>
  );
}
