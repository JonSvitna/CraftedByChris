const ITEMS = [
  { text: "Hand-Stitched",    ghost: false },
  { text: "Drop 04",          ghost: true  },
  { text: "Pre-Order Open",   ghost: false },
  { text: "Made in ATX",      ghost: true  },
  { text: "120 Pairs",        ghost: false },
  { text: "Numbered & Signed",ghost: true  },
  { text: "No Restocks",      ghost: false },
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
