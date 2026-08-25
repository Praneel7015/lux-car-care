"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function useIsOpen() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    function check() {
      const now = new Date();
      const h = now.getHours() + now.getMinutes() / 60;
      setIsOpen(h >= 6 && h < 21);
    }
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}

export function Hero() {
  const [revealed, setRevealed] = useState(false);
  const isOpen = useIsOpen();

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: "var(--color-obsidian)", minHeight: "92svh" }}
      aria-label="Hero — Your Car, Spotless in Minutes"
    >
      {/* Full-bleed background photo */}
      <div className="absolute inset-0 -z-10">
        {/* position:relative + full dimensions so next/image fill works */}
        <div className="relative h-full w-full">
          <Image
            src="/hero-car-wash.jpg"
            alt="Black sports car being pressure-washed at Luxury Car Care in Bidar"
            fill
            priority
            className={`object-cover object-center transition-opacity duration-1000 ${revealed ? "opacity-100" : "opacity-0"}`}
            sizes="100vw"
          />
        </div>

        {/* Deep gradient — text shadow zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(15,14,13,0.88) 0%, rgba(15,14,13,0.75) 40%, rgba(15,14,13,0.45) 70%, rgba(15,14,13,0.2) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div
        className="relative flex flex-col justify-center px-5 py-20 lg:px-16"
        style={{ minHeight: "92svh" }}
      >
        <div className="max-w-2xl">
          {/* Open/closed status pill */}
          <div className="mb-6 inline-flex items-center gap-3">
            {isOpen !== null && (
              <span
                className="flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: isOpen ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${isOpen ? "rgba(74,222,128,0.35)" : "rgba(255,255,255,0.12)"}`,
                  color: isOpen ? "#4ade80" : "rgba(250,248,245,0.4)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{
                    backgroundColor: isOpen ? "#4ade80" : "rgba(250,248,245,0.3)",
                    boxShadow: isOpen ? "0 0 6px #4ade80" : "none",
                  }}
                  aria-hidden="true"
                />
                {isOpen ? "Open now · 6 AM – 9 PM" : "Closed · Opens at 6 AM"}
              </span>
            )}
            <span
              className="font-mono text-xs"
              style={{ color: "rgba(250,248,245,0.35)", fontFamily: "var(--font-mono)" }}
            >
              Bidar, Karnataka
            </span>
          </div>

          {/* Headline — Playfair Display, the aesthetic risk */}
          <h1
            className="font-bold leading-[1.05] tracking-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              color: "var(--color-parchment)",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            Your Car,{" "}
            <br className="hidden sm:block" />
            <em
              className="not-italic"
              style={{ color: "var(--color-gold)" }}
            >
              Spotless
            </em>
            <br className="hidden sm:block" />
            {" "}in Minutes.
          </h1>

          <p
            className="mt-5 max-w-sm text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(250,248,245,0.65)" }}
          >
            Professional car wash &amp; detailing in Bidar.
            Walk in or book ahead — every day, 6 AM to 9 PM.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl px-8 py-4 text-base font-bold shadow-lg transition-[transform,box-shadow,opacity] duration-200 hover:scale-[1.02] hover:shadow-xl"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
                letterSpacing: "-0.01em",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Book a Wash
            </Link>
            <a
              href="tel:+919972090190"
              className="flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-80"
              style={{ color: "rgba(250,248,245,0.6)", fontFamily: "var(--font-body)" }}
            >
              <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +91 99720 90190
            </a>
          </div>

          <p
            className="mt-8 font-mono text-xs"
            style={{ color: "rgba(250,248,245,0.3)", fontFamily: "var(--font-mono)" }}
          >
            Walk-ins welcome · No appointment needed
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 hidden flex-col items-center gap-1 lg:flex"
        aria-hidden="true"
      >
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(250,248,245,0.25)", fontFamily: "var(--font-mono)" }}
        >
          Scroll
        </span>
        <div
          className="h-10 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(250,248,245,0.25), transparent)" }}
        />
      </div>
    </section>
  );
}
