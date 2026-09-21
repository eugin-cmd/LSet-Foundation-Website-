import s from "./SiteFooter.module.css";

/* `#` is a page that does not exist yet; the ones that do are wired. The
   footer is on every page, so this is what links the sites together from the
   bottom.
   
   Three of Figma's rows have gone, by direction: "The model", "From the
   field" and "Support the work". All three pointed nowhere. */
const COLUMNS = [
  {
    label: "What we do",
    links: [
      /* The site's three brands, in the order and under the names the nav's
         own brand row uses. "Technology" led this column and has gone, by
         direction: it was the pillar's name for the page Antz Systems already
         names below, so the column listed one page twice and never named the
         Foundation at all. */
      { label: "Foundation", href: "/" },
      { label: "Education", href: "/education" },
      { label: "Antz Systems", href: "/technology" },
    ],
  },
  {
    label: "The work",
    links: [
      { label: "All projects", href: "/the-work" },
      /* The contact page, by direction: there is no separate challenge form,
         and its own form asks what a challenge would ask. */
      { label: "Submit a Challenge", href: "/contact" },
    ],
  },
  {
    label: "About",
    links: [
      /* "About" rather than Figma's "About & transparency", by direction —
         and pointed at the page, which exists now; it was a dead `#`. */
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

/* The four social chips that closed this bar — Instagram, X, LinkedIn and
   YouTube — are gone, by direction. Every one of them pointed at `#`; they were
   Figma's row carried over before the accounts existed to wire it to. Their
   SVGs are left in public/assets rather than deleted as a side effect. */

export default function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.columns}>
        {COLUMNS.map((column) => (
          <div key={column.label} className={s.column}>
            <p className={`${s.columnLabel} wf-label`}>{column.label}</p>
            <div className={s.columnList}>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${s.columnLink} wf-small`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className={s.signup}>
          <p className={`${s.columnLabel} wf-label`}>Stay in touch</p>
          <p className={`${s.signupCopy} wf-small`}>
            Field notes, a few times a year. Nothing else.
          </p>
          <label className="sr-only" htmlFor="footer-email">
            Email address
          </label>
          <input id="footer-email" className={s.input} type="email" autoComplete="email" />
        </div>
      </div>

      <div className={s.logo}>
        <img src="/assets/logo-lset-footer.svg" alt="LSeT Foundation" />
      </div>

      <div className={s.bottomBar}>
        <p className={s.copyright}>&copy; 2026 LSeT Foundation. All rights reserved.</p>
      </div>
    </footer>
  );
}
