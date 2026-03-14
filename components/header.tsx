import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-navy">
          <Image
            src="/weydoc-icon.png"
            alt="WeyDocs logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          WeyDocs
        </Link>
        <Link
          href="/waitlist"
          className="text-sm bg-accent text-white px-5 py-2.5 rounded-full font-semibold hover:bg-accent-dark transition-colors"
        >
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
