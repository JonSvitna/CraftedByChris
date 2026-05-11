const items = [
  "Handcrafted Heat",
  "Party Ready",
  "Fashion Forward",
  "Street Confidence",
  "CraftedByChris",
  "Limited Drops",
  "Pre-Order Now",
  "Made Different",
];

export function MarqueeStrip() {
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden bg-[#ff8f3f] py-3.5"
      aria-label="Brand highlights"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-[0.6875rem] font-bold uppercase tracking-[0.26em] text-[#0c1220]"
          >
            {item}
            <span className="ml-8 opacity-30">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
