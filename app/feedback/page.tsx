import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Feedback — WeyDocs",
  description: "Share your feedback and help improve WeyDocs.",
};

export default function FeedbackPage() {
  return (
    <>
      <Header />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-navy text-center mb-3">
          Share Your Feedback
        </h1>
        <p className="text-center text-muted mb-12">
          Help shape WeyDocs by sharing what you think.
        </p>

        <div className="max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/BzBZb5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="WeyDocs Feedback"
            className="border-0"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
