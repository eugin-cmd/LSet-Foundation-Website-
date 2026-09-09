"use client";

import { useEffect, useRef } from "react";

/**
 * Points a meshed section's blobs at the cursor.
 *
 * Attach the returned ref to the section that owns a `::before` mesh. While the
 * pointer is inside it, `--mesh-mx` and `--mesh-my` carry its position
 * normalised to -1..1 with 0 at the centre; on leaving, both ease back to 0 and
 * the section returns to its scroll-driven swirl.
 *
 * The hook deliberately does no easing. It writes raw values and lets CSS
 * transition the two registered properties, which keeps the smoothing in one
 * place (the stylesheet, next to the geometry it affects) and means there is no
 * rAF loop running while the pointer is still.
 */
export default function usePointerMesh<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* A coarse pointer has no hover position to follow — every "move" there is
       the start of a tap, which would yank the mesh to wherever the finger
       landed. Those devices keep the scroll swirl, which is why it was left in
       place rather than replaced. */
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let clientX = 0;
    let clientY = 0;
    let centre = false;

    /* getBoundingClientRect is read here, inside the frame, not in the event
       handler: the section's box moves with every scroll so the value cannot be
       cached, and reading it per pointermove interleaves a layout read with the
       style writes below. Once a frame is both correct and cheap. */
    const write = () => {
      frame = 0;
      if (centre) {
        el.style.setProperty("--mesh-mx", "0");
        el.style.setProperty("--mesh-my", "0");
        return;
      }
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const clamp = (n: number) => (n < -1 ? -1 : n > 1 ? 1 : n);
      el.style.setProperty(
        "--mesh-mx",
        clamp(((clientX - r.left) / r.width) * 2 - 1).toFixed(3),
      );
      el.style.setProperty(
        "--mesh-my",
        clamp(((clientY - r.top) / r.height) * 2 - 1).toFixed(3),
      );
    };

    const queue = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };

    const move = (e: PointerEvent) => {
      centre = false;
      clientX = e.clientX;
      clientY = e.clientY;
      queue();
    };

    const leave = () => {
      centre = true;
      queue();
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);

    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
