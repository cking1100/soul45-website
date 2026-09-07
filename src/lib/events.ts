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
    slug: "swagyu-all-night",
    title: "SWAGYU — ALL NIGHT",
    summary: "SWAGYU takes over Soul 45 for an all-night Saturday session.",
    dateLabel: "Saturday 19th September 2026",
    timeLabel: "ALL NIGHT",
    artistsLabel: "SWAGYU",
    image: "/images/swagyu.png",
    startAt: "2026-09-19T00:00:00",
    isPlaceholder: false,
  },
  {
    slug: "hotdigs001",
    title: "HOTDIGS001",
    summary:
      "SAT 26TH SEPT 📆\n2PM-MIDNIGHT ⏰\nSOUL 45 LISTENING BAR 📍\n[HOTDIGS001] 🌍",
    body:
      "SAT 26TH SEPT 📆\n2PM-MIDNIGHT ⏰\nSOUL 45 LISTENING BAR 📍\n[HOTDIGS001] 🌍\n\nOn the 26th of September our first edition of HotDigs will be underway at Soul45 Listening Bar down Newland Avenue where we have Groovy Boothy and hotdog george down for an extended B2B. 🎧\n\nAt HotDigs, our aim is primarily focussed on crate digging and internet scouring, finding songs you wouldn’t have otherwise known existed. Don’t expect too many singalongs, we’re here to make you dance. 🕺💃\n\nThis is one for the heads. If you want an ID on a track, ask the DJs for it. If you’re another DJ, make yourself known, we’re looking to find more DJs for future events. 👥\n\nThe Bar will be open from 2pm. 🍺\n\nCome down and enjoy some good vinyl and digital electronic dance music. 💽🎚️🎛️🎚️💽\n\nSoul45 Listening Bar\n45 Newland Avenue\nHU5 3BE",
    dateLabel: "SAT 26TH SEPT 📆",
    timeLabel: "2PM-MIDNIGHT ⏰",
    artistsLabel: "[HOTDIGS001] 🌍",
    image: "/images/hotdigs.png",
    startAt: "2026-09-26T14:00:00",
    endAt: "2026-09-27T00:00:00",
    isPlaceholder: false,
  },
  {
    slug: "lznby-x-zachariah",
    title: "LZNBY x ZACHARIAH",
    summary: "LZNBY x ZACHARIAH land at Soul 45 for a Saturday evening session running through to midnight.",
    dateLabel: "Saturday 17th October 2026",
    timeLabel: "5:30PM - MIDNIGHT",
    artistsLabel: "LZNBY x ZACHARIAH",
    image: "/images/LZNBYxzachariah.png",
    startAt: "2026-10-17T17:30:00",
    endAt: "2026-10-18T00:00:00",
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
