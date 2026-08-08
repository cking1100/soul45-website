import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Sora } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
  ADDRESS_LINES,
  BUSINESS_DESCRIPTION,
  BUSINESS_FULL_NAME,
  INSTAGRAM_URL,
} from "@/lib/site";
import "./globals.css";

const bodyFont = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const keywords = [
  "Soul 45 Hull",
  "Listening bar Hull",
  "Record shop Hull",
  "Vinyl bar Hull",
  "Newland Avenue bars",
  "Live music Hull",
  "DJ nights Hull",
  "Vinyl cafe Hull",
];

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_FULL_NAME,
  description: BUSINESS_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINES[0],
    addressLocality: ADDRESS_LINES[1],
    postalCode: ADDRESS_LINES[2],
    addressCountry: ADDRESS_LINES[3],
  },
  sameAs: [INSTAGRAM_URL],
  knowsAbout: ["jazz", "funk", "soul", "deep house", "house", "disco", "electronic music", "vinyl"],
};

export const metadata: Metadata = {
  title: {
    default: "Soul 45 | Listening Bar · Record Shop · Cafe",
    template: "%s | Soul 45",
  },
  description: BUSINESS_DESCRIPTION,
  keywords,
  openGraph: {
    title: "Soul 45 | Listening Bar · Record Shop · Cafe",
    description: BUSINESS_DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul 45",
    description: BUSINESS_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bodyFont.variable} ${displayFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Script
          id="soul45-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <div className="app-shell">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
