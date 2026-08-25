import Image from "next/image";

import type { GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <figure
          key={image.src}
          className="image-card mb-5 break-inside-avoid overflow-hidden bg-panel/80"
        >
          <div className={`group relative overflow-hidden ${image.featured ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            <p className="absolute bottom-3 left-3 bg-black/70 px-2 py-1 text-[0.54rem] uppercase tracking-[0.2em] text-ink">
              Frame {String(index + 1).padStart(2, "0")}
            </p>
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-[0.62rem] uppercase tracking-[0.18em] text-ink-soft">
            <span>{image.category}</span>
            {image.attributions?.length ? (
              <span className="text-right text-[0.52rem] normal-case tracking-[0.08em] text-ink-muted">
                Photo by{" "}
                {image.attributions.map((attribution, attributionIndex) => (
                  <span key={`${attribution.name}-${attributionIndex}`}>
                    {attributionIndex > 0 ? ", " : null}
                    {attribution.url ? (
                      <a href={attribution.url} target="_blank" rel="noreferrer" className="underline decoration-border underline-offset-2 hover:text-accent">
                        {attribution.name}
                      </a>
                    ) : attribution.name}
                  </span>
                ))}
              </span>
            ) : (
              <span className="text-accent">Soul 45 / Hull</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
