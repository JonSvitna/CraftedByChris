"use client";
import Image from "next/image";

export function HoloCoin() {
  return (
    <div className="holo-coin-wrapper" aria-hidden="true">
      <div className="holo-coin">
        <div className="coin-face coin-front">
          <Image
            src="/images/CreationsByChris.png"
            alt=""
            width={104}
            height={104}
            quality={95}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div className="holo-layer holo-layer--front" />
        </div>
        <div className="coin-face coin-back">
          <span className="coin-monogram">CBC</span>
          <div className="holo-layer" />
        </div>
      </div>
    </div>
  );
}
