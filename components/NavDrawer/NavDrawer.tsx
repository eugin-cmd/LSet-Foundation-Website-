import Leaf from "@/components/icons/Leaf";
import OpenBook from "@/components/icons/OpenBook";
import NodeNetwork from "@/components/icons/NodeNetwork";
import type { Destination } from "./navDrawer.data";
import { DESTINATIONS, PROMO } from "./navDrawer.data";
import s from "./NavDrawer.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma `drawer` node 1959:12496 — the panel that opens under the nav bar.
 *
 * The Figma node contains the nav row as its first child, because there the
 * header and the drawer are one white block. Here the nav is its own floating
 * plate, so this component is the node's `drawer-inner` only; the panel's
 * attachment to the plate is handled in NavBar.module.css.
 */
/* The same three marks the homepage pillars use, for the same three
 * capabilities. Stroked in the row's own colour by .rowIndexRow svg. */
const ICONS: Record<Destination["key"], React.ComponentType> = {
  conservation: Leaf,
  education: OpenBook,
  technology: NodeNetwork,
};

export default function NavDrawer({
  id,
  onNavigate,
}: {
  id: string;
  /** Closes the panel; every link inside it navigates, so every link calls it. */
  onNavigate?: () => void;
}) {
  return (
    <div className={s.inner} id={id}>
      <div className={s.label}>
        <p className={`${s.labelHead} wf-label`}>What we do</p>
        <p className={`${s.labelBody} wf-small`}>
          Three capabilities. They only matter together, which is the point of
          the model.
        </p>
      </div>

      <div className={s.destinations}>
        {DESTINATIONS.map((d) => {
          const Icon = ICONS[d.key];
          return (
            <a key={d.index} href={d.href} className={s.row} onClick={onNavigate}>
              {/* Three grid items, not a nested wrapper: .row places the
                  index row on its own line and puts the title and the
                  description side by side on the next one, so the paragraph
                  aligns with the title by construction. */}
              <span className={s.rowIndexRow} aria-hidden="true">
                <Icon />
                <span className={`${s.rowIndex} wf-meta`}>{d.index}</span>
              </span>
              <span className={`${s.rowTitle} wf-title`}>{d.title}</span>
              <span className={`${s.rowDesc} wf-small`}>{d.description}</span>
            </a>
          );
        })}
      </div>

      <a href={PROMO.href} className={s.promo} onClick={onNavigate}>
        <span className={s.promoMedia}>
          <img src={PROMO.image} alt="" width={278} height={130} />
        </span>
        <span className={`${s.promoKicker} wf-label`}>{PROMO.kicker}</span>
        <span className={`${s.promoTitle} wf-subtitle`}>{PROMO.title}</span>
        <span className={`${s.promoBody} wf-small`}>{PROMO.body}</span>
        <span className={`${s.promoCta} wf-meta`}>
          {PROMO.cta} <LinkArrow />
        </span>
      </a>
    </div>
  );
}
