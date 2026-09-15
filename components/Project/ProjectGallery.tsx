import WaveRule from "@/components/WaveRule/WaveRule";
import AntzCarousel from "@/components/Antz/AntzCarousel";
import ProjectCarousel from "./ProjectCarousel";
import type { Project } from "./project.data";
import s from "./Project.module.css";

/**
 * Figma node 1738:184772 — the photo strip.
 *
 * Figma lays three 619x356 frames in a row that overflows its 1280 shell, with
 * the third cut off at the canvas edge. That is a set to be paged through, so
 * it is built as a carousel rather than as a row the reader has to scroll: a
 * sliding rail with the next frame peeking past the right edge and a pair of
 * arrows at the bottom right. <ProjectCarousel> holds the behaviour.
 *
 * A project can ask for the *stack* instead — the active slide centred with
 * its neighbours pushed back in 3D — with `galleryStyle: "stack"`. That is the
 * same <AntzCarousel> the Antz Systems page runs, which is the same component
 * antzsystems.com runs on both its platform page and its EthoStudio page: one
 * carousel there, one here. Device mockups belong in it rather than in the
 * rail, which crops to a landscape frame and draws them small.
 *
 * Figma closes the section above with a plain hairline. It takes the shared
 * <WaveRule /> instead, by direction — the same squiggle that closes the
 * homepage's partner strip and the Antz platform section, so the site has one
 * divider rather than a second kind that appears only here.
 */
/** "capability" plus an "s" is "capabilitys". Consonant + y takes -ies; every
 *  other noun these galleries use takes a plain -s. */
function plural(noun: string) {
  return /[^aeiou]y$/.test(noun) ? `${noun.slice(0, -1)}ies` : `${noun}s`;
}

export default function ProjectGallery({ project }: { project: Project }) {
  /* A record may carry no pictures at all — the faculty page is one. Better
     to render nothing than a rule over an empty rail whose live region would
     read a slide that does not exist. */
  if (!project.gallery.length) return null;

  const style = project.galleryStyle ?? "rail";
  const cards = style === "cards";
  /* One noun for the section label, the arrows and the live region, so the
     three cannot disagree about what is being paged through. */
  const noun = project.galleryNoun ?? (cards ? "capability" : "photograph");

  return (
    <section className={s.gallery} aria-label={`${project.title} ${plural(noun)}`}>
      <WaveRule className={s.rule} />

      {/* Where a record takes a whole section from antzsystems.com, it brings
          that section's heading with it, so the pictures are introduced rather
          than appearing unannounced under a divider. */}
      {project.galleryHead && (
        <div className={s.galleryHead}>
          <p className={`${s.galleryKicker} wf-subtitle wf-dotted`}>
            {project.galleryHead.kicker}
          </p>
          <h2 className={`${s.galleryTitle} wf-display-l`}>
            {project.galleryHead.title}
          </h2>
          {project.galleryHead.body?.map((para) => (
            <p className={`${s.galleryLede} wf-body-l`} key={para.slice(0, 32)}>
              {para}
            </p>
          ))}
        </div>
      )}
      {style === "stack" ? (
        <AntzCarousel
          slides={project.gallery.map((p) => ({
            id: p.src,
            label: p.alt,
            image: p.src,
          }))}
          label={`${project.title} screens`}
          noun="screen"
        />
      ) : (
        <ProjectCarousel
          photos={project.gallery}
          label={`${project.title} ${plural(noun)}`}
          variant={cards ? "cards" : "photos"}
          noun={noun}
          aspect={project.galleryAspect}
          fixedHeight={project.galleryFixedHeight}
          centredControls={project.galleryControlsCentred}
          autoplayThroughHover={project.galleryAutoplayThroughHover}
          cardWidth={project.galleryCardWidth}
          gap={project.galleryGap}
        />
      )}
    </section>
  );
}
