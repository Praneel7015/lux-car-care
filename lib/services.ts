import { SERVICE_IMAGES } from "./media";

export type VehicleType = "hatchback-sedan" | "suv";

export interface ServiceTier {
  "hatchback-sedan": string;
  suv: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  pricing: ServiceTier | "by-quote" | "flat";
  flatPrice?: string;
  fromPrice?: string;
  badge?: string;
  vehicleCategory?: "car" | "bike";
  duration: string;
  bestFor: string;
  includes: string[];
  steps: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Addon {
  name: string;
  price: string;
}

export const SERVICES: Service[] = [
  {
    id: "express-exterior",
    name: "Express Exterior Wash",
    tagline: "A fast rinse and shine when you're short on time.",
    pricing: {
      "hatchback-sedan": "₹199",
      suv: "₹299",
    },
    fromPrice: "From ₹199",
    duration: "15-25 minutes",
    bestFor: "Daily drivers who need a quick refresh between deeper cleans.",
    includes: [
      "Exterior pre-rinse",
      "Foam or soap wash",
      "Fresh water rinse",
      "Tire wipe and basic dry",
    ],
    steps: [
      "We give the body a quick pre-rinse to loosen dust and road film.",
      "Foam or soap is applied and worked across panels, glass, and wheels.",
      "A thorough rinse clears suds from the body and under the mirrors.",
      "We wipe tires and dry high-touch surfaces so you can drive away clean.",
    ],
    seoTitle: "Express Exterior Wash in Bidar",
    seoDescription:
      "Fast exterior car wash in Bidar from ₹199. Pre-rinse, foam wash, rinse, and dry in about 15-25 minutes at Luxury Car Care.",
  },
  {
    id: "exterior-interior",
    name: "Exterior + Interior Wash",
    tagline: "The full clean, inside and out.",
    pricing: {
      "hatchback-sedan": "₹299",
      suv: "₹349",
    },
    fromPrice: "From ₹299",
    duration: "35-50 minutes",
    bestFor: "Weekly upkeep when cabin dust and exterior grime both need attention.",
    includes: [
      "Full exterior wash",
      "Cabin vacuum",
      "Dashboard and console wipe",
      "Glass inside and out",
    ],
    steps: [
      "Exterior wash follows our express process - foam, rinse, and dry.",
      "Cabin floors, seats, and mats are vacuumed for dust and crumbs.",
      "Dashboard, console, and door panels are wiped with interior-safe cleaners.",
      "Interior and exterior glass are finished for a clear view.",
    ],
    seoTitle: "Exterior + Interior Car Wash Bidar",
    seoDescription:
      "Exterior and interior car wash in Bidar from ₹299. Vacuum, wipe-down, glass clean, and full exterior wash at Luxury Car Care.",
  },
  {
    id: "exterior-interior-underbody",
    name: "Exterior + Interior + Under Body Wash",
    tagline: "Full clean inside, vacuum cleaning, under body water wash and tyre polish.",
    pricing: {
      "hatchback-sedan": "₹399",
      suv: "₹499",
    },
    fromPrice: "From ₹399",
    badge: "Popular",
    duration: "45-60 minutes",
    bestFor: "Monsoon dust, long highway trips, and anyone who wants a complete reset.",
    includes: [
      "Everything in Exterior + Interior",
      "Under-body water wash",
      "Tyre polish",
      "Extra attention to wheel arches",
    ],
    steps: [
      "We start with exterior foam wash and a careful rinse of the body.",
      "Under-body and wheel arches get a dedicated water wash for road grit.",
      "Interior vacuum and wipe-down clear the cabin.",
      "Tyres are polished and the exterior is dried for a finished look.",
    ],
    seoTitle: "Under Body Car Wash in Bidar",
    seoDescription:
      "Full exterior, interior, and under-body wash in Bidar from ₹399. Vacuum, tyre polish, and undercarriage rinse at Luxury Car Care.",
  },
  {
    id: "full-detailing",
    name: "Full Detailing",
    tagline: "Deep clean, shampoo, wax, tire shine - like new.",
    pricing: {
      "hatchback-sedan": "₹1,299",
      suv: "₹1,999",
    },
    fromPrice: "From ₹1,299",
    duration: "2-4 hours",
    bestFor: "Deep refreshes, special occasions, or cars that have gone months without care.",
    includes: [
      "Deep exterior wash",
      "Interior shampoo where needed",
      "Wax or polish finish",
      "Tire shine and trim care",
    ],
    steps: [
      "We wash and clay/decontaminate the paint as needed for a smooth surface.",
      "Interior fabrics and plastics get a deeper clean and shampoo treatment.",
      "A wax or polish layer restores gloss and short-term protection.",
      "Tires, trims, and glass are finished so the whole car looks renewed.",
    ],
    seoTitle: "Full Car Detailing in Bidar",
    seoDescription:
      "Full car detailing in Bidar from ₹1,299. Deep clean, shampoo, wax, and tire shine for hatchbacks, sedans, and SUVs.",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    tagline: "Long-lasting shine and protection.",
    pricing: "by-quote",
    fromPrice: "By quote",
    badge: "Premium",
    duration: "By appointment (multi-hour)",
    bestFor: "Owners who want lasting gloss, easier washing, and paint protection.",
    includes: [
      "Paint assessment and prep",
      "Professional ceramic application",
      "Curing guidance",
      "After-care tips",
    ],
    steps: [
      "We inspect the paint and prepare the surface so the coating bonds correctly.",
      "Ceramic product is applied panel by panel under controlled conditions.",
      "The coating is left to cure as per product guidelines.",
      "We walk you through after-care so the finish lasts as long as possible.",
    ],
    seoTitle: "Ceramic Coating in Bidar",
    seoDescription:
      "Professional ceramic coating in Bidar by quote. Long-lasting shine and paint protection at Luxury Car Care.",
  },
  {
    id: "express-bike-wash",
    name: "Express Bike Wash",
    tagline: "Quick exterior rinse and shine for two-wheelers.",
    pricing: "flat",
    flatPrice: "₹64",
    fromPrice: "₹64",
    vehicleCategory: "bike",
    duration: "10-15 minutes",
    bestFor: "Daily scooters and bikes that need a fast exterior clean.",
    includes: [
      "Exterior rinse",
      "Soap wash on body panels",
      "Chain and sensitive areas handled carefully",
      "Quick dry wipe",
    ],
    steps: [
      "We rinse loose dust from the body, wheels, and mudguards.",
      "Soap is applied to painted panels while protecting electrics and seals.",
      "A careful rinse clears suds without forcing water into sensitive areas.",
      "We wipe down so you can ride out looking fresh.",
    ],
    seoTitle: "Express Bike Wash in Bidar",
    seoDescription:
      "Express bike and scooter wash in Bidar for ₹64. Quick exterior rinse and shine at Luxury Car Care.",
  },
];

export const ADDONS: Addon[] = [
  { name: "Tire Shine", price: "₹49" },
  { name: "Odor Treatment", price: "₹49" },
  { name: "Mat Shampoo", price: "₹49/mat" },
];

export const VEHICLE_TYPES: { value: VehicleType; label: string }[] = [
  { value: "hatchback-sedan", label: "Hatchback / Sedan" },
  { value: "suv", label: "SUV" },
];

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function formatPrice(service: Service, vehicle: VehicleType): string {
  if (service.pricing === "by-quote") return "By quote";
  if (service.pricing === "flat") return service.flatPrice ?? "-";
  return service.pricing[vehicle];
}

export function getServiceImage(serviceId: string) {
  return SERVICE_IMAGES[serviceId] ?? SERVICE_IMAGES["express-exterior"];
}
