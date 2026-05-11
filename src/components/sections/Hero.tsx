import Image from "next/image";

const etsyUrl = "https://www.etsy.com/shop/craftedbychrisllc";

const ambientShoes = [
  { src: "/images/shoe-frost.svg", top: "12%", left: "2%", size: "180px", delay: "0s", opacity: 0.1 },
  { src: "/images/shoe-solar.svg", top: "55%", right: "3%", size: "160px", delay: "1.2s", opacity: 0.09 },
  { src: "/images/shoe-neon.svg", top: "78%", left: "40%", size: "140px", delay: "0.6s", opacity: 0.08 },
] as const;

const settingLabels = ["Party Ready", "Fashion Events", "Street Wear"] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#0c1220]">
      {/* Ember glow orb — top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[700px] w-[700px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#ff8f3f]/10 blur-[130px]"
      />
      {/* Cool glow orb — bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/4 h-[450px] w-[450px] translate-y-1/2 rounded-full bg-[#4da6ff]/6 blur-[110px]"
      />

      {/* Ambient floating shoes (very subtle) */}
      {ambientShoes.map((shoe) => (
        <Image
          key={shoe.src}
          src={shoe.src}
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className="float-shoe pointer-events-none absolute select-none"
          style={{
            top: shoe.top,
            left: "left" in shoe ? shoe.left : undefined,
            right: "right" in shoe ? shoe.right : undefined,
            width: shoe.size,
            height: "auto",
            opacity: shoe.opacity,
            animationDelay: shoe.delay,
          }}
        />
      ))}

      {/* Main layout grid */}
      <div className="relative z-10 mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 items-center px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-0">

        {/* Left column — typography & CTAs */}
        <div className="reveal" style={{ animationDelay: "60ms" }}>
          <p className="mb-6 text-[0.625rem] font-bold uppercase tracking-[0.3em] text-[#ff8f3f]">
            CraftedByChris LLC &mdash; Handcrafted Footwear
          </p>

          <h1
            className="leading-[0.86] tracking-tight text-white"
            style={{ letterSpacing: "-0.01em" }}
          >
            <span className="block text-[clamp(5rem,13vw,11rem)]">SHOES</span>
            <span className="block text-[clamp(3.25rem,8.5vw,7.5rem)]">BUILT TO</span>
            <span className="block text-[clamp(3.25rem,8.5vw,7.5rem)] text-[#ff8f3f]">OWN THE</span>
            <span className="block text-[clamp(3.25rem,8.5vw,7.5rem)]">ROOM.</span>
          </h1>

          <p className="mt-8 max-w-[44ch] text-sm leading-relaxed text-white/55 sm:text-[0.9375rem]">
            Handcrafted drops for party floors, fashion fronts, and daily
            streets. Each pair is a statement built to last. Reserve yours
            before the run closes.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={etsyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-[#ff8f3f] px-7 py-3.5 text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#0c1220] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Shop Now
            </a>
            <a
              href="#hot-items"
              className="inline-flex items-center rounded-full border border-white/20 px-7 py-3.5 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white/70 transition hover:border-white/40 hover:text-white active:scale-[0.98]"
            >
              See Drops
            </a>
          </div>

          <div className="mt-16 flex gap-8 border-t border-white/10 pt-8">
            {settingLabels.map((label) => (
              <div key={label}>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — hero shoe */}
        <div
          className="reveal flex items-center justify-center pb-8 pt-4 lg:py-0"
          style={{ animationDelay: "220ms" }}
        >
          <div className="float-shoe w-full max-w-[400px] lg:max-w-[520px]">
            <Image
              src="/images/shoe-ember.svg"
              alt="Featured CraftedByChris handcrafted shoe — Ember Velocity"
              width={700}
              height={700}
              priority
              className="w-full"
              style={{
                filter:
                  "drop-shadow(0 40px 80px rgba(255,143,63,0.4)) drop-shadow(0 0 120px rgba(255,143,63,0.15))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        aria-hidden="true"
      >
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-white/25">Scroll</p>
        <div className="mx-auto mt-2 h-6 w-px bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}

