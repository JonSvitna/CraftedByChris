import { Stage } from "./Stage";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        {/* ── Copy ── */}
        <div className="hero-copy">
          <div className="top">
            <span className="eyebrow">
              <span className="dot" />
              Drop 04 — Pre-Order Open
            </span>
            <div className="line" />
          </div>

          <h1 className="hero-title">
            <span className="row">CRAFTED</span>
            <span className="row outline">FOR THE</span>
            <span className="row accent">FLOOR.</span>
          </h1>

          <p className="hero-sub">
            Hand-built one pair at a time in Austin, TX. Italian full-grain leather,
            numbered lasts, zero shortcuts. Drop 04 — 120 pairs only.
          </p>

          <div className="hero-cta">
            <a href="#preorder" className="btn btn-primary">
              Pre-Order Now
              <span className="arrow">→</span>
            </a>
            <a href="#drops" className="btn btn-ghost">
              View Drops
            </a>
          </div>

          <div className="hero-meta">
            <div className="item">
              <div className="k">Drop</div>
              <div className="v">04 / 120</div>
            </div>
            <div className="item">
              <div className="k">Lead time</div>
              <div className="v">14 days</div>
            </div>
            <div className="item">
              <div className="k">Studio</div>
              <div className="v">Austin TX</div>
            </div>
          </div>
        </div>

        {/* ── Stage ── */}
        <Stage />
      </div>
    </section>
  );
}
