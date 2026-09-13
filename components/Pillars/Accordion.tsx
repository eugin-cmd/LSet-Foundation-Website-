"use client";

import { useState } from "react";
import Chevron from "@/components/icons/Chevron";
import s from "./Pillars.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

export type AccordionItem = {
  index: string;
  title: string;
  description: string;
  /** Optional: a row with nowhere to send a reader is better closing on its
   *  copy than carrying a link that goes nowhere. Omit it and it does. */
  href?: string;
  /** What the link says. "Know More" is the site's standard and the default;
   *  a row overrides it where the destination is a different kind of thing —
   *  Conservation sends a reader to the projects themselves, which is reading
   *  on rather than learning what a pillar is. */
  moreLabel?: string;
  /** Optional line-art mark beside the number. The education rows carry none. */
  icon?: React.ComponentType;
};

/**
 * The numbered disclosure rows, extracted from Pillars so the education page
 * can use the same markup, easing and measurements instead of a second copy.
 * Pillars keeps the overhanging photo; this owns only the list.
 */
export default function Accordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className={s.list} data-accordion>
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `pillar-panel-${item.index}`;
        const triggerId = `pillar-trigger-${item.index}`;
        const Icon = item.icon;

        return (
          <div key={item.title} className={s.group}>
            {i > 0 && <div className={s.divider} aria-hidden="true" />}
            {/* data-open here as well as on the panel: the panel is a later
                sibling of the trigger, and CSS cannot select backwards to
                reach the icon from it. */}
            <div className={s.item} data-open={open}>
              <button
                type="button"
                id={triggerId}
                className={s.trigger}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span className={s.indexRow}>
                  {Icon && <Icon />}
                  <span className={s.index}>{item.index}</span>
                </span>
                <span className={`${s.title} wf-display-xl`}>{item.title}</span>
                <span className={`${s.chevron} ${open ? s.chevronOpen : ""}`}>
                  <Chevron />
                </span>
              </button>

              {/* The panel stays in the DOM so its height can be animated —
                  `hidden` toggles `display`, which is not interpolable. `inert`
                  keeps the collapsed copy out of the tab order and the
                  accessibility tree. */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                className={s.panelWrap}
                data-open={open}
                inert={!open}
              >
                <div className={s.panel}>
                  <p className={`${s.desc} wf-display-s`}>{item.description}</p>
                  {item.href && (
                    <a href={item.href} className={s.more}>
                      {item.moreLabel ?? "Know More"} <LinkArrow />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
