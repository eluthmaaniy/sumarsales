# Sumar Network Service — Portfolio Site

Replicate the eldev.digital structure exactly, themed light/green with a sticky bottom tab nav, and adapt content for **Sumar Network Service**.

## Brand & Assets
- Name throughout: **Sumar Network Service**
- Tagline: "I'll bring your ideas to life." (kept from reference)
- Profile picture: cloudinary IMG_20260519_023456 link (used in avatar)
- Cover photo: cloudinary IMG_20260316_150234 link (banner background)
- Status pill: Online · local time
- Verified badge next to name
- Rating + Shopify Plus Partner chip
- Contact email: sobintanumar@gmail.com
- Contact phone: +1 (857) 292-4938

## Routes (TanStack Start, file-based)
```
src/routes/
  __root.tsx           shared shell + sticky bottom tab bar
  index.tsx            / — About (hero, partners strip, About me + Contact Me, Skills, Education, Certifications, Testimonials Shorts)
  portfolio.tsx        /portfolio — placeholder grid (kept to mirror reference structure)
  gallery.tsx          /gallery — NEW, two Shopify-work YouTube Shorts
  reviews.tsx          /reviews — simple reviews list
  contact.tsx          /contact — email + phone CTA cards (mailto / tel)
```
Each route gets its own `head()` meta (title, description, og:*).

## Page composition (index)
1. **Hero/Cover** — cover photo background, circular avatar overlapping bottom, name + verified badge, tagline, location/language row, Online + local time, rating + Plus Partner chip.
2. **Trusted partner strip** — marquee of partner logos (Shopify Partner, Google Partner, Shopify Plus Partner, Upwork, Google & Shopify). Reuse public logo URLs from the reference.
3. **About me card** — white rounded card with copy adapted for Sumar Network Service (Shopify Partner expert helping store owners succeed), "Read more" + green "Contact Me" pill button → /contact.
4. **Client Testimonials and Walkthroughs** — NEW section right after About. Three portrait (9:16) YouTube Shorts embedded side-by-side on desktop, stacked on mobile:
   - cLq7sz_VIoo
   - vqLETIpOWFI
   - 53U7c6LRKFg
   Use `https://www.youtube.com/embed/<id>` in a 9:16 aspect-ratio iframe.
5. **Skills** — pill chips (Shopify Store Setup, Redesign, Theme Customization, Store Migration, Product & Collection Setup, Store Settings Configuration, POS Setup, Audit & Optimization, +"Show more").
6. **Education** — University of Abuja, B.A. English, 2025 (kept; can swap later if needed).
7. **Certifications** — same 5 items list from reference.
8. **Footer CTA** — Contact Me button + presence line (Online · Avg response under 1 hour).

## Gallery page (/gallery)
- Cool title: **"Inside the Shopify Studio — Live Build Reels"** with subtitle "Real-time recordings of Shopify store work."
- Two portrait YouTube Shorts embeds in 9:16 cards:
  - b-97OtPxnUw
  - QYhUyoyWYd4
- Grid: 2 cols desktop, 1 col mobile, captioned "Reel 01 / Reel 02".

## Bottom navigation (sticky, mobile-style pill)
Tabs (Lucide icons + TanStack `Link` with `activeProps`):
- About → `/` (User)
- Portfolio → `/portfolio` (LayoutGrid)
- **Gallery → `/gallery` (Images)** — NEW
- Reviews → `/reviews` (MessageSquare)
- Contact → `/contact` (Mail)

Rendered in `__root.tsx` as a floating rounded bar so it appears on every route.

## Contact page
Two big cards:
- Email — `mailto:sobintanumar@gmail.com`
- Phone — `tel:+18572924938`
Plus a green "Message on WhatsApp" button using the phone number (`https://wa.me/18572924938`).

## Design system (src/styles.css)
Light theme inspired by the reference:
- `--background: oklch(0.985 0.005 150)` (warm off-white)
- `--card: oklch(1 0 0)`
- `--primary: oklch(0.65 0.18 150)` (green ~#22c55e family) + `--primary-foreground` white
- `--accent: oklch(0.97 0.02 150)`
- Generous rounded radii (`--radius: 1rem`), soft shadows
- Tokens only — no hardcoded colors in components

## Technical notes
- All YouTube embeds: `<iframe src="https://www.youtube.com/embed/{id}" allow="..." allowfullscreen>` inside an AspectRatio 9/16 wrapper (`src/components/ui/aspect-ratio`).
- Cover and avatar loaded directly from Cloudinary URLs (no re-hosting).
- Partner logos sourced from `https://eldev.digital/assets/...` URLs already public; if any 404s I'll swap for inline SVG fallbacks.
- All copy adjusted from first-person "Uthman Eldev" → "Sumar Network Service" team voice.
- SEO: per-route `head()` with unique title/description/og tags.
- No backend needed — pure presentational site.

Ready to build on approval.