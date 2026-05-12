"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HoloCoin } from "./HoloCoin";

const ETSY_URL = "https://www.etsy.com/shop/craftedbychrisllc";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="nav">
        <Link href="/" className="mark" onClick={() => setOpen(false)}>
          <HoloCoin />
          CraftedByChris
        </Link>

        <ul className="nav-links">
          <li><a href="#drops">Drops</a></li>
          <li><a href="#craft">Craft</a></li>
          <li><a href="#preorder">Pre-Order</a></li>
          <li><a href="/custom-order">Custom Order</a></li>
        </ul>

        <div className="nav-right">
          <span>EN</span>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noreferrer"
            className="bag"
          >
            Shop Etsy
            <span className="count">✦</span>
          </a>
          <button
            className={`nav-burger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="burger-line" />
            <span className="burger-line" />
            <span className="burger-line" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ul className="mobile-links">
          <li><a href="#drops" onClick={() => setOpen(false)}>Drops</a></li>
          <li><a href="#craft" onClick={() => setOpen(false)}>Craft</a></li>
          <li><a href="#preorder" onClick={() => setOpen(false)}>Pre-Order</a></li>
          <li><a href="/custom-order" onClick={() => setOpen(false)}>Custom Order</a></li>
          <li>
            <a href={ETSY_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Shop Etsy ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
