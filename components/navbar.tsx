"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, Bell, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      "text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md",
      className
    )}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="font-bold text-xl">SwiftPathTech</span>
          </Link>
        </div>

        {!isMobile ? (
          <>
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-hero-gradient hover:opacity-90" size="sm">
                  Sign up
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
            <div className="flex items-center gap-2 mt-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href="/sign-up" className="w-full">
                <Button className="bg-hero-gradient hover:opacity-90 w-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
