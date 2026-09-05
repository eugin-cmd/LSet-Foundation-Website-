import ScrollMouse from "@/components/icons/ScrollMouse";
import s from "./ScrollCue.module.css";

/**
 * A banner's scroll cue — a mouse outline that bounces gently at rest and
 * radiates a ring on hover. Shared by the Foundation and Education heroes.
 *
 * The cue gets its own absolutely-positioned slot rather than being a flex
 * item of the copy block: the bounce animates `transform`, so centring the
 * link with a translateX would be overwritten the moment the animation runs.
 * The slot does the positioning; the link only bounces.
 *
 * The nearest positioned ancestor is the banner, which both heroes provide.
 */
export default function ScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <div className={s.slot}>
      <a href={href} className={s.cue} aria-label={label}>
        <ScrollMouse />
      </a>
    </div>
  );
}
