import Link from "next/link";

export function DashboardFooter() {
  return (
    <footer className="border-t bg-card px-6 py-4">
      <div className="container flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SwiftPath Tech Academy Dashboard
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/dashboard/documentation"
            className="hover:text-foreground"
          >
            Documentation
          </Link>
          <Link href="/dashboard/help" className="hover:text-foreground">
            Help Center
          </Link>
          <Link href="/dashboard/support" className="hover:text-foreground">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
