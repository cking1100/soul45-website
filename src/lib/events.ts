export type EventEntry = {
  slug: string;
  title: string;
  summary: string;
  body?: string;
  dateLabel: string;
  timeLabel: string;
  artistsLabel: string;
  image: string;
  ticketUrl?: string;
  startAt?: string;
  endAt?: string;
  recurrence?: EventRecurrence;
  isPlaceholder: boolean;
};

type EventRecurrence =
  | {
      cadence: "weekly";
      weekday: number;
      startsOn: string;
    }
  | {
      cadence: "monthly";
      occurrence: "last";
      weekday: number;
      startsOn: string;
    };

const eventEntries: EventEntry[] = [
  {
    slug: "burnt-toast",
    title: "Burnt Toast",
    summary:
      "Burnt Toast is back! After a really great first night they will be doing the last Friday of the month going forward. Make sure you get yourselves down as it is a really great vibe with 3 fantastic DJs playing vinyl.",
    dateLabel: "Last Friday of every month",
    timeLabel: "Monthly residency",
    artistsLabel: "3 fantastic DJs playing vinyl",
    image: "/images/Burnt-toast.png",
    recurrence: {
      cadence: "monthly",
      occurrence: "last",
      weekday: 5,
      startsOn: "2026-09-25T19:00:00",
    },
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
    recurrence: {
      cadence: "weekly",
      weekday: 4,
      startsOn: "2026-09-10T19:00:00",
    },
    isPlaceholder: false,
  },
  {
    slug: "strawberry-jams",
    title: "STRAWBERRY JAMS",
    summary:
      "Monthly residency on the last Saturday of every month. Catch Strawberry Jams 7pm till late at Soul 45, spinning deep grooves and bumping rhythms.",
    dateLabel: "Last Saturday of every month",
    timeLabel: "Monthly residency / 7pm till late",
    artistsLabel: "Strawberry Jams",
    image: "/images/strawberry-residency.png",
    recurrence: {
      cadence: "monthly",
      occurrence: "last",
      weekday: 6,
      startsOn: "2026-09-26T19:00:00",
    },
    isPlaceholder: false,
  },
  {
    slug: "lznby-x-zachariah",
    title: "LZNBY x ZACHARIAH",
    summary: "Join LZNBY and Zachariah at Soul 45 for a Saturday night session running through to midnight.",
    dateLabel: "Saturday 12th December 2026",
    timeLabel: "6:00PM - MIDNIGHT",
    artistsLabel: "LZNBY x ZACHARIAH",
    image: "/images/lznbyxzachariahdec.png",
    startAt: "2026-12-12T18:00:00",
    endAt: "2026-12-13T00:00:00",
    isPlaceholder: false,
  },
];

export const events: EventEntry[] = [...eventEntries].sort(
  (firstEvent, secondEvent) => getSortTime(firstEvent) - getSortTime(secondEvent),
);

export function getEventBySlug(slug: string) {
  return events.find((entry) => entry.slug === slug);
}

function getSortTime(event: EventEntry, referenceDate = new Date()) {
  if (event.startAt) {
    return parseLocalDate(event.startAt).getTime();
  }

  if (event.recurrence) {
    return getNextOccurrence(event.recurrence, referenceDate).getTime();
  }

  return Number.MAX_SAFE_INTEGER;
}

function getNextOccurrence(recurrence: EventRecurrence, referenceDate: Date) {
  const startsOn = parseLocalDate(recurrence.startsOn);
  const referenceDay = startOfDay(referenceDate);

  if (recurrence.cadence === "weekly") {
    const daysUntilNext = (recurrence.weekday - referenceDay.getDay() + 7) % 7;
    let candidate = addDays(referenceDay, daysUntilNext);

    while (candidate < startOfDay(startsOn)) {
      candidate = addDays(candidate, 7);
    }

    return withTime(candidate, startsOn);
  }

  let candidate = getLastWeekdayOfMonth(referenceDay.getFullYear(), referenceDay.getMonth(), recurrence.weekday);

  if (candidate < referenceDay || candidate < startOfDay(startsOn)) {
    const nextMonth = new Date(referenceDay.getFullYear(), referenceDay.getMonth() + 1, 1);
    candidate = getLastWeekdayOfMonth(nextMonth.getFullYear(), nextMonth.getMonth(), recurrence.weekday);
  }

  return withTime(candidate, startsOn);
}

function getLastWeekdayOfMonth(year: number, month: number, weekday: number) {
  const candidate = new Date(year, month + 1, 0);
  const daysBack = (candidate.getDay() - weekday + 7) % 7;
  candidate.setDate(candidate.getDate() - daysBack);

  return startOfDay(candidate);
}

function parseLocalDate(value: string) {
  const [datePart, timePart = "00:00:00"] = value.split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hours = 0, minutes = 0, seconds = 0] = timePart.split(":").map(Number);

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);

  return nextDate;
}

function withTime(date: Date, timeSource: Date) {
  const nextDate = new Date(date);
  nextDate.setHours(timeSource.getHours(), timeSource.getMinutes(), timeSource.getSeconds(), 0);

  return nextDate;
}
