export default function Footer() {
  return (
    <footer className="dn-footer">
      <div className="dn-hero-column dn-footer-inner">
        <div className="dn-footer-top">
          <span className="dn-footer-logo">DROIDNODE</span>
          <ul className="dn-footer-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="dn-footer-copy">
            © {new Date().getFullYear()} Droidnode Ltd. All rights reserved.
          </span>
        </div>
        <p className="dn-footer-legal">
          Droidnode Ltd is a company registered in England &amp; Wales.
          Company number 17213237. Registered office: 82A James Carter Road,
          Bury St Edmunds, England, IP28 7DE.
        </p>
      </div>
    </footer>
  );
}
