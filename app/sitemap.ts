import type { MetadataRoute } from "next";

const LAST_UPDATED = new Date("2025-08-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://car-care.sindhole.com";

  return [
    { url: base, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/gallery`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/privacy-policy`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];
}

