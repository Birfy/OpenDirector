import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import { creationClient } from "../src/backend/creationClient.ts";
import { CreationProjection } from "../src/backend/creationProjection.ts";
import { releaseBackendProject } from "../src/backend/projects.ts";
import {
  createWorkspaceProject,
  initializeWorkspace,
  saveWorkspaceDocument,
  type WorkspaceProject,
} from "../src/backend/workspace.ts";
import {
  createDocument,
  createNode,
  type CanvasDocument,
} from "../src/canvas/model.ts";

/** Entry/session orchestration; projection round-trips are exercised separately. */
function fixture(t: TestContext) {
  const oldFetch = globalThis.fetch;
  const descriptors = ["window", "localStorage"].map(
    (key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)] as const,
  );
  const oldOpen = CreationProjection.prototype.open,
    oldSave = CreationProjection.prototype.save;
  const projects = new Map<string, WorkspaceProject>();
  const documents = new Map<string, CanvasDocument>();
  const storage = new Map<string, string>();
  const location = { pathname: "/", search: "" };
  const calls: { path: string; method: string; body?: any }[] = [];
  let occupied = false,
    offline = false,
    lease: string | null = null;
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { location, setInterval: () => 1, addEventListener() {} },
  });
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (k: string) => storage.get(k) ?? null,
      setItem: (k: string, v: string) => storage.set(k, v),
    },
  });
  CreationProjection.prototype.open = async function () {
    const doc = documents.get(this.client.id)!;
    this.baseline = structuredClone(doc);
    return structuredClone(doc);
  };
  CreationProjection.prototype.save = async function (doc) {
    assert.equal(lease, doc.id);
    documents.set(doc.id, structuredClone(doc));
    return false;
  };
  globalThis.fetch = async (url, options) => {
    const path = String(url),
      method = options?.method ?? "GET";
    const body = options?.body ? JSON.parse(String(options.body)) : undefined;
    calls.push({ path, method, body });
    assert.ok(path.startsWith("/api/creation/"), `Legacy request: ${path}`);
    if (path === "/api/creation/projects")
      return Response.json({
        projects: [...projects.values()],
        warnings: occupied ? ["旧格式工程已保留"] : [],
      });
    if (path.includes("/sessions/")) {
      lease = null;
      return Response.json({ ok: true });
    }
    const id = path.split("/")[4]!;
    if (path.endsWith("/commands")) {
      if (offline) throw new TypeError("offline");
      if (
        (occupied && body.payload.name === "未命名画布") ||
        [...projects.values()].some((p) => p.name === body.payload.name)
      )
        return Response.json({ detail: "已有同名项目" }, { status: 409 });
      projects.set(id, {
        id,
        name: body.payload.name,
        path: `/projects/${body.payload.name}`,
      });
      documents.set(id, { ...createDocument(body.payload.name), id });
      return Response.json({ status: "applied", issues: [], jobIds: [] });
    }
    if (path.includes("/receipts/"))
      return Response.json({ detail: "无回执" }, { status: 404 });
    if (path.endsWith("/canvas"))
      return Response.json({
        snapshot: { project: { id }, eventCursor: 1 },
        edges: [],
      });
    if (path.endsWith("/open")) {
      lease = id;
      return Response.json({ ok: true });
    }
    return Response.json(
      {
        detail: "不支持该工程格式；旧文件不会自动转换。",
        code: "unsupported_format",
      },
      { status: 409 },
    );
  };
  t.after(async () => {
    try {
      await releaseBackendProject();
    } finally {
      for (const id of projects.keys()) creationClient(id).close();
      globalThis.fetch = oldFetch;
      CreationProjection.prototype.open = oldOpen;
      CreationProjection.prototype.save = oldSave;
      for (const [key, descriptor] of descriptors) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else Reflect.deleteProperty(globalThis, key);
      }
    }
  });
  return {
    projects,
    documents,
    storage,
    location,
    calls,
    occupy: () => {
      occupied = true;
    },
    offline: () => {
      offline = true;
    },
  };
}

test("plain entry shares concurrent initialization, then rereads the saved project", async (t) => {
  const f = fixture(t);
  const first = initializeWorkspace();
  assert.equal(initializeWorkspace(), first);
  const initial = await first;
  const updated = {
    ...initial,
    nodes: [createNode("image", { x: 20, y: 40 }, { title: "保存节点" })],
  };
  await saveWorkspaceDocument(updated);
  assert.deepEqual((await initializeWorkspace()).nodes, updated.nodes);
  assert.equal(f.projects.size, 1);
  assert.equal(
    f.storage.get("opendirector.lastUnifiedFilesystemProject"),
    initial.id,
  );
});

test("explicit unsupported project links reject instead of creating or opening another project", async (t) => {
  const f = fixture(t);
  await initializeWorkspace();
  f.calls.length = 0;
  f.location.pathname = `/ai-tool/ai-canvas/${crypto.randomUUID()}`;
  await assert.rejects(initializeWorkspace(), /不支持该工程格式/);
  assert.ok(f.calls.every((call) => call.method === "GET"));
  assert.equal(f.projects.size, 1);
});

test("plain entry ignores the legacy last-project hint and preserves occupied directories", async (t) => {
  const f = fixture(t);
  f.storage.set("opendirector.lastFilesystemProject", crypto.randomUUID());
  f.occupy();
  const doc = await initializeWorkspace();
  assert.equal(doc.title, "未命名画布 (2)");
  assert.equal(f.projects.size, 1);
});

test("failed project creation leaves the existing project writable", async (t) => {
  const f = fixture(t);
  const original = await initializeWorkspace();
  await assert.rejects(
    createWorkspaceProject(original.title, crypto.randomUUID()),
    /已有同名项目/,
  );
  await saveWorkspaceDocument({ ...original, title: "仍可保存" });
  assert.equal(f.documents.get(original.id)?.title, "仍可保存");
});

test("unknown creation outcome is not retried with another project identity", async (t) => {
  const f = fixture(t);
  f.offline();
  await assert.rejects(initializeWorkspace(), /无法连接/);
  assert.equal(
    f.calls.filter((call) => call.path.endsWith("/commands")).length,
    1,
  );
  assert.equal(f.projects.size, 0);
});
