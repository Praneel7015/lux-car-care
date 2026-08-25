import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingForm } from "@/components/BookingForm";
import { MapEmbed } from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: "Book a car wash or detailing at Luxury Car Care in Bidar. Call, WhatsApp, or fill in the booking form. Open 6 AM to 9 PM every day.",
  openGraph: {
    title: "Contact & Booking — Luxury Car Care",
    description: "Book a car wash in Bidar. Call or WhatsApp +91 99720 90190, or use our online booking form.",
    url: "https://car-care.sindhole.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            id="contact-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Contact & Booking
          </h1>
          <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
            Walk in any time — or use the form below to book ahead and pick
            your slot. We'll confirm via WhatsApp or phone.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919972090190"
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call +91 99720 90190
            </a>
            <a
              href="https://wa.me/919972090190?text=Hi%2C%20I%27d%20like%20to%20book%20a%20car%20wash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-mahogany)",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--color-parchment)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                className="mb-6 text-2xl font-bold"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                Book a Wash
              </h2>
              <Suspense fallback={
                <div className="h-96 animate-pulse rounded-2xl" style={{ backgroundColor: "var(--color-surface)" }} />
              }>
                <BookingForm />
              </Suspense>
            </div>

            <div className="flex flex-col gap-8">
              <div
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
              >
                <h2
                  className="mb-5 text-xl font-bold"
                  style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
                >
                  Visit Us
                </h2>
                <dl className="flex flex-col gap-4 text-sm">
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Address</dt>
                    <dd style={{ color: "var(--color-mahogany)" }}>Bidar, Karnataka, India</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Hours</dt>
                    <dd className="font-mono font-medium" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-mono)" }}>Every Day · 6:00 AM – 9:00 PM</dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Phone</dt>
                    <dd><a href="tel:+919972090190" className="font-medium hover:underline" style={{ color: "var(--color-mahogany)" }}>+91 99720 90190</a></dd>
                  </div>
                  <div>
                    <dt className="mb-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Email</dt>
                    <dd><a href="mailto:car-care@sindhole.com" className="hover:underline" style={{ color: "var(--color-mahogany)" }}>car-care@sindhole.com</a></dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="section-pad" style={{ backgroundColor: "var(--color-surface)" }} aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2 id="map-heading" className="mb-6 text-2xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
            Find Us
          </h2>
          <MapEmbed />
          <p className="mt-3 text-sm" style={{ color: "var(--color-muted)" }}>Luxury Car Care · Bidar, Karnataka, India</p>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
