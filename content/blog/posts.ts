import type { StockImage } from "@/lib/media";
import { MEDIA } from "@/lib/media";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover: StockImage;
  relatedServiceId?: string;
  body: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-often-wash-car-bidar",
    title: "How often should you wash your car in Bidar?",
    description:
      "Dust, heat, and monsoon grit in Bidar mean your wash schedule matters. Here’s a simple cadence that keeps paint and interiors healthier.",
    date: "2026-03-15",
    cover: MEDIA.dustyCar,
    relatedServiceId: "exterior-interior",
    body: [
      "Bidar’s dry stretches leave a fine film of dust on paint within days. Add highway trips toward Hyderabad or Kalaburagi and you pick up road film that dulls clear coat and works into badges and door seals.",
      "For most daily drivers, a light exterior wash every 7–10 days keeps grit from grinding into the paint when you wipe the car dry. If you park under trees or near construction, lean toward weekly.",
      "After monsoon rains or a muddy rural road, don’t wait — under-body and wheel arches hold moisture and dirt that rust-prone areas dislike. Our Exterior + Interior + Under Body package is built for those resets.",
      "Interiors collect Bidar’s red dust on mats and dashboards faster than many cities. A vacuum and wipe every other wash keeps the cabin from smelling stale and stops grit from staining fabric.",
      "Walk in any day between 6 AM and 9 PM, or book ahead on WhatsApp if you want a specific slot. Consistent light washes cost less than correcting neglected paint later.",
    ],
  },
  {
    slug: "express-wash-vs-full-detailing",
    title: "Express wash vs full detailing — which do you need?",
    description:
      "Not every visit needs a multi-hour detail. Compare express exterior, interior packages, and full detailing so you pick the right service in Bidar.",
    date: "2026-03-18",
    cover: MEDIA.detailingHand,
    relatedServiceId: "full-detailing",
    body: [
      "An express exterior wash is the right call when the body is dusty but the cabin is fine and you are short on time. Think 15–25 minutes: rinse, foam, rinse, dry.",
      "Add interior when mats look grey, the dash feels sandy, or passengers notice cabin dust. Exterior + Interior covers both sides without the time of a full detail.",
      "Full detailing is for neglected paint, stained fabric, or a special occasion. We go deeper — shampoo where needed, wax or polish, tire shine — and it takes a few hours, not minutes.",
      "Ceramic coating sits above detailing: it is a protection layer after proper prep, quoted case by case. It is not a substitute for regular washing.",
      "Unsure? Tell us how the car looks and how soon you need it back. We will point you to the package that matches, without upselling what you do not need.",
    ],
  },
  {
    slug: "exterior-interior-wash-step-by-step",
    title: "How we do an exterior + interior wash (step by step)",
    description:
      "A transparent look at our exterior and interior car wash process in Bidar — from foam rinse to cabin vacuum and glass.",
    date: "2026-03-20",
    cover: MEDIA.handWash,
    relatedServiceId: "exterior-interior",
    body: [
      "We start outside. A pre-rinse loosens Bidar dust so we are not grinding grit across the clear coat with a dry sponge.",
      "Foam or soap goes on next. We work panels, mirrors, and wheels, then rinse thoroughly so residue does not dry into water spots in the heat.",
      "Inside, we vacuum floors, seats, and mats. Loose sand is what scratches plastics when you wipe blindly — vacuum first, then wipe.",
      "Dashboard, console, and door cards get an interior-safe wipe. Glass inside and out finishes the job so headlights and mirrors stay clear at night.",
      "You can watch the process or drop the keys and wait. Pricing starts from ₹299 for hatchback and sedan — see the full Exterior + Interior package page for inclusions.",
    ],
  },
  {
    slug: "when-ceramic-coating-worth-it",
    title: "When ceramic coating is worth it",
    description:
      "Ceramic coating is not magic — but for the right Bidar car owner it means easier washes and longer gloss. Here’s when it pays off.",
    date: "2026-03-22",
    cover: MEDIA.waterBeading,
    relatedServiceId: "ceramic-coating",
    body: [
      "Ceramic coating bonds a hard, hydrophobic layer to prepared paint. Water beads, light dust rinses off easier, and gloss lasts longer than a retail wax.",
      "It is worth considering if you keep the car for years, wash regularly, and want weekend washes to stay quick. It is less useful if the paint is already heavily swirled and you will not maintain it.",
      "Prep matters more than the bottle. We assess the paint, correct what is needed for a sound surface, then apply and guide curing. Skipping prep is why cheap DIY coats disappoint.",
      "Coating does not stop rock chips or replace washing. You still need gentle washes — just fewer aggressive cleans to keep the finish looking new.",
      "Ask us for a quote with photos of your car. We will be honest if a full detail or regular wash plan is the better spend right now.",
    ],
  },
  {
    slug: "diy-rinse-vs-professional-wash",
    title: "DIY rinse vs a professional wash — what you miss at home",
    description:
      "A hose at home feels free until swirl marks show up. See what a proper Bidar car wash adds beyond a quick DIY rinse.",
    date: "2026-03-25",
    cover: MEDIA.pressureWash,
    relatedServiceId: "express-exterior",
    body: [
      "Home rinses often skip pre-soak and use one dirty bucket. That drags grit across paint and leaves micro-scratches you only notice in sunlight.",
      "Wheels and wheel arches collect brake dust and monsoon mud. Without attention there, the car looks clean from ten feet and dirty up close.",
      "Interiors are harder at home without a shop vacuum. Dust settles into seat rails and AC vents — the smell follows within a week in hot weather.",
      "A professional wash is not only pressure and foam. It is process: loose dirt off first, then contact wash, then dry, with products meant for automotive paint.",
      "Keep DIY for mid-week dust-offs if you like — and bring the car in for a proper package when it needs a real reset. Express exterior starts at ₹199.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
