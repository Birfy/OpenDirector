import assert from "node:assert/strict";
import test from "node:test";
import { SaveQueue } from "../src/canvas/saveQueue.ts";

test("slow saves keep only the latest unstarted automatic snapshot", async () => {
  const seen: number[] = [];
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  const queue = new SaveQueue<number>(async (value) => {
    seen.push(value);
    if (value === 0) await gate;
    return true;
  });
  assert.equal(queue.busy, false);
  const first = queue.enqueue(0, "project-a");
  await Promise.resolve(); // Start the first write; it cannot be replaced.
  const second = queue.enqueue(1, "project-a");
  const latest = queue.enqueue(2, "project-a");
  assert.equal(second, latest);
  assert.equal(queue.busy, true);
  assert.deepEqual(seen, [0]);
  release();
  assert.deepEqual(await Promise.all([first, second, latest]), [
    true,
    true,
    true,
  ]);
  assert.deepEqual(seen, [0, 2]);
  assert.equal(queue.busy, false);
});

test("explicit saves and project changes are barriers to coalescing", async () => {
  const seen: number[] = [];
  const queue = new SaveQueue<number>(async (value) => {
    seen.push(value);
    return true;
  });
  const requests = [
    queue.enqueue(1, "project-a"),
    queue.enqueue(2), // Undo/submission/switch must save this exact snapshot.
    queue.enqueue(3, "project-a"),
    queue.enqueue(4, "project-b"),
    queue.enqueue(5, "project-a"),
    queue.enqueue(6, "project-a"),
  ];
  await Promise.all(requests);
  assert.deepEqual(seen, [1, 2, 3, 4, 6]);
  assert.equal(await queue.wait(), true);
});

test("a failed write does not strand later saves or waiters", async () => {
  const queue = new SaveQueue<number>(async (value) => {
    if (value === 1) throw new Error("disk failure");
    return value !== 2;
  });
  const failed = queue.enqueue(1);
  const next = queue.enqueue(2);
  await assert.rejects(failed, /disk failure/);
  assert.equal(await next, false);
  assert.equal(await queue.wait(), false);
  assert.equal(queue.busy, false);
  assert.equal(await queue.enqueue(3), true);
});
