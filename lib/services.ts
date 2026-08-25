export type VehicleType = "hatchback" | "sedan" | "suv";

export interface ServiceTier {
  hatchback: string;
  sedan: string;
  suv: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  pricing: ServiceTier | "by-quote" | "flat";
  flatPrice?: string;   // used when pricing === "flat"
  fromPrice?: string;   // display string for homepage card
  badge?: string;
  vehicleCategory?: "car" | "bike"; // defaults to "car"
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
      hatchback: "₹199",
      sedan: "₹249",
      suv: "₹299",
    },
    fromPrice: "From ₹199",
  },
  {
    id: "exterior-interior",
    name: "Exterior + Interior Wash",
    tagline: "The full clean, inside and out.",
    pricing: {
      hatchback: "₹299",
      sedan: "₹349",
      suv: "₹449",
    },
    fromPrice: "From ₹299",
  },
  {
    id: "exterior-interior-underbody",
    name: "Exterior + Interior + Under Body Wash",
    tagline: "Full clean inside, vacuum cleaning, under body water wash and tyre polish.",
    pricing: {
      hatchback: "₹399",
      sedan: "₹499",
      suv: "₹599",
    },
    fromPrice: "From ₹399",
    badge: "Popular",
  },
  {
    id: "full-detailing",
    name: "Full Detailing",
    tagline: "Deep clean, shampoo, wax, tire shine — like new.",
    pricing: {
      hatchback: "₹1,299",
      sedan: "₹1,599",
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
  { name: "Tire Shine", price: "₹99" },
  { name: "Odor Treatment", price: "₹149" },
  { name: "Headlight Restoration", price: "₹499" },
  { name: "Mat Shampoo", price: "₹99/mat" },
];

export const VEHICLE_TYPES: { value: VehicleType; label: string }[] = [
  { value: "hatchback", label: "Hatchback" },
  { value: "sedan", label: "Sedan" },
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
