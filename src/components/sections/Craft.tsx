import Image from "next/image";

export function Craft() {
  return (
    <section id="craft" className="craft">
      <div className="section">
        <div className="craft-grid">
          {/* Image */}
          <div className="craft-img">
            <span className="corner">Process · 01 / 06</span>
            <Image
              src="/images/hero-party.svg"
              alt="Chris at work in the Austin studio"
              width={600}
              height={750}
            />
            <span className="corner br">Austin, TX · 2026</span>
          </div>

          {/* Copy */}
          <div className="craft-copy">
            <p className="eyebrow"><span className="dot" />The craft</p>
            <h2>MADE BY ONE<br />PAIR OF HANDS.</h2>
            <p className="body">
              Every shoe in a CraftedByChris drop is built by Chris — no production
              line, no factory floor, no shortcuts. Italian full-grain leather hand-cut
              on numbered lasts, stitched with waxed linen thread, and finished with a
              hand-buffed natural edge. It takes 14 days per pair. That&rsquo;s the point.
            </p>

            <div className="craft-specs">
              <div className="cell">
                <p className="k">Build time</p>
                <p className="v">14 <small>days/pair</small></p>
              </div>
              <div className="cell">
                <p className="k">Materials</p>
                <p className="v">Italian <small>full-grain leather</small></p>
              </div>
              <div className="cell">
                <p className="k">Run size</p>
                <p className="v">120 <small>pairs/drop</small></p>
              </div>
              <div className="cell">
                <p className="k">Origin</p>
                <p className="v">ATX <small>handmade in Austin</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
