import ApproachIcon from "./ApproachIcon";
import s from "./Approach.module.css";

export default function Approach() {
  return (
    <section id="approach" className={s.approach}>
      {/* The inner layer is oversized and drifts; the wrapper clips it. */}
      <div className={s.bgArea} aria-hidden="true">
        {/* The drone footage, wearing .bg so it keeps the oversize, the
            overscan and the scroll-driven drift the still had — only the
            paint changed. Muted and playsInline because a backdrop that asks
            to be unmuted, or that goes fullscreen on an iPhone when it starts,
            is not a backdrop; poster so the band is never empty while the
            first frame loads, which is how every other video on the site is
            set up. aria-hidden on the wrapper already, and tabIndex -1 keeps
            it out of the tab order with controls off. */}
        <video
          className={s.bg}
          poster="/assets/approach-drone-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        >
          <source src="/assets/approach-drone.mp4" type="video/mp4" />
        </video>
        <div className={s.bgTint} />
        {/* Above the ramp, not blended into it: the ramp carries its own 50%
            and the black has to stay 25% of the footage rather than 25% of
            what is left after it. */}
        <div className={s.bgShade} />
      </div>
      <div className={s.heading}>
        <ApproachIcon />

        <p className={`${s.kicker} wf-subtitle wf-dotted`}>OUR APPROACH</p>
        {/* One sentence now, not three, so the breaks are the browser's rather
            than ours: hard <br /> at this width would strand a clause the
            moment the viewport moved off the one it was tuned for. text-wrap:
            balance on .title evens whatever lines it does take.

            The accent stays on the last clause, as it was on "Then we teach
            it." before this. No full stop: the heading is a statement standing
            on its own rather than a sentence in a paragraph, and the mark was
            the last thing left of the three-line version it came from. */}
        <h2 className={`${s.title} wf-display-xl`}>
          We count species, Protect habitats &amp;{" "}
          <span className={s.accent}>Empower conservation</span>
        </h2>

        {/* Method, under the three lines of action. The heading says what the
            Foundation does and never how, which is the one thing an approach
            is supposed to explain.

            Set as the education statement's sub is set, because they are the
            same thing in the same place: a line of plain copy under a band of
            display type laid over footage. Inter Tight at 400 rather than
            .wf-subtitle's flex at 500, and white at 82% rather than flat, so
            it reads as the quieter voice under the statement instead of a
            second, smaller statement.

            The contrast the site keeps reaching for — real habitats against
            labs and research centres, as the proof wall sets prototyped and
            deployed against demos and slideware. It is also the page's own
            argument turned around: the pillars board says we back the partners
            who do the work, and this is why.

            Copy given verbatim, with subject-verb agreement corrected to
            "happens" and a closing full stop added. */}
        <p className={s.note}>
          Our work happens in real habitats and not in labs and research
          centres, with the keepers and field teams who will carry on with the
          work even without our continued presence.
        </p>

        {/* A 1px rule closing the block. Decorative, so it is a span the
            screen reader never meets rather than an <hr>, which would announce
            a thematic break that is not there. */}
        <span className={s.rule} aria-hidden="true" />
      </div>
    </section>
  );
}
