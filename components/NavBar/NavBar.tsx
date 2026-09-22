"use client";

import { useRef } from "react";
import usePointerMesh from "@/components/usePointerMesh";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PillCta from "@/components/PillCta/PillCta";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import { BRANDS } from "./nav.data";
import s from "./NavBar.module.css";

/** The highlight's column index travels through a custom property so the
 *  transform that reads it can be transitioned. */
type BrandRowVars = React.CSSProperties & { "--brand-index": number };

const DRAWER_ID = "nav-drawer";
const DRAWER_PANEL_ID = "nav-drawer-panel";
const BURGER_ID = "nav-open";


const LINKS = [
  /* Its own page now, at /the-work. It was "/#the-work" — the homepage's
     <ProofWall> arc — which the nav had to address absolutely because it is on
     every page and that section is only on one. The arc stays where it is and
     keeps its id; this link goes to the full wall instead. */
  { label: "Our Work", href: "/the-work", caret: false, drawer: false },
  /* The drawer's own label column reads WHAT WE DO, so this is its control and
     needs no href of its own. */
  { label: "What We Do", href: "#", caret: true, drawer: true },
  /* A real page now, at /about. It was "#" with a caret, which promised a
     menu that never existed and went nowhere when clicked. */
  { label: "About", href: "/about", caret: false, drawer: false },
];

/**
 * The bar lives in the root layout, not in the pages, so it survives a route
 * change instead of being torn down and rebuilt with it. That is what lets the
 * brand highlight travel: the element persists, only --brand-index changes, and
 * CSS transitions the transform that reads it. The brand links are next/link
 * for the same reason — a full document load would have nothing to animate.
 *
 * The current brand comes from the pathname rather than a prop, since no page
 * passes it any more. Figma gives the education frame a white chip with teal
 * text where the homepage frame has a translucent one with white text; the
 * single treatment here is deliberate, so the bar does not appear to change
 * style between pages.
 */
