export function PreOrderBand() {
  return (
    <section className="relative overflow-hidden bg-[#0c1220] px-4 py-24 sm:px-6 lg:px-10">
      {/* Ember glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff8f3f]/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="reveal" style={{ animationDelay: "60ms" }}>
          <p className="mb-5 text-[0.625rem] font-bold uppercase tracking-[0.3em] text-[#ff8f3f]">
            Built Your Way
          </p>
          <h2 className="max-w-4xl text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.86] text-white">
            CUSTOM ORDERS.
            <br />BUILT YOUR
            <br />WAY.
          </h2>

          <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[40ch] text-sm leading-relaxed text-white/40">
              Don&rsquo;t see your team? CBC does fully custom colorways — pick your team,
              your colors, your design. Chris will reach out to discuss every detail.
            </p>
            <a
              href="/custom-order"
              className="inline-flex shrink-0 items-center rounded-full bg-[#ff8f3f] px-8 py-4 text-[0.8125rem] font-bold uppercase tracking-[0.12em] text-[#0c1220] transition hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Place a Custom Order →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
