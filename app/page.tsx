import Hero from "@/components/Hero/Hero";
import PartnersStrip from "@/components/PartnersStrip/PartnersStrip";
import MeshField from "@/components/MeshField/MeshField";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import StatsBand from "@/components/StatsBand/StatsBand";
import Approach from "@/components/Approach/Approach";
import Pillars from "@/components/Pillars/Pillars";
import CtaBand from "@/components/CtaBand/CtaBand";
import ProofWall from "@/components/ProofWall/ProofWall";

export default function Home() {
  return (
    <>
      <main>
        {/* The intro paragraph that used to sit in its own mint band now lives
            in the hero banner; components/IntroBand is kept but unrendered. */}
        <Hero />
        {/* Two light runs, because the stats band between them is dark. Each
            <MeshField> is one continuous mesh — one wrapper rather than a
            backdrop per section, because each mesh is anchored to its own box
            and neighbours painting their own leave a visible step where they
            meet. The band separates the runs, so there is no boundary for two
            fields to fail to line up across. The first still begins directly
            under the banner. */}
        <MeshField>
          <PartnersStrip />
          <WhoWeAre />
        </MeshField>
        <StatsBand />
        <MeshField>
          <Approach />
          <Pillars />
        </MeshField>
        <CtaBand />
        <ProofWall />
      </main>
    </>
  );
}
