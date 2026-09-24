export default function Products() {
  return (
    <section id="products" className="dn-products">
      <div className="dn-hero-column">
        <h2 className="dn-section-title">Our apps</h2>
        <p className="dn-section-lede">
          Our first app is on its way to Google Play.
        </p>

        <div className="dn-app-card">
          <span className="dn-app-status">Coming soon to Google Play</span>
          <h3 className="dn-app-name">Painter&apos;s Toolkit</h3>
          <p className="dn-app-desc">
            Colour measurement and paint matching for painters, built by a
            professional painter. Use your phone&apos;s camera to sample
            colours, compare them, work out mixing ratios, and find similar
            paints across different ranges.
          </p>
        </div>
      </div>
    </section>
  );
}
