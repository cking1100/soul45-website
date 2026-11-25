import assert from "node:assert/strict";
import { test } from "node:test";

import { getUpcomingEvents } from "../src/lib/events.ts";

test("lists Strawberry Jams as a one-off until it ends", () => {
  const event = getUpcomingEvents(new Date(2026, 10, 28, 19)).find(
    ({ slug }) => slug === "strawberry-jams",
  );

  assert.ok(event);
  assert.equal(event.dateLabel, "Saturday 28th November 2026");
  assert.equal(event.timeLabel, "19:00 - 00:00");
  assert.equal(event.image, "/images/SJams281126.png");
  assert.match(event.summary, /Tech House, Deep House and Garage/);
  assert.equal(event.isResidency, undefined);
  assert.equal(event.recurrence, undefined);
  assert.equal(
    getUpcomingEvents(new Date(2026, 10, 29, 0)).some(
      ({ slug }) => slug === "strawberry-jams",
    ),
    false,
  );
});
