import ExternalArrow from "@/components/icons/ExternalArrow";
import Handshake from "@/components/icons/Handshake";
import ClockFilled from "@/components/icons/ClockFilled";
import CheckFilled from "@/components/icons/CheckFilled";
import FlagFilled from "@/components/icons/FlagFilled";
import Drone from "@/components/icons/Drone";
import AiChip from "@/components/icons/AiChip";
import ObservationEye from "@/components/icons/ObservationEye";
import PayloadClamp from "@/components/icons/PayloadClamp";
import EdgeWatch from "@/components/icons/EdgeWatch";
import SoundBox from "@/components/icons/SoundBox";
import Voiceprint from "@/components/icons/Voiceprint";
import ConnectedRecords from "@/components/icons/ConnectedRecords";
import IotNode from "@/components/icons/IotNode";
import Lever from "@/components/icons/Lever";
import RecordStack from "@/components/icons/RecordStack";
import ComplianceShield from "@/components/icons/ComplianceShield";
import Globe from "@/components/icons/Globe";
import VisitorTrail from "@/components/icons/VisitorTrail";
import BehaviourModel from "@/components/icons/BehaviourModel";
import DailyRounds from "@/components/icons/DailyRounds";
import NoSignal from "@/components/icons/NoSignal";
import BrandTag from "@/components/icons/BrandTag";
import CuppedHands from "@/components/icons/CuppedHands";
import OpenBook from "@/components/icons/OpenBook";
import Birds from "@/components/icons/Birds";
import type { IconKey, Project } from "./project.data";
import s from "./Project.module.css";

/** The data names a mark; this is where the name becomes a component, so the
 *  data file stays free of imports and a new project page is words only. */
/** The data names a mark; this is where the name becomes a component, so the
 *  data files stay free of imports and a new page is words only. One registry
 *  for the fact labels and the tech chips alike. */
const ICONS: Record<IconKey, () => React.JSX.Element> = {
  partner: Handshake,
  timeline: ClockFilled,
  status: CheckFilled,
  next: FlagFilled,
  drone: Drone,
  ai: AiChip,
  vision: ObservationEye,
  payload: PayloadClamp,
  camera: EdgeWatch,
  acoustic: SoundBox,
  voiceprint: Voiceprint,
  platform: ConnectedRecords,
  /* The processor mark serves both the AI chip and the single-board computer:
     a pinned square is what either one looks like at this size, and drawing a
     second near-identical glyph would only blur the set. */
  board: AiChip,
  lever: Lever,
  iot: IotNode,
  /* The product cards. Six of these were already drawn for the Antz Systems
     rows — this is the first time they have been named in the shared
     vocabulary, so a fact can ask for one. */
  record: RecordStack,
  compliance: ComplianceShield,
  globe: Globe,
  trail: VisitorTrail,
  behaviour: BehaviourModel,
  calendar: DailyRounds,
  offline: NoSignal,
  brand: BrandTag,
  /* The education rows' own three, so a row on /education and the page its
     "Know More" opens are headed by the same mark. */
  hands: CuppedHands,
  book: OpenBook,
  birds: Birds,
};

/**
 * Figma node 1738:184735 — the two-column content area.
 *
 * Left is the fact card, a 3px orange rule around the project's metadata;
 * right is the prose. Figma fixes the card at 404x540 and the column at 680,
 * which is a 404/680 split of its 1160 content width — kept as proportions so
 * the pair stays in ratio, with Figma's widths as the ceiling.
 *
 * The card's 540px height is Figma's, not honoured here: it is exactly the
 * height of the four facts as designed, so pinning it would clip the moment a
 * partner name wraps to a third line. The border draws around the content.
 */
