# Luxury Car Care - Website

Production website for **Luxury Car Care**, a car wash and detailing shop in Bidar, Karnataka, India.

**Live domain:** `car-care.sindhole.com`

---

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **react-compare-slider** - before/after gallery drag slider
- **Web3Forms** - serverless booking form delivery (free tier)

Fonts loaded via `next/font/google` (self-hosted at build time, zero runtime requests):
- Space Grotesk - headlines/display
- Public Sans - body text
- IBM Plex Mono - prices, hours, labels

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Before You Launch - Required Steps

### 1. Web3Forms Access Key (REQUIRED for the booking form to work)

1. Sign up at [web3forms.com](https://web3forms.com) - free, no credit card.
2. Create a new form and copy the access key.
3. In `components/BookingForm.tsx`, replace `YOUR_WEB3FORMS_ACCESS_KEY`:

```tsx
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
```

### 2. Update the legal page dates

In `app/privacy-policy/page.tsx` and `app/terms-of-service/page.tsx`, replace `[insert launch date]` with the actual date.

### 3. Replace sample content

See `plan.md` Section 8 (Open Items) for the full checklist. Key items:

- **Pricing** - `lib/services.ts` has sample prices. Replace with real rates before launch.
- **Testimonials** - `app/page.tsx` has illustrative quotes. Replace with real customer reviews (and remove the "illustrative" disclaimer).
- **Gallery photos** - Currently using Unsplash stock. Replace with real facility/vehicle photos.
- **About page** - Add your founding year, team size, equipment details.
- **GSTIN** - If applicable, add to the legal pages under Section 10 of each.
- **Street address** - Add to the JSON-LD schema on the homepage and the legal pages once confirmed.
- **Payment methods** - Note accepted methods (cash, UPI, etc.) on `/services`.

---

## Deployment to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. In the Vercel dashboard → Settings → Domains, add `car-care.sindhole.com`.
4. Vercel will give you a CNAME target (e.g. `cname.vercel-dns.com`).

### Cloudflare DNS - IMPORTANT

In your Cloudflare DNS dashboard for `sindhole.com`:

```
Type: CNAME
Name: car-care
Target: cname.vercel-dns.com   (or whatever Vercel gives you)
Proxy: DNS only (grey cloud)   ← CRITICAL: NOT proxied/orange cloud
```

Set the record to **"DNS only" (grey cloud)**, not "Proxied" (orange). A proxied record can block Vercel's automatic SSL certificate issuance and domain verification. You can re-enable proxying later if desired, but Vercel already provides its own CDN and HTTPS.

---

## Design System

| Token | Hex | Use |
|---|---|---|
| Petrol | `#103C42` | Header, dark sections, key text |
| Ink | `#0B1615` | Body text |
| Foam | `#F1F7F6` | Page background |
| Citrus | `#FFB627` | Primary CTA buttons, highlights |
| Spray | `#4FC3C0` | Secondary accent, hover states |
| Chrome | `#D8E3E2` | Borders, dividers |

---

## Project Structure

```
app/
  layout.tsx              # Header, Footer, StickyMobileCTA, fonts
  page.tsx                # Home
  services/page.tsx
  gallery/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms-of-service/page.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
components/
  Header.tsx  Footer.tsx  Logo.tsx  StickyMobileCTA.tsx
  Hero.tsx  ServiceCard.tsx  PriceTable.tsx
  TestimonialCard.tsx  BeforeAfterSlider.tsx  BookingForm.tsx  MapEmbed.tsx
lib/
  services.ts             # Single source of truth for services/pricing data
```

`lib/services.ts` is the **one place to edit prices**. It's imported by the homepage preview cards, the `/services` pricing table, and the booking form's service dropdown.

---

## Analytics (optional)

The Privacy Policy is written for **cookie-free analytics** (Vercel Analytics or Cloudflare Web Analytics). If you add Google Analytics, Meta Pixel, or any cookie-based tracking, update Section 7 of the Privacy Policy to reflect that.

To add Vercel Analytics:
```bash
npm install @vercel/analytics
```
Then add `<Analytics />` to `app/layout.tsx`.
