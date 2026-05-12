import Image from "next/image";

export function Craft() {
  return (
    <section id="craft" className="craft">
      <div className="section">
        <div className="craft-grid">
          {/* Image */}
          <div className="craft-img">
            <span className="corner">Collection · 01 / 08</span>
            <Image
              src="/images/ShoeInventory_Screenshot.png"
              alt="CBC custom hand-painted shoe inventory — Crafted By Chris, Baltimore MD"
              width={600}
              height={750}
              style={{ objectFit: "cover" }}
            />
            <span className="corner br">Baltimore, MD · Est. 2020</span>
          </div>

          {/* Copy */}
          <div className="craft-copy">
            <p className="eyebrow"><span className="dot" />The craft</p>
            <h2>MADE BY ONE<br />PAIR OF HANDS.</h2>
            <p className="body">
              Every pair that leaves the CBC studio starts as a blank canvas and
              ends as something nobody else on the block is wearing. Based in
              Baltimore, MD, Crafted By Chris has spent over five years
              hand-painting custom sneakers — from Eagles fans in Philly to
              Orioles diehards right here in Bmore. Each design is hand-detailed,
              one shoe at a time, with no stencils, no shortcuts. Whether it&rsquo;s
              your team&rsquo;s colors, a custom colorway, or a one-of-one commission,
              CBC delivers wearable art shipped nationwide through Etsy.
            </p>
            <p className="body" style={{ marginTop: "1rem" }}>
              From the classic white-on-white Air Force 1 base to full-color team
              tributes dripping in detail, every pair goes through Chris&rsquo;s hands —
              primed, painted, sealed, and quality-checked before it ships. The DMV
              has been showing love for five-plus years and customers nationwide keep
              coming back. Not because it&rsquo;s fast. Because it&rsquo;s right.
            </p>

            <div className="craft-specs">
              <div className="cell">
                <p className="k">Process</p>
                <p className="v">Hand <small>detailed</small></p>
              </div>
              <div className="cell">
                <p className="k">Materials</p>
                <p className="v">Premium <small>custom paint</small></p>
              </div>
              <div className="cell">
                <p className="k">Customers</p>
                <p className="v">100–500 <small>Etsy sales</small></p>
              </div>
              <div className="cell">
                <p className="k">Origin</p>
                <p className="v">Bmore <small>handmade in Baltimore</small></p>
              </div>
            </div>

            <blockquote style={{
              marginTop: "2rem",
              borderLeft: "3px solid var(--amber)",
              paddingLeft: "1.25rem",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              letterSpacing: "0.04em",
              color: "var(--bone)",
            }}>
              &ldquo;Built different. Literally.&rdquo;
              <cite style={{
                display: "block",
                marginTop: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ash)",
                fontStyle: "normal",
              }}>
                — CBC, Baltimore MD · Est. 2020
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
