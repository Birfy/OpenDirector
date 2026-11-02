import assert from "node:assert/strict";
import test from "node:test";
import {
  generationActivities,
  generationPhase,
} from "../src/canvas/generationActivity.ts";

test("queued and terminal task statuses take precedence over stale backend phases", () => {
  assert.equal(generationPhase({ status: "queued", phase: "poll" }), "queued");
  assert.equal(
    generationPhase({ status: "running", phase: "poll" }),
    "generating",
  );
  assert.equal(
    generationPhase({ status: "running", phase: "download" }),
    "finishing",
  );
  for (const status of [
    "failed",
    "cancelled",
    "interrupted",
    "succeeded",
  ] as const)
    assert.equal(generationPhase({ status, phase: "poll" }), null);
});

test("batch activity stays running until its last task finishes and is scoped to its canvas", () => {
  const runs = [
    { documentId: "a", nodeId: "n", phase: "queued" as const },
    { documentId: "a", nodeId: "n", phase: "generating" as const },
    { documentId: "b", nodeId: "n", phase: "finishing" as const },
  ];
  assert.deepEqual(generationActivities(runs, "a").get("n"), {
    count: 2,
    phase: "generating",
  });
  assert.deepEqual(generationActivities(runs.slice(1), "a").get("n"), {
    count: 1,
    phase: "generating",
  });
  assert.equal(generationActivities(runs.slice(2), "a").size, 0);
  assert.deepEqual(generationActivities(runs, "b").get("n"), {
    count: 1,
    phase: "finishing",
  });
  assert.equal(generationActivities(runs, "other").size, 0);
});
