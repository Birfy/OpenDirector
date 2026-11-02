import assert from "node:assert/strict";
import test from "node:test";
import {
  floatingReferencePort,
  referencePortMetrics,
  restingReferencePort,
  REFERENCE_PORT_ICON_SIZE,
  REFERENCE_PORT_MAX_SIZE,
  REFERENCE_PORT_SIZE,
} from "../src/canvas/connectionPorts.ts";

const bounds = { x: 100, y: 100, width: 300, height: 300 };

test("resting port keeps its screen size cap and a six pixel gap to the node", () => {
  for (const zoom of [0.08, 0.6, 1, 1.5, 4, 8]) {
    const metrics = referencePortMetrics(zoom);
    assert.ok(
      Math.abs(
        metrics.diameter * zoom -
          Math.min(REFERENCE_PORT_SIZE * zoom, REFERENCE_PORT_MAX_SIZE),
      ) < 1e-8,
    );
    // The drawn plus stays proportional to the circle at every zoom.
    assert.ok(
      Math.abs(
        metrics.iconSize - REFERENCE_PORT_ICON_SIZE * metrics.scale,
      ) < 1e-8,
    );
    assert.ok(REFERENCE_PORT_ICON_SIZE < REFERENCE_PORT_SIZE);
    const resting = restingReferencePort(bounds, "right", zoom);
    assert.ok(
      Math.abs((resting.point.x - 400 - metrics.diameter / 2) * zoom - 6) <
        1e-8,
    );
  }
});

test("enlarged ports keep their node gutter while following the nearby pointer", () => {
  for (const zoom of [0.08, 0.6, 1, 4, 8]) {
    const metrics = referencePortMetrics(zoom);
    const outset = metrics.diameter / 2 + 6 / zoom;
    const rest = restingReferencePort(bounds, "right", zoom);
    const near = { x: rest.point.x + 24 / zoom, y: rest.point.y };
    const active = floatingReferencePort(
      bounds,
      near,
      zoom,
      undefined,
      outset,
    )!;
    assert.equal(active.side, "right");
    assert.ok(Math.abs((active.point.x - rest.point.x) * zoom - 12) < 1e-8);
    const inward = floatingReferencePort(
      bounds,
      { x: 400 + 1 / zoom, y: 250 },
      zoom,
      "right",
      outset,
    )!;
    assert.ok((inward.point.x - 400 - metrics.diameter / 2) * zoom >= 4 - 1e-8);
    assert.equal(
      floatingReferencePort(bounds, { x: 250, y: 250 }, zoom, "right", outset),
      null,
    );
    assert.equal(
      floatingReferencePort(
        bounds,
        { x: rest.point.x + 50 / zoom, y: rest.point.y },
        zoom,
        "right",
        outset,
      ),
      null,
    );
  }
});
