import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHeader } from "@/components/page-header";
import { galleryImages } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Editorial gallery from Soul 45 featuring venue mood, vinyl culture, DJs, music moments, drinks and atmosphere.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Atmosphere In Frames"
        intro="A visual edit of Soul 45 across venue mood, vinyl detail, DJs, music moments, drinks and social atmosphere."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <GalleryGrid images={galleryImages} />
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
