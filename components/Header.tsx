"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/business";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function trap(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    }
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full"
        style={{
          backgroundColor: "var(--color-obsidian)",
          borderBottom: "1px solid rgba(250,248,245,0.08)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-16">
          <Link
            href="/"
            aria-label="Luxury Car Care — Home"
            onClick={() => setOpen(false)}
            className="shrink-0"
          >
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150"
                style={{
                  color: pathname === href ? "var(--color-parchment)" : "rgba(250,248,245,0.45)",
                  backgroundColor: pathname === href ? "rgba(255,255,255,0.07)" : "transparent",
                }}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="font-mono text-sm font-medium tracking-tight transition-opacity hover:opacity-70"
              style={{ color: "rgba(250,248,245,0.45)", fontFamily: "var(--font-mono)" }}
            >
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-lg px-4 py-2 text-sm font-bold transition-[transform,opacity] duration-150 hover:scale-[1.03]"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className="flex size-9 items-center justify-center rounded-lg md:hidden"
            style={{ color: "rgba(250,248,245,0.6)" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {/* Animated bars → X */}
            <span className="relative flex size-5 flex-col items-center justify-center gap-[5px]" aria-hidden="true">
              <span
                className="block h-px w-5 origin-center transition-transform duration-200"
                style={{
                  backgroundColor: "rgba(250,248,245,0.6)",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px w-5 transition-opacity duration-200"
                style={{
                  backgroundColor: "rgba(250,248,245,0.6)",
                  opacity: open ? 0 : 1,
                }}
              />
              <span
                className="block h-px w-5 origin-center transition-transform duration-200"
                style={{
                  backgroundColor: "rgba(250,248,245,0.6)",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer — rendered OUTSIDE header so it never pushes page content */}
      <div
        id="mobile-nav"
        className="fixed left-0 right-0 z-40 md:hidden"
        style={{
          top: "57px", /* matches header height */
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-x-0 top-0 h-screen transition-opacity duration-200"
          style={{
            backgroundColor: "rgba(15,14,13,0.6)",
            opacity: open ? 1 : 0,
          }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />

        {/* Panel — slides down from top */}
        <nav
          ref={drawerRef}
          className="relative border-b px-5 pb-6 pt-3 transition-all duration-200 ease-out"
          aria-label="Mobile navigation"
          style={{
            backgroundColor: "var(--color-obsidian)",
            borderColor: "rgba(250,248,245,0.08)",
            transform: open ? "translateY(0)" : "translateY(-8px)",
            opacity: open ? 1 : 0,
          }}
        >
          <ul className="flex flex-col gap-0.5">
            <li>
              <Link
                href="/"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium"
                style={{ color: pathname === "/" ? "var(--color-gold)" : "rgba(250,248,245,0.65)" }}
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium"
                  style={{ color: pathname === href ? "var(--color-gold)" : "rgba(250,248,245,0.65)" }}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-4" style={{ borderColor: "rgba(250,248,245,0.08)" }}>
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="block font-mono text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(250,248,245,0.4)", fontFamily: "var(--font-mono)" }}
            >
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="mt-3">
            <Link
              href="/contact"
              className="block rounded-xl py-3 text-center text-sm font-bold transition-opacity duration-150 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
              }}
              onClick={() => setOpen(false)}
            >
              Book a Wash
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
