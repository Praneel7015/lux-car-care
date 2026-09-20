/** Single source of truth for NAP + local business details (matches Google Business Profile). */

export const BUSINESS = {
  name: "Luxury Car Care",
  legalName: "Luxury Car Care",
  tagline: "Quick, affordable car wash and detailing in Bidar, Karnataka.",
  siteUrl: "https://lux-car-care.sindhole.com",
  email: "car-care@sindhole.com",
  phoneDisplay: "+91 74162 38424",
  phoneE164: "+917416238424",
  whatsappDisplay: "+91 99720 90190",
  whatsappE164: "919972090190",
  feedbackPhoneDisplay: "+91 95500 92810",
  feedbackPhoneE164: "+919550092810",
  feedbackWhatsappE164: "919550092810",
  /** Street line as shown on Google Business Profile */
  streetAddress: "Near Bajaj Showroom, opp. BVB College Road",
  addressLocality: "Bidar",
  addressRegion: "Karnataka",
  postalCode: "585403",
  addressCountry: "IN",
  addressCountryName: "India",
  addressLines: [
    "Near Bajaj Showroom, opp. BVB College Road",
    "Bidar, Karnataka 585403",
    "India",
  ] as string[],
  addressOneLine:
    "Near Bajaj Showroom, opp. BVB College Road, Bidar, Karnataka 585403, India",
  geo: {
    latitude: 17.8964184,
    longitude: 77.5162298,
  },
  plusCode: "VGW8+HF Bidar, Karnataka",
  mapsUrl: "https://maps.app.goo.gl/z3JjTJyMxkWoavp67",
  mapsPlaceUrl:
    "https://www.google.com/maps/place/Luxury+Car+Care/@17.8964184,77.5162298,17z",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.5208364406353!2d77.51365487435405!3d17.896418383080203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec744f5c95321%3A0xfe1c00003e92cd50!2sLuxury%20Car%20Care!5e1!3m2!1sen!2sin!4v1787561787794!5m2!1sen!2sin",
  hours: {
    opens: "06:00",
    closes: "21:00",
    display: "Every Day · 6:00 AM - 9:00 PM",
    short: "6 AM - 9 PM",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI",
  areaServed: "Bidar",
} as const;
