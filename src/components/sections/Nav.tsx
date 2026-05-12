import Link from "next/link";
import Image from "next/image";

const ETSY_URL = "https://www.etsy.com/shop/craftedbychrisllc";

export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="mark">
        <Image
          src="/images/CreationsByChris.png"
          alt="Crafted By Chris CBC logo"
          width={28}
          height={28}
          className="glyph"
          style={{ borderRadius: 6, objectFit: "cover" }}
        />
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
