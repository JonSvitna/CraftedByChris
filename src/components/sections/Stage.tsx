"use client";

import { useState } from "react";
import Image from "next/image";

const COLORWAYS = [
  { id: "orioles", label: "Baltimore Orioles", hex: "#DF4601", src: "/images/shoe-baltimore.png" },
  { id: "la",      label: "LA Custom",         hex: "#003DA5", src: "/images/shoe-la-blue.png" },
  { id: "braves",  label: "Atlanta Braves",    hex: "#CE1141", src: "/images/shoe-atlanta-braves.png" },
  { id: "eagles",  label: "Eagles",            hex: "#004C54", src: "/images/shoe-philly-eagles.png" },
  { id: "thunder", label: "OKC Thunder",       hex: "#007AC1", src: "/images/shoe-okc-thunder.png" },
] as const;

export function Stage() {
  const [active, setActive] = useState(0);
  const activeColorway = COLORWAYS[active];

  return (
    <div className="stage">
      <div className="stage-rays" />

      <div className="stage-shoe">
        <Image
          src={activeColorway.src}
          alt={activeColorway.label}
          width={580}
          height={580}
          priority
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            filter: "drop-shadow(0 40px 50px rgba(0,0,0,.14)) drop-shadow(0 0 80px rgba(255,154,64,.12))",
          }}
        />
      </div>

      <div className="stage-platform" />

      <div className="colorway-rail">
        {COLORWAYS.map((cw, i) => (
          <button
            key={cw.id}
            className={`swatch${i === active ? " is-active" : ""}`}
            style={{ background: cw.hex }}
            title={cw.label}
            onClick={() => setActive(i)}
            aria-label={`Select ${cw.label}`}
          />
        ))}
        <span className="label">Colorway</span>
      </div>
    </div>
  );
}
