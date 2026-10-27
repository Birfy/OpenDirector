import assert from "node:assert/strict";
import test from "node:test";
import {
  generationActivities,
  generationPhase,
} from "../src/canvas/generationActivity.ts";
import { waitForResult } from "../src/backend/generation.ts";

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

test("the result-download phase is announced before media is fetched, without reporting completion early", async (t) => {
  const events: string[] = [];
  t.mock.method(globalThis, "fetch", async (url: string) => {
    if (url.includes("/api/data/")) {
      events.push("download");
      return new Response(new Blob(["image"], { type: "image/png" }));
    }
    return Response.json({
      tasks: [
        {
          id: "task",
          nodeId: "node",
          status: "succeeded",
          phase: "save",
          assetId: "asset",
        },
      ],
      assets: [
        { id: "asset", kind: "image", name: "result.png", type: "image/png" },
      ],
    });
  });
  const result = await waitForResult(
    "project",
    "task",
    new AbortController().signal,
    (task) => events.push(task.status),
  );
  events.push("result-ready");
  assert.equal(result.kind, "image");
  assert.deepEqual(events, ["succeeded", "download", "result-ready"]);
});
