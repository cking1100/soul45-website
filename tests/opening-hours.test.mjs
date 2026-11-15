import assert from "node:assert/strict";
import { test } from "node:test";

import { getOpeningStatus, OPENING_HOURS, formatOpeningTime } from "../src/lib/opening-hours.ts";

test("shows the supplied weekly opening hours", () => {
  assert.deepEqual(OPENING_HOURS.map(({ day, openMinutes }) => [
    day, openMinutes === null ? "Closed" : `${formatOpeningTime(openMinutes)} – 12am`,
  ]), [
    ["Sunday", "2pm – 12am"],
    ["Monday", "Closed"],
    ["Tuesday", "Closed"],
    ["Wednesday", "4:30pm – 12am"],
    ["Thursday", "4:30pm – 12am"],
    ["Friday", "3pm – 12am"],
    ["Saturday", "2pm – 12am"],
  ]);
});

test("changes status at opening and midnight in UK winter time", () => {
  assert.deepEqual(getOpeningStatus(new Date("2026-11-18T16:29:59Z")), { isOpen: false, detail: "Opens today at 4:30pm" });
  assert.deepEqual(getOpeningStatus(new Date("2026-11-18T16:30:00Z")), { isOpen: true, detail: "Closes at midnight" });
  assert.deepEqual(getOpeningStatus(new Date("2026-11-18T23:59:59Z")), { isOpen: true, detail: "Closes at midnight" });
  assert.deepEqual(getOpeningStatus(new Date("2026-11-19T00:00:00Z")), { isOpen: false, detail: "Opens today at 4:30pm" });
});

test("handles closed days and the next open day", () => {
  assert.deepEqual(getOpeningStatus(new Date("2026-11-15T23:59:59Z")), { isOpen: true, detail: "Closes at midnight" });
  assert.deepEqual(getOpeningStatus(new Date("2026-11-16T00:00:00Z")), { isOpen: false, detail: "Opens Wednesday at 4:30pm" });
  assert.deepEqual(getOpeningStatus(new Date("2026-11-17T12:00:00Z")), { isOpen: false, detail: "Opens tomorrow at 4:30pm" });
});

test("uses UK summer time regardless of visitor timezone", () => {
  assert.deepEqual(getOpeningStatus(new Date("2026-07-01T15:29:59Z")), { isOpen: false, detail: "Opens today at 4:30pm" });
  assert.deepEqual(getOpeningStatus(new Date("2026-07-01T15:30:00Z")), { isOpen: true, detail: "Closes at midnight" });
  assert.deepEqual(getOpeningStatus(new Date("2026-07-01T23:00:00Z")), { isOpen: false, detail: "Opens today at 4:30pm" });
});
