import { test } from "node:test";
import assert from "node:assert/strict";
import { createJob, runLocalGeneration } from "../src/domain/generation.ts";

test("submission rejects blank prompts and captures its own reference list", () => {
  assert.throws(() =>
    createJob({ prompt: "  ", mode: "image", aspectRatio: "1:1" }),
  );
  const referenceNames = ["example.png"];
  const job = createJob({
    prompt: "  Hello  ",
    mode: "image",
    aspectRatio: "1:1",
    referenceNames,
  });
  referenceNames.push("later.png");
  assert.equal(job.prompt, "Hello");
  assert.deepEqual(job.referenceNames, ["example.png"]);
});

test("local job completes without mutating submitted state", async () => {
  const job = createJob({
    prompt: "Hello",
    mode: "video",
    aspectRatio: "16:9",
  });
  const completed = await runLocalGeneration(
    job,
    new AbortController().signal,
    1,
  );
  assert.equal(completed.id, job.id);
  assert.equal(completed.status, "completed");
  assert.equal(job.status, "running");
});

test("cancellation before and during a run never reports completion", async () => {
  const job = createJob({ prompt: "Hello", mode: "agent", aspectRatio: "1:1" });
  const alreadyAborted = new AbortController();
  alreadyAborted.abort();
  await assert.rejects(runLocalGeneration(job, alreadyAborted.signal), {
    name: "AbortError",
  });
  const controller = new AbortController();
  const pending = runLocalGeneration(job, controller.signal, 1000);
  controller.abort();
  await assert.rejects(pending, { name: "AbortError" });
});
