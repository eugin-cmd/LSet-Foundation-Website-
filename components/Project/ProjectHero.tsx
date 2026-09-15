import Link from "next/link";
import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import Leaf14 from "@/components/icons/Leaf14";
import Leaf15 from "@/components/icons/Leaf15";
import WaveText from "@/components/WaveText/WaveText";
import BannerPager from "@/components/BannerPager/BannerPager";
import { PROJECT_ORDER, type Project } from "./project.data";
import s from "./Project.module.css";
import LinkArrow from "@/components/icons/LinkArrow";

/**
 * Figma node 1738:184705 — the project banner.
 *
 * Unlike the four section banners, this one is bottom-left rather than centred:
 * Figma sets the copy at left 184 / top 353 of the band, so the stack anchors
 * to the foot of the column instead of floating in the middle of it. That is
 * the one thing distinguishing a project record from a section landing.
 *
 * The band itself is the site's shared --banner-height, not Figma's shorter
 * 723px, by direction — all five banners open at one size.
 *
 * It keeps the rest of the shared banner furniture too — the flat tint, the
 * two scrim stops, the <Blinder> and the <ScrollCue> — so it reads as the same
 * site as the page it is reached from.
 */
/**
 * `base` and `order` default to the projects, so the five species pages call
 * this exactly as they did. The Antz product pages pass their own set and get
 * the same banner — the mast, the parallax, the leaf, the pager — without a
 * second copy of any of it.
 */
export default function ProjectHero({
  project,
  base = "/the-work",
  /* Title case, by direction — it names a destination on this site, the way
     "Our Work" and "Antz Systems" do, rather than describing one. */
  backLabel = "All Projects",
  order = PROJECT_ORDER,
  pagerLabel = "Projects",
}: {
  project: Project;
  base?: string;
  backLabel?: string;
  order?: Project[];
  pagerLabel?: string;
}) {
  return (
    <section
      className={s.hero}
      /* The photograph reaches CSS as a custom property rather than as this
         element's own background: it is painted by .hero::before, which
         overscans the band so it can sink on scroll without showing an edge. */
      style={{ "--hero-image": `url("${project.hero}")` } as React.CSSProperties}
      data-hero-flip={project.heroFlip ? "true" : undefined}
      data-hero-centred={project.heroCentred ? "true" : undefined}
    >
      {/* Over the poster the ::before layer paints, so the band is never empty
          while the first frame loads. It takes the same overscan and the same
          sink, so the two planes move as one. */}
      {project.heroVideo && (
        <video
          className={s.heroVideo}
          poster={project.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={project.heroVideo} type="video/mp4" />
        </video>
      )}

      <div className={s.heroTint} aria-hidden="true" />
      <div className={s.heroScrim} aria-hidden="true" />

      <Blinder />

      <div className={s.heroInner}>
        {/* Figma sets "← All projects"; the arrow is on the right here and the
            label is title case, both by direction.
            direction, which also puts it where every other link on these pages
            carries one — "View Project →", "Submit a Challenge →".

            It points right with it. A left arrow trailing its label reads as a
            mistake rather than as a direction, and "All Projects →" is a fair
            description of where this goes: it is the wall, not a step back
            through history. */}
        <Link href={base} className={s.back}>
          {backLabel}
          <LinkArrow />
        </Link>

        <div className={s.heroCopy}>
          <div className={s.meta}>
            {/* Same treatment as the Our Work row this page is reached from:
                the code is the visible chip, the phrase is what is read. */}
            {project.status && (
              <span className={s.status}>
                <span aria-hidden="true">{project.status}</span>
                <span className={s.srOnly}>{project.statusLabel}</span>
              </span>
            )}
            <span className={s.location}>{project.location}</span>

            {/* Anchored to this row rather than placed at a measured offset,
                so it follows the location text however long that is. */}
            {project.locationMap && (
              <img
                className={s.locationMap}
                src={project.locationMap.src}
                alt=""
                aria-hidden="true"
                width={project.locationMap.width}
                height={project.locationMap.height}
              />
            )}

          </div>

          {/* The same load ripple the other banners run. <WaveText> splits the
              name into per-character spans and hides them, so the h1 carries
              the real string as its accessible name — and it moves the
              characters with `top` rather than a transform, which is what lets
              the species gradient stay clipped to them. */}
          {/* The homepage banner's own fill, on every mast here: the same
              `.wf-iridescent` the Foundation hero wears, so a species name and
              the title on the front page are one treatment rather than two
              that have to be kept in step. */}
          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label={project.title}
          >
            <WaveText text={project.title} />
          </h1>

          {/* A line under the heading, as every other banner on the site
              carries. On the products this is the same sentence the /technology
              board lists them by — read from the record, not repeated here. */}
          {project.lede && (
            <p className={`${s.heroLede} wf-body-l`}>{project.lede}</p>
          )}

          {/* The flourish that closes the copy column, as the other four
              banners close theirs. Decorative, so it is hidden rather than
              announced after the copy above it. Both take the same rise, shake
              and settle — only the drawing and its size differ. */}
          <span
            className={s.leaf}
            data-leaf={project.heroLeaf ?? "frond"}
            aria-hidden="true"
          >
            {project.heroLeaf === "sprig" ? <Leaf15 /> : <Leaf14 />}
          </span>
        </div>
      </div>

      {/* Paging between the five projects, without going back to the wall
          first. They wrap, so neither is ever a dead end, and each names its
          destination rather than saying "previous" — "Previous project" alone
          tells a screen reader nothing about where it goes. */}
      {/* Paging between the five, without going back to the wall first. */}
      <BannerPager
        label={pagerLabel}
        current={`${base}/${project.slug}`}
        items={order.map((p) => ({
          href: `${base}/${p.slug}`,
          title: p.title,
        }))}
      />

      {/* The same cue the other four banners close on. It points at the detail
          below rather than at the page foot, which is the first thing a reader
          arriving on a project record wants. */}
      <ScrollCue href="#overview" label="Scroll to the project detail" />
    </section>
  );
}
