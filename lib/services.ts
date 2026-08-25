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
  },
  {
    id: "full-detailing",
    name: "Full Detailing",
    tagline: "Deep clean, shampoo, wax, tire shine — like new.",
    pricing: {
      "hatchback-sedan": "₹1,299",
      suv: "₹1,999",
    },
    fromPrice: "From ₹1,299",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating",
    tagline: "Long-lasting shine and protection.",
    pricing: "by-quote",
    fromPrice: "By quote",
    badge: "Premium",
  },
  {
    id: "express-bike-wash",
    name: "Express Bike Wash",
    tagline: "Quick exterior rinse and shine for two-wheelers.",
    pricing: "flat",
    flatPrice: "₹64",
    fromPrice: "₹64",
    vehicleCategory: "bike",
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
  if (service.pricing === "flat") return service.flatPrice ?? "—";
  return service.pricing[vehicle];
}
