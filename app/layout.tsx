import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://car-care.sindhole.com"),
  title: {
    default: "Luxury Car Care — Car Wash & Detailing in Bidar",
    template: "%s | Luxury Car Care",
  },
  description:
    "Quick, affordable car wash and detailing in Bidar, Karnataka. Open 6 AM to 9 PM every day. Walk-ins welcome.",
  openGraph: {
    siteName: "Luxury Car Care",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="theme-color" content="#0F0E0D" />
      </head>
      <body>
        {/* Skip link — first focusable element, visible on focus for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
          style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)" }}
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
