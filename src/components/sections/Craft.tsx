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
              Five-plus years. Hundreds of happy customers across the DMV and beyond.
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
          </div>
        </div>
      </div>
    </section>
  );
}
