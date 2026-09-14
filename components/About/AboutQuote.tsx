import s from "./About.module.css";

/**
 * A graduate's own account, from the testimonials on lifesciencetrust.org.
 *
 * Verbatim and attributed, because the claim the rest of the page makes — that
 * this training puts people into the field — is worth more in the words of
 * someone it happened to than in ours. He began as a keeper and is now an
 * assistant curator.
 */
export default function AboutQuote() {
  return (
    <section className={s.quote} aria-label="A graduate's account">
      <figure className={s.quoteInner}>
        <img
          className={s.quotePortrait}
          src="/assets/about/mitesh.webp"
          alt=""
          aria-hidden="true"
          width={700}
          height={847}
        />

        <div className={s.quoteBody}>
          <blockquote className={s.quoteText}>
            <p>
              &ldquo;My journey started at keeper level and progressed through
              Farm Manager and Head Keeper to Assistant Curator. I have seen
              LSeT grow in front of me, and at the same time I have grown with
              it.&rdquo;
            </p>
          </blockquote>

          <figcaption className={s.quoteAttr}>
            <span className={s.quoteName}>Mitesh Patel</span>
            <span className={s.quoteRole}>
              Head Keeper and Assistant Curator
            </span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
