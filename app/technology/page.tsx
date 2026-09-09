import type { Metadata } from "next";
import AntzHero from "@/components/Antz/AntzHero";
import MeshField from "@/components/MeshField/MeshField";
import AntzPlatform from "@/components/Antz/AntzPlatform";
import AntzRows from "@/components/Antz/AntzRows";
import AntzCta from "@/components/Antz/AntzCta";

export const metadata: Metadata = {
  title: "Antz Systems — One system across the whole institution",
  description:
    "Animal records, healthcare, nutrition, breeding, transfers, inventory, compliance and reporting in one connected system for animal care organisations.",
};

/**
 * Figma `Antz Systems`, node 1965:18354.
 *
 * The route is /technology rather than /antz-systems: the site's own vocabulary
 * for this pillar is Technology — it is what the homepage accordion, the nav
 * drawer's third destination and the footer all call it — and the ANTZ SYSTEMS
 * brand chip is the same destination under its product name.
 *
 * The light run — the platform showcase and the disclosure board — sits on a
 * <MeshField>, matching the other two pages. It was left off while the stage
 * was a full-bleed baked export that would have covered the mesh anyway; with
 * the carousel there instead, the two sections are a continuous light run and
 * the field has something to do.
 */
export default function TechnologyPage() {
  return (
    <>
      <main>
        <AntzHero />
        {/* The page's light run, on one continuous mesh. The two sections are
            contiguous, so a field per section would put a visible step where
            they meet — each mesh is anchored to its own box. The banner above
            and the closing band below are both dark, so the run needs no
            further wrapping. */}
        <MeshField>
          <AntzPlatform />
          <AntzRows />
        </MeshField>
        <AntzCta />
      </main>
    </>
  );
}
