import Link from "next/link";
import { neighboursIn, PROJECT_ORDER, type Project } from "./project.data";
import s from "./Project.module.css";

/**
 * The two projects either side of this one, under the photo strip.
 *
 * The banner already carries arrows and dots for the same set; this is the
 * other half of that pattern — the arrows are for someone still looking at the
 * top of the page, and this is for someone who has read to the bottom and is
 * deciding whether to carry on. Showing the photograph and the name is the
 * point: the banner controls can only say "next", while these say what next
 * actually is.
 *
 * The thumbnail is each project's own first gallery photograph rather than its
 * banner: the banner crop is a 2:1 letterbox built to sit behind a title, and
 * at 96px wide it reads as a stripe.
 */
export default function ProjectNeighbours({
  project,
  base = "/the-work",
  order = PROJECT_ORDER,
  label = "Nearby projects",
}: {
  project: Project;
  base?: string;
  order?: Project[];
  label?: string;
}) {
  const { prev, next } = neighboursIn(order, project.slug);

  return (
    <nav className={s.neighbours} aria-label={label}>
      <Link
        href={`${base}/${prev.slug}`}
        className={`${s.neighbour} ${s.neighbourPrev}`}
      >
        <span className={s.neighbourArrow} aria-hidden="true">
          <NeighbourChevron />
        </span>
        {/* Decorative: the link is named by the text beside it, and an alt
            here would have a screen reader read the species twice. */}
        <img
          className={s.neighbourThumb}
          src={prev.gallery[0].src}
          alt=""
          width={1238}
          height={712}
          loading="lazy"
          decoding="async"
        />
        <span className={s.neighbourText}>
          <span className={s.neighbourKicker}>Previous project</span>
          <span className={s.neighbourTitle}>{prev.title}</span>
        </span>
      </Link>

      <Link
        href={`${base}/${next.slug}`}
        className={`${s.neighbour} ${s.neighbourNext}`}
      >
        <span className={s.neighbourArrow} aria-hidden="true">
          <NeighbourChevron />
        </span>
        <img
          className={s.neighbourThumb}
          src={next.gallery[0].src}
          alt=""
          width={1238}
          height={712}
          loading="lazy"
          decoding="async"
        />
        <span className={s.neighbourText}>
          <span className={s.neighbourKicker}>Next project</span>
          <span className={s.neighbourTitle}>{next.title}</span>
        </span>
      </Link>
    </nav>
  );
}

/** The same glyph the banner pager uses, at the same held stroke weight. */
function NeighbourChevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M15 4.5 7.5 12l7.5 7.5"
        stroke="currentColor"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
