type OpeningDay = {
  day: string;
  openMinutes: number | null;
};

// Sunday first, matching the UK weekday returned by Intl.
export const OPENING_HOURS: OpeningDay[] = [
  { day: "Sunday", openMinutes: 14 * 60 },
  { day: "Monday", openMinutes: null },
  { day: "Tuesday", openMinutes: null },
  { day: "Wednesday", openMinutes: 16 * 60 + 30 },
  { day: "Thursday", openMinutes: 16 * 60 + 30 },
  { day: "Friday", openMinutes: 15 * 60 },
  { day: "Saturday", openMinutes: 14 * 60 },
];

const clock = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/London",
  weekday: "long",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

export function formatOpeningTime(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${hour % 12 || 12}${minute ? `:${String(minute).padStart(2, "0")}` : ""}${hour < 12 ? "am" : "pm"}`;
}

export function getOpeningStatus(now: Date) {
  const parts = clock.formatToParts(now);
  const day = parts.find((part) => part.type === "weekday")?.value;
  const hour = parts.find((part) => part.type === "hour")?.value;
  const minute = parts.find((part) => part.type === "minute")?.value;
  const dayIndex = OPENING_HOURS.findIndex((entry) => entry.day === day);

  if (dayIndex < 0 || hour === undefined || minute === undefined) {
    throw new Error("Unable to determine local opening hours.");
  }

  const currentMinutes = Number(hour) * 60 + Number(minute);
  const today = OPENING_HOURS[dayIndex];
  if (today.openMinutes !== null && currentMinutes >= today.openMinutes) {
    return { isOpen: true, detail: "Closes at midnight" };
  }

  for (let offset = 0; offset < OPENING_HOURS.length; offset++) {
    const next = OPENING_HOURS[(dayIndex + offset) % OPENING_HOURS.length];
    if (next.openMinutes !== null && (offset > 0 || currentMinutes < next.openMinutes)) {
      const when = offset === 0 ? "today" : offset === 1 ? "tomorrow" : next.day;
      return { isOpen: false, detail: `Opens ${when} at ${formatOpeningTime(next.openMinutes)}` };
    }
  }

  throw new Error("No opening day is configured.");
}
