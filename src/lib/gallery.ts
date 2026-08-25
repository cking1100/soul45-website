export type GalleryImage = {
  src: string;
  alt: string;
  category: "Venue" | "Vinyl" | "DJs" | "Music" | "Drinks" | "Atmosphere";
  featured?: boolean;
  attributions?: Array<{
    name: string;
    url?: string;
  }>;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/venueOutisde.png",
    alt: "Exterior view of Soul 45 venue",
    category: "Venue",
    featured: true,
  },
  {
    src: "/images/venue.png",
    alt: "Inside the Soul 45 venue",
    category: "Venue",
  },
  {
    src: "/images/Decks.png",
    alt: "Turntable decks set up at Soul 45",
    category: "Music",
    featured: true,
  },
  {
    src: "/images/Taps.png",
    alt: "Soul 45 draught beer taps for Kasteel Rouge, Grand Central IPA, Appleshed Cider and Brinkhoffs Lager",
    category: "Drinks",
  },
];
