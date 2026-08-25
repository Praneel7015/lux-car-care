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
  pricing: ServiceTier | "by-quote";
  fromPrice?: string; // Display string for the homepage card
  badge?: string;
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
      hatchback: "₹149",
      sedan: "₹199",
      suv: "₹249",
    },
    fromPrice: "From ₹149",
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
  return service.pricing[vehicle];
}
