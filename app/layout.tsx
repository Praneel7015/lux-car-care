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
  metadataBase: new URL("https://lux-car-care.sindhole.com"),
  title: {
    default: "Luxury Car Care — Car Wash & Detailing in Bidar",
    template: "%s | Luxury Car Care",
  },
  description:
    "Quick, affordable car wash and detailing in Bidar, Karnataka. Express wash from ₹199. Open 6 AM to 9 PM every day. Walk-ins welcome.",
  keywords: [
    "car wash Bidar",
    "car detailing Bidar",
    "car wash Karnataka",
    "luxury car care",
    "express car wash",
    "ceramic coating Bidar",
    "interior cleaning Bidar",
  ],
  authors: [{ name: "Luxury Car Care", url: "https://lux-car-care.sindhole.com" }],
  creator: "Luxury Car Care",
  publisher: "Luxury Car Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Luxury Car Care",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-car-wash.jpg",
        width: 1024,
        height: 683,
        alt: "Luxury Car Care — Car Wash & Detailing in Bidar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Care — Car Wash & Detailing in Bidar",
    description: "Quick, affordable car wash and detailing in Bidar, Karnataka. Open 6 AM to 9 PM every day.",
    images: ["/hero-car-wash.jpg"],
  },
  alternates: {
    canonical: "https://lux-car-care.sindhole.com",
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
