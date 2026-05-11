import Image from "next/image";

import { hotItems } from "@/data/hotItems";

const [featured, ...rest] = hotItems;

export function HotItemsColumns() {
  return (
    <section
      id="hot-items"
      className="mx-auto w-full max-w-[1400px] px-4 py-20 sm:px-6 lg:px-10"
      aria-labelledby="hot-items-heading"
    >
      {/* Section header — left-aligned, never centered */}
      <div className="reveal mb-12" style={{ animationDelay: "60ms" }}>
        <p className="mb-2 text-[0.625rem] font-bold uppercase tracking-[0.28em] text-[#0c1220]/40">
          Current Drops
        </p>
        <h2
          id="hot-items-heading"
          className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.88]"
        >
          THE HOT
          <br />
          SHELF.
        </h2>
      </div>

      {/* Asymmetric bento grid: 2fr+1fr+1fr with featured spanning 2×2 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* FEATURED card — col-span-2, row-span-2 */}
        <article
          className="reveal group relative overflow-hidden rounded-[1.75rem] bg-[#0c1220] md:col-span-2 md:row-span-2"
          style={{ animationDelay: "120ms" }}
        >
          <div className="overflow-hidden">
            <Image
              src={featured.image}
              alt={`${featured.name} — handcrafted shoe by CraftedByChris`}
              width={900}
              height={700}
              className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:h-[460px]"
              priority
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-white/35">
                  {featured.setting} &mdash; {featured.dropLabel}
                </p>
                <h3 className="mt-1 text-[2.25rem] leading-none text-white sm:text-[3rem]">
                  {featured.name}
                </h3>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                <span className="text-2xl font-bold text-[#ff8f3f] sm:text-3xl">
                  {featured.price}
                </span>
                <a
                  href={featured.ctaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#ff8f3f] px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#0c1220] transition hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  Pre-Order
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary cards — fill the remaining grid cells */}
        {rest.map((item, i) => (
          <article
            key={item.slug}
            className="reveal group overflow-hidden rounded-[1.5rem] border border-[#0c1220]/8 bg-white/80 backdrop-blur"
            style={{ animationDelay: `${160 + i * 80}ms` }}
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={`${item.name} — handcrafted shoe by CraftedByChris`}
                width={600}
                height={400}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-4">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#2a3143]/50">
                {item.setting}
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-2">
                <h3 className="text-[1.5rem] leading-none text-[#0c1220]">
                  {item.name}
                </h3>
                <span className="shrink-0 text-sm font-bold text-[#0c1220]">
                  {item.price}
                </span>
              </div>
              <p className="mt-1.5 text-[0.6875rem] text-[#2a3143]/60">
                {item.dropLabel}
              </p>
              <a
                href={item.ctaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-[#0c1220] underline underline-offset-4 decoration-[#0c1220]/20 transition hover:decoration-[#0c1220]/60 active:opacity-70"
              >
                Pre-Order on Etsy
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

