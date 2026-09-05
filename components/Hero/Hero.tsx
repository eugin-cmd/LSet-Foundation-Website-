import Blinder from "@/components/Blinder/Blinder";
import ScrollCue from "@/components/ScrollCue/ScrollCue";
import Leaves from "@/components/icons/Leaves";
import Drone from "@/components/icons/Drone";
import IotNode from "@/components/icons/IotNode";
import SoundBox from "@/components/icons/SoundBox";
import AiChip from "@/components/icons/AiChip";
import s from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.banner}>
        <video
          className={s.video}
          poster="/assets/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>

        {/* Flat 24% black tint over the footage. */}
        <div className={s.tint} aria-hidden="true" />

        {/* The Figma still had these two scrims baked into the export; the
            footage does not, so they are reproduced here to keep the nav and
            headline legible over bright frames. */}
        <div className={s.scrim} aria-hidden="true" />

        {/* Opens on load, over everything else in the banner. */}
        <Blinder />

        {/* .headline centres the stack; .headlineInner carries the parallax so
            the two transforms never fight over the same property. */}
        <div className={s.headline}>
          <div className={s.headlineInner}>
            {/* Decorative: the copy below carries the message, so the row is
                hidden from assistive tech rather than read as three nouns. */}
            <div className={s.techIcons} aria-hidden="true">
              <Drone />
              <IotNode />
              <SoundBox />
              <AiChip />
            </div>

            <h1 className={`${s.title} wf-display-xl wf-iridescent`}>Conservation&apos;s Technology Partner</h1>
            <p className={`${s.lede} wf-body-l`}>
              We combine education, conservation expertise and innovative technology to help
              wildlife organisations solve complex challenges. Together with our global partners,
              we develop practical solutions that improve animal welfare, strengthen conservation
              programmes and protect endangered species
            </p>

            {/* Decorative flourish under the subtext. */}
            <Leaves className={s.leaves} />
          </div>
        </div>

        <ScrollCue href="#partners" label="Scroll to our conservation partners" />
      </div>
    </section>
  );
}
