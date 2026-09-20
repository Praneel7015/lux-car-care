import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import { OG_IMAGE } from "@/lib/media";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Luxury Car Care - how we collect, use, and protect your personal data under India's Digital Personal Data Protection Act, 2023.",
  alternates: { canonical: `${BUSINESS.siteUrl}/privacy-policy` },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Privacy Policy - Luxury Car Care",
    url: `${BUSINESS.siteUrl}/privacy-policy`,
    images: [{ url: OG_IMAGE.src, width: 1200, height: 800, alt: OG_IMAGE.alt }],
  },
};

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: "When you use our booking form or contact us, we may collect: your name, phone number, email address (if provided), vehicle type, and details of the service you're requesting. We do not knowingly collect payment card information through this website - payments are handled in person at our facility.",
  },
  {
    heading: "2. How We Use Your Information",
    body: "We use the information you provide solely to: respond to your booking or enquiry, confirm appointments by phone, WhatsApp, or email, and improve our service. We do not sell your personal data to third parties.",
  },
  {
    heading: "3. Legal Basis and Consent",
    body: "By submitting the booking form, you consent to us contacting you regarding your request. You may withdraw this consent at any time by contacting us at car-care@sindhole.com.",
  },
  {
    heading: "4. Sharing of Information",
    body: "We may share limited information with service providers who help us operate this website and respond to enquiries (for example, our website hosting provider and form-delivery service). These providers are only permitted to use your data to provide that service to us. We do not share your data with advertisers.",
  },
  {
    heading: "5. Data Retention",
    body: "We retain booking and enquiry information only as long as needed to provide the service you requested and to meet our own record-keeping and legal obligations, after which it is deleted.",
  },
  {
    heading: "6. Your Rights",
    body: "Under the Digital Personal Data Protection Act, 2023, you have the right to: access the personal data we hold about you, request correction of inaccurate data, request erasure of your data, and file a grievance if you believe your data has been mishandled. To exercise any of these rights, contact our Grievance Officer below.",
  },
  {
    heading: "7. Cookies and Analytics",
    body: "This website may use privacy-friendly analytics to understand overall traffic patterns (for example, page views). We do not use this data to identify individual visitors.",
  },
  {
    heading: "8. Security",
    body: "We take reasonable technical and organisational measures to protect the information you share with us, including secure hosting and encrypted connections (HTTPS).",
  },
  {
    heading: "9. Children's Privacy",
    body: "This website and our services are not directed at children, and we do not knowingly collect personal data from anyone under 18.",
  },
  {
    heading: "10. Changes to This Policy",
    body: 'We may update this policy from time to time. The "Last updated" date at the top will reflect the most recent revision.',
  },
  {
    heading: "11. Grievance Officer / Contact",
    body: `For any questions, requests, or complaints about this policy or your personal data, contact:\n\nLuxury Car Care\n${BUSINESS.addressOneLine}\nEmail: ${BUSINESS.email}\nPhone/WhatsApp: ${BUSINESS.phoneDisplay}`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="py-16"
        style={{ backgroundColor: "var(--color-surface)" }}
        aria-labelledby="pp-heading"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-16">
          <h1
            id="pp-heading"
            className="text-4xl font-bold sm:text-5xl"
            style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
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
            Luxury Car Care (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates this website
            (lux-car-care.sindhole.com) and the services offered through it. This policy explains what personal
            data we collect, why, and the rights you have over it.
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

          <div
            className="mt-10 rounded-xl border px-5 py-4 text-sm"
            style={{ borderColor: "var(--color-border)", color: "var(--color-muted)" }}
          >
            This policy is written to align with India's Digital Personal Data Protection Act, 2023. It is
            solid boilerplate for a small local business - have it reviewed by a lawyer before publishing,
            especially as the DPDP Rules' phased obligations continue to take effect.
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

