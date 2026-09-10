import Link from "next/link";
import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import Leaf14 from "@/components/icons/Leaf14";
import WaveText from "@/components/WaveText/WaveText";
import BannerPager from "@/components/BannerPager/BannerPager";
import { PROJECT_ORDER, type Project } from "./project.data";
import s from "./Project.module.css";

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
export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section
      className={s.hero}
      /* The photograph reaches CSS as a custom property rather than as this
         element's own background: it is painted by .hero::before, which
         overscans the band so it can sink on scroll without showing an edge. */
      style={{ "--hero-image": `url("${project.hero}")` } as React.CSSProperties}
    >
      <div className={s.heroTint} aria-hidden="true" />
      <div className={s.heroScrim} aria-hidden="true" />

      <Blinder />

      <div className={s.heroInner}>
        {/* Figma's "← All projects". A real parent link: this route nests
            under /the-work, so back is genuinely up. */}
        <Link href="/the-work" className={s.back}>
          <span aria-hidden="true">&larr;</span> All projects
        </Link>

        <div className={s.heroCopy}>
          <div className={s.meta}>
            {/* Same treatment as the Our Work row this page is reached from:
                the code is the visible chip, the phrase is what is read. */}
            <span className={s.status}>
              <span aria-hidden="true">{project.status}</span>
              <span className={s.srOnly}>{project.statusLabel}</span>
            </span>
            <span className={s.location}>{project.location}</span>
          </div>

          {/* The same load ripple the other banners run. <WaveText> splits the
              name into per-character spans and hides them, so the h1 carries
              the real string as its accessible name — and it moves the
              characters with `top` rather than a transform, which is what lets
              the species gradient stay clipped to them. */}
          <h1
            className={`${s.heroHeading} wf-display-xl`}
            aria-label={project.title}
          >
            <WaveText text={project.title} />
          </h1>

          {/* The flourish that closes the copy column, as the other four
              banners close theirs. Decorative, so it is hidden rather than
              announced after the species name. */}
          <span className={s.leaf} aria-hidden="true">
            <Leaf14 />
          </span>
        </div>
      </div>

      {/* Paging between the five projects, without going back to the wall
          first. They wrap, so neither is ever a dead end, and each names its
          destination rather than saying "previous" — "Previous project" alone
          tells a screen reader nothing about where it goes. */}
      {/* Paging between the five, without going back to the wall first. */}
      <BannerPager
        label="Projects"
        current={`/the-work/${project.slug}`}
        items={PROJECT_ORDER.map((p) => ({
          href: `/the-work/${p.slug}`,
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
