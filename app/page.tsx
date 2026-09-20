import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { SERVICES, getServiceImage } from "@/lib/services";
import { getLocalBusinessJsonLd } from "@/lib/schema";
import { BUSINESS } from "@/lib/business";
import { HOME_STRIP, OG_IMAGE } from "@/lib/media";
import { BLOG_POSTS } from "@/content/blog/posts";

export const metadata: Metadata = {
  title: "Luxury Car Care — Car Wash & Detailing in Bidar",
  description:
    "Car wash and detailing in Bidar, Karnataka. Express wash from ₹199. Near Bajaj Showroom, opp. BVB College Road. Open 6 AM to 9 PM every day. Walk-ins welcome.",
  alternates: {
    canonical: BUSINESS.siteUrl,
  },
  openGraph: {
    title: "Luxury Car Care — Car Wash & Detailing in Bidar",
    description:
      "Quick, affordable car wash and detailing in Bidar. Open 6 AM to 9 PM every day near BVB College Road.",
    url: BUSINESS.siteUrl,
    images: [
      {
        url: OG_IMAGE.src,
        width: 1200,
        height: 800,
        alt: OG_IMAGE.alt,
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

export default function Home() {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />

      {/* Services tier strip */}
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

          <div
            className="grid gap-px sm:grid-cols-2 lg:grid-cols-3"
            style={{ backgroundColor: "var(--color-border)" }}
          >
            {SERVICES.map((service) => {
              const isHighlighted = service.id === "exterior-interior-underbody";
              return (
                <div
                  key={service.id}
                  className="flex flex-col justify-between p-6 transition-colors duration-200"
                  style={{
                    backgroundColor: isHighlighted
                      ? "var(--color-mahogany)"
                      : "var(--color-parchment)",
                    minHeight: "220px",
                    borderTop: isHighlighted ? "2px solid var(--color-gold)" : "2px solid transparent",
                  }}
                >
                  <div>
                    {isHighlighted && (
                      <span
                        className="mb-3 inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          backgroundColor: "var(--color-gold)",
                          color: "var(--color-obsidian)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        Most Popular
                      </span>
                    )}
                    <h3
                      className="text-xl font-bold leading-snug"
                      style={{
                        color: isHighlighted ? "var(--color-parchment)" : "var(--color-mahogany)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      <Link href={`/services/${service.id}`} className="hover:underline">
                        {service.name}
                      </Link>
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

      {/* Photo strip */}
      <section aria-label="Car wash photography" style={{ backgroundColor: "var(--color-obsidian)" }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {HOME_STRIP.map((img) => (
            <div key={img.src} className="relative" style={{ aspectRatio: "1" }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why section */}
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
                One location in Bidar near BVB College Road. No franchise complexity, no hidden pricing, no long queues. Show up, drive away clean.
              </p>
              <Link
                href="/gallery"
                className="mt-6 inline-block font-mono text-xs uppercase tracking-widest underline-offset-4 hover:underline"
                style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}
              >
                See gallery →
              </Link>
            </div>

            <dl
              className="grid grid-cols-2 gap-px"
              style={{ backgroundColor: "var(--color-border)" }}
            >
              {[
                { stat: "15h", label: "Open every day", sub: "6 AM – 9 PM" },
                { stat: "₹199*", label: "Starts from", sub: "Express wash", footnote: "* Hatchback & sedan rate. SUV rates higher." },
                { stat: "6", label: "Services", sub: "Express to ceramic" },
                { stat: "365", label: "Days a year", sub: "No days off" },
              ].map(({ stat, label, sub, footnote }) => (
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
                  <dd className="mt-3" style={{ fontFamily: "var(--font-mono)" }}>
                    <span className="font-mono text-xs" style={{ color: "var(--color-muted)" }}>
                      {sub}
                    </span>
                    {footnote && (
                      <span
                        className="mt-1.5 block text-[10px] leading-snug"
                        style={{ color: "var(--color-muted)", opacity: 0.75 }}
                      >
                        {footnote}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Featured procedures */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="procedures-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="procedures-heading"
            className="mb-3 text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            How each package works
          </h2>
          <p className="mb-10 max-w-xl text-sm" style={{ color: "var(--color-stone)" }}>
            Step-by-step processes for our most-booked washes.
          </p>
          <div className="grid gap-5 sm:grid-cols-3">
            {SERVICES.slice(0, 3).map((service) => {
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
                    <p className="mt-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}>
                      See process →
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
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

          <p className="mt-5 text-xs" style={{ color: "var(--color-muted)" }}>
            Find us on{" "}
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              Google Maps
            </a>{" "}
            to leave a review after your visit.
          </p>
        </div>
      </section>

      {/* Blog teaser */}
      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="blog-teaser-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2
              id="blog-teaser-heading"
              className="text-3xl font-bold sm:text-4xl"
              style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
            >
              From the blog
            </h2>
            <Link
              href="/blog"
              className="shrink-0 font-mono text-xs uppercase tracking-widest underline-offset-4 hover:underline"
              style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}
            >
              All posts →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {BLOG_POSTS.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid overflow-hidden rounded-2xl border sm:grid-cols-2"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-parchment)" }}
              >
                <div className="relative min-h-[160px]">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-5">
                  <h3 className="text-lg font-bold leading-snug" style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}>
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm" style={{ color: "var(--color-stone)" }}>
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
