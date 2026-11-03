import assert from "node:assert/strict";
import test from "node:test";
import {
  CACHE_MAX_AGE_MS,
  cachedRequest,
  invalidateCached,
  peekCached,
  prefetchRequest,
} from "../src/backend/requestCache.ts";

const tick = (ms = 2) => new Promise((resolve) => setTimeout(resolve, ms));

test("a repeated read is served from the cache", async () => {
  let reads = 0;
  const read = async () => ++reads;
  assert.equal(await cachedRequest("read:once", read), 1);
  assert.equal(await cachedRequest("read:once", read), 1);
  assert.equal(reads, 1);
});

test("fresh skips the cached value and replaces it", async () => {
  let reads = 0;
  const read = async () => ++reads;
  await cachedRequest("read:fresh", read);
  assert.equal(await cachedRequest("read:fresh", read, { fresh: true }), 2);
  assert.equal(await cachedRequest("read:fresh", read), 2);
  assert.equal(peekCached("read:fresh"), 2);
});

test("an entry older than maxAgeMs is read again", async () => {
  let reads = 0;
  const read = async () => ++reads;
  await cachedRequest("read:age", read, { maxAgeMs: 0 });
  await tick();
  assert.equal(await cachedRequest("read:age", read, { maxAgeMs: 0 }), 2);
});

test("the default age keeps a value available for a reopen", async () => {
  await cachedRequest("read:default", async () => "value");
  assert.equal(CACHE_MAX_AGE_MS, 30_000);
  assert.equal(peekCached("read:default"), "value");
});

test("concurrent readers share one request", async () => {
  let reads = 0;
  let release: (value: string) => void = () => {};
  const read = () => {
    reads += 1;
    return new Promise<string>((resolve) => (release = resolve));
  };
  const first = cachedRequest("read:shared", read);
  const second = cachedRequest("read:shared", read);
  release("shared");
  assert.deepEqual(await Promise.all([first, second]), ["shared", "shared"]);
  assert.equal(reads, 1);
});

test("invalidate drops every key under the prefix", async () => {
  await cachedRequest("library:items?kind=asset", async () => "assets");
  await cachedRequest("library:subjects:", async () => "subjects");
  await cachedRequest("workspace:projects", async () => "projects");
  invalidateCached("library:");
  assert.equal(peekCached("library:items?kind=asset"), undefined);
  assert.equal(peekCached("library:subjects:"), undefined);
  assert.equal(peekCached("workspace:projects"), "projects");
});

test("a failed read is not cached", async () => {
  let calls = 0;
  const read = async () => {
    calls += 1;
    if (calls === 1) throw new Error("offline");
    return "recovered";
  };
  await assert.rejects(cachedRequest("read:failure", read), /offline/);
  assert.equal(await cachedRequest("read:failure", read), "recovered");
  assert.equal(calls, 2);
});

test("prefetch warms the cache and ignores a failure", async () => {
  prefetchRequest("prefetch:value", async () => "warm");
  await tick();
  assert.equal(peekCached("prefetch:value"), "warm");

  assert.doesNotThrow(() =>
    prefetchRequest("prefetch:failure", async () => {
      throw new Error("offline");
    }),
  );
  await tick();
  assert.equal(peekCached("prefetch:failure"), undefined);
});

test("prefetch leaves a fresh entry alone", async () => {
  let reads = 0;
  const read = async () => ++reads;
  prefetchRequest("prefetch:existing", read);
  await tick();
  prefetchRequest("prefetch:existing", read);
  await tick();
  assert.equal(reads, 1);
});
