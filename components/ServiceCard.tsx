import Link from "next/link";
import { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  variant?: "preview" | "full";
}

export function ServiceCard({ service, variant = "preview" }: ServiceCardProps) {
  const isPriceByQuote = service.pricing === "by-quote";

  return (
    <div
      className="group relative flex flex-col rounded-2xl border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        backgroundColor: "var(--color-parchment)",
        borderColor: "var(--color-border)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {service.badge && (
        <span
          className="mb-3 inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
          style={{
            backgroundColor: "var(--color-mahogany)",
            color: "var(--color-parchment)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {service.badge}
        </span>
      )}

      <h3
        className="text-lg font-bold leading-snug"
        style={{
          color: "var(--color-mahogany)",
          fontFamily: "var(--font-display)",
        }}
      >
        {service.name}
      </h3>

      <p
        className="mt-2 flex-1 text-sm leading-relaxed"
        style={{ color: "var(--color-stone)" }}
      >
        {service.tagline}
      </p>

      <div className="mt-4 flex items-end justify-between">
        <span
          className="font-mono text-xl font-medium"
          style={{
            color: isPriceByQuote ? "var(--color-muted)" : "var(--color-gold-text)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {service.fromPrice}
        </span>

        <Link
          href={`/contact?service=${service.id}`}
          className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-[transform,opacity] duration-150 hover:opacity-90"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-obsidian)",
            fontFamily: "var(--font-body)",
          }}
        >
          {isPriceByQuote ? "Get Quote" : "Book Now"}
        </Link>
      </div>
    </div>
  );
}
