## Soul 45 Website

Standalone Next.js website for Soul 45 (Listening Bar, Record Shop, Cafe).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If port 3000 is in use:

```bash
npm run dev -- --port 3001
```

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
```
