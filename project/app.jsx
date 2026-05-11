/* global React, ReactDOM */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ============================================================
   DATA
   ============================================================ */
const COLORWAYS = [
  { id: "ember",  name: "Ember Velocity", swatch: "linear-gradient(135deg,#ff8f3f,#c34a16)" },
  { id: "noir",   name: "Night Grid",     swatch: "linear-gradient(135deg,#26262d,#0a0a0c)" },
  { id: "frost",  name: "Frost Pulse",    swatch: "linear-gradient(135deg,#cfe9f7,#7fb4d8)" },
  { id: "solar",  name: "Solar Circuit",  swatch: "linear-gradient(135deg,#ffd66b,#d99a1f)" },
  { id: "crest",  name: "City Crest",     swatch: "linear-gradient(135deg,#7a8aa6,#37425a)" },
];

const HERO_FRAMES = 8;

const DROPS = [
  { id: "ember",   name: "Ember Velocity", series: "01 / Party",        price: "$189", drop: "Drop 04 · Limited 120 pairs", hot: true, idx: "F-0041", swatches: ["#ff8f3f","#0a0a0c","#f5f4ef"], span: "feature" },
  { id: "night",   name: "Night Grid",     series: "02 / Fashion Event", price: "$205", drop: "Drop 04 · Last 12 pairs",     hot: true, idx: "F-0042", swatches: ["#0a0a0c","#26262d","#7a8aa6"], span: "standard" },
  { id: "frost",   name: "Frost Pulse",    series: "03 / General Wear",  price: "$175", drop: "Drop 05 · Just listed",        hot: false, idx: "F-0043", swatches: ["#cfe9f7","#7fb4d8","#f5f4ef"], span: "standard" },
  { id: "solar",   name: "Solar Circuit",  series: "04 / Fashion Event", price: "$215", drop: "Drop 05 · Opens Friday",       hot: false, idx: "F-0044", swatches: ["#ffd66b","#d99a1f","#3a2a06"], span: "half" },
  { id: "neon",    name: "Neon Stitch",    series: "05 / Party",         price: "$199", drop: "Drop 04 · Trending",           hot: true, idx: "F-0045", swatches: ["#bcff5b","#0a0a0c","#f5f4ef"], span: "half" },
  { id: "crest",   name: "City Crest",     series: "06 / General Wear",  price: "$169", drop: "Drop 05 · Pre-order open",     hot: false, idx: "F-0046", swatches: ["#7a8aa6","#37425a","#0a0a0c"], span: "half" },
];

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  return (
    <nav className="nav" data-screen-label="00 Nav">
      <div className="mark">
        <div className="glyph">C</div>
        CraftedByChris
        <span className="mono" style={{ color: "var(--ash)", fontSize: 11, letterSpacing: ".22em", marginLeft: 10 }}>LLC · est. handmade</span>
      </div>
      <div className="nav-links">
        <a href="#drops">Drops</a>
        <a href="#craft">Craft</a>
        <a href="#preorder">Pre-Order</a>
        <a href="#archive">Archive</a>
      </div>
      <div className="nav-right">
        <span style={{ color: "var(--ash)" }}>EN · USD</span>
        <a className="bag" href="#bag">
          Bag <span className="count">2</span>
        </a>
      </div>
    </nav>
  );
}

/* ============================================================
   360° STAGE
   ============================================================ */
