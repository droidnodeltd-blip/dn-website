import Nav from "@/components/Nav";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="dn-hero">
        <div className="dn-hero-column">
          <h1 className="dn-hero-title">Droidnode</h1>
          <p className="dn-hero-body">
            We&apos;re a UK-based studio building Android apps. This site is
            just getting started, and our apps will appear below as they
            launch.
          </p>
        </div>
      </section>

      <Products />
      <Contact />
      <Footer />
    </>
  );
}
