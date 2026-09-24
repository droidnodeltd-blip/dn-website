import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Droidnode Ltd website and apps.",
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
          <p className="dn-legal-updated">Last updated: 23 September 2026</p>

          <p>
            These terms govern your use of this website, operated by
            Droidnode Ltd, a company registered in England &amp; Wales
            (company number 17213237, registered office 82A James Carter
            Road, Bury St Edmunds, England, IP28 7DE), and of the Android
            apps we publish where they are covered below. By using this
            website or an app, you agree to these terms.
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
            Unless otherwise stated, the content on this website (including
            text, graphics, and the Droidnode name and logo) is owned by or
            licensed to Droidnode Ltd. You may not reproduce or reuse it
            without our prior written permission.
          </p>

          <h2>Our apps</h2>
          <p>
            Any Android apps we publish are distributed through Google Play
            and are subject to Google Play&apos;s own terms as well as the
            app-specific terms below and any separate terms or licence
            included with the app. This website does not itself distribute
            app software.
          </p>

          <h2>Painter&apos;s Toolkit</h2>
          <p>
            <strong>Licence.</strong> We grant you a personal,
            non-exclusive, non-transferable licence to use Painter&apos;s
            Toolkit on your own Android devices, including for your work as
            a painter or decorator. You must not copy, modify, resell, or
            reverse engineer the app, except where the law allows you to.
          </p>
          <p>
            <strong>Colour readings are a guide.</strong> The app measures
            colour using your phone&apos;s camera. Results depend on
            lighting, the surface being measured, and your device&apos;s
            camera, so they are approximate. Any colour match, mixing
            guidance, recipe, or paint suggestion is provided as a guide
            only, and we do not guarantee that it will match a real paint
            colour. Always test a sample before you commit to a job.
          </p>
          <p>
            <strong>Third-party paint brands.</strong> The app refers to
            paint brands and colour ranges so that you can compare them.
            Those names belong to their owners. We are not affiliated with
            or endorsed by them, and the colour values shown are
            approximations.
          </p>
          <p>
            <strong>Purchases and subscriptions.</strong> The Field Guide
            toolset is free. The Journeyman&apos;s Studio toolset can be
            unlocked with a one-off payment or a monthly subscription, both
            processed by Google Play. Prices are shown in the app and on
            Google Play before you buy. Where a free trial is offered, your
            subscription becomes a paid subscription when the trial ends
            unless you cancel before then. Subscriptions renew each month
            until you cancel, and you keep access until the end of the
            period you have paid for. You can cancel at any time in Google
            Play. Refunds are handled by Google Play under its refund
            policy. This does not affect your statutory rights.
          </p>
          <p>
            <strong>Liability.</strong> To the fullest extent permitted by
            law, Droidnode Ltd will not be liable for any loss arising from
            reliance on the app&apos;s colour readings or suggestions,
            including the cost of paint, materials, or labour. The app is
            provided on an &quot;as is&quot; basis. Nothing in these terms
            limits our liability where it would be unlawful to do so,
            including for death or personal injury caused by our
            negligence, or for fraud, or affects your statutory consumer
            rights.
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
