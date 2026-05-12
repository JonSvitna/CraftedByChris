"use client";

import { useState } from "react";
import Image from "next/image";

const COLORWAYS = [
  {
    id: "ember",
    label: "Ember",
    hex: "#ff8f3f",
    src: "/images/kling_20260512_作品_Image1_i_w_357_1.png",
    videoSrc: "/videos/kling_20260512_作品_transfrom__600_0.mp4",
  },
  { id: "noir",   label: "Noir",   hex: "#0a0a0c", src: "/images/shoe-new-england.png"  },
  { id: "frost",  label: "Frost",  hex: "#cce8ff", src: "/images/shoe-la-blue.png" },
  { id: "solar",  label: "Solar",  hex: "#f5d400", src: "/images/shoe-oklahoma.png" },
  { id: "crest",  label: "Crest",  hex: "#e8e4dc", src: "/images/shoe-philly-eagles.png" },
] as const;

export function Stage() {
  const [active, setActive] = useState(0);
  const [autoSpin, setAutoSpin] = useState(false);
  const activeColorway = COLORWAYS[active];

  return (
    <div className="stage">
      <div className="stage-rays" />

      <div className="stage-shoe">
        {activeColorway.id === "ember" && activeColorway.videoSrc ? (
          <video
            src={activeColorway.videoSrc}
            poster={activeColorway.src}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={`${activeColorway.label} colorway`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 40px 50px rgba(0,0,0,.14)) drop-shadow(0 0 80px rgba(255,154,64,.12))",
              animation: autoSpin ? "none" : undefined,
              transform: autoSpin ? "rotateY(20deg)" : undefined,
            }}
          />
        ) : (
          <Image
            src={activeColorway.src}
            alt={`${activeColorway.label} colorway`}
            width={580}
            height={580}
            priority
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 40px 50px rgba(0,0,0,.14)) drop-shadow(0 0 80px rgba(255,154,64,.12))",
              animation: autoSpin ? "none" : undefined,
              transform: autoSpin ? "rotateY(20deg)" : undefined,
            }}
          />
        )}
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
            aria-label={`Select ${cw.label} colorway`}
          />
        ))}
        <span className="label">Colorway</span>
      </div>

      <button
        onClick={() => setAutoSpin((s) => !s)}
        style={{
          position: "absolute",
          bottom: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "transparent",
          border: "1px solid var(--rule-strong)",
          borderRadius: 999,
          padding: "8px 18px",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ash)",
          cursor: "pointer",
          zIndex: 5,
          transition: "color .2s, border-color .2s",
        }}
      >
        {autoSpin ? "● Spinning" : "○ Auto-spin"}
      </button>
    </div>
  );
}
