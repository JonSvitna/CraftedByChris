import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { HotItemsColumns } from "@/components/sections/HotItemsColumns";
import { PreOrderBand } from "@/components/sections/PreOrderBand";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <MarqueeStrip />
      <HotItemsColumns />
      <PreOrderBand />
    </main>
  );
}
