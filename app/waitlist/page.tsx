import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Join the Waitlist — WeyDocs",
  description: "Get early access to WeyDocs.",
};

export default function WaitlistPage() {
  return (
    <>
      <Header />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-navy text-center mb-3">
          Join the Waitlist
        </h1>
        <p className="text-center text-muted mb-12">
          Get early access to WeyDocs and help shape the app.
        </p>

        <div className="max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/QK0KNG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Get Early Access to WeyDocs"
            className="border-0"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
