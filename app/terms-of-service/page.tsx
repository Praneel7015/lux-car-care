import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Luxury Car Care — governing your use of our website and car wash services in Bidar, Karnataka.",
  alternates: { canonical: "https://lux-car-care.sindhole.com/terms-of-service" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Terms of Service — Luxury Car Care",
    url: "https://lux-car-care.sindhole.com/terms-of-service",
    images: [{ url: "https://lux-car-care.sindhole.com/hero-car-wash.jpg", width: 1024, height: 683, alt: "Luxury Car Care" }],
  },
};

const SECTIONS = [
  {
    heading: "1. Our Services",
    body: "We provide car washing, interior cleaning, detailing, and related services at our Bidar location. Services, pricing, and availability shown on this website are indicative and may change without prior notice; the price confirmed at our facility at the time of service is the price that applies.",
  },
  {
    heading: "2. Bookings",
    body: "Booking a slot through this website or WhatsApp is a request, not a guaranteed confirmation, until we confirm it by phone, WhatsApp, or email. We reserve the right to reschedule bookings due to weather, water supply, or high demand, and will make reasonable efforts to notify you promptly.",
  },
  {
    heading: "3. Vehicle Condition and Liability",
    body: "Please remove valuables and personal belongings from your vehicle before service — we are not responsible for items left inside. We take reasonable care with every vehicle; however, we are not liable for pre-existing damage, wear, or mechanical issues unrelated to the service performed. Any damage you believe occurred during our service should be reported to our staff before leaving the premises.",
  },
  {
    heading: "4. Payment",
    body: "Payment is due at the time service is completed, using the payment methods accepted at our facility. Prices are in Indian Rupees (INR) and may be subject to applicable taxes.",
  },
  {
    heading: "5. Cancellations",
    body: "You may cancel or reschedule a booking by contacting us on WhatsApp or by phone. We ask for reasonable notice where possible so we can offer the slot to another customer.",
  },
  {
    heading: "6. Website Use",
    body: "You agree to use this website only for lawful purposes and not to submit false information through our booking form. All content on this website — text, images, and design — belongs to Luxury Car Care or its licensors and may not be copied or reused without permission.",
  },
  {
    heading: "7. Limitation of Liability",
    body: "To the extent permitted by law, Luxury Car Care is not liable for indirect or consequential losses arising from use of this website or our services. Nothing in these Terms limits any liability that cannot be excluded under Indian law.",
  },
  {
    heading: "8. Governing Law",
    body: "These Terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Bidar, Karnataka.",
  },
  {
    heading: "9. Changes to These Terms",
    body: "We may update these Terms from time to time. Continued use of our services after changes are posted means you accept the updated Terms.",
  },
  {
    heading: "10. Contact",
    body: "Luxury Car Care\nBidar, Karnataka, India\nEmail: car-care@sindhole.com\nPhone/WhatsApp: +91 74162 38424",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="tos-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            id="tos-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Terms of Service
          </h1>
        </div>
      </section>

      <section
        className="section-pad"
        style={{ backgroundColor: "var(--color-parchment)" }}
      >
        <div className="mx-auto max-w-3xl px-5 lg:px-16">
          <p
            className="mb-8 font-mono text-sm"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}
          >
            Last updated: August 2025
          </p>

          <p
            className="mb-8 text-base leading-relaxed"
            style={{ color: "var(--color-stone)" }}
          >
            These Terms govern your use of this website and the car wash and detailing services
            provided by Luxury Car Care (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;), located in Bidar, Karnataka, India.
          </p>

          <div className="flex flex-col gap-8">
            {SECTIONS.map(({ heading, body }) => (
              <div key={heading}>
                <h2
                  className="mb-3 text-lg font-bold"
                  style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
                >
                  {heading}
                </h2>
                <p
                  className="whitespace-pre-line text-base leading-relaxed"
                  style={{ color: "var(--color-stone)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--color-gold-text)" }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}

