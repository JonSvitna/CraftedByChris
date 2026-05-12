const ETSY_URL = "https://www.etsy.com/shop/craftedbychrisllc";

export function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="brand">
          <h3>CRAFTEDBYCHRIS.</h3>
          <p>
            Hand-painted in Baltimore, MD. One pair at a time, numbered and signed.
            No stencils. No shortcuts. Just craft.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#drops">Current Drop</a></li>
            <li><a href="#preorder">Pre-Order</a></li>
            <li><a href="/custom-order">Custom Order</a></li>
            <li>
              <a href={ETSY_URL} target="_blank" rel="noreferrer">
                Etsy Shop ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="#craft">About Chris</a></li>
            <li><a href="/custom-order">Custom Orders</a></li>
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="/sizing">Sizing Guide</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-rule">
        <span>© {new Date().getFullYear()} Crafted By Chris LLC · Baltimore, MD. All rights reserved.</span>
        <span>Made with hand &amp; brush.</span>
      </div>
    </footer>
  );
}
