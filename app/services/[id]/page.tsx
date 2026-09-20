import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS } from "@/lib/business";
import { getServiceById, getServiceImage, SERVICES, formatPrice } from "@/lib/services";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: "Service" };
  const image = getServiceImage(service.id);
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: `${BUSINESS.siteUrl}/services/${service.id}` },
    openGraph: {
      title: `${service.name} - Luxury Car Care`,
      description: service.seoDescription,
      url: `${BUSINESS.siteUrl}/services/${service.id}`,
      images: [{ url: image.src, width: 1200, height: 800, alt: image.alt }],
    },
  };
}

export default async function ServiceProcedurePage({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const image = getServiceImage(service.id);
  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seoDescription,
    provider: {
      "@type": "AutoWash",
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
      telephone: BUSINESS.phoneE164,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        addressRegion: BUSINESS.addressRegion,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: BUSINESS.areaServed,
    url: `${BUSINESS.siteUrl}/services/${service.id}`,
    image: image.src,
    offers:
      service.pricing === "by-quote"
        ? {
            "@type": "Offer",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: `${BUSINESS.siteUrl}/contact?service=${service.id}`,
          }
        : service.pricing === "flat"
          ? {
              "@type": "Offer",
              price: service.flatPrice?.replace(/[^\d]/g, "") ?? undefined,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            }
          : {
              "@type": "AggregateOffer",
              priceCurrency: "INR",
              lowPrice: service.pricing["hatchback-sedan"].replace(/[^\d]/g, ""),
              highPrice: service.pricing.suv.replace(/[^\d]/g, ""),
              offerCount: 2,
            },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="py-16" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>
            <Link href="/services" className="hover:underline">Services</Link>
            {" / "}
            {service.name}
          </p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              {service.badge && (
                <span
                  className="mb-4 inline-block rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)", fontFamily: "var(--font-mono)" }}
                >
                  {service.badge}
                </span>
              )}
              <h1
                className="text-4xl font-bold sm:text-5xl"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                {service.name}
              </h1>
              <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
                {service.tagline} {service.bestFor}
              </p>
              <div className="mt-6 flex flex-wrap items-end gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>From</p>
                  <p className="font-mono text-3xl font-bold" style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}>
                    {service.fromPrice}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Duration</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-mahogany)" }}>{service.duration}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`/contact?service=${service.id}`}
                  className="rounded-xl px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)", fontFamily: "var(--font-body)" }}
                >
                  {service.pricing === "by-quote" ? "Request a Quote" : "Book This Service"}
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border px-6 py-3.5 text-sm font-bold transition-opacity hover:opacity-70"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}
                >
                  Full pricing
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--color-parchment)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                What&apos;s included
              </h2>
              <ul className="flex flex-col gap-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--color-mahogany)" }}>
                    <span style={{ color: "var(--color-gold-text)" }} aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.pricing !== "by-quote" && service.pricing !== "flat" && (
                <dl className="mt-8 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>Hatchback / Sedan</dt>
                    <dd className="mt-1 font-mono text-xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-mono)" }}>
                      {formatPrice(service, "hatchback-sedan")}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>SUV</dt>
                    <dd className="mt-1 font-mono text-xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-mono)" }}>
                      {formatPrice(service, "suv")}
                    </dd>
                  </div>
                </dl>
              )}
            </div>
            <div>
              <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                Step by step
              </h2>
              <ol className="flex flex-col gap-5">
                {service.steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span
                      className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold"
                      style={{ backgroundColor: "var(--color-mahogany)", color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                    >
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed" style={{ color: "var(--color-stone)" }}>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2 className="mb-8 text-2xl font-bold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
            Related packages
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((s) => {
              const img = getServiceImage(s.id);
              return (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="group overflow-hidden rounded-2xl border transition-opacity hover:opacity-95"
                  style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-parchment)" }}
                >
                  <div className="relative" style={{ aspectRatio: "16/10" }}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>{s.name}</p>
                    <p className="mt-1 font-mono text-sm" style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}>{s.fromPrice}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 text-sm" style={{ color: "var(--color-stone)" }}>
            Serving {BUSINESS.addressLocality} at {BUSINESS.streetAddress}.{" "}
            <Link href="/blog" className="underline underline-offset-2" style={{ color: "var(--color-mahogany)" }}>
              Read car care guides
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
