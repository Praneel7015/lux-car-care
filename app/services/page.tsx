import type { Metadata } from "next";
import Image from "next/image";
import { PriceTable } from "@/components/PriceTable";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { SERVICES, getServiceImage } from "@/lib/services";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full pricing for car wash and detailing at Luxury Car Care in Bidar. Express wash from ₹199, full detailing, ceramic coating for hatchback, sedan, and SUV near BVB College Road.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services` },
  openGraph: {
    title: "Services & Pricing - Luxury Car Care",
    description: "Car wash and detailing prices for hatchback, sedan, and SUV in Bidar, Karnataka.",
    url: `${BUSINESS.siteUrl}/services`,
    images: [{ url: MEDIA.detailingHand.src, width: 1200, height: 800, alt: MEDIA.detailingHand.alt }],
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
                your car and your schedule - then see the full step-by-step process for each package.
              </p>
            </div>
            <div
              className="relative hidden overflow-hidden rounded-2xl sm:block"
              style={{ aspectRatio: "16/7" }}
            >
              <Image
                src={MEDIA.detailingHand.src}
                alt={MEDIA.detailingHand.alt}
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
          <h2 id="pricing-table-heading" className="sr-only">Pricing table</h2>
          <PriceTable />
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="procedures-index-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="procedures-index-heading"
            className="mb-3 text-3xl font-bold"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Package procedures
          </h2>
          <p className="mb-8 max-w-xl text-sm" style={{ color: "var(--color-stone)" }}>
            What happens during each wash - inclusions, timing, and steps.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const img = getServiceImage(service.id);
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group overflow-hidden rounded-2xl border"
                  style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-parchment)" }}
                >
                  <div className="relative" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm" style={{ color: "var(--color-stone)" }}>{service.tagline}</p>
                    <p className="mt-3 font-mono text-xs" style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}>
                      {service.fromPrice} · {service.duration}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
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
              href={`https://wa.me/${BUSINESS.whatsappE164}?text=Hi%2C%20I%27d%20like%20details%20on%20the%20monthly%20wash%20plan`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                fontFamily: "var(--font-body)",
              }}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