function Stage({ activeColorway, onColorway, autoSpin, setAutoSpin, spinSpeed }) {
  // 360 frame state
  const [frame, setFrame] = useState(0);
  const dragRef = useRef({ active: false, lastX: 0, accum: 0 });
  const rafRef = useRef(0);

  // auto-spin
  useEffect(() => {
    if (!autoSpin) return;
    let last = performance.now();
    const tick = (t) => {
      const dt = t - last; last = t;
      // speed: degrees per second roughly mapped
      const fps = spinSpeed; // frames per second
      setFrame((f) => (f + dt * (fps / 1000)) % HERO_FRAMES);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [autoSpin, spinSpeed]);

  // drag to spin
  const onPointerDown = (e) => {
    dragRef.current.active = true;
    dragRef.current.lastX = e.clientX;
    dragRef.current.accum = 0;
    setAutoSpin(false);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.accum += dx;
    // every ~24px of drag = 1 frame
    const step = dragRef.current.accum / 24;
    if (Math.abs(step) >= 1) {
      const whole = Math.trunc(step);
      setFrame((f) => (f + whole + HERO_FRAMES) % HERO_FRAMES);
      dragRef.current.accum -= whole * 24;
    }
  };
  const onPointerUp = (e) => {
    dragRef.current.active = false;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
  };

  const activeFrame = Math.floor(frame);

  // Render N frames so user can drop separate photos in each.
  // If they only fill #1, we fall back to the tilt animation on a single image.
  return (
    <div className="stage">
      <div className="stage-rays" />
      <div className="stage-platform" />

      <div
        className="stage-shoe"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{ cursor: "grab", touchAction: "none" }}
      >
        <div className={`spinner ${autoSpin ? "is-tilt" : ""}`}>
          {Array.from({ length: HERO_FRAMES }).map((_, i) => (
            <div
              key={i}
              className={`frame ${i === activeFrame ? "is-active" : ""}`}
            >
              <image-slot
                id={`hero-frame-${i + 1}`}
                placeholder={i === 0 ? `Hero shoe — frame 1 of ${HERO_FRAMES} · drop Nikon-shot ${activeColorway.name} photo` : `Spin frame ${i + 1}/${HERO_FRAMES}`}
                shape="rect"
              ></image-slot>
            </div>
          ))}
        </div>
      </div>

      <div className="stage-reflection" aria-hidden="true">
        <div className={`frame is-active`}>
          <image-slot id={`hero-frame-${activeFrame + 1}`} shape="rect" placeholder=""></image-slot>
        </div>
      </div>

      <div className="colorway-rail">
        {COLORWAYS.map((c) => (
          <div
            key={c.id}
            className={`swatch ${activeColorway.id === c.id ? "is-active" : ""}`}
            style={{ background: c.swatch }}
            onClick={() => onColorway(c)}
            title={c.name}
          />
        ))}
        <span className="label">Colorway</span>
      </div>

      <div className="spin-controls">
        <button
          className={autoSpin ? "is-on" : ""}
          onClick={() => setAutoSpin((v) => !v)}
          aria-pressed={autoSpin}
        >
          {autoSpin ? "■ Pause" : "▶ Spin 360°"}
        </button>
        <span className="frames">
          {String(activeFrame + 1).padStart(2, "0")} / {String(HERO_FRAMES).padStart(2, "0")}
        </span>
        <input
          className="scrub"
          type="range"
          min={0}
          max={HERO_FRAMES - 1}
          step={1}
          value={activeFrame}
          onChange={(e) => { setAutoSpin(false); setFrame(Number(e.target.value)); }}
          aria-label="Scrub shoe rotation"
        />
      </div>
    </div>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero({ activeColorway, setActiveColorway, autoSpin, setAutoSpin, spinSpeed }) {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="top">
            <span className="eyebrow"><span className="dot" />Drop 04 / Spring Run · Live now</span>
            <span className="line" />
            <span className="mono" style={{ color: "var(--ash)", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase" }}>
              EST. 2019 · ATX
            </span>
          </div>

          <h1 className="hero-title">
            <span className="row">CRAFTED</span>
            <span className="row outline">FOR THE</span>
            <span className="row accent">FLOOR.</span>
          </h1>

          <p className="hero-sub">
            Hand-built drops for party floors, fashion fronts and the daily street.
            Limited Nikon-shot runs, no restocks, no reprints — every pair is
            numbered, stitched and signed by Chris in Austin, TX.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#drops">
              Shop {activeColorway.name}
              <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#craft">The Process</a>
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
              <div className="v">Austin, TX</div>
            </div>
          </div>
        </div>

        <Stage
          activeColorway={activeColorway}
          onColorway={setActiveColorway}
          autoSpin={autoSpin}
          setAutoSpin={setAutoSpin}
          spinSpeed={spinSpeed}
        />
      </div>
    </section>
  );
}

/* ============================================================
   MARQUEE
   ============================================================ */
function Marquee() {
  const items = ["Hand-Stitched", "Drop 04", "Pre-Order Open", "Made in ATX", "120 Pairs", "Numbered & Signed", "No Restocks"];
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <React.Fragment key={i}>
            <span className={i % 3 === 1 ? "ghost" : ""}>{t}</span>
            <span className="sep" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   DROPS
   ============================================================ */
function Drops() {
  return (
    <section className="section" id="drops" data-screen-label="02 Drops">
      <div className="section-head">
        <div className="lhs">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />The Hot Shelf · Drop 04
          </div>
          <h2>
            CURRENT
            <br />
            DROPS<span style={{ color: "var(--amber)" }}>.</span>
          </h2>
        </div>
        <div className="rhs">
          Limited runs released every Friday at 09:00 CT. Each pair is numbered,
          hand-stitched and ships in 14 days.
          <br />
          <a className="link" href="#archive">View archive →</a>
        </div>
      </div>

      <div className="drops">
        {DROPS.map((d, i) => (
          <article key={d.id} className={`card ${d.span}`}>
            {d.hot ? (
              <span className="tag hot tag-pulse">Hot</span>
            ) : (
              <span className="tag">{d.drop.split("·")[0].trim()}</span>
            )}
            <span className="idx">{d.idx}</span>
            <div className="media">
              <image-slot
                id={`drop-${d.id}`}
                placeholder={`${d.name} · drop product photo`}
                shape="rect"
              ></image-slot>
            </div>
            <div className="quick" title="Quick view">+</div>
            {d.span === "feature" && (
              <span className="lock">
                <span className="glyph" />
                Limited 120 pairs · 87 claimed
              </span>
            )}
            <div className="meta">
              <div>
                <div className="sub">{d.series}</div>
                <div className="name">{d.name}</div>
                <div className="swatches">
                  {d.swatches.map((s, k) => (
                    <i key={k} style={{ background: s }} />
                  ))}
                </div>
              </div>
              <div className="price">{d.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   CRAFT — material story
   ============================================================ */
function Craft() {
  return (
    <section className="craft" id="craft" data-screen-label="03 Craft">
      <div className="section">
        <div className="craft-grid">
          <div className="craft-img">
            <span className="corner">Process · 01 / 06</span>
            <image-slot
              id="craft-process"
              placeholder="Studio photo · Chris hand-stitching"
              shape="rect"
            ></image-slot>
            <span className="corner br">Austin, TX · 2026</span>
          </div>

          <div className="craft-copy">
            <div className="eyebrow" style={{ marginBottom: 18 }}>
              <span className="dot" />The Process
            </div>
            <h2>
              MADE BY
              <br />
              ONE PAIR
              <br />
              OF HANDS<span style={{ color: "var(--amber)" }}>.</span>
            </h2>
            <p className="body">
              Every pair starts as a single sketch on the studio wall in Austin.
              Italian leather is cut to pattern, lasted by hand, and finished
              with a hand-stitched welt — a 14-day build, one craftsman, no
              shortcuts. Every pair is signed and numbered inside the tongue.
            </p>

            <div className="craft-specs">
              <div className="cell">
                <div className="k">Build time</div>
                <div className="v">14<small>days / pair</small></div>
              </div>
              <div className="cell">
                <div className="k">Materials</div>
                <div className="v">Italian<small>full-grain leather</small></div>
              </div>
              <div className="cell">
                <div className="k">Run size</div>
                <div className="v">120<small>pairs / drop</small></div>
              </div>
              <div className="cell">
                <div className="k">Origin</div>
                <div className="v">ATX<small>handmade in Austin</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRE-ORDER BAND with live countdown
   ============================================================ */
function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const ms = Math.max(0, target - now);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s };
}

function PreOrder() {
  // 3 days, 8h, 22m from now
  const target = useMemo(() => Date.now() + (3 * 86400 + 8 * 3600 + 22 * 60) * 1000, []);
  const { d, h, m, s } = useCountdown(target);
  return (
    <section className="preorder" id="preorder" data-screen-label="04 Pre-Order">
      <div className="wrap">
        <div>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            <span className="dot" />Drop 05 — Reserve your pair
          </div>
          <h2>
            CLOSES <span className="accent">FRIDAY.</span>
            <br />
            120 PAIRS.
            <br />
            ZERO RESTOCKS.
          </h2>
        </div>
        <div className="ts">
          <div className="countdown">
            {[
              { num: d, lbl: "Days" },
              { num: h, lbl: "Hours" },
              { num: m, lbl: "Min" },
              { num: s, lbl: "Sec" },
            ].map((u) => (
              <div className="unit" key={u.lbl}>
                <div className="num">{String(u.num).padStart(2, "0")}</div>
                <div className="lbl">{u.lbl}</div>
              </div>
            ))}
          </div>
          <p>
            Reservations lock at 09:00 CT Friday. Pairs ship in 14 days from
            the Austin studio, hand-numbered and signed.
          </p>
          <a className="btn btn-primary" href="#preorder" style={{ marginTop: 6 }}>
            Reserve Drop 05
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer data-screen-label="05 Footer">
      <div className="foot">
        <div className="brand">
          <h3>CRAFTEDBYCHRIS<span style={{ color: "var(--amber)" }}>.</span></h3>
          <p>
            Hand-built drops out of a one-man studio in Austin, Texas.
            Limited runs. Numbered pairs. Made to last.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#drops">Current Drop</a></li>
            <li><a href="#archive">Archive</a></li>
            <li><a href="#preorder">Pre-Order</a></li>
            <li><a href="#gift">Gift Card</a></li>
          </ul>
        </div>
        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="#craft">The Process</a></li>
            <li><a href="#materials">Materials</a></li>
            <li><a href="#chris">About Chris</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="#sizing">Sizing</a></li>
            <li><a href="#care">Leather Care</a></li>
            <li><a href="#ship">Shipping</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-rule">
        <span>© 2026 CraftedByChris LLC · Austin, TX</span>
        <span>Made with hand & needle</span>
      </div>
    </footer>
  );
}

/* ============================================================
   TWEAKS
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ff8f3f",
  "spinSpeed": 3,
  "autoSpin": true,
  "background": "deep"
}/*EDITMODE-END*/;

function App() {
  const [activeColorway, setActiveColorway] = useState(COLORWAYS[0]);
  const [autoSpin, setAutoSpinState] = useState(TWEAK_DEFAULTS.autoSpin);
  const t = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [tweaks, setTweak] = t;

  // apply accent + bg
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--amber", tweaks.accent);
    if (tweaks.background === "deep")     root.style.setProperty("--ink", "#0a0a0c");
    if (tweaks.background === "navy")     root.style.setProperty("--ink", "#0a1020");
    if (tweaks.background === "graphite") root.style.setProperty("--ink", "#15151a");
    if (tweaks.background === "bone") {
      root.style.setProperty("--ink", "#f5f4ef");
      root.style.setProperty("--ink-2", "#eceae3");
      root.style.setProperty("--ink-3", "#dcd9cf");
      root.style.setProperty("--bone", "#0a0a0c");
      root.style.setProperty("--bone-2", "#1c1c22");
      root.style.setProperty("--ash", "#5d5b62");
      root.style.setProperty("--rule", "rgba(10,10,12,0.10)");
      root.style.setProperty("--rule-strong", "rgba(10,10,12,0.22)");
    } else {
      root.style.setProperty("--ink-2", "#131318");
      root.style.setProperty("--ink-3", "#1c1c22");
      root.style.setProperty("--bone", "#f5f4ef");
      root.style.setProperty("--bone-2", "#e9e7df");
      root.style.setProperty("--ash", "#88858a");
      root.style.setProperty("--rule", "rgba(245,244,239,0.08)");
      root.style.setProperty("--rule-strong", "rgba(245,244,239,0.18)");
    }
  }, [tweaks.accent, tweaks.background]);

  useEffect(() => setAutoSpinState(tweaks.autoSpin), [tweaks.autoSpin]);

  const TP = window.TweaksPanel;
  const TS = window.TweakSection;
  const TSlider = window.TweakSlider;
  const TToggle = window.TweakToggle;
  const TRadio = window.TweakRadio;
  const TColor = window.TweakColor;
  const TSelect = window.TweakSelect;

  return (
    <>
      <Nav />
      <Hero
        activeColorway={activeColorway}
        setActiveColorway={setActiveColorway}
        autoSpin={autoSpin}
        setAutoSpin={(v) => { setAutoSpinState(v); setTweak("autoSpin", v); }}
        spinSpeed={tweaks.spinSpeed}
      />
      <Marquee />
      <Drops />
      <Craft />
      <PreOrder />
      <Footer />

      {TP && (
        <TP title="Tweaks">
          <TS title="Theme">
            <TColor
              label="Accent"
              value={tweaks.accent}
              onChange={(v) => setTweak("accent", v)}
              options={["#ff8f3f", "#f0c14b", "#bcff5b", "#7fb4d8", "#e63946"]}
            />
            <TRadio
              label="Canvas"
              value={tweaks.background}
              onChange={(v) => setTweak("background", v)}
              options={[
                { value: "deep", label: "Deep" },
                { value: "navy", label: "Navy" },
                { value: "graphite", label: "Graphite" },
                { value: "bone", label: "Bone" },
              ]}
            />
          </TS>
          <TS title="360° Stage">
            <TToggle
              label="Auto-spin"
              value={tweaks.autoSpin}
              onChange={(v) => setTweak("autoSpin", v)}
            />
            <TSlider
              label="Spin speed (fps)"
              value={tweaks.spinSpeed}
              onChange={(v) => setTweak("spinSpeed", v)}
              min={0.5}
              max={12}
              step={0.5}
            />
          </TS>
        </TP>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
