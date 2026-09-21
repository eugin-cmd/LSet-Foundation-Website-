import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import BannerPager from "@/components/BannerPager/BannerPager";
import { BRANDS } from "@/components/NavBar/nav.data";
import WaveText from "@/components/WaveText/WaveText";
import Leaves from "@/components/icons/Leaves";
import PawPrint from "@/components/icons/PawPrint";
import OpenBook from "@/components/icons/OpenBook";
import CuppedHands from "@/components/icons/CuppedHands";
import Globe from "@/components/icons/Globe";
import s from "./Education.module.css";

/**
 * Figma node 1962:12732, arranged like the Foundation hero rather than the
 * design file: the copy block is centred in the band instead of sitting at
 * Figma's y 660, the institute paragraph has moved up out of the band below to
 * sit directly under the heading, and Figma's "Scroll to know more" line is
 * replaced by the same leaf flourish and bouncing mouse cue the homepage uses.
 */
export default function EducationHero() {
  return (
    <section className={s.hero}>
      {/* Decorative and silent, so it is kept out of the accessibility tree
          and out of the tab order — no controls to reach. */}
      <video
        className={s.heroVideo}
        poster="/assets/edu-hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/assets/edu-hero.mp4" type="video/mp4" />
      </video>

      {/* Flat 25% black over the footage, under the gradient scrims so those
          keep full strength. As on the other two banners. */}
      <div className={s.heroTint} aria-hidden="true" />

      {/* The still export carried the node's scrim gradients baked in; the
          footage does not, so they are a layer of their own now. */}
      <div className={s.heroScrim} aria-hidden="true" />

      {/* Opens on load, over everything else in the banner. */}
      <Blinder />

      {/* .heroTitle centres the stack in the band; .heroInner is the column. */}
      <div className={s.heroTitle}>
        <div className={s.heroInner}>
          {/* The trust's own lockup, carrying no alt text — the heading names
              the institute and the nav chip names the brand.

              Placed and timed exactly as the Antz banner's wordmark is: above
              the icon row, rising into the band 90ms ahead of it, so the two
              banners open the same way. Measurements in .heroWordmark. */}
          <img
            className={s.heroWordmark}
            src="/assets/edu-wordmark.svg"
            alt=""
            aria-hidden="true"
            width={147}
            height={92}
          />

          {/* Four marks, as the Antz banner carries four: animal care and
              education, which the heading names, then hands-on training and
              multinational faculty, which the lede does — "immersive, hands-on
              learning guided by international faculty".

              The last two are the marks the Hands-on Training and Multinational
              Faculty rows already wear further down this page, so the banner
              promises what the board below it goes on to list, in the same
              drawings. Species Exposure's birds are the one pillar left out:
              its subject is animals, and the paw print is already here saying
              so.

              Decorative: the heading and the lede name all four, so the row is
              hidden from assistive tech rather than read as four loose nouns. */}
          <div className={s.heroIcons} aria-hidden="true">
            <PawPrint />
            <OpenBook />
            <CuppedHands />
            <Globe />
          </div>

          <h1
            className={`${s.heroHeading} wf-display-xl wf-iridescent`}
            aria-label="Institute of animal care & Management"
          >
            <WaveText text={"Institute of animal care\n& Management"} />
          </h1>

          {/* 33 words, down from 63, and nothing differentiating is lost: the
              founding year, the only-residential claim, the farm, the faculty
              and the 200+ species all survive.

              Two things went, and both because they were already said. The
              opening clause restated the institute's name, which the heading
              directly above gives. And "the enclosure is the classroom and the
              animals are the curriculum" — LSeT's own words, and the best line
              in the copy — opens WHAT WE BELIEVE immediately below this banner,
              where <EducationPhilosophy> keeps it verbatim on purpose. Said
              twice within one screen it stops being the line and becomes a
              refrain; the banner gives it up so the section below lands it.

              No em dashes, following the rule EducationPhilosophy records for
              this page's prose. */}
          <p className={`${s.heroLede} wf-body-l`}>
            Founded in 2021, LSeT is India&rsquo;s only residential institute for
            exotic animal care, built on a working farm in Bengaluru. Students
            train hands-on with international faculty and 200+ species, all under
            one roof.
          </p>

          {/* Decorative flourish under the subtext. */}
          <Leaves />
        </div>
      </div>

      {/* Paging between the three brand pages, from the nav's own list so the
          two can never disagree about what they are or where they live. */}
      <BannerPager
        label="Sections"
        current="/education"
        items={BRANDS.map((b) => ({ href: b.href, title: b.label }))}
      />

      <ScrollCue href="#edu-partners" label="Scroll to our education partners" />
    </section>
  );
}
