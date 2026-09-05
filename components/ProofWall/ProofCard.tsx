import MapPin from "@/components/icons/MapPin";
import type { ProofCard as ProofCardData } from "./proofWall.data";
import s from "./ProofWall.module.css";

export default function ProofCard({ card }: { card: ProofCardData }) {
  return (
    <article className={s.card}>
      {/* The anchor is the card's layout column, so the whole card is one hit
          target and one tab stop. A stretched ::after on the "View project"
          link would only reach as far as .cardBody, which is itself
          positioned, and would never cover the photo. */}
      <a
        href={card.href}
        className={s.cardHit}
        aria-label={`View project: ${card.titleLines.join(" ")}`}
      >
        <div className={s.cardBg} aria-hidden="true">
          <img src={card.image} alt="" style={card.crop} />
        </div>

        <div className={s.cardMedia} />

        <div className={s.cardBody}>
          <div className={s.locationRow}>
            <MapPin />
            <p className={`${s.location} wf-small`}>{card.location}</p>
          </div>

          <h3 className={`${s.cardTitle} wf-display-l`}>
            <span>{card.titleLines[0]}</span>
            <span>{card.titleLines[1]}</span>
          </h3>

          <p className={`${s.cardDesc} wf-body`}>{card.description}</p>

          <span className={`${s.cardLink} wf-small`}>View project &rarr;</span>
        </div>
      </a>
    </article>
  );
}
