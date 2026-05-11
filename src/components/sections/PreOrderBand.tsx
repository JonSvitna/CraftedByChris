const etsyUrl = "https://www.etsy.com/shop/craftedbychrisllc";

export function PreOrderBand() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="reveal overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-r from-[#0d1a35] via-[#154f91] to-[#ff8f3f] p-6 text-white shadow-card sm:p-8" style={{ animationDelay: "200ms" }}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Upcoming Hot Release
            </p>
            <h2 className="mt-2 max-w-2xl text-3xl leading-[0.95] sm:text-4xl lg:text-5xl">
              Reserve your pair before this handcrafted run disappears.
            </h2>
          </div>

          <a
            href={etsyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.09em] text-[#0d1a35] transition hover:-translate-y-0.5 hover:bg-[#eaf4ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:w-fit"
          >
            Pre-Order Now
          </a>
        </div>
      </div>
    </section>
  );
}
