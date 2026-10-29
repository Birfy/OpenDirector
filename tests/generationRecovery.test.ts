import assert from "node:assert/strict";
import { test } from "node:test";
import {
  generationTaskActions,
  parseGenerationJob,
  reconcileGenerationJobs,
  type GenerationJob,
} from "../src/canvas/generationHistory.ts";
import { recoverGeneration } from "../src/backend/generation.ts";

const job: GenerationJob = {
  id: "history",
  nodeId: "node",
  title: "video",
  time: "12:00",
  status: "interrupted",
  taskId: "original-task",
};
const remote = {
  protocol: "vllm_omni",
  externalTaskId: "original-remote",
  recovery: "remote",
  resumeAllowed: true,
};

test("history retains original task identity and offers explicit recovery/cancellation", () => {
  const [next] = reconcileGenerationJobs(
    [job],
    [
      {
        id: "original-task",
        status: "interrupted",
        error: "query timed out",
        ...remote,
      },
    ],
  );
  assert.equal(next!.taskId, "original-task");
  assert.equal(next!.message, "query timed out");
  const saved = parseGenerationJob(next);
  assert.deepEqual(saved.serviceTask, remote);
  assert.deepEqual(generationTaskActions(saved), {
    recover: true,
    cancel: true,
  });
  assert.equal(saved.outputs, undefined);
  assert.deepEqual(generationTaskActions({ ...saved, status: "failed" }), {
    recover: true,
    cancel: true,
  });
});

test("uncertain submissions and completed/failed jobs cannot be resubmitted through recovery actions", () => {
  for (const value of [
    job,
    {
      ...job,
      serviceTask: {
        ...remote,
        externalTaskId: null,
        recovery: "review",
        resumeAllowed: false,
      },
    },
    {
      ...job,
      status: "failed" as const,
      serviceTask: { ...remote, recovery: "retry", resumeAllowed: false },
    },
    { ...job, status: "succeeded" as const, serviceTask: remote },
  ])
    assert.deepEqual(generationTaskActions(value), {
      recover: false,
      cancel: false,
    });
  assert.deepEqual(
    generationTaskActions({
      ...job,
      serviceTask: { ...remote, recovery: "download" },
    }),
    { recover: true, cancel: false },
  );
  assert.throws(() =>
    parseGenerationJob({
      ...job,
      serviceTask: { ...remote, resumeAllowed: "yes" },
    }),
  );
});

test("a resumed task rejoins the queue and successful local results are not downgraded", () => {
  const [queued] = reconcileGenerationJobs(
    [job],
    [
      {
        id: "original-task",
        status: "queued",
        error: null,
        ...remote,
      },
    ],
  );
  assert.equal(queued!.status, "running");
  assert.match(queued!.message!, /前序任务/);
  assert.deepEqual(generationTaskActions(queued!), {
    recover: false,
    cancel: false,
  });
  const [done] = reconcileGenerationJobs(
    [{ ...job, status: "succeeded" }],
    [
      {
        id: "original-task",
        status: "queued",
        error: null,
        ...remote,
      },
    ],
  );
  assert.equal(done!.status, "succeeded");
});

test("continue querying calls only the existing task's recovery endpoint", async () => {
  const fetch = globalThis.fetch;
  const calls: { url: string; options?: RequestInit }[] = [];
  globalThis.fetch = async (url, options) => {
    calls.push({ url: String(url), options });
    return Response.json({ id: "original-task", status: "queued" });
  };
  try {
    await recoverGeneration("project", "original-task");
    assert.equal(calls.length, 1);
    assert.equal(
      calls[0]!.url,
      "/api/projects/project/tasks/original-task/recover",
    );
    assert.equal(calls[0]!.options?.method, "POST");
    assert.equal(calls[0]!.options?.body, undefined);
  } finally {
    globalThis.fetch = fetch;
  }
});
