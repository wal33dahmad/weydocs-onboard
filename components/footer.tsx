import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-border" />

        <div className="py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Primary */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Primary
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted/50 cursor-not-allowed">
                  Play Store App{" "}
                  <span className="text-xs text-muted/40">(Coming soon)</span>
                </span>
              </li>
              <li>
                <span className="text-sm text-muted/50 cursor-not-allowed">
                  Feedback board{" "}
                  <span className="text-xs text-muted/40">(Coming soon)</span>
                </span>
              </li>
              <li>
                <a
                  href="mailto:waleedahmad.codes@gmail.com"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Other
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Follow */}
          <div>
            <p className="text-sm text-muted mb-4">
              Want to follow along as I build WeyDocs? I share my progress
              publicly.
            </p>
            <a
              href="mailto:waleedahmad.codes@gmail.com"
              className="text-sm text-accent hover:text-foreground transition-colors"
            >
              waleedahmad.codes@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-border" />
        <div className="py-8">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} WeyDocs. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
