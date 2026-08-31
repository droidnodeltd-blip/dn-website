import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Droidnode Ltd collects, uses, and protects your data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <section className="dn-legal">
        <div className="dn-legal-column">
          <a href="/" className="dn-legal-back">
            ← Back to home
          </a>
          <h1 className="dn-legal-title">Privacy Policy</h1>
          <p className="dn-legal-updated">Last updated: 30 August 2026</p>

          <p>
            This policy explains how Droidnode Ltd (&quot;Droidnode&quot;,
            &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) collects and uses
            personal data when you visit this website or contact us, and
            provides the baseline privacy information for the Android apps
            we publish. It is written to comply with the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act
            2018.

          </p>

          <h2>Who we are</h2>
          <p>
            Droidnode Ltd is the data controller for the personal data
            described in this policy.
          </p>
          <ul>
            <li>Company name: Droidnode Ltd</li>
            <li>Company number: 17213237 (registered in England &amp; Wales)</li>
            <li>
              Registered office: 82A James Carter Road, Bury St Edmunds,
              England, IP28 7DE
            </li>
            <li>
              Contact email:{" "}
              <a href="mailto:droidnodeltd@gmail.com">
                droidnodeltd@gmail.com
              </a>
            </li>
          </ul>

          <h2>What data we collect</h2>
          <p>
            This website does not have a contact form. If you email us
            using the address published on this site or in our Google Play
            developer listing, we receive whatever personal data you choose
            to include — typically your name, your email address, and the
            content of your message.
          </p>
          <p>
            We do not use cookies, analytics, or any other tracking
            technology on this website. Our hosting provider may process
            standard technical server logs (such as IP address and request
            timestamps) purely to operate and secure the site; we do not
            access or use this data for any other purpose.
          </p>

          <h2>How we use your data</h2>
          <p>
            We use any information you send us by email solely to respond
            to your enquiry. Our legal basis for this processing is our
            legitimate interest in responding to enquiries sent to us, and,
            where relevant, your consent given by emailing us.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We use the following third-party service provider (data
            processor) to operate this website:
          </p>
          <ul>
            <li>
              <strong>Vercel</strong> — to host this website.
            </li>
          </ul>
          <p>
            This provider may process data outside the UK. Where it does,
            it relies on appropriate safeguards such as Standard Contractual
            Clauses. We do not sell or share your data with any other third
            party, and we do not use it for marketing.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We retain emails you send us only for as long as necessary to
            deal with your enquiry and any related follow-up, and delete
            them once no longer needed, and in any case no longer than 24
            months.
          </p>

          <h2>Our Android apps</h2>
          <p>
            This policy covers Droidnode&apos;s website and company-level
            data practices. As we publish individual Android apps, each
            app&apos;s Google Play Store listing (and, where applicable, an
            in-app privacy notice) will describe any additional data that
            app collects — such as device permissions, in-app analytics, or
            crash reporting — and how it is used. Where an app does not
            publish its own separate policy, this policy applies to it in
            full.
          </p>

          <h2>Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to or restrict our processing of your data</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:droidnodeltd@gmail.com">
              droidnodeltd@gmail.com
            </a>
            . If you are unhappy with how we&apos;ve handled your data, you
            also have the right to complain to the UK Information
            Commissioner&apos;s Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>{" "}
            or on 0303 123 1113.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            This website is intended for a general business audience and is
            not directed at children. Where a specific Droidnode app is
            intended for or may be used by children, additional protections
            and disclosures will be set out in that app&apos;s Play Store
            listing.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated &quot;last updated&quot;
            date.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions about this policy, email{" "}
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
