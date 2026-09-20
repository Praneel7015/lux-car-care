import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Luxury Car Care",
  description: "The page you are looking for doesn't exist. Head back to Luxury Car Care for car wash and detailing in Bidar.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      className="flex min-h-[70svh] flex-col items-center justify-center px-5 py-20 text-center"
      style={{ backgroundColor: "var(--color-parchment)" }}
    >
      <div
        className="mb-6 flex size-20 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--color-mahogany)" }}
        aria-hidden="true"
      >
        <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      </div>

      <p
        className="mb-2 font-mono text-xs uppercase tracking-[0.2em]"
        style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
      >
        404
      </p>

      <h1
        className="text-4xl font-bold sm:text-5xl"
        style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
      >
        This page took a wrong turn.
      </h1>

      <p className="mt-4 max-w-md text-base" style={{ color: "rgba(28,25,23,0.6)" }}>
        The page you&apos;re looking for doesn&apos;t exist - but your car wash is still
        open{" "}
        <span className="font-mono font-medium" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-mono)" }}>
          6 AM to 9 PM
        </span>.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90"
          style={{
            backgroundColor: "var(--color-mahogany)",
            color: "var(--color-parchment)",
            fontFamily: "var(--font-body)",
          }}
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-obsidian)",
            fontFamily: "var(--font-body)",
          }}
        >
          Book a Wash
        </Link>
      </div>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
