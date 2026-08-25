import type { Metadata } from "next";
import Image from "next/image";
import { PriceTable } from "@/components/PriceTable";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full pricing for car wash and detailing at Luxury Car Care in Bidar. Express wash from ₹149, full detailing, ceramic coating for hatchback, sedan, and SUV.",
  alternates: { canonical: "https://lux-car-care.sindhole.com/services" },
  openGraph: {
    title: "Services & Pricing — Luxury Car Care",
    description: "Car wash and detailing prices for hatchback, sedan, and SUV in Bidar, Karnataka.",
    url: "https://lux-car-care.sindhole.com/services",
    images: [{ url: "https://lux-car-care.sindhole.com/sponge-headlight.jpg", width: 1024, height: 683, alt: "Hand detailing a car headlight at Luxury Car Care Bidar" }],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="services-page-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1
                id="services-page-heading"
                className="text-4xl font-bold sm:text-5xl"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                Services & Pricing
              </h1>
              <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
                Clear rates, no surprises at pickup. Choose the service that fits
                your car and your schedule.
              </p>
            </div>
            {/* Accent photo — responsive, hidden on very small screens to avoid clutter */}
            <div
              className="relative hidden overflow-hidden rounded-2xl sm:block"
              style={{ aspectRatio: "16/7" }}
            >
              <Image
                src="/sponge-headlight.jpg"
                alt="Professional hand-washing a car headlight with foam and sponge"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, rgba(240,237,232,0.6) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
        aria-labelledby="pricing-table-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div
            className="mb-3 rounded-xl border px-4 py-3 text-sm"
            style={{
              borderColor: "var(--color-gold)",
              backgroundColor: "rgba(201,149,42,0.06)",
              color: "var(--color-stone)",
            }}
          >
            <strong style={{ color: "var(--color-mahogany)" }}>Sample pricing.</strong>{" "}
            These figures are illustrative. Confirm actual rates with us when you visit or book.
          </div>
          <PriceTable />
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-mahogany)" }}
        aria-labelledby="membership-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="max-w-2xl">
            <h2
              id="membership-heading"
              className="text-3xl font-bold"
              style={{ color: "var(--color-parchment)", fontFamily: "var(--font-display)" }}
            >
              Unlimited Monthly Wash Plan
            </h2>
            <p className="mt-3 text-base" style={{ color: "rgba(250,248,245,0.65)" }}>
              Unlimited washes every month for one flat rate. Perfect for daily
              drivers who want their car clean all the time.
            </p>
            <a
              href="https://wa.me/919972090190?text=Hi%2C%20I%27d%20like%20details%20on%20the%20monthly%20wash%20plan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
              }}
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
