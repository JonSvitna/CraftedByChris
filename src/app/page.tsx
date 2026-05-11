import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Drops } from "@/components/sections/Drops";
import { Craft } from "@/components/sections/Craft";
import { PreOrder } from "@/components/sections/PreOrder";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <Drops />
      <Craft />
      <PreOrder />
      <Footer />
    </>
  );
}