export default function ProjectBody({ project }: { project: Project }) {
  return (
    <section id="overview" className={s.body} aria-label="Project detail">
      <div className={s.bodyInner}>
        <aside className={s.card}>
          <dl className={s.facts}>
            {project.facts.map((fact) => {
              const Icon = ICONS[fact.icon];
              return (
              <div className={s.fact} key={fact.label}>
                {/* The mark is decorative: the label beside it already names
                    the fact, so it is hidden rather than read as a stray
                    noun before every value. */}
                <dt className={s.factLabel}>
                  <span className={s.factIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  {fact.label}
                </dt>
                <dd
                  className={
                    fact.lead
                      ? `${s.factValue} ${s.factValueLead}`
                      : `${s.factValue} wf-body-l`
                  }
                >
                  {fact.value}
                </dd>
                {fact.logo && (
                  /* Figma renders the mark at 83x81 from a 410x400 source.
                     Both dimensions are set so the disc cannot be stretched by
                     the column it sits in. */
                  <dd className={s.factLogo}>
                    <img
                      src={fact.logo.src}
                      alt={fact.logo.alt}
                      width={fact.logo.width}
                      height={fact.logo.height}
                      className={s.logoImg}
                      /* Figma's own rendered box for this partner's mark.
                         Explicit on both axes so the flex column cannot
                         stretch it, and per-project because the marks are not
                         all the same shape. */
                      style={{
                        width: fact.logo.box.w,
                        height: fact.logo.box.h,
                      }}
                    />
                  </dd>
                )}
              </div>
              );
            })}
          </dl>
        </aside>

        <div className={s.prose}>
          {project.sections.map((section) => (
            <section className={s.block} key={section.kicker}>
              <h2 className={s.blockKicker}>{section.kicker}</h2>
              <p className={s.blockBody}>{section.body}</p>
            </section>
          ))}

          {/* Only where a record names any. An empty list would leave the
              heading standing over nothing, which reads as a section that
              failed to load rather than one that does not apply. */}
          {project.tech.length > 0 && (
          <section className={s.block}>
            <h2 className={s.blockKicker}>Tech Deployed</h2>
            {/* A list, not a row of divs: this is an enumeration of four
                things, and the chips are its items. */}
            <ul className={s.chips}>
              {project.tech.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <li className={`${s.chip} wf-body`} key={item.label}>
                    <span className={s.chipIcon} aria-hidden="true">
                      <Icon />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </section>
          )}

          {/* The device the chips describe, running. Under them rather than
              inside that section, so the enumeration stays an enumeration and
              the film is its own thing with its own heading.

              Muted, looped and playsInline, as every other video on this site
              is: an autoplay that asks to be unmuted is blocked, and one that
              goes fullscreen on an iPhone when it starts is not a figure. The
              poster means the frame is never empty while the first frame
              loads. */}
          {project.techFilm && (
            <section className={s.block}>
              <h3 className={s.filmHead}>{project.techFilm.heading}</h3>
              <figure className={s.film}>
                <div
                  className={s.filmFrame}
                  style={
                    {
                      aspectRatio: `${project.techFilm.frameSize.w} / ${project.techFilm.frameSize.h}`,
                    } as React.CSSProperties
                  }
                >
                  {/* The frame is the picture of a box; the film is what the
                      box is showing. Hidden from assistive tech, because the
                      video below carries the description for both. */}
                  <img
                    className={s.filmShell}
                    src={project.techFilm.frame}
                    alt=""
                    aria-hidden="true"
                    width={project.techFilm.frameSize.w}
                    height={project.techFilm.frameSize.h}
                  />
                  <video
                    className={s.filmVideo}
                    style={
                      {
                        left: project.techFilm.screen.left,
                        top: project.techFilm.screen.top,
                        width: project.techFilm.screen.width,
                        height: project.techFilm.screen.height,
                      } as React.CSSProperties
                    }
                    poster={project.techFilm.poster}
                    aria-label={project.techFilm.label}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    tabIndex={-1}
                  >
                    {project.techFilm.webm && (
                      <source src={project.techFilm.webm} type="video/webm" />
                    )}
                    <source src={project.techFilm.mp4} type="video/mp4" />
                  </video>
                </div>
                <figcaption className={`${s.filmCaption} wf-small`}>
                  {project.techFilm.caption}
                </figcaption>
              </figure>
            </section>
          )}

          {/* Out to the product's own page. `rel="noreferrer"` alongside
              noopener because this leaves the site: the target has no reason
              to be told where its visitor came from. */}
          {project.external && (
            <a
              className={s.external}
              href={project.external.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.external.label}
              <span className={s.externalMark} aria-hidden="true">
                <ExternalArrow />
              </span>
              <span className={s.srOnly}>(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

