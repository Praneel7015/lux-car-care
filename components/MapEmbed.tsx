import { BUSINESS } from "@/lib/business";

export function MapEmbed() {
  return (
    <div className="flex flex-col gap-4">
      <div
        role="region"
        aria-label="Map showing Luxury Car Care location"
        className="w-full overflow-hidden rounded-2xl border"
        style={{
          aspectRatio: "16/9",
          minHeight: "320px",
          borderColor: "var(--color-border)",
        }}
      >
        <iframe
          src={BUSINESS.mapsEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Luxury Car Care location on Google Maps"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
          style={{
            backgroundColor: "var(--color-gold)",
            color: "var(--color-obsidian)",
            fontFamily: "var(--font-body)",
          }}
        >
          <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          Open in Google Maps
        </a>
        <a
          href={BUSINESS.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
          style={{
            borderColor: "var(--color-border)",
            color: "var(--color-mahogany)",
            fontFamily: "var(--font-body)",
          }}
        >
          Get directions
        </a>
      </div>
    </div>
  );
}
