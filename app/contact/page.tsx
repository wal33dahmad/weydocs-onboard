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

        {/* Previous mailto form — kept for reference
        <form
          action="mailto:waleedahmad.codes@gmail.com"
          method="POST"
          encType="text/plain"
          className="max-w-lg space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm resize-none" placeholder="What's on your mind?" />
          </div>
          <button type="submit" className="bg-accent text-white px-7 py-3 rounded-full text-sm font-medium">Send Message</button>
        </form>
        */}
      </main>

      <Footer />
    </>
  );
}
