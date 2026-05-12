import Image from "next/image";

const ETSY_URL = "https://www.etsy.com/shop/craftedbychrisllc";

const DROPS = [
  {
    id: "CBC-001",
    name: "Baltimore Orioles AF1",
    series: "Home Team",
    price: "$260",
    src: "/images/shoe-baltimore.png",
    hot: true,
    size: "feature" as const,
    swatches: ["#DF4601", "#0a0a0c", "#f5f4ef"],
    lock: "Fan Favorite · Hand-Painted · Limited",
  },
  {
    id: "CBC-002",
    name: "LA Custom AF1",
    series: "Custom Order",
    price: "$210",
    src: "/images/shoe-la-blue.png",
    hot: true,
    size: "standard" as const,
    swatches: ["#003DA5", "#FDB927", "#f5f4ef"],
  },
  {
    id: "CBC-003",
    name: "Atlanta Braves AF1",
    series: "Sports Fan",
    price: "$240",
    src: "/images/shoe-atlanta-braves.png",
    hot: false,
    size: "standard" as const,
    swatches: ["#CE1141", "#13274F", "#f5f4ef"],
  },
  {
    id: "CBC-004",
    name: "Philadelphia Eagles AF1",
    series: "Sports Fan",
    price: "$230",
    src: "/images/shoe-philly-eagles.png",
    hot: false,
    size: "half" as const,
    swatches: ["#004C54", "#0a0a0c", "#A5ACAF"],
  },
  {
    id: "CBC-005",
    name: "OKC Thunder AF1",
    series: "Sports Fan",
    price: "$260",
    src: "/images/shoe-okc-thunder.png",
    hot: true,
    size: "half" as const,
    swatches: ["#007AC1", "#EF3B24", "#f5f4ef"],
  },
  {
    id: "CBC-006",
    name: "Seattle Seahawks AF1",
    series: "Sports Fan",
    price: "$225",
    src: "/images/shoe-seattle.png",
    hot: false,
    size: "half" as const,
    swatches: ["#002244", "#69BE28", "#A5ACAF"],
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
              Every pair is hand-painted by a single set of hands. When they&rsquo;re gone,
              they go into the queue — no shortcuts, no restocks, just your place in line.
            </p>
            <a href={ETSY_URL} target="_blank" rel="noreferrer" className="link">
              See More on Etsy →
            </a>
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
