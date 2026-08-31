export default function Nav() {
  return (
    <nav className="dn-nav">
      <div className="dn-container dn-nav-inner">
        <a href="/" className="dn-nav-logo">
          Droidnode
        </a>

        <div className="dn-nav-cta">
          <ul className="dn-nav-links">
            <li>
              <a href="#products">Products</a>
            </li>
          </ul>
          <a href="#contact" className="dn-btn dn-btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
