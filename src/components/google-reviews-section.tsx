import Link from "next/link";

import { GOOGLE_REVIEWS_URL } from "@/lib/site";

type GoogleReviewsSectionProps = {
  compact?: boolean;
};

type GoogleReview = {
  authorName: string;
  rating: number;
  text: string;
  relativeTime: string;
  profileUrl?: string;
};

type GoogleReviewsData = {
  placeName?: string;
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
};

async function resolvePlaceId(apiKey: string) {
  const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id",
    },
    body: JSON.stringify({ textQuery: "Soul 45 45 Newland Ave Hull HU5 3BE" }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { places?: Array<{ id?: string }> };
  return data.places?.[0]?.id ?? null;
}

async function loadGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY ?? process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID ?? (await resolvePlaceId(apiKey));

    if (!placeId) {
      return null;
    }

    const detailsResponse = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
      cache: "no-store",
    });

    if (!detailsResponse.ok) {
      return null;
    }

    const details = (await detailsResponse.json()) as {
      displayName?: { text?: string };
      rating?: number;
      userRatingCount?: number;
      reviews?: Array<{
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
        authorAttribution?: {
          displayName?: string;
          uri?: string;
        };
      }>;
    };

    const reviews: GoogleReview[] = (details.reviews ?? [])
      .map((review) => ({
        authorName: review.authorAttribution?.displayName ?? "Google User",
        rating: review.rating ?? 0,
        text: review.text?.text ?? "",
        relativeTime: review.relativePublishTimeDescription ?? "Recent",
        profileUrl: review.authorAttribution?.uri,
      }))
      .filter((review) => review.text.length > 0)
      .slice(0, 6);

    return {
      placeName: details.displayName?.text,
      rating: details.rating,
      userRatingCount: details.userRatingCount,
      reviews,
    };
  } catch {
    return null;
  }
}

export async function GoogleReviewsSection({ compact = false }: GoogleReviewsSectionProps) {
  const data = await loadGoogleReviews();
  const hasLiveReviews = Boolean(data && data.reviews.length > 0);

  return (
    <section className={`mx-auto w-full max-w-7xl px-4 ${compact ? "py-8 md:px-8" : "py-14 md:px-8"}`}>
      <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Google Reviews</p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">What People Are Saying</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Reviews are managed on Google. Use the links below to open the live reviews view and submit your own
              review directly on Google.
            </p>
            {data?.rating ? (
              <p className="mt-3 text-sm text-ink-soft">
                {data.placeName ?? "Soul 45"} . {data.rating.toFixed(1)} stars from {data.userRatingCount ?? 0} Google
                reviews
              </p>
            ) : null}
          </div>

          <Link
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-accent px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-black transition hover:bg-accent-2"
          >
            View On Google
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-black/30 p-5">
          <p className="text-xs uppercase tracking-[0.16em] text-accent">Reviews View</p>
          <h3 className="mt-3 font-display text-3xl tracking-[0.04em] text-ink">Read And Leave A Review</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-accent px-4 py-2 text-xs uppercase tracking-[0.14em] text-black transition hover:bg-accent-2"
            >
              Read Reviews
            </Link>
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-ink-soft transition hover:border-accent hover:text-accent"
            >
              Leave A Review
            </Link>
          </div>
        </div>

        {hasLiveReviews ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data?.reviews.map((review, index) => (
              <article key={`${review.authorName}-${index}`} className="rounded-2xl border border-border bg-black/20 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">{review.authorName}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-accent">{review.rating.toFixed(1)} / 5</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{review.text}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">{review.relativeTime}</p>
                  {review.profileUrl ? (
                    <Link
                      href={review.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-[0.14em] text-accent hover:text-accent-2"
                    >
                      Profile
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-4 rounded-2xl border border-border bg-black/20 p-5">
            <p className="text-sm leading-relaxed text-ink-soft">
              Live Google review entries are not available yet. Add GOOGLE_MAPS_API_KEY and optionally GOOGLE_PLACE_ID
              in your environment settings, then restart the server.
            </p>
          </div>
        )}
      </article>
    </section>
  );
}
