import WaveRule from "@/components/WaveRule/WaveRule";
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
 * Figma closes the section above with a plain hairline. It takes the shared
 * <WaveRule /> instead, by direction — the same squiggle that closes the
 * homepage's partner strip and the Antz platform section, so the site has one
 * divider rather than a second kind that appears only here.
 */
export default function ProjectGallery({ project }: { project: Project }) {
  return (
    <section className={s.gallery} aria-label="Project photographs">
      <WaveRule className={s.rule} />
      <ProjectCarousel
        photos={project.gallery}
        label={`${project.title} photographs`}
      />
    </section>
  );
}
