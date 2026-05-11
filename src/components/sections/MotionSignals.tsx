const motionSignals = [
  {
    title: "Floating With Control",
    description:
      "Shoes drift with low-amplitude motion and minimal spin so the page feels alive without losing focus.",
  },
  {
    title: "Staggered Reveal",
    description:
      "Hero copy, visuals, and product cards enter in sequence to create a deliberate, premium rhythm.",
  },
  {
    title: "Interaction Safe",
    description:
      "Hover states, focus rings, and reduced-motion behavior keep the experience polished and accessible.",
  },
];

export function MotionSignals() {
  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8"
      aria-labelledby="motion-signals-heading"
    >
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ash">Launch Quality</p>
        <h2 id="motion-signals-heading" className="mt-1 text-4xl leading-[0.95] text-ink sm:text-5xl">
          Motion That Supports The Product
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {motionSignals.map((signal, index) => (
          <article
            key={signal.title}
            className="motion-card hover-lift reveal rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-card backdrop-blur"
            style={{ animationDelay: `${120 + index * 120}ms` }}
          >
            <p className="pulse-dot pl-4 text-xs font-semibold uppercase tracking-[0.16em] text-ash">
              Motion Layer {index + 1}
            </p>
            <h3 className="mt-4 text-2xl leading-none text-ink sm:text-3xl">{signal.title}</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ash sm:text-base">
              {signal.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}