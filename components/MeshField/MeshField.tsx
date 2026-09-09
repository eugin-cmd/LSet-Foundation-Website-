"use client";

import usePointerMesh from "@/components/usePointerMesh";
import s from "./MeshField.module.css";

/**
 * Wraps the sections that sit on the page's light surface and paints the
 * holographic mesh behind all of them at once.
 *
 * Sections inside it must leave their own `background` transparent — a white
 * background on a child paints straight over the field.
 *
 * "use client" is for the pointer hook. The mesh itself is pure CSS and works
 * without script (it keeps its scroll-driven swirl), which is what the shared
 * snapshot relies on; see the vanilla tracker in scripts/build_preview.py for
 * the pointer half of it there.
 */
export default function MeshField({ children }: { children: React.ReactNode }) {
  /* Points the mesh blobs at the cursor while it is inside the field. */
  const meshRef = usePointerMesh<HTMLDivElement>();

  return (
    <div ref={meshRef} className={s.field}>
      {children}
    </div>
  );
}
