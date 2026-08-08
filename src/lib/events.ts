export type EventEntry = {
  slug: string;
  title: string;
  summary: string;
  dateLabel: string;
  timeLabel: string;
  artistsLabel: string;
  image: string;
  ticketUrl?: string;
  isPlaceholder: boolean;
};

export const events: EventEntry[] = [
  {
    slug: "burnt-toast",
    title: "Burnt Toast",
    summary:
      "Burnt Toast is back! After a really great first night they will be doing the last Friday of the month going forward. Make sure you get yourselves down as it is a really great vibe with 3 fantastic DJs playing vinyl.",
    dateLabel: "Last Friday of every month",
    timeLabel: "Monthly residency",
    artistsLabel: "3 fantastic DJs playing vinyl",
    image: "/images/Burnt-toast.png",
    isPlaceholder: false,
  },
  {
    slug: "open-decks",
    title: "Open Decks",
    summary:
      "Play your records and most importantly, listen to other people's records. Every Thursday from 19:00.",
    dateLabel: "Every Thursday",
    timeLabel: "From 19:00",
    artistsLabel: "Open decks community session",
    image: "/images/open-decks.png",
    isPlaceholder: false,
  },
  {
    slug: "strawberry-jams",
    title: "Strawberry Jams",
    summary:
      "Buzzing to announce our debut set. Catch us 7pm till late at Soul 45. Spinning some deep grooves and bumping rhythms.",
    dateLabel: "Debut set",
    timeLabel: "7pm till late",
    artistsLabel: "Strawberry Jams",
    image: "/images/strawberry-jams.png",
    isPlaceholder: false,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((entry) => entry.slug === slug);
}
