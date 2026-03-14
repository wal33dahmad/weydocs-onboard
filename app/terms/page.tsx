import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service — WeyDocs",
  description: "Terms and conditions for using WeyDocs.",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-navy text-center mb-3">
          Terms of Service
        </h1>
        <p className="text-center text-muted mb-12">Updated 03/14/2026</p>

        <div className="max-w-3xl mx-auto border border-border rounded-2xl p-8 sm:p-12 bg-white">
          <p className="font-semibold text-navy mb-1">
            Terms of Service for WeyDocs
          </p>
          <p className="text-sm text-muted mb-6">Last updated: 03/14/2026</p>

          <div className="space-y-5 text-[15px] text-foreground/85 leading-relaxed">
            <p>
              Please read these Terms of Service (&ldquo;Terms&rdquo;,
              &ldquo;Terms of Service&rdquo;) carefully before using the WeyDocs
              mobile application (the &ldquo;Service&rdquo;) operated by Waleed
              (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
            </p>
            <p>
              Your access to and use of the Service is conditioned on your
              acceptance of and compliance with these Terms. These Terms apply to
              all visitors, users, and others who access or use the Service.
            </p>
            <p>
              By accessing or using the Service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, then you may
              not access the Service.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              1. Use of the Service
            </h2>

            <h3 className="font-medium text-navy">1.1 Eligibility</h3>
            <p>
              You must be at least 18 years old to use this Service. By using
              the Service, you represent and warrant that you meet this
              eligibility requirement.
            </p>

            <h3 className="font-medium text-navy">1.2 User Account</h3>
            <p>
              In a future version of the Service, you may be able to create a
              user account by providing your name, email address, and phone
              number. Account creation is not required in the current version.
              When available, you will be responsible for maintaining the
              confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>

            <h3 className="font-medium text-navy">1.3 Acceptable Use</h3>
            <p>
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You agree not to use the Service:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                In any way that violates any applicable local, national, or
                international law or regulation
              </li>
              <li>
                To upload or store fraudulent, falsified, or illegal documents
              </li>
              <li>
                To impersonate or attempt to impersonate Waleed, another user,
                or any other person or entity
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any
                way is illegal, threatening, fraudulent, or harmful
              </li>
              <li>
                To attempt to gain unauthorized access to any part of the
                Service or its related systems
              </li>
            </ul>

            <h2 className="font-semibold text-navy pt-2">
              2. Intellectual Property
            </h2>

            <h3 className="font-medium text-navy">2.1 Ownership</h3>
            <p>
              The Service and its original content (excluding content provided
              by users), features, and functionality are and will remain the
              exclusive property of Waleed and its licensors. The Service is
              protected by copyright, trademark, and other applicable laws.
            </p>

            <h3 className="font-medium text-navy">2.2 License</h3>
            <p>
              Subject to these Terms, Waleed grants you a limited,
              non-exclusive, non-transferable, and revocable license to use the
              Service for your personal, non-commercial use.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              3. User-Generated Content
            </h2>

            <h3 className="font-medium text-navy">3.1 Responsibility</h3>
            <p>
              Any data, documents, images, or other materials you submit or
              store through the Service (&ldquo;User Content&rdquo;) are
              provided at your own risk. You are solely responsible for your
              User Content and for ensuring that any documents or information
              you store are accurate and lawfully held.
            </p>

            <h3 className="font-medium text-navy">3.2 Document Images</h3>
            <p>
              You may optionally upload images or scans of your documents within
              the Service. In the current version, these images are stored
              exclusively on your device. You retain full ownership of any
              document images you upload. We do not access, transmit, or use
              your document images in any way in the current version of the
              Service.
            </p>

            <h3 className="font-medium text-navy">3.3 No Verification</h3>
            <p>
              WeyDocs does not verify the authenticity or accuracy of any
              documents or information you enter. The Service is a personal
              organization and reminder tool only. We are not responsible for
              any consequences arising from incorrect or outdated document
              information stored in the app.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              4. Reminders and Notifications
            </h2>
            <p>
              WeyDocs sends up to 6 local push notifications per document to
              remind you of upcoming expiration dates (at 90, 60, 30, 15, 7,
              and 0 days before expiry). These reminders are provided as a
              convenience only. You are solely responsible for ensuring your
              documents are renewed on time. We are not liable for any
              consequences resulting from missed renewals, expired documents, or
              notification failures.
            </p>

            <h2 className="font-semibold text-navy pt-2">5. Privacy</h2>
            <p>
              Your privacy is important to us. Please review our{" "}
              <a
                href="/privacy"
                className="text-accent hover:underline"
              >
                Privacy Policy
              </a>
              , which explains how we collect, use, and store information about
              you.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              6. Paid Features
            </h2>
            <p>
              We plan to introduce optional paid features, including cloud
              backup and sync, in future versions of the Service. Pricing,
              terms, and conditions for paid features will be presented to you
              before purchase. Payments are processed by Google Play or the
              Apple App Store and are subject to their respective terms.
            </p>

            <h2 className="font-semibold text-navy pt-2">7. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason, including
              without limitation if you breach these Terms. Upon termination,
              your right to use the Service will immediately cease.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall Waleed, nor its affiliates, be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation loss of data, missed document
              renewals, fines, or penalties arising from expired documents,
              resulting from your access to or use of, or inability to access or
              use, the Service.
            </p>

            <h2 className="font-semibold text-navy pt-2">9. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo;
              basis without warranties of any kind, whether express or implied.
              We do not warrant that the Service will be uninterrupted,
              error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the Kingdom of Saudi Arabia, without regard to its
              conflict of law provisions.
            </p>

            <h2 className="font-semibold text-navy pt-2">11. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days&apos; notice prior to any new terms
              taking effect, either through an in-app notification or by
              updating the date at the top of this page.
            </p>

            <h2 className="font-semibold text-navy pt-2">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc pl-6">
              <li>
                By email:{" "}
                <a
                  href="mailto:waleedahmad.codes@gmail.com"
                  className="text-accent hover:underline"
                >
                  waleedahmad.codes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
