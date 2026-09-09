import s from "./SiteFooter.module.css";

/* `#` is a page that does not exist yet; the two that do are wired. The footer
   is on every page, so this is what links the sites together from the bottom. */
const COLUMNS = [
  {
    label: "What we do",
    links: [
      /* Both point at /technology: it is the pillar's name in the site's
         vocabulary and Antz Systems is the same page under its product name,
         which is also how the nav's third brand chip is wired. */
      { label: "Technology", href: "/technology" },
      { label: "Education", href: "/education" },
      { label: "Antz Systems", href: "/technology" },
      { label: "The model", href: "#" },
    ],
  },
  {
    label: "The work",
    links: [
      { label: "All projects", href: "/#the-work" },
      { label: "From the field", href: "#" },
      { label: "Submit a challenge", href: "#" },
    ],
  },
  {
    label: "About",
    links: [
      { label: "About & transparency", href: "#" },
      { label: "Support the work", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { src: "/assets/social-instagram.svg", alt: "Instagram", width: 21.998, height: 21.998 },
  { src: "/assets/social-x.svg", alt: "X", width: 22, height: 21.997 },
  { src: "/assets/social-linkedin.svg", alt: "LinkedIn", width: 21.998, height: 21.998 },
  { src: "/assets/social-youtube.svg", alt: "YouTube", width: 22, height: 22.996 },
];

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
        <div className={s.socials}>
          {SOCIALS.map((social) => (
            <a key={social.alt} href="#" className={s.socialChip} aria-label={social.alt}>
              <img
                src={social.src}
                alt=""
                style={{ width: `${social.width}px`, height: `${social.height}px` }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
