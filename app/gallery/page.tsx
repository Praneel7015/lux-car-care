import type { Metadata } from "next";
import Image from "next/image";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Gallery",
  description: "See our car wash and detailing results. Before and after photos from Luxury Car Care in Bidar, Karnataka.",
  openGraph: {
    title: "Gallery — Luxury Car Care",
    description: "Before and after car wash photos from Luxury Car Care in Bidar.",
    url: "https://car-care.sindhole.com/gallery",
  },
};

const GALLERY_IMAGES = [
  { src: "/sponge-headlight.jpg", alt: "Hand-washing a headlight with foam and sponge — close-up detailing at Luxury Car Care" },
  { src: "/suv-foam-wash.jpg", alt: "Worker applying foam wash to an SUV at Luxury Car Care Bidar" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80", alt: "Water beading on a freshly washed car panel" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80", alt: "Microfiber cloth wiping a car dashboard" },
  { src: "https://images.unsplash.com/photo-1614026480418-bd11fdb9fa06?w=900&q=80", alt: "Foam suds covering the hood of a car during wash" },
  { src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80", alt: "Clean alloy wheel after detailing" },
];

const BEFORE_AFTER_PAIRS = [
  {
    before: { src: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80", alt: "Dusty, dirty car exterior before washing" },
    after: { src: "/hero-car-wash.jpg", alt: "Car being precision-washed at Luxury Car Care — sparkling result" },
  },
  {
    before: { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", alt: "Dirty car interior before detailing" },
    after: { src: "/sponge-headlight.jpg", alt: "Professional foam-and-sponge detailing — after treatment" },
  },
];

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
            A look at the results we deliver — facility shots and the before-and-after difference.
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
            Our Facility
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

          <p className="mt-5 text-xs italic" style={{ color: "var(--color-muted)" }}>
            Real photos from our Bidar facility coming soon.
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
            Before & After
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-stone)" }}>
            Drag the slider to reveal the difference.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {BEFORE_AFTER_PAIRS.map((pair, i) => (
              <BeforeAfterSlider
                key={i}
                beforeSrc={pair.before.src}
                afterSrc={pair.after.src}
                beforeAlt={pair.before.alt}
                afterAlt={pair.after.alt}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
