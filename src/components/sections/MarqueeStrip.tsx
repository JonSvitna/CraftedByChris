const ITEMS = [
  { text: "Hand-Painted",         ghost: false },
  { text: "Baltimore, MD",        ghost: true  },
  { text: "Custom AF1s",          ghost: false },
  { text: "5+ Years Crafting",    ghost: true  },
  { text: "CBC Footwear",         ghost: false },
  { text: "Ships Nationwide",     ghost: true  },
  { text: "Shop on Etsy",         ghost: false },
  { text: "DMV Custom Shoes",     ghost: true  },
  { text: "No Two Alike",         ghost: false },
  { text: "Sports · Custom · OG", ghost: true  },
];

export function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className={item.ghost ? "ghost" : ""}>{item.text}</span>
            <i className="sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
