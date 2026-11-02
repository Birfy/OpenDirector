import assert from "node:assert/strict";
import { test } from "node:test";
import {
  clampSeekTime,
  formatMediaTime,
} from "../src/canvas/mediaPlayback.ts";

test("formatMediaTime pads minutes and seconds", () => {
  assert.equal(formatMediaTime(0), "00:00");
  assert.equal(formatMediaTime(2), "00:02");
  assert.equal(formatMediaTime(4), "00:04");
  assert.equal(formatMediaTime(59), "00:59");
  assert.equal(formatMediaTime(60), "01:00");
  assert.equal(formatMediaTime(125), "02:05");
});

test("formatMediaTime keeps the hour only when it is needed", () => {
  assert.equal(formatMediaTime(3599), "59:59");
  assert.equal(formatMediaTime(3600), "1:00:00");
  assert.equal(formatMediaTime(3725), "1:02:05");
});

test("formatMediaTime tolerates unknown media durations", () => {
  assert.equal(formatMediaTime(Number.NaN), "00:00");
  assert.equal(formatMediaTime(Number.POSITIVE_INFINITY), "00:00");
  assert.equal(formatMediaTime(-3), "00:00");
});

test("formatMediaTime floors fractional seconds instead of rounding", () => {
  assert.equal(formatMediaTime(1.99), "00:01");
  assert.equal(formatMediaTime(0.4), "00:00");
});

test("clampSeekTime keeps a request inside the media range", () => {
  assert.equal(clampSeekTime(2.5, 4), 2.5);
  assert.equal(clampSeekTime(-1, 4), 0);
  assert.equal(clampSeekTime(10, 4), 4);
  assert.equal(clampSeekTime(0, 4), 0);
  assert.equal(clampSeekTime(4, 4), 4);
});

test("clampSeekTime refuses to seek when the duration is unknown", () => {
  assert.equal(clampSeekTime(3, 0), 0);
  assert.equal(clampSeekTime(3, Number.NaN), 0);
  assert.equal(clampSeekTime(3, Number.POSITIVE_INFINITY), 0);
  // Not-yet-loaded metadata reports NaN for the duration.
  assert.equal(clampSeekTime(Number.NaN, 4), 0);
});

test("clampSeekTime accepts the boundaries produced by a ratio multiply", () => {
  const duration = 4;
  assert.equal(clampSeekTime(0 * duration, duration), 0);
  assert.equal(clampSeekTime(1 * duration, duration), 4);
  // A pointer slightly outside the track must not overshoot.
  assert.equal(clampSeekTime(1.2 * duration, duration), 4);
  assert.equal(clampSeekTime(-0.2 * duration, duration), 0);
});
