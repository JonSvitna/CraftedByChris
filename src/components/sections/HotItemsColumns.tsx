import Image from "next/image";

import { hotItems } from "@/data/hotItems";

const columns = [hotItems.slice(0, 2), hotItems.slice(2, 4), hotItems.slice(4, 6)];

export function HotItemsColumns() {
  return (
    <section id="hot-items" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="hot-items-heading">
      <div className="mb-8 reveal" style={{ animationDelay: "90ms" }}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ash">Hot Items</p>
        <h2 id="hot-items-heading" className="mt-1 text-4xl leading-[0.9] text-ink sm:text-5xl lg:text-6xl">The Columns Of Heat</h2>
        <p className="mt-3 max-w-2xl text-sm text-ash sm:text-base">
          Fast-scan drops inspired by Etsy storefront browsing, rebuilt with a premium
          campaign feel. Each card links straight to pre-order action.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className="reveal flex flex-col gap-6"
            style={{ animationDelay: `${200 + columnIndex * 120}ms` }}
          >
            {column.map((item) => (
              <article
                key={item.slug}
                className="group overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/80 shadow-card backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(9,11,17,0.22)]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.name} handcrafted shoe`}
                    width={700}
                    height={440}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-56"
                  />
                </div>
                <div className="space-y-3 px-4 py-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl leading-none text-ink sm:text-3xl">{item.name}</h3>
                    <span className="rounded-full bg-frost px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#154f91]">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ash">
                    {item.setting}
                  </p>
                  <p className="text-sm text-ash">{item.dropLabel}</p>
                  <a
                    href={item.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink transition hover:-translate-y-0.5 hover:border-ink/35 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    Pre-Order On Etsy
                  </a>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
