import s from "./Blinder.module.css";

/**
 * The blinder that opens over a banner on load.
 *
 * Measured off `div.transition` on aquamaremarine.com: a fixed, z-9999 grid of
 * full-width horizontal slats in a solid dark colour, each with
 * `transform-origin` at its own bottom edge and a transform of
 * `matrix3d(1,0,0,0, 0,0,1,0, 0,-1,0,0, 0,0,0,1)` — rotateX 90deg, edge-on and
 * so invisible. A venetian blind: the slats swing about their own edge.
 *
 * Two things there are ours, because the reference's animation could not be
 * observed running (see the README): the timing, and that this covers the
 * banner rather than the whole viewport, since the ask was for the banners.
 *
 * Pure CSS, so it runs on load with no script and survives the static export.
 */
const SLATS = 12;

type SlatVars = React.CSSProperties & { "--i": number };

export default function Blinder() {
  return (
    <div className={s.blinder} aria-hidden="true">
      {Array.from({ length: SLATS }, (_, i) => (
        <span key={i} className={s.slat} style={{ "--i": i } as SlatVars} />
      ))}
    </div>
  );
}
