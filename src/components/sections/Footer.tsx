export function Footer() {
  return (
    <footer>
      <div className="foot">
        <div className="brand">
          <h3>CRAFTEDBYCHRIS.</h3>
          <p>
            Hand-built in Austin, TX. One pair at a time, numbered and signed.
            No production lines. No shortcuts. Just craft.
          </p>
        </div>

        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="#drops">Current Drop</a></li>
            <li><a href="#">Archive</a></li>
            <li><a href="#preorder">Pre-Order</a></li>
            <li><a href="#">Gift Card</a></li>
          </ul>
        </div>

        <div>
          <h4>Studio</h4>
          <ul>
            <li><a href="#craft">The Process</a></li>
            <li><a href="#">Materials</a></li>
            <li><a href="#">About Chris</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h4>Help</h4>
          <ul>
            <li><a href="#">Sizing</a></li>
            <li><a href="#">Leather Care</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="foot-rule">
        <span>© {new Date().getFullYear()} CraftedByChris LLC. All rights reserved.</span>
        <span>Made with hand &amp; needle.</span>
      </div>
    </footer>
  );
}
