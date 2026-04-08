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
                <a
                  href="https://play.google.com/store/apps/details?id=com.wal33dahmad.weydocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Play Store App
                </a>
              </li>
              <li>
                <span className="text-sm text-muted/50 cursor-not-allowed">
                  App Store{" "}
                  <span className="text-xs text-muted/40">(Coming soon)</span>
                </span>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm text-accent hover:text-foreground transition-colors"
                >
                  Feedback board
                </Link>
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
            <h3 className="font-semibold text-sm text-foreground mb-4">
              Connect with me
            </h3>
            <p className="text-sm text-muted mb-4">
              Have feedback or just want to connect? Find me on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/wal33dahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-foreground transition-colors"
            >
              linkedin.com/in/wal33dahmad
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
