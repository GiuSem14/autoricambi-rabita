Autoricambi Rabita

Website for a car-parts shop in Barrafranca (Sicily, Italy). Second client built on the same codebase as autoricambi-saitta.

Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · deployed on Vercel

Why two repositories instead of one

Local businesses in the same trade need the same site with different content — not a different site. So the component set, page structure and part-request flow are shared, and everything that differs between clients lives in a single file: lib/constants.ts holds the business name, address, phone numbers, WhatsApp number, opening hours, payment methods and accessibility details.

A new shop means editing one config file and replacing the images. The first build took weeks; this one took days.

The tradeoff is that the two repositories drift over time — a fix in one does not reach the other automatically. For two clients that is cheaper than the machinery a shared package would require; past a handful, it would not be.

What it does
Part request flow — a form collects brand, model and year, then opens WhatsApp with the message pre-filled.
GDPR cookie management — consent banner plus a reopenable preferences manager.
SEO — per-page metadata, Open Graph tags, generated sitemap.ts, aimed at local search.
Structure
app/          App Router pages (home, cerca-ricambio, categorie, chi-siamo, contatti, policies)
components/   Header, Footer, part-request form, cookie banner and manager, reviews
lib/          constants.ts — every client-specific value in one place
Running locally
bash
npm install
npm run dev
