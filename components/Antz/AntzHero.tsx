import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import BannerPager from "@/components/BannerPager/BannerPager";
import { BRANDS } from "@/components/NavBar/nav.data";
import WaveText from "@/components/WaveText/WaveText";
import Leaves from "@/components/icons/Leaves";
import ConnectedRecords from "@/components/icons/ConnectedRecords";
import BehaviourModel from "@/components/icons/BehaviourModel";
import EdgeWatch from "@/components/icons/EdgeWatch";
import VisitorTrail from "@/components/icons/VisitorTrail";
import s from "./Antz.module.css";

/**
 * Figma node 1965:18864 in the `Antz Systems` frame (1965:18354), arranged like
 * the other two heroes rather than literally: Figma's "Scroll to know more"
 * line is replaced by the bouncing mouse cue both other pages use, and the
 * heading takes the shared holographic fill and load wave.
 *
 * Where the Foundation hero has its leaf flourish and Education has its two
 * line-art marks, this one has the antz systems wordmark — the design puts it
 * in exactly that slot, above the heading.
 *
 * The lede is Figma's mint-band paragraph, moved up into the banner under the
 * heading by direction — the same move the education hero made with its
 * institute paragraph, and it takes the mint band with it.
 */
export default function AntzHero() {
  return (
    <section className={s.hero}>
      {/* Decorative and silent, so it is kept out of the accessibility tree
          and out of the tab order — no controls to reach. */}
      <video
        className={s.heroVideo}
        poster="/assets/antz-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/assets/antz-hero.mp4" type="video/mp4" />
      </video>

      {/* Flat 25% black over the footage, as on the other two banners. */}
      <div className={s.heroTint} aria-hidden="true" />

      {/* The still export carried the node's scrim gradients baked in; the
          footage does not, so they are a layer of their own now. */}
      <div className={s.heroScrim} aria-hidden="true" />

      {/* Opens on load, over everything else in the banner. */}
      <Blinder />

      <div className={s.heroTitle}>
        <div className={s.heroInner}>
          {/* The product's own wordmark, so it carries no alt text of its own —
              the heading and the nav chip both name it. */}
          <img
            className={s.heroWordmark}
            src="/assets/antz-wordmark.svg"
            alt=""
            aria-hidden="true"
            width={232}
            height={124}
          />

          {/* One mark per product in the Antz ecosystem, in the order that page
              presents them: Platform, EthoStudio, Edge, Trails. Decorative —
              the heading names the proposition and these are not links, so the
              row is hidden from assistive tech rather than read as four
              unexplained nouns. Same treatment as the education hero's row. */}
          <div className={s.heroIcons} aria-hidden="true">
            <ConnectedRecords />
            <BehaviourModel />
            <EdgeWatch />
            <VisitorTrail />
          </div>

          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label="One system across the whole institution"
          >
            <WaveText text={"One System Across\nthe Whole Institution"} />
          </h1>

          {/* Figma has this in a mint band below the banner; it sits under the
              heading here instead, the same move the education hero made with
              its institute paragraph. */}
          <p className={`${s.heroLede} wf-body-l`}>
            From the records your team writes today, to the AI that watches your
            animals tomorrow &ndash; built around your institution, not around a
            vendor&rsquo;s roadmap.
          </p>

          {/* The same flourish that closes the other two banners' copy columns.
              It brings its own size, colour and rise-then-stir; the banner only
              has to place it. */}
          <Leaves />
        </div>
      </div>

      {/* Paging between the three brand pages, from the nav's own list so the
          two can never disagree about what they are or where they live. */}
      <BannerPager
        label="Sections"
        current="/technology"
        items={BRANDS.map((b) => ({ href: b.href, title: b.label }))}
      />

      <ScrollCue href="#antz-platform" label="Scroll to the platform" />
    </section>
  );
}
