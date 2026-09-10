/**
 * The three brand pages, in the order the nav shows them.
 *
 * Its own module rather than a constant inside NavBar.tsx, and that is not
 * tidiness: NavBar is a "use client" component, and a named export imported
 * from a client module into a server component arrives as a client reference
 * rather than as the value — `BRANDS.map is not a function`, at render time,
 * with the page returning a 500. Plain data has to sit outside the boundary
 * for both sides to read it.
 *
 * Two consumers: the nav's own brand row, and the <BannerPager> on these three
 * pages. One list, so a rename cannot make them disagree.
 */
export const BRANDS = [
  { label: "FOUNDATION", href: "/" },
  { label: "EDUCATION", href: "/education" },
  /* The product name for the Technology pillar; /technology is the route,
     matching the drawer and footer, which both call it Technology. */
  { label: "ANTZ SYSTEMS", href: "/technology" },
];
