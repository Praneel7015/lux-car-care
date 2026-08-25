import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Luxury Car Care — Car Wash & Detailing in Bidar",
  description:
    "Quick, affordable car wash and detailing in Bidar, Karnataka. Express wash from ₹149. Open 6 AM to 9 PM, every day. Walk-ins welcome.",
  alternates: {
    canonical: "https://lux-car-care.sindhole.com",
  },
  openGraph: {
    title: "Luxury Car Care — Car Wash & Detailing in Bidar",
    description:
      "Quick, affordable car wash and detailing in Bidar, Karnataka. Open 6 AM to 9 PM, every day.",
    url: "https://lux-car-care.sindhole.com",
    images: [
      {
        url: "https://lux-car-care.sindhole.com/hero-car-wash.jpg",
        width: 1024,
        height: 683,
        alt: "Luxury Car Care — Car Wash & Detailing in Bidar",
      },
    ],
  },
};

const TESTIMONIALS = [
  {
    quote: "Dropped my car off before work, picked it up spotless by evening. Easy.",
    author: "Praveen K.",
  },
  {
    quote: "Best value car wash in Bidar. My SUV hasn't looked this good in months.",
    author: "Ayesha R.",
  },
  {
    quote: "Quick, friendly, and the interior smelled amazing after.",
    author: "Suresh N.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lux-car-care.sindhole.com/#business",
  name: "Luxury Car Care",
  image: "https://lux-car-care.sindhole.com/hero-car-wash.jpg",
  telephone: "+91-9972090190",
  email: "car-care@sindhole.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bidar",
    addressLocality: "Bidar",
    addressRegion: "Karnataka",
    postalCode: "585401",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.8964,
    longitude: 77.5137,
  },
  hasMap: "https://www.google.com/maps/place/Luxury+Car+Care",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "06:00",
      closes: "21:00",
    },
  ],
  url: "https://lux-car-care.sindhole.com",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  areaServed: {
    "@type": "City",
    name: "Bidar",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <Hero />

      {/* ── Services tier strip ──────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="services-heading"
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
            >
              Services & Pricing
            </h2>
            <Link
              href="/services"
              className="shrink-0 font-mono text-xs uppercase tracking-widest underline-offset-4 hover:underline"
              style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}
            >
              Full pricing table →
            </Link>
          </div>

          {/* Tier strip */}
          <div
            className="grid gap-px sm:grid-cols-2 lg:grid-cols-4"
            style={{ backgroundColor: "var(--color-border)" }}
          >
            {SERVICES.map((service) => {
              const isHighlighted = service.id === "full-detailing";
              return (
                <div
                  key={service.id}
                  className="relative flex flex-col justify-between p-6 transition-colors duration-200"
                  style={{
                    backgroundColor: isHighlighted
                      ? "var(--color-mahogany)"
                      : "var(--color-parchment)",
                    minHeight: "220px",
                    borderTop: isHighlighted ? "2px solid var(--color-gold)" : "2px solid transparent",
                  }}
                >
                  {isHighlighted && (
                    <span
                      className="absolute right-4 top-4 rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                      style={{
                        backgroundColor: "var(--color-gold)",
                        color: "var(--color-obsidian)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      Most Popular
                    </span>
                  )}

                  <div>
                    <h3
                      className="text-xl font-bold leading-snug"
                      style={{
                        color: isHighlighted ? "var(--color-parchment)" : "var(--color-mahogany)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{
                        color: isHighlighted
                          ? "rgba(250,248,245,0.7)"
                          : "var(--color-stone)",
                      }}
                    >
                      {service.tagline}
                    </p>
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <span
                      className="font-mono text-2xl font-bold"
                      style={{
                        color: isHighlighted ? "var(--color-gold)" : "var(--color-gold-text)",
                        fontFamily: "var(--font-mono)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {service.fromPrice}
                    </span>
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="rounded-lg px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-[transform,opacity] duration-150 hover:scale-105"
                      style={{
                        backgroundColor: isHighlighted ? "var(--color-gold)" : "var(--color-mahogany)",
                        color: isHighlighted ? "var(--color-obsidian)" : "var(--color-parchment)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {service.pricing === "by-quote" ? "Quote" : "Book"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why section ──────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="why-heading"
                className="text-3xl font-bold leading-snug sm:text-4xl"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                Fast, fair, and open when you need us.
              </h2>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--color-stone)" }}
              >
                One location in Bidar. No franchise complexity, no hidden pricing, no long queues. Show up, drive away clean.
              </p>
            </div>

            <dl
              className="grid grid-cols-2 gap-px"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              {[
                { stat: "15h", label: "Open every day", sub: "6 AM – 9 PM" },
                { stat: "₹149", label: "Starts from", sub: "Express wash" },
                { stat: "4", label: "Services", sub: "Express to ceramic" },
                { stat: "365", label: "Days a year", sub: "No days off" },
              ].map(({ stat, label, sub }) => (
                <div
                  key={stat}
                  className="flex flex-col justify-between p-6"
                  style={{ backgroundColor: "var(--color-parchment)" }}
                >
                  <dt>
                    <span
                      className="block font-mono text-[2.5rem] font-bold leading-none tracking-tight"
                      style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-mono)" }}
                    >
                      {stat}
                    </span>
                    <span
                      className="mt-1 block text-sm font-semibold"
                      style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}
                    >
                      {label}
                    </span>
                  </dt>
                  <dd
                    className="mt-3 font-mono text-xs"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                  >
                    {sub}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="testimonials-heading"
            className="mb-10 text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            What Bidar drivers say
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {TESTIMONIALS.map(({ quote, author }) => (
              <TestimonialCard key={author} quote={quote} author={author} />
            ))}
          </div>

          <p className="mt-5 text-xs italic" style={{ color: "var(--color-muted)" }}>
            Real customer reviews coming soon.
          </p>
        </div>
      </section>

      {/* ── Final CTA band ───────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20"
        style={{ backgroundColor: "var(--color-mahogany)" }}
        aria-labelledby="cta-heading"
      >
        <div className="relative mx-auto max-w-7xl px-5 lg:px-16">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2
                id="cta-heading"
                className="text-3xl font-bold sm:text-4xl lg:text-5xl"
                style={{ color: "var(--color-parchment)", fontFamily: "var(--font-display)" }}
              >
                Ready for a cleaner car?
              </h2>
              <p className="mt-3 text-base" style={{ color: "rgba(250,248,245,0.55)" }}>
                Walk in any time — or book ahead to pick your slot.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl px-8 py-4 text-base font-bold transition-[transform,box-shadow,opacity] duration-200 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-obsidian)",
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                Book a Wash
              </Link>
              <Link
                href="/contact#map"
                className="rounded-xl border px-8 py-4 text-base font-bold transition-opacity duration-150 hover:opacity-70"
                style={{
                  borderColor: "rgba(250,248,245,0.2)",
                  color: "var(--color-parchment)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
