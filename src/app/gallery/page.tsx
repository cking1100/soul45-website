import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { getGooglePlacePhotos } from "@/lib/google-places";
import { galleryImages } from "@/lib/gallery";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Editorial gallery from Soul 45 featuring venue mood, vinyl culture, DJs, music moments, drinks and atmosphere.",
};

export default function GalleryPage() {
  const googlePhotosPromise = getGooglePlacePhotos();

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Atmosphere In Frames"
        intro="A visual edit of Soul 45 across venue mood, vinyl detail, DJs, music moments, drinks and social atmosphere."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <GalleryGrid images={galleryImages} priorityFirst />
        <GoogleGallery photosPromise={googlePhotosPromise} />
      </section>

      <CtaSection
        title="See More In Real Time"
        body="For the latest imagery and updates from the venue, visit Soul 45 on Instagram."
        primaryLabel="Instagram"
        primaryHref="/instagram"
        secondaryLabel="Visit"
        secondaryHref="/visit"
      />
    </>
  );
}

async function GoogleGallery({ photosPromise }: { photosPromise: ReturnType<typeof getGooglePlacePhotos> }) {
  const photos = await photosPromise;

  if (photos.length === 0) {
    return null;
  }

  const googleImages = photos.map((photo, index) => ({
    src: photo.url,
    alt: `Soul 45 community photo ${index + 1}`,
    category: "Atmosphere" as const,
    attributions: photo.attributions,
  }));

  return (
    <div className="mt-14 border-t border-border pt-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="catalog-label">Community / Google</p>
          <h2 className="editorial-title mt-3 text-4xl text-ink md:text-5xl">More From Soul 45</h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-ink-soft md:text-right">Recent images from the Soul 45 Google Business listing.</p>
      </div>
      <GalleryGrid images={googleImages} />
      <div className="mt-6 flex justify-end">
        <Link
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.2em] text-ink-soft transition hover:text-accent"
        >
          View more on Google Maps <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">-&gt;</span>
        </Link>
      </div>
    </div>
  );
}
