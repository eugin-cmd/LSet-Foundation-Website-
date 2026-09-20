import ExternalArrow from "@/components/icons/ExternalArrow";
import s from "./Pillars.module.css";

export type AccordionItem = {
  index: string;
  title: string;
  description: string;
  /** Optional: a row with nowhere to send a reader is better closing on its
   *  copy than being a link that goes nowhere. Omit it and the row renders as
   *  a plain block, with no mark at its corner and nothing to press. */
  href?: string;
  /** What the link means, for the row's accessible name. "Know More" is the
   *  site's standard and the default; a row overrides it where the destination
   *  is a different kind of thing — Conservation sends a reader to the projects
   *  themselves, which is reading on rather than learning what a pillar is. */
  moreLabel?: string;
  /** Optional line-art mark beside the number. The education rows carry none. */
  icon?: React.ComponentType;
};

/**
 * The numbered rows, extracted from Pillars so the education and Antz pages
 * can use the same markup and measurements instead of a second copy. Pillars
 * keeps the overhanging photo; this owns only the list.
 *
 * It was a disclosure list until now — one row open, the rest collapsed behind
 * a chevron — and is no longer: every row stands open, and the row itself is a
 * link. What went with the accordion was the open/closed state and everything
 * that existed to mark a change of it: the panel's height transition and its
 * copy's fade, the chevron's rotation, the title's lift and the number's icon
 * drop. The hover answers stayed, and the icon drop came back on hover rather
 * than on open — a row has something to say to the pointer again, because
 * pointing at it now leads somewhere.
 *
 * The whole row is the anchor rather than the mark at its corner alone. The
 * alternative was a stretched pseudo-element over a corner link, which keeps
 * the row's copy selectable; this is the plainer thing, and it is what the
 * hover lift has been promising since the row started answering the pointer.
 *
 * No state left, so no `"use client"`. The three boards that call this keep
 * theirs — they pass icon *components* down, and function references cannot
 * cross a server boundary.
 */
export default function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className={s.list} data-accordion>
      {items.map((item, i) => {
        const Icon = item.icon;

        /* A linkless row is a <div>: an <a> without an href is not a link,
           takes no focus and answers no keyboard, so it would only look like
           one. Typed as "a" so the href below is allowed — the pair is only
           ever built together. */
        const Row = (item.href ? "a" : "div") as "a";
        const rowProps = item.href
          ? {
              href: item.href,
              /* The row's copy runs to a sentence or three, and a link named
                 by all of it is a paragraph read aloud on every tab stop.
                 This keeps the name to the destination and the thing it
                 leads to — and keeps the visible title inside it, which is
                 what WCAG's label-in-name asks of a label that replaces one. */
              "aria-label": `${item.moreLabel ?? "Know More"}: ${item.title}`,
            }
          : {};

        return (
          <div key={item.title} className={s.group}>
            {i > 0 && <div className={s.divider} aria-hidden="true" />}
            <Row className={s.item} {...rowProps}>
              <div className={s.head}>
                <span className={s.indexRow}>
                  {Icon && <Icon />}
                  <span className={s.index}>{item.index}</span>
                </span>
                <span className={`${s.title} wf-display-xl`}>{item.title}</span>

                {/* Top right, in the slot the chevron held — which is also what
                    `.title`'s end padding still reserves, so a long title goes
                    on clearing it. A mark now rather than a link of its own:
                    the row around it is the link, and a second one inside it
                    would be a tab stop to the same page. */}
                {item.href && (
                  <span className={s.jump} aria-hidden="true">
                    <ExternalArrow />
                  </span>
                )}
              </div>

              <div className={s.panel}>
                <p className={`${s.desc} wf-display-s`}>{item.description}</p>
              </div>
            </Row>
          </div>
        );
      })}
    </div>
  );
}
