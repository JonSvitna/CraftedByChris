import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="mark">
        <span className="glyph">C</span>
        CraftedByChris
      </Link>

      <ul className="nav-links">
        <li><a href="#drops">Drops</a></li>
        <li><a href="#craft">Craft</a></li>
        <li><a href="#preorder">Pre-Order</a></li>
        <li><a href="#">Archive</a></li>
      </ul>

      <div className="nav-right">
        <span>EN</span>
        <a href="#" className="bag">
          Bag
          <span className="count">0</span>
        </a>
      </div>
    </nav>
  );
}
