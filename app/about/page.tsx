import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Luxury Car Care — Our Story & Values",
  description: `Learn about Luxury Car Care in Bidar — our story, values, and commitment to quality car washing and detailing near ${BUSINESS.streetAddress}.`,
  alternates: { canonical: `${BUSINESS.siteUrl}/about` },
  openGraph: {
    title: "About — Luxury Car Care",
    description: "A local Bidar business committed to clean cars, fair pricing, and friendly service.",
    url: `${BUSINESS.siteUrl}/about`,
    images: [{ url: MEDIA.foamSuv.src, width: 1200, height: 800, alt: MEDIA.foamSuv.alt }],
  },
};

const VALUES = [
  { name: "Honest Pricing", desc: "Rates posted upfront. No surprise charges at pickup." },
  { name: "Consistent Quality", desc: "Same standard every wash, every car, every day." },
  { name: "Eco-Responsible", desc: "Water-efficient processes and biodegradable products where possible." },
  { name: "Always Open", desc: "6 AM to 9 PM, 365 days. We're here when you need us." },
];

const HOURS = [
  { day: "Monday – Friday", hours: "6:00 AM – 9:00 PM" },
  { day: "Saturday", hours: "6:00 AM – 9:00 PM" },
  { day: "Sunday", hours: "6:00 AM – 9:00 PM" },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            id="about-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            About Us
          </h1>
          <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
            A Bidar business built on one simple idea — your car deserves to be clean, and you deserve fair prices.
          </p>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
        aria-labelledby="story-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="story-heading"
                className="text-3xl font-bold leading-snug"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                Our Story
              </h2>
              <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed" style={{ color: "var(--color-stone)" }}>
                <p>
                  Luxury Car Care was founded in Bidar with a straightforward mission: deliver a proper car wash at a fair price, with no gimmicks and no waiting around. We noticed that most car owners in Bidar either did it themselves or settled for a rushed wash that left water marks and half-cleaned interiors.
                </p>
                <p>
                  We set out to change that. From the first day, we trained our team to follow a consistent 12-step process on every vehicle — exterior pre-rinse, foam cannon, hand-wash, wheel detailing, rinse, hand-dry, interior vacuum, dashboard wipe, glass cleaning, tyre dressing, and a final inspection.
                </p>
                <p>
                  Today we serve hundreds of cars every month. Whether it's a quick express wash before work or a full interior-exterior detail over the weekend, we treat every car the same.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src={MEDIA.foamSuv.src}
                alt={MEDIA.foamSuv.alt}
                fill
                priority
                loading="eager"
                className="object-cover object-[center_60%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="values-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="values-heading"
            className="mb-10 text-3xl font-bold"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            What We Stand For
          </h2>
          <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-4" style={{ backgroundColor: "var(--color-border)" }}>
            {VALUES.map(({ name, desc }) => (
              <li
                key={name}
                className="flex flex-col gap-3 p-6"
                style={{ backgroundColor: "var(--color-parchment)" }}
              >
                <span
                  className="block h-0.5 w-8"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  aria-hidden="true"
                />
                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
                >
                  {name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-stone)" }}>
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
        aria-labelledby="hours-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="hours-heading"
                className="mb-6 text-2xl font-bold"
                style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
              >
                Opening Hours
              </h2>
              <table className="w-full text-sm">
                <caption className="sr-only">Opening hours for Luxury Car Care</caption>
                <tbody className="divide-y" style={{ borderColor: "var(--color-border)" }}>
                  {HOURS.map(({ day, hours }) => (
                    <tr key={day}>
                      <td className="py-3 pr-4 font-medium" style={{ color: "var(--color-mahogany)" }}>{day}</td>
                      <td className="py-3 font-mono text-right" style={{ color: "var(--color-stone)", fontFamily: "var(--font-mono)" }}>{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-obsidian)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Get Directions & Book
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsappE164}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20car%20wash`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-opacity duration-150 hover:opacity-70"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-mahogany)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
