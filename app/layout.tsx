import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Ben Moore — Ecommerce Developer",
    template: "%s | Ben Moore",
  },
  description:
    "Shopify and headless ecommerce developer specializing in performance optimization, custom theme development, and scalable storefront architecture.",
  openGraph: {
    title: "Ben Moore — Ecommerce Developer",
    description:
      "Shopify and headless ecommerce developer specializing in performance optimization and scalable storefront architecture.",
    url: "https://benmoore.vercel.app", // update later if custom domain
    siteName: "Ben Moore",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 antialiased`}>
        <Nav />
        <main className="mx-auto w-full max-w-2xl px-5 py-12 sm:py-16 lg:max-w-5xl lg:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}