export default function NavBar() {
  const pathname = usePathname();

  /* The drawer's checkbox is the source of truth, and it stays uncheckable by
     CSS alone — a controlled input would break the scripts-stripped snapshot,
     where the label has to keep working on its own. So closing it is a direct
     `checked = false` on the ref rather than React state.

     Every navigating item in the bar gets this. Without it the panel stayed
     open across a client-side route change — the nav lives in the layout now,
     so nothing tears it down — and since the drawer covers the content, the
     new page arrived hidden behind it. The FOUNDATION chip was in fact
     navigating correctly the whole time; it just looked inert. */
  const drawerRef = useRef<HTMLInputElement>(null);

  /* Points the drawer's mesh blobs at the cursor, exactly as <MeshField> does
     for the pages' content areas. The panel is the surface being pointed at
     whenever it is open, so it gets the same treatment rather than the
     scroll-driven swirl alone. */
  const meshRef = usePointerMesh<HTMLDivElement>();
  /* Below 1180px the whole bar — brand chips included — collapses into the
     burger panel, which is its own checkbox. Navigating from a chip there hit
     exactly the same fault the drawer had: the route changed behind a panel
     that stayed open. Both get unchecked, so one handler covers every width. */
  const burgerRef = useRef<HTMLInputElement>(null);
  const closeMenus = () => {
    if (drawerRef.current) drawerRef.current.checked = false;
    if (burgerRef.current) burgerRef.current.checked = false;
  };
  /* -1 for a route no brand claims — /the-work is the first of those. The
     highlight used to rest on the first column in that case, which was
     harmless while every route WAS a brand and is not any more: the plate under
     FOUNDATION reads as "you are here" from a page that is not the Foundation
     page. It is hidden instead, so no brand claims a route it does not own.
     The index still resolves to 0 so the plate has somewhere to sit while
     invisible, and its travel is unchanged when a brand is active. */
  const activeIndex = BRANDS.findIndex((b) => b.href === pathname);
  const brandIndex = activeIndex === -1 ? 0 : activeIndex;
  const brandClaimed = activeIndex !== -1;

  return (
    <div className={s.sticky}>
      {/* Drawer disclosure. A checkbox rather than state, for the same reason
          the burger below is one: the shared snapshot strips every script, and
          the menu has to keep working there. Visually hidden but still
          focusable, so the chip can be reached from the keyboard. */}
      <input
        ref={drawerRef}
        type="checkbox"
        id={DRAWER_ID}
        className={s.drawerToggle}
        aria-controls={DRAWER_PANEL_ID}
        aria-label="What we do"
      />

      {/* Click-catcher, live only while the drawer is open. */}
      <label htmlFor={DRAWER_ID} className={s.scrim} aria-hidden="true" />

      <div className={s.stack}>
        <header className={s.nav}>
          <Link
            href="/"
            className={s.logo}
            aria-label="LSeT Foundation home"
            onClick={closeMenus}
          >
            <img src="/assets/logo-lset-nav.svg" alt="" width={166} height={63} />
          </Link>

          {/* CSS-only disclosure: the menu has to work with scripts stripped, so
              the checkbox is the control and `:checked ~ .groups` opens it. */}
          <input
            ref={burgerRef}
            type="checkbox"
            id={BURGER_ID}
            className={s.toggle}
            /* On a phone the drawer is opened from inside this panel, and it
               used to outlive it: closing the burger left the drawer checked,
               so the page came back with a panel still open over it and the
               only way out was the scrim. Toggling the burger now clears the
               drawer either way — opening the menu with a drawer already open
               is the same fault seen from the other side.

               Phones only, because that is where the drawer sits inside this
               panel; above 700px the two are separate controls and closing one
               should not reach into the other. Script-dependent, unlike every
               other control on this bar — the close button inside the drawer
               is the answer where scripts are stripped. */
            onChange={() => {
              if (!window.matchMedia("(max-width: 700px)").matches) return;
              if (drawerRef.current) drawerRef.current.checked = false;
            }}
          />
          <label htmlFor={BURGER_ID} className={s.burger}>
            <span className="sr-only">Menu</span>
            <span className={s.burgerBar} aria-hidden="true" />
            <span className={s.burgerBar} aria-hidden="true" />
            <span className={s.burgerBar} aria-hidden="true" />
          </label>

          {/* `display: contents` on wide screens, so the three groups sit
              directly in the nav's space-between row exactly as before. */}
          <div className={s.groups}>
            <div className={s.brandSwitcher}>
              <div
                className={s.brandRow}
                style={{ "--brand-index": brandIndex } as BrandRowVars}
              >
                {/* One element for all three columns, behind the labels. The
                    columns are equal width, so it is exactly one column wide
                    and one column's travel is a flat 100% — no measuring the
                    labels, which is what keeps this working with scripts
                    stripped and before the webfont has loaded. */}
                <span
                  className={s.brandHighlight}
                  data-claimed={brandClaimed}
                  aria-hidden="true"
                />

                {BRANDS.map(({ label, href }, i) => (
                  <Link
                    key={label}
                    href={href}
                    aria-current={i === activeIndex ? "page" : undefined}
                    onClick={closeMenus}
                    className={`${s.brandItem} ${
                      i === activeIndex ? s.brandItemActive : ""
                    } wf-nav`}
                    /* Read by .brandItem::before, which renders this same word
                       in bold and invisibly underneath the real one. That is
                       what holds the column at its hovered width so bolding on
                       hover cannot widen the row and shove the links to its
                       right along. */
                    data-label={label}
                  >
                    <span className={s.brandLabel}>{label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <nav className={s.links} aria-label="Main">
              {LINKS.map(({ label, href, caret, drawer }) => {
                const body = (
                  <>
                    {label}
                    {caret && (
                      <span className={s.caret} aria-hidden="true">
                        &#9662;
                      </span>
                    )}
                  </>
                );

                return drawer ? (
                  <label
                    key={label}
                    htmlFor={DRAWER_ID}
                    className={`${s.pill} ${s.pillDrawer} wf-nav`}
                  >
                    {body}
                  </label>
                ) : (
                  /* next/link, not a bare <a>. These are internal routes, and
                     an <a href> made every press a full document load: the bar
                     was torn down and rebuilt on each one, which is why the
                     selected item's underline snapped into place instead of
                     easing — a freshly built element starts at its final style
                     with nothing to travel from. Measured: the element under
                     the probe came back "replaced" on every frame after a
                     click.

                     It still renders a real <a href>, so the menu keeps
                     working with scripts stripped, which is the constraint the
                     rest of this bar is built around. */
                  <Link
                    key={label}
                    href={href}
                    /* Marks the link for the page being read, which is what the
                       underline hangs off. Without it /the-work and /about
                       showed nothing selected anywhere in the bar: no brand
                       claims those routes, so the travelling plate is hidden
                       and these two were the only items that could say "you
                       are here".

                       The section owns its children, not just its own route.
                       An exact match lit Our Work on /the-work and then went
                       out the moment a project was opened, so the five records
                       that are the whole point of the section were the pages
                       where the bar said nothing at all. A reader who has
                       followed a link into the heron page is still in Our Work.

                       Matched on a trailing slash rather than a bare prefix, so
                       /the-work never claims a future /the-workshop, and "#" is
                       excluded outright: What We Do opens the drawer and names
                       no route, and `"#".startsWith` would otherwise have to be
                       reasoned about every time this is read. */
                    aria-current={
                      href !== "#" &&
                      (pathname === href || pathname.startsWith(`${href}/`))
                        ? "page"
                        : undefined
                    }
                    className={`${s.pill} wf-nav`}
                    onClick={closeMenus}
                  >
                    {body}
                  </Link>
                );
              })}
            </nav>

            <PillCta variant="inverse" href="/contact">
              Get in touch
            </PillCta>
          </div>
        </header>

        {/* The wrapper exists for the close control alone. .drawer clips —
            `overflow: hidden` is what holds its 4px ring and its mesh in place —
            so a button meant to sit half outside the panel's corner cannot be a
            child of it. This box does not clip, and on a phone it is what the
            control is positioned against.

            `display: contents` above 700px, so on every width the drawer was
            designed at this element is not in the layout at all. */}
        <div className={s.drawerWrap}>
          <div ref={meshRef} className={`${s.drawer} wf-mesh`}>
            <NavDrawer id={DRAWER_PANEL_ID} onNavigate={closeMenus} />
          </div>

          {/* Phones only, shown by the stylesheet at that width. A <label> for
              the drawer's own checkbox, so it closes the panel with scripts
              stripped exactly as the pill opens it — and it is the no-JS answer
              to dismissing from the burger, which does need one. */}
          <label htmlFor={DRAWER_ID} className={s.drawerClose}>
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
