import { BUSINESS } from "./business";
import { MEDIA, OG_IMAGE } from "./media";

/** Single source of truth for NAP + local business details (matches Google Business Profile). */

export { BUSINESS };

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["AutoWash", "LocalBusiness"],
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: BUSINESS.name,
    image: [OG_IMAGE.src, MEDIA.foamSuv.src, MEDIA.detailingHand.src],
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.mapsUrl,
    sameAs: [BUSINESS.mapsUrl, BUSINESS.mapsPlaceUrl],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BUSINESS.hours.opens,
        closes: BUSINESS.hours.closes,
      },
    ],
    url: BUSINESS.siteUrl,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    paymentAccepted: BUSINESS.paymentAccepted,
    areaServed: {
      "@type": "City",
      name: BUSINESS.areaServed,
    },
  };
}
