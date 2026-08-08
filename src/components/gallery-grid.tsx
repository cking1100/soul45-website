import Image from "next/image";

import type { GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <figure
          key={image.src}
          className="mb-5 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-panel"
        >
          <div className={`relative ${image.featured ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
          </div>
          <figcaption className="flex items-center justify-between px-4 py-3 text-xs uppercase tracking-[0.14em] text-ink-soft">
            <span>{image.category}</span>
            <span>Soul 45</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
