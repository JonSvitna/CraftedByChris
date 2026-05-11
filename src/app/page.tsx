import { FloatingShoes } from "@/components/sections/FloatingShoes";
import { Hero } from "@/components/sections/Hero";
import { HotItemsColumns } from "@/components/sections/HotItemsColumns";
import { MotionSignals } from "@/components/sections/MotionSignals";
import { PreOrderBand } from "@/components/sections/PreOrderBand";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-grain pb-10">
      <FloatingShoes />
      <Hero />
      <MotionSignals />
      <HotItemsColumns />
      <PreOrderBand />
    </main>
  );
}
