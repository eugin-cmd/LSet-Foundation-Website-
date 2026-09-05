"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PillCta from "@/components/PillCta/PillCta";
import NavDrawer from "@/components/NavDrawer/NavDrawer";
import s from "./NavBar.module.css";

/** The highlight's column index travels through a custom property so the
 *  transform that reads it can be transitioned. */
type BrandRowVars = React.CSSProperties & { "--brand-index": number };

const DRAWER_ID = "nav-drawer";
const DRAWER_PANEL_ID = "nav-drawer-panel";

const BRANDS = [
  { label: "FOUNDATION", href: "/" },
  { label: "EDUCATION", href: "/education" },
  { label: "ANTZ SYSTEMS", href: "#" },
];

const LINKS = [
  /* Absolute, not "#the-work": the nav is on both pages and that section only
     exists on the homepage, so a bare hash was a dead link from /education. */
  { label: "The Work", href: "/#the-work", caret: false, drawer: false },
  /* The drawer's own label column reads WHAT WE DO, so this is its control and
     needs no href of its own. */
  { label: "What We Do", href: "#", caret: true, drawer: true },
  { label: "About", href: "#", caret: true, drawer: false },
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
  /* -1 for a route no brand claims; the highlight then rests on the first
     column rather than vanishing. */
  const activeIndex = BRANDS.findIndex((b) => b.href === pathname);
  const brandIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <div className={s.sticky}>
      {/* Drawer disclosure. A checkbox rather than state, for the same reason
          the burger below is one: the shared snapshot strips every script, and
          the menu has to keep working there. Visually hidden but still
          focusable, so the chip can be reached from the keyboard. */}
      <input
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
          <Link href="/" className={s.logo} aria-label="LSeT Foundation — home">
            <img src="/assets/logo-lset-nav.svg" alt="" width={166} height={63} />
          </Link>

          {/* CSS-only disclosure: the menu has to work with scripts stripped, so
              the checkbox is the control and `:checked ~ .groups` opens it. */}
          <input type="checkbox" id="nav-open" className={s.toggle} />
          <label htmlFor="nav-open" className={s.burger}>
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
                <span className={s.brandHighlight} aria-hidden="true" />

                {BRANDS.map(({ label, href }, i) => (
                  <Link
                    key={label}
                    href={href}
                    aria-current={i === activeIndex ? "page" : undefined}
                    className={`${s.brandItem} ${
                      i === activeIndex ? s.brandItemActive : ""
                    } wf-nav`}
                  >
                    {label}
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
                  <a key={label} href={href} className={`${s.pill} wf-nav`}>
                    {body}
                  </a>
                );
              })}
            </nav>

            <PillCta variant="inverse">Get in touch</PillCta>
          </div>
        </header>

        <div className={s.drawer}>
          <NavDrawer id={DRAWER_PANEL_ID} />
        </div>
      </div>
    </div>
  );
}
