import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Droidnode Ltd website.",
};

export default function TermsOfUse() {
  return (
    <>
      <Nav />
      <section className="dn-legal">
        <div className="dn-legal-column">
          <a href="/" className="dn-legal-back">
            ← Back to home
          </a>
          <h1 className="dn-legal-title">Terms of Use</h1>
          <p className="dn-legal-updated">Last updated: 30 August 2026</p>

          <p>
            These terms govern your use of this website, operated by
            Droidnode Ltd, a company registered in England &amp; Wales
            (company number 17213237, registered office 82A James Carter
            Road, Bury St Edmunds, England, IP28 7DE). By using this
            website, you agree to these terms.
          </p>

          <h2>Use of this website</h2>
          <p>
            This website provides general information about Droidnode and
            the Android apps we publish. You may browse the site and email
            us for legitimate enquiries. You must not use this website in
            any way that causes damage to it or impairs its availability,
            or for any unlawful, fraudulent, or harmful purpose.
          </p>

          <h2>Intellectual property</h2>
          <p>
            Unless otherwise stated, the content on this website — including
            text, graphics, and the Droidnode name and logo — is owned by or
            licensed to Droidnode Ltd. You may not reproduce or reuse it
            without our prior written permission.
          </p>

          <h2>Our apps</h2>
          <p>
            Any Android apps we publish are distributed through Google Play
            and are subject to Google Play&apos;s own terms as well as any
            separate terms or licence included with the app. This website
            does not itself distribute app software.
          </p>

          <h2>Third-party links</h2>
          <p>
            This website may link to third-party sites, such as our listings
            on Google Play. We are not responsible for the content or
            practices of any third-party site.
          </p>

          <h2>No warranty</h2>
          <p>
            This website is provided on an &quot;as is&quot; basis without
            warranties of any kind, to the fullest extent permitted by law.
            We do not guarantee that the site will always be available,
            secure, or error-free.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Droidnode Ltd will not
            be liable for any indirect or consequential loss arising from
            your use of this website. Nothing in these terms excludes or
            limits our liability where it would be unlawful to do so,
            including for death or personal injury caused by our negligence,
            or for fraud.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales, and
            any disputes will be subject to the exclusive jurisdiction of
            the courts of England and Wales.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of
            the site after changes are posted constitutes acceptance of the
            revised terms.
          </p>

          <h2>Contact us</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:droidnodeltd@gmail.com">
              droidnodeltd@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
