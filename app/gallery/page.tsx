import type { Metadata } from "next";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BEFORE_AFTER_PAIRS, GALLERY_IMAGES, OG_IMAGE } from "@/lib/media";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Gallery — Before & After Car Wash Photos",
  description:
    "Car wash and detailing photo gallery — foam washes, hand polishing, and before-and-after results. See the standard of work at Luxury Car Care in Bidar.",
  alternates: { canonical: `${BUSINESS.siteUrl}/gallery` },
  openGraph: {
    title: "Gallery — Luxury Car Care",
    description: "Before and after car wash photos and professional detailing imagery.",
    url: `${BUSINESS.siteUrl}/gallery`,
    images: [{ url: OG_IMAGE.src, width: 1200, height: 800, alt: OG_IMAGE.alt }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            id="gallery-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Gallery
          </h1>
          <p className="mt-4 max-w-xl text-base" style={{ color: "var(--color-stone)" }}>
            Professional wash and detailing imagery — foam, rinse, polish, and the before-and-after difference.
          </p>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
        aria-labelledby="facility-photos-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="facility-photos-heading"
            className="mb-8 text-2xl font-bold"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Wash &amp; Detailing
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs" style={{ color: "var(--color-muted)" }}>
            Stock photography for illustration. Bidar facility photos will replace these as we add them.
          </p>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="before-after-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h2
            id="before-after-heading"
            className="mb-3 text-2xl font-bold"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Before &amp; After
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-stone)" }}>
            Drag the slider to reveal the difference.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {BEFORE_AFTER_PAIRS.map((pair) => (
              <div key={pair.label}>
                <BeforeAfterSlider
                  beforeSrc={pair.before.src}
                  afterSrc={pair.after.src}
                  beforeAlt={pair.before.alt}
                  afterAlt={pair.after.alt}
                />
                <p
                  className="mt-2 font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
                >
                  {pair.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
