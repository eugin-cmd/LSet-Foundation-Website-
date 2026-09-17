"use client";

import { useEffect, useRef, useState } from "react";
import PawPrint from "@/components/icons/PawPrint";
import s from "./Approach.module.css";

/**
 * The mark above OUR APPROACH, dropping in as the banner's four do.
 *
 * A paw print, and line-drawn like every other mark on this page. Handshake
 * was here first and was wrong twice over: it is one of only seven filled
 * icons in the set, solid by design because the project records set it at
 * 14px where a 1px stroke would go grey, so at 34px among stroked marks it was
 * the one thing on the page drawn in a different language.
 *
 * A print is also the better idea for the section. It is evidence of the
 * animal on the ground, which is the claim the copy under it makes — the work
 * happens in real habitats and not in labs and research centres. <Leaf>'s own
 * note says a paw print is the better mark for a wildlife charity and that it
 * was abandoned only because it could not survive 20px in the accordion; this
 * band sets it at 34, which is the size its geometry was drawn for.
 *
 * The drop is the banner's exactly: --anim-icon-drop, the 120px fall, 940ms,
 * `both` so the first frame holds through the delay and nothing flashes in
 * place before its turn, and the 220ms the first banner icon waits.
 *
 * What differs is only when it starts. The banner runs on load because it is
 * the first thing on the page; this band is most of a screen down, so a load
 * animation would finish before anyone had scrolled to it and the drop would
 * never be seen. An observer starts it when the section arrives instead. A
 * scroll timeline was the other option and is wrong here: it scrubs, and a
 * fall with two decaying rebounds has to play at its own speed to read as
 * weight.
 *
 * Three states so nothing depends on JavaScript arriving: the server renders
 * `idle` and the mark is simply visible, `armed` is set on mount and only then
 * is it hidden to be dropped in, which is what stops it rendering and then
 * flashing out.
 */
export default function ApproachIcon() {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "dropped">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still || typeof IntersectionObserver === "undefined") return;

    setState("armed");

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setState("dropped");
        io.disconnect();
      },
      { threshold: 0.6 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={s.icon} data-state={state} aria-hidden="true">
      <PawPrint />
    </span>
  );
}
