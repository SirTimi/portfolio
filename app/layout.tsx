import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [{ path: "../public/fonts/InterVariable.ttf", style:"normal" }],
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [{ path: "../public/fonts/PlayfairDisplayVariable.ttf", style: "normal" }],
  variable: "--font-inter",
  display: "swap"
});

/** UPDATE THIS ONCE and you're set */
const siteUrl = "https://sirtimithedev.vercel.app"; // e.g., https://sirtimi.dev
const siteName = "SirTimi — Premium Web & AI Systems";
const siteDesc = "Premium AI & Web solutions that drive results.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SirTimi",
    template: "%s — SirTimi",
  },
  description: siteDesc,
  openGraph: {
    title: siteName,
    description: siteDesc,
    url: siteUrl,
    siteName,
    type: "website",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDesc,
    images: ["/og-default.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
