import Image from "next/image";

const etsyUrl = "https://www.etsy.com/shop/craftedbychrisllc";

const settings = [
  {
    title: "Party",
    subtitle: "Heat under city lights",
    image: "/images/hero-party.svg",
  },
  {
    title: "Fashion Events",
    subtitle: "Editorial-ready silhouettes",
    image: "/images/hero-fashion.svg",
  },
  {
    title: "General Wear",
    subtitle: "Daily statement comfort",
    image: "/images/hero-street.svg",
  },
];

export function Hero() {
  return (
    <section className="surface mx-auto grid w-full max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-14">
      <div className="reveal" style={{ animationDelay: "120ms" }}>
        <p className="mb-4 inline-block rounded-full border border-white/80 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ash backdrop-blur">
          CraftedByChris LLC
        </p>
        <h1 className="text-5xl leading-[0.92] text-ink sm:text-6xl md:text-7xl">
          Shoes Built To
          <span className="block text-[#0f57b8]">Own The Room</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ash sm:text-lg">
          Handcrafted drops inspired by party energy, runway confidence, and
          everyday movement. Explore the hottest shoes and lock your next flex
          before the drop closes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-[#16243f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Pre-Order Hot Items
          </a>
          <a
            href="#hot-items"
            className="rounded-full border border-ink/20 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-ink transition hover:-translate-y-0.5 hover:border-ink/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            View Shoe Columns
          </a>
        </div>
      </div>

      <div className="reveal rounded-[2rem] border border-white/80 bg-white/65 p-5 shadow-card backdrop-blur" style={{ animationDelay: "260ms" }}>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ash">
          Shoes In Their Element
        </p>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {settings.map((setting) => (
            <article
              key={setting.title}
              className="overflow-hidden rounded-2xl border border-white/70 bg-white"
            >
              <Image
                src={setting.image}
                alt={`${setting.title} shoe setting`}
                width={1200}
                height={800}
                className="h-40 w-full object-cover"
              />
              <div className="px-3 py-3">
                <h2 className="text-2xl leading-none text-ink">{setting.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-ash">
                  {setting.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
