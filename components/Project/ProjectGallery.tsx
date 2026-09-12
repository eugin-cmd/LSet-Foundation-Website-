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
export default function ProjectGallery({ project }: { project: Project }) {
  const style = project.galleryStyle ?? "rail";
  const cards = style === "cards";

  return (
    <section
      className={s.gallery}
      aria-label={cards ? `${project.title} capabilities` : "Project photographs"}
    >
      <WaveRule className={s.rule} />
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
          label={
            cards
              ? `${project.title} capabilities`
              : `${project.title} photographs`
          }
          variant={cards ? "cards" : "photos"}
        />
      )}
    </section>
  );
}
