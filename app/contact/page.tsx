import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contact — WeyDocs",
  description: "Get in touch with the WeyDocs team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-3xl font-bold tracking-tight text-navy text-center mb-3">
          Contact Us
        </h1>
        <p className="text-center text-muted mb-12">
          Have a question, suggestion, or just want to say hi?
        </p>

        <div className="max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/embed/Me515k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&formEventsForwarding=1"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact WeyDocs"
            className="border-0"
          />
        </div>

      </main>

      <Footer />
    </>
  );
}
