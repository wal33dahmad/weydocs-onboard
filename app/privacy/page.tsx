import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — WeyDocs",
  description: "How WeyDocs handles your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-navy text-center mb-3">
          Privacy policy
        </h1>
        <p className="text-center text-muted mb-12">Updated 03/14/2026</p>

        <div className="max-w-3xl mx-auto border border-border rounded-2xl p-8 sm:p-12 bg-white">
          <p className="font-semibold text-navy mb-1">
            Privacy Policy for WeyDocs
          </p>
          <p className="text-sm text-muted mb-6">Last updated: 03/14/2026</p>

          <div className="space-y-5 text-[15px] text-foreground/85 leading-relaxed">
            <p>
              Waleed (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
              operates the WeyDocs mobile application (the &ldquo;Service&rdquo;).
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Types of Data Collected
            </h2>

            <h3 className="font-medium text-navy">Personal Data</h3>
            <p>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you (&ldquo;Personal Data&rdquo;). Personally
              identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>
                Document metadata (document types, names, and expiry dates)
              </li>
            </ul>

            <h3 className="font-medium text-navy pt-2">Device Storage</h3>
            <p>
              In the current version of WeyDocs, all Personal Data and document
              images you provide are stored exclusively on your device. We do
              not transmit or have access to this data. You may optionally attach
              images or scans of documents; these are stored on-device only.
            </p>

            <h3 className="font-medium text-navy pt-2">Usage Data</h3>
            <p>
              In the current version of the app, we do not collect usage or
              diagnostic data.
            </p>

            <h3 className="font-medium text-navy pt-2">Profile Information</h3>
            <p>
              In a future version of the app, you will be able to create a
              profile by providing your name, email address, and phone number
              for account management and identification purposes. This feature
              is not available in the current version. When introduced, this
              information will be stored locally on your device unless you opt
              in to cloud sync.
            </p>

            <h2 className="font-semibold text-navy pt-2">Use of Data</h2>
            <p>
              Waleed uses the collected data for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and maintain our Service</li>
              <li>
                To notify you about upcoming document expirations via local push
                notifications
              </li>
              <li>
                To allow you to manage your documents and profile within the app
              </li>
              <li>To provide customer support</li>
            </ul>

            <h2 className="font-semibold text-navy pt-2">
              Data Storage and Security
            </h2>
            <p>
              All data in the current version of WeyDocs is stored locally on
              your device using secure on-device storage. We do not operate any
              servers or cloud infrastructure in the current version of the
              Service.
            </p>
            <p>
              The security of your data is important to us. We recommend
              enabling your device&apos;s screen lock and encryption features
              for additional protection. No method of electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Future Cloud Sync Feature
            </h2>
            <p>
              We plan to introduce an optional paid cloud backup and sync
              feature in a future version of the app. When this feature is
              launched, we will collect and store your Personal Data and document
              metadata on secure servers. All data will be encrypted in transit
              (TLS) and at rest. We will update this Privacy Policy and notify
              you within the app before this feature becomes available.
            </p>

            <h2 className="font-semibold text-navy pt-2">Notifications</h2>
            <p>
              WeyDocs requests permission to send up to 6 local push
              notifications per document to remind you of upcoming expirations
              (at 90, 60, 30, 15, 7, and 0 days before expiry). These
              notifications are generated entirely on your device and do not
              involve any external servers in the current version.
            </p>
            <p>
              You can disable notifications at any time through your device
              settings.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Third-Party Services
            </h2>
            <p>
              The current version of WeyDocs does not integrate any third-party
              analytics, advertising, or tracking services. Future versions may
              include analytics and notification services, which will be
              disclosed in an updated version of this policy.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Children&apos;s Privacy
            </h2>
            <p>
              WeyDocs is intended for users aged 18 and above. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 18. If you believe someone under 18 has provided
              us with personal data, please contact us and we will delete it
              promptly.
            </p>

            <h2 className="font-semibold text-navy pt-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &ldquo;Last updated&rdquo; date at the top of
              this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they are
              posted on this page.
            </p>

            <h2 className="font-semibold text-navy pt-2">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
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
