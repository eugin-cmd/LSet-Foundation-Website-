import PillCta from "@/components/PillCta/PillCta";
import WaveRule from "@/components/WaveRule/WaveRule";
import LeafSprig from "@/components/icons/LeafSprig";
import AntzCarousel from "./AntzCarousel";
import s from "./Antz.module.css";

/**
 * Figma node 1965:23251 — the platform showcase.
 *
 * The stage was a single baked export of the whole composition: a gradient band
 * with a laptop and a phone across it and five floating labels. It had to be,
 * because Figma's PNG exports of those device frames come back with an opaque
 * white matte — verified, zero transparent pixels at 1x and 2x, on the
 * composite and on each child separately — which would have punched a white
 * hole in the band, while keying the white out would have eaten the app's own
 * white UI panels.
 *
 * It is now the <AntzCarousel> on the section's plain white, with Figma's
 * gradient band removed by direction. The carousel's slides come from the Antz
 * Systems website's own module carousel; they are transparent PNGs and carry
 * their own label pills, which the baked version had burnt in. The section
 * gained a working carousel, which is what Figma's four-step indicator was
 * always pointing at.
 */
export default function AntzPlatform() {
  return (
    <section
      id="antz-platform"
      className={s.platform}
      aria-labelledby="antz-platform-title"
    >
      {/* Above the carousel: it titles the section, so it reads before the
          thing it titles rather than captioning it afterwards. The mark and the
          two-line wordmark move together — splitting them would leave a bare
          icon over the carousel and an orphaned word under it. */}
      <div className={s.lockup}>
        <img
          className={s.lockupMark}
          src="/assets/antz-platform-mark.svg"
          alt=""
          aria-hidden="true"
          width={87}
          height={87}
        />
        {/* Inter, not the site's Google Sans Flex: this is the product's own
            lockup rather than page typography, and Inter is already loaded for
            the footer's copyright line. */}
        <span className={s.lockupText} id="antz-platform-title">
          <span className={s.lockupSmall}>Antz</span>
          <span className={s.lockupLarge}>Platform</span>
        </span>
      </div>

      <div className={s.stage}>
        <AntzCarousel />
      </div>

      <div className={s.platformCopy}>
        {/* The paragraph and its leaf are their own frame, as WHO WE ARE nests
            them on the homepage: the 6px between copy and leaf and the wider
            gap down to the CTA have to stay independent, and as a margin they
            would add together. */}
        <div className={s.platformStatement}>
          <p className={s.platformBody}>
            Antz brings together animal records, healthcare, nutrition, breeding,
            transfers, inventory, compliance, and reporting into a single connected
            system. Keep your teams aligned, automate routine tasks, and access the
            information you need &ndash; when you need it. Built to help animal care
            organisations operate more efficiently and deliver exceptional care at
            every stage.
          </p>

          <LeafSprig className={s.platformSprig} />
        </div>

        <PillCta href="https://antzsystems.com">
          Visit antzsystems.com for more info
        </PillCta>

        {/* The indicator moved into <AntzCarousel>, which is what it pages. */}
      </div>

      {/* The same divider the partners strip carries, closing the whole section
          off below the CTA. In flow rather than pinned to the section's bottom
          edge, so the section's own 23px gap spaces it and the closing padding
          still follows it. */}
      <WaveRule className={s.platformRule} />
    </section>
  );
}
