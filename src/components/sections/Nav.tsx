import Link from "next/link";
import { HoloCoin } from "./HoloCoin";

const ETSY_URL = "https://www.etsy.com/shop/craftedbychrisllc";

export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="mark">
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
      </div>
    </nav>
  );
}
