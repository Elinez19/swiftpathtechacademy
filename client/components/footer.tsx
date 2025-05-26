import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="font-bold text-xl">SwiftPathTech</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              SwiftPathTech is a comprehensive e-learning platform that offers
              high-quality courses to help you master new skills and advance
              your career.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              {[
                { label: "Data Science", path: "/courses/data-science" },
                { label: "Web Development", path: "/courses/web-development" },
                {
                  label: "Machine Learning",
                  path: "/courses/machine-learning",
                },
                { label: "Finance", path: "/courses/finance" },
                { label: "Design", path: "/courses/design" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Careers", path: "/careers" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: "Terms of Service", path: "/terms" },
                { label: "Privacy Policy", path: "/privacy" },
                { label: "Cookie Policy", path: "/cookies" },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    href={path}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SwiftPathTech. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Twitter"
            >
              {/* Twitter Icon */}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Facebook"
            >
              {/* Facebook Icon */}
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary"
              aria-label="Instagram"
            >
              {/* Instagram Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
