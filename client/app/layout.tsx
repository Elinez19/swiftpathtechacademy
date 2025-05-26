"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {!isDashboardRoute && <Navbar />}
          <main>{children}</main>
          {!isDashboardRoute && <Footer />}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
