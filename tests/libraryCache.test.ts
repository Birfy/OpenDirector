import assert from "node:assert/strict";
import test from "node:test";
import { invalidateCached } from "../src/backend/requestCache.ts";
import { canvasSources } from "../src/backend/canvasSources.ts";
import { listWorkspaceProjects } from "../src/backend/workspace.ts";
import { listItems, renameItem } from "../src/canvas/library/libraryClient.ts";

/** The cache wraps these clients; every test starts from an empty page cache. */
function stub(t: test.TestContext, body: unknown = []) {
  invalidateCached();
  const old = globalThis.fetch;
  const calls: { path: string; method: string }[] = [];
  globalThis.fetch = (async (url: string, options?: RequestInit) => {
    calls.push({ path: String(url), method: options?.method ?? "GET" });
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  }) as typeof fetch;
  t.after(() => {
    globalThis.fetch = old;
    invalidateCached();
  });
  return calls;
}

test("the asset list is read once for a repeated filter", async (t) => {
  const calls = stub(t);
  await listItems({ kind: "asset", state: "active" });
  await listItems({ kind: "asset", state: "active" });
  assert.equal(calls.length, 1);
  assert.match(calls[0]!.path, /\/api\/library\/items\?kind=asset&state=active$/);

  await listItems({ kind: "asset", state: "active", mediaKind: "image" });
  assert.equal(calls.length, 2);
});

test("fresh asks the server again", async (t) => {
  const calls = stub(t);
  await listItems({ kind: "asset" });
  await listItems({ kind: "asset" }, { fresh: true });
  assert.equal(calls.length, 2);
});

test("a library write drops the cached lists", async (t) => {
  const calls = stub(t);
  await listItems({ kind: "asset", state: "active" });
  await renameItem("item-a", "新名字");
  await listItems({ kind: "asset", state: "active" });
  assert.deepEqual(
    calls.map((call) => call.method),
    ["GET", "PATCH", "GET"],
  );
});

test("the project list is read once while it stays fresh", async (t) => {
  const calls = stub(t, { projects: [], warnings: [] });
  await listWorkspaceProjects();
  await listWorkspaceProjects();
  assert.equal(calls.length, 1);
  assert.equal(calls[0]!.path, "/api/creation/projects");
});

test("canvas sources are cached per project", async (t) => {
  const calls = stub(t);
  await canvasSources("project-a");
  await canvasSources("project-a");
  assert.equal(calls.length, 1);
  await canvasSources("project-b");
  assert.equal(calls.length, 2);
});
