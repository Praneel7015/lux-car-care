"use client";

import Link from "next/link";
import { useIsOpen } from "@/lib/useIsOpen";
import { Logo } from "./Logo";

const LINKS = {
  pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services & Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact & Booking" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};


export function Footer() {
  const isOpen = useIsOpen();

  return (
    <footer style={{ backgroundColor: "var(--color-obsidian)" }}>
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: "rgba(250,248,245,0.4)" }}
            >
              Quick, affordable car wash and detailing in Bidar, Karnataka.
              Walk-ins always welcome.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-body)" }}
            >
              Pages
            </h3>
            <ul className="flex flex-col gap-2">
              {LINKS.pages.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-150 hover:underline"
                    style={{ color: "rgba(250,248,245,0.5)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-body)" }}
            >
              Hours
            </h3>
            <p className="font-mono text-sm font-medium" style={{ color: "var(--color-parchment)", fontFamily: "var(--font-mono)" }}>
              Every Day
            </p>
            <p className="font-mono text-sm" style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}>
              6:00 AM – 9:00 PM
            </p>

            {isOpen !== null && (
              <div className="mt-3 flex items-center gap-1.5">
                <span
                  className="size-1.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: isOpen ? "#4ade80" : "rgba(250,248,245,0.25)",
                    boxShadow: isOpen ? "0 0 5px #4ade80" : "none",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="text-xs"
                  style={{ color: isOpen ? "#4ade80" : "rgba(250,248,245,0.3)" }}
                >
                  {isOpen ? "Open right now" : "Currently closed"}
                </span>
              </div>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-body)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="tel:+919972090190"
                  className="font-mono transition-opacity hover:opacity-70"
                  style={{ color: "rgba(250,248,245,0.5)", fontFamily: "var(--font-mono)" }}
                >
                  +91 99720 90190
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919972090190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "rgba(250,248,245,0.5)" }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:car-care@sindhole.com"
                  className="transition-opacity hover:opacity-70"
                  style={{ color: "rgba(250,248,245,0.5)" }}
                >
                  car-care@sindhole.com
                </a>
              </li>
              <li style={{ color: "rgba(250,248,245,0.3)" }}>Bidar, Karnataka, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row"
          style={{ borderColor: "rgba(250,248,245,0.08)" }}
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xs" style={{ color: "rgba(250,248,245,0.2)" }}>
              © {new Date().getFullYear()} Luxury Car Care. All rights reserved.
            </p>
            <span
              className="hidden text-xs sm:block"
              style={{ color: "rgba(250,248,245,0.1)" }}
              aria-hidden="true"
            >
              ·
            </span>
            <p className="text-xs" style={{ color: "rgba(250,248,245,0.18)" }}>
              Made by{" "}
              <span style={{ color: "var(--color-gold)", opacity: 0.7 }}>
                Praneel S
              </span>
            </p>
          </div>
          <ul className="flex gap-4">
            {LINKS.legal.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-xs transition-opacity hover:opacity-70"
                  style={{ color: "rgba(250,248,245,0.25)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
