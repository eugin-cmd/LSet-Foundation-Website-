import Hero from "@/components/Hero/Hero";
import PartnersStrip from "@/components/PartnersStrip/PartnersStrip";
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
        <PartnersStrip />
        <Approach />
        <Pillars />
        <CtaBand />
        <ProofWall />
      </main>
    </>
  );
}
