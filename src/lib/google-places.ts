const PLACES_API_URL = "https://places.googleapis.com/v1";
const MAX_GALLERY_PHOTOS = 10;

type PlacePhotoResponse = {
  name?: string;
  widthPx?: number;
  heightPx?: number;
  authorAttributions?: Array<{
    displayName?: string;
    uri?: string;
  }>;
};

export type GooglePlaceDetails = {
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
  photos?: PlacePhotoResponse[];
};

export type GooglePlacePhoto = {
  id: string;
  url: string;
  width: number;
  height: number;
  attributions: Array<{
    name: string;
    url?: string;
  }>;
};

async function resolvePlaceId(apiKey: string) {
  const response = await fetch(`${PLACES_API_URL}/places:searchText`, {
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

export async function getGooglePlaceDetails(fieldMask: string): Promise<GooglePlaceDetails | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return null;
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID ?? (await resolvePlaceId(apiKey));

    if (!placeId) {
      return null;
    }

    const response = await fetch(`${PLACES_API_URL}/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": fieldMask,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as GooglePlaceDetails;
  } catch {
    return null;
  }
}

async function getPhotoMediaUrl(apiKey: string, photoName: string) {
  const response = await fetch(`${PLACES_API_URL}/${photoName}/media?maxWidthPx=1200&skipHttpRedirect=true`, {
    headers: { "X-Goog-Api-Key": apiKey },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as { photoUri?: string };
  return data.photoUri ?? null;
}

export async function getGooglePlacePhotos(): Promise<GooglePlacePhoto[]> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return [];
  }

  const details = await getGooglePlaceDetails("photos");
  const photos = details?.photos?.filter((photo): photo is PlacePhotoResponse & { name: string } => Boolean(photo.name)).slice(0, MAX_GALLERY_PHOTOS) ?? [];
  const resolvedPhotos = await Promise.all(
    photos.map(async (photo): Promise<GooglePlacePhoto | null> => {
      const url = await getPhotoMediaUrl(apiKey, photo.name);

      if (!url) {
        return null;
      }

      return {
        id: photo.name,
        url,
        width: photo.widthPx ?? 1200,
        height: photo.heightPx ?? 900,
        attributions: (photo.authorAttributions ?? [])
          .filter((attribution) => Boolean(attribution.displayName))
          .map((attribution) => ({
            name: attribution.displayName as string,
            ...(attribution.uri ? { url: attribution.uri } : {}),
          })),
      };
    }),
  );

  return resolvedPhotos.filter((photo): photo is GooglePlacePhoto => photo !== null);
}