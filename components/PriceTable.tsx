import { SERVICES, ADDONS, VEHICLE_TYPES, formatPrice } from "@/lib/services";
import Link from "next/link";

export function PriceTable() {
  return (
    <div className="w-full">
      {/* Scroll hint — only visible on small screens */}
      <p
        className="mb-2 flex items-center gap-1 text-xs sm:hidden"
        style={{ color: "var(--color-muted)" }}
      >
        <svg className="size-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        Scroll right to see all vehicle types
      </p>

      {/* Wrapper with fade-right on mobile */}
      <div className="relative">
        {/* Right-edge fade mask on mobile */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:hidden"
          style={{
            background: "linear-gradient(to right, transparent, var(--color-parchment))",
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        <div className="overflow-x-auto">
          <table
            className="w-full min-w-[540px] border-collapse text-sm"
            aria-label="Car wash pricing by vehicle type"
          >
            <thead>
              <tr style={{ backgroundColor: "var(--color-mahogany)" }}>
                <th
                  className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--color-parchment)", fontFamily: "var(--font-body)" }}
                >
                  Service
                </th>
                {VEHICLE_TYPES.map((v) => (
                  <th
                    key={v.value}
                    className="px-4 py-3.5 text-center font-mono text-xs font-medium uppercase tracking-widest"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-mono)" }}
                  >
                    {v.label}
                  </th>
                ))}
                <th className="px-4 py-3.5" />
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((service) => (
                <tr
                  key={service.id}
                  className="border-b transition-colors duration-150 hover:bg-[var(--color-surface)]"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <td className="px-4 py-4">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-body)" }}
                    >
                      {service.name}
                    </p>
                    <p className="mt-0.5 text-xs" style={{ color: "var(--color-muted)" }}>
                      {service.tagline}
                    </p>
                  </td>
                  {VEHICLE_TYPES.map((v) => (
                    <td
                      key={v.value}
                      className="px-4 py-4 text-center font-mono font-medium"
                      style={{
                        color:
                          service.pricing === "by-quote"
                            ? "var(--color-muted)"
                            : "var(--color-mahogany)",
                        fontFamily: "var(--font-mono)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {service.pricing === "by-quote"
                        ? v.value === "hatchback"
                          ? "By quote"
                          : "—"
                        : formatPrice(service, v.value)}
                    </td>
                  ))}
                  <td className="px-4 py-4 text-right">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-[transform,opacity] duration-150 hover:opacity-90"
                      style={{
                        backgroundColor: "var(--color-gold)",
                        color: "var(--color-obsidian)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {service.pricing === "by-quote" ? "Get Quote" : "Book"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-8 rounded-2xl border p-5 sm:p-6" style={{ borderColor: "var(--color-border)" }}>
        <h3
          className="mb-4 text-base font-bold"
          style={{ color: "var(--color-mahogany)", fontFamily: "var(--font-display)" }}
        >
          Add-ons
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ADDONS.map((addon) => (
            <li
              key={addon.name}
              className="flex items-center justify-between gap-4 rounded-xl border px-4 py-3"
              style={{
                borderColor: "var(--color-border)",
                backgroundColor: "var(--color-parchment)",
              }}
            >
              <span className="text-sm" style={{ color: "var(--color-mahogany)" }}>
                {addon.name}
              </span>
              <span
                className="font-mono text-sm font-medium"
                style={{ color: "var(--color-gold-text)", fontFamily: "var(--font-mono)" }}
              >
                {addon.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
