import Image from "next/image";

const DROPS = [
  {
    id: "F-0041",
    name: "Ember Velocity",
    series: "Series · Velocity",
    price: "$189",
    src: "/images/kling_20260512_作品_Image1_i_w_357_1.png",
    hot: true,
    size: "feature" as const,
    swatches: ["#ff8f3f", "#0a0a0c", "#f5f4ef"],
    lock: "Limited 120 pairs · 87 claimed",
  },
  {
    id: "F-0042",
    name: "Night Grid",
    series: "Series · Grid",
    price: "$205",
    src: "/images/kling_20260512_作品_Image1_i_w_357_0.png",
    hot: true,
    size: "standard" as const,
    swatches: ["#0a0a0c", "#2a2a32", "#f5f4ef"],
  },
  {
    id: "F-0043",
    name: "Frost Pulse",
    series: "Series · Pulse",
    price: "$175",
    src: "/images/shoe-frost.svg",
    hot: false,
    size: "standard" as const,
    swatches: ["#cce8ff", "#0a0a0c", "#f5f4ef"],
  },
  {
    id: "F-0044",
    name: "Solar Circuit",
    series: "Series · Circuit",
    price: "$215",
    src: "/images/shoe-solar.svg",
    hot: false,
    size: "half" as const,
    swatches: ["#f5d400", "#0a0a0c", "#ff8f3f"],
  },
  {
    id: "F-0045",
    name: "Neon Stitch",
    series: "Series · Stitch",
    price: "$199",
    src: "/images/shoe-neon.svg",
    hot: true,
    size: "half" as const,
    swatches: ["#00ffaa", "#0a0a0c", "#f5f4ef"],
  },
  {
    id: "F-0046",
    name: "City Crest",
    series: "Series · Crest",
    price: "$169",
    src: "/images/shoe-crest.svg",
    hot: false,
    size: "half" as const,
    swatches: ["#e8e4dc", "#0a0a0c", "#5d5b62"],
  },
];

export function Drops() {
  return (
    <section id="drops">
      <div className="section">
        <div className="section-head">
          <div className="lhs">
            <p className="eyebrow"><span className="dot" />Current drops</p>
            <h2>CURRENT<br />DROPS.</h2>
          </div>
          <div className="rhs">
            <p>
              Every pair is built by a single set of hands. When they&rsquo;re gone,
              they&rsquo;re gone — no reprints, no restocks, no exceptions.
            </p>
            <a href="#" className="link">View full archive →</a>
          </div>
        </div>

        <div className="drops">
          {DROPS.map((drop) => (
            <div key={drop.id} className={`card ${drop.size}`}>
              <div className="media">
                {drop.hot && (
                  <span className="tag hot tag-pulse">● Hot</span>
                )}
                {!drop.hot && (
                  <span className="tag">Drop</span>
                )}
                <span className="idx">{drop.id}</span>

                <Image
                  src={drop.src}
                  alt={drop.name}
                  width={480}
                  height={480}
                />

                <button className="quick" aria-label={`Quick add ${drop.name}`}>+</button>

                {drop.size === "feature" && drop.lock && (
                  <span className="lock">
                    <span className="glyph" />
                    {drop.lock}
                  </span>
                )}
              </div>

              <div className="meta">
                <div>
                  <p className="sub">{drop.series}</p>
                  <p className="name">{drop.name}</p>
                  <div className="swatches">
                    {drop.swatches.map((hex) => (
                      <i key={hex} style={{ background: hex }} />
                    ))}
                  </div>
                </div>
                <span className="price">{drop.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
