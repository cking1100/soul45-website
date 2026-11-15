## Soul 45 Website

Standalone Next.js website for Soul 45 (Listening Bar, Record Shop, Cafe).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The listening bar and record shop information is on the About page. The older
`/listening-bar` and `/records` URLs redirect to their respective sections.

Set `isResidency: true` on an event in `src/lib/events.ts` to show the residency
badge. Recurring events are not automatically treated as residencies.
Events with weekly recurrence display a Weekly badge.

Regular opening hours are configured in `src/lib/opening-hours.ts`. The live
status uses UK local time and does not account for exceptional closures.

If port 3000 is in use:

```bash
npm run dev -- --port 3001
```

## Google Analytics

Create a Google Analytics 4 web data stream and set `NEXT_PUBLIC_GA_MEASUREMENT_ID`
to its `G-...` measurement ID in `.env.local` and your hosting provider's build
environment. Restart locally or redeploy after changing it. Without a valid ID,
analytics is disabled.

The Google tag loads on every page for all visitors. Configure the GA4 web stream's
Enhanced Measurement to enable page views on browser history changes so
client-side navigation is tracked. Do not add a separate page-view tracker,
which could cause duplicates. Google may collect data according to its
[privacy policy](https://policies.google.com/privacy).

## Google Reviews Enhanced Embed

The Google reviews section can render live Google review entries when Places credentials are present.

1. Copy `.env.example` to `.env.local`
2. Set `GOOGLE_MAPS_API_KEY` to your real key
3. (Recommended) Set `GOOGLE_PLACE_ID` for Soul 45
4. Restart the dev server

Without credentials, the reviews section still shows direct actions to read and leave reviews on Google.
The Gallery also uses these server-only credentials for live Google Business photos when available, and falls back to local Soul 45 images without them.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Checks

```bash
npm run lint
npm run build
node --experimental-strip-types --test tests/opening-hours.test.mjs
```
