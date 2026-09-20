"use client";

import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  return (
    <div
      className="rounded-2xl border"
      style={{
        borderColor: "var(--color-border)",
        /* No overflow-hidden - it clips pointer events on the handle in some mobile browsers */
      }}
    >
      <ReactCompareSlider
        /* Allow dragging anywhere on the image, not just on the handle knob */
        onlyHandleDraggable={false}
        /* Keyboard-accessible too */
        keyboardIncrement="5%"
        itemOne={
          <ReactCompareSliderImage
            src={beforeSrc}
            alt={beforeAlt}
            style={{ objectFit: "cover" }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterSrc}
            alt={afterAlt}
            style={{ objectFit: "cover" }}
          />
        }
        handle={
          <div
            className="flex h-full items-center justify-center"
            role="separator"
            aria-label="Drag to compare before and after"
          >
            {/* Vertical divider line */}
            <div
              className="absolute inset-y-0 w-0.5"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              aria-hidden="true"
            />
            {/* Drag knob - larger touch target on mobile */}
            <div
              className="relative flex size-12 items-center justify-center rounded-full shadow-xl"
              style={{
                backgroundColor: "var(--color-gold)",
                color: "var(--color-obsidian)",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
              aria-hidden="true"
            >
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
              </svg>
            </div>
          </div>
        }
        style={{ aspectRatio: "4/3", borderRadius: "1rem 1rem 0 0" }}
      />
      <div
        className="flex justify-between border-t px-4 py-2 text-xs font-medium"
        style={{
          backgroundColor: "var(--color-surface)",
          borderColor: "var(--color-border)",
          fontFamily: "var(--font-mono)",
          borderRadius: "0 0 1rem 1rem",
        }}
      >
        <span style={{ color: "var(--color-muted)" }}>← Before</span>
        <span style={{ color: "var(--color-mahogany)" }}>After →</span>
      </div>
    </div>
  );
}
