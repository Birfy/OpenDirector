import assert from "node:assert/strict";
import test from "node:test";
import { ApiError, json, storageRequest } from "../src/backend/api.ts";

test("lock retries replay identical command bytes and stop after three attempts", async () => {
  const original = globalThis.fetch;
  const bodies: string[] = [];
  const command = {
    commandId: crypto.randomUUID(),
    type: "creation.batch",
    payload: {},
  };
  globalThis.fetch = async (_url, options) => {
    bodies.push(options!.body as string);
    return Response.json(
      { detail: "busy", code: "storage_busy" },
      { status: 409 },
    );
  };
  try {
    await assert.rejects(
      storageRequest("/test", json("POST", command)),
      (error: unknown) =>
        error instanceof ApiError && error.code === "storage_busy",
    );
    assert.equal(bodies.length, 3);
    assert.ok(bodies.every((body) => body === JSON.stringify(command)));
  } finally {
    globalThis.fetch = original;
  }
});

test("a transient lock recovers without exposing a save error", async () => {
  const original = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () =>
    ++calls === 1
      ? Response.json({ detail: "busy", code: "storage_busy" }, { status: 409 })
      : Response.json({ status: "applied" });
  try {
    assert.deepEqual(await storageRequest("/test"), { status: "applied" });
    assert.equal(calls, 2);
  } finally {
    globalThis.fetch = original;
  }
});

test("version conflicts, disk failures and unknown delivery are never auto-retried", async () => {
  const original = globalThis.fetch;
  try {
    for (const [status, code] of [
      [409, "revision_conflict"],
      [409, "command_conflict"],
      [503, "storage_unavailable"],
      [409, "operation_rejected"],
    ] as const) {
      let calls = 0;
      globalThis.fetch = async () => {
        calls++;
        return Response.json({ detail: code, code }, { status });
      };
      await assert.rejects(storageRequest("/test"));
      assert.equal(calls, 1);
    }
    let calls = 0;
    globalThis.fetch = async () => {
      calls++;
      throw new TypeError("connection lost");
    };
    await assert.rejects(storageRequest("/test"));
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = original;
  }
});

test("cancelling a lock retry prevents its next request", async () => {
  const original = globalThis.fetch;
  const controller = new AbortController();
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return Response.json(
      { detail: "busy", code: "storage_busy" },
      { status: 409 },
    );
  };
  try {
    const pending = storageRequest("/test", { signal: controller.signal });
    const rejection = assert.rejects(
      pending,
      (error: unknown) => error === controller.signal.reason,
    );
    setTimeout(() => controller.abort(), 10);
    await rejection;
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = original;
  }
});
