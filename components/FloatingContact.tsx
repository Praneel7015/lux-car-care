"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";

const round =
  "group relative grid size-14 place-items-center rounded-full border-2 border-white/80 shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 max-sm:size-12";
const tip =
  "pointer-events-none absolute right-full mr-3 translate-x-2 rounded-md border px-3 py-1.5 text-xs font-semibold whitespace-nowrap opacity-0 shadow-md transition-all group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 max-sm:hidden";
const tipStyle = {
  backgroundColor: "var(--color-obsidian)",
  borderColor: "rgba(201,149,42,0.4)",
  color: "var(--color-parchment)",
  fontFamily: "var(--font-body)",
};

/**
 * Floating round buttons on every screen size: call above WhatsApp on the
 * bottom right (WhatsApp with a pulsing ring, a label sliding out on hover),
 * and back to top on the bottom left once you scroll.
 */
export function FloatingContact() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3 max-sm:right-4 max-sm:bottom-4">
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className={round}
          style={{ backgroundColor: "var(--color-gold)", color: "var(--color-obsidian)" }}
          aria-label="Call Luxury Car Care"
        >
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span className={tip} style={tipStyle} aria-hidden="true">
            Call {BUSINESS.phoneDisplay}
          </span>
        </a>
        <a
          href={`https://wa.me/${BUSINESS.whatsappE164}?text=Hi%2C%20I%27d%20like%20to%20book%20a%20car%20wash`}
          target="_blank"
          rel="noopener noreferrer"
          className={round}
          style={{ backgroundColor: "#25D366", color: "#fff" }}
          aria-label="Message us on WhatsApp, opens in new tab"
        >
          <span className="fab-ring absolute inset-0 rounded-full" style={{ backgroundColor: "#25D366" }} aria-hidden="true" />
          <svg className="relative size-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className={tip} style={tipStyle} aria-hidden="true">
            WhatsApp {BUSINESS.whatsappDisplay}
          </span>
        </a>
      </div>

      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={`fixed bottom-5 left-5 z-50 grid size-11 place-items-center rounded-full border shadow-lg transition-all duration-200 max-sm:bottom-4 max-sm:left-4 ${showTop ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"}`}
        style={{ backgroundColor: "var(--color-obsidian)", borderColor: "rgba(201,149,42,0.4)", color: "var(--color-gold)" }}
      >
        <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
