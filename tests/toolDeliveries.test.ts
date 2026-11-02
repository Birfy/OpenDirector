import assert from "node:assert/strict";
import test from "node:test";
import {
  deliverTool,
  pendingToolDelivery,
} from "../src/backend/toolDeliveries.ts";

test("lost tool acceptance queries the original task without another POST", async (t) => {
  const original = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = original;
  });
  const project = crypto.randomUUID(),
    item = crypto.randomUUID(),
    id = crypto.randomUUID();
  const seen: string[] = [];
  globalThis.fetch = async (input, options) => {
    seen.push(`${options?.method ?? "GET"} ${input}`);
    if (options?.method === "POST") throw new TypeError("lost response");
    return Response.json({ id, status: "queued" });
  };
  assert.equal(
    (
      await deliverTool(project, item, {
        id,
        parameters: { prompt: "original" },
      })
    ).id,
    id,
  );
  assert.equal(seen.length, 2);
  assert.ok(seen[1]!.endsWith(id));
  assert.equal(pendingToolDelivery(project, item), undefined);
});

test("unknown delivery survives reload, blocks a new ID and explicitly replays exact input", async (t) => {
  const original = globalThis.fetch;
  const host = globalThis as unknown as Record<string, unknown>;
  const storage = Object.getOwnPropertyDescriptor(host, "sessionStorage");
  const saved = new Map<string, string>();
  Object.defineProperty(host, "sessionStorage", {
    configurable: true,
    value: {
      getItem: (k: string) => saved.get(k) ?? null,
      setItem: (k: string, v: string) => saved.set(k, v),
      removeItem: (k: string) => saved.delete(k),
    },
  });
  t.after(() => {
    globalThis.fetch = original;
    if (storage) Object.defineProperty(host, "sessionStorage", storage);
    else delete host.sessionStorage;
  });
  const project = crypto.randomUUID(),
    item = crypto.randomUUID(),
    id = crypto.randomUUID();
  const body = {
    id,
    draft: { editorRevision: 2 },
    parameters: { prompt: "fixed" },
  };
  globalThis.fetch = async () => {
    throw new TypeError("offline");
  };
  await assert.rejects(deliverTool(project, item, body));
  assert.deepEqual(pendingToolDelivery(project, item), body);
  await assert.rejects(
    deliverTool(project, item, { id: crypto.randomUUID() }),
    /尚未确认/,
  );
  // Simulate a new page module reading persisted transport state.
  const reloaded = await import(
    `../src/backend/toolDeliveries.ts?reload=${id}`
  );
  assert.deepEqual(reloaded.pendingToolDelivery(project, item), body);
  globalThis.fetch = async (_input, options) => {
    assert.deepEqual(JSON.parse(String(options?.body)), body);
    return Response.json({ id });
  };
  await reloaded.deliverTool(project, item, {
    id,
    parameters: { prompt: "must not replace original" },
  });
  assert.equal(saved.size, 0);
});

test("definitive rejection releases the intent for a corrected attempt", async (t) => {
  const original = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = original;
  });
  const project = crypto.randomUUID(),
    item = crypto.randomUUID();
  globalThis.fetch = async () =>
    Response.json({ detail: "stale source" }, { status: 409 });
  await assert.rejects(
    deliverTool(project, item, { id: crypto.randomUUID() }),
    /stale source/,
  );
  assert.equal(pendingToolDelivery(project, item), undefined);
});

test("a retry rejection does not erase an earlier unknown acceptance", async (t) => {
  const original = globalThis.fetch;
  t.after(() => {
    globalThis.fetch = original;
  });
  const project = crypto.randomUUID(),
    item = crypto.randomUUID(),
    id = crypto.randomUUID();
  globalThis.fetch = async () => {
    throw new TypeError("offline");
  };
  await assert.rejects(deliverTool(project, item, { id }));
  globalThis.fetch = async (_input, options) =>
    Response.json(
      { detail: "session conflict" },
      { status: options?.method === "POST" ? 409 : 404 },
    );
  await assert.rejects(deliverTool(project, item, { id }), /session conflict/);
  assert.deepEqual(pendingToolDelivery(project, item), { id });
  globalThis.fetch = async () => Response.json({ id });
  await deliverTool(project, item, { id });
  assert.equal(pendingToolDelivery(project, item), undefined);
});
