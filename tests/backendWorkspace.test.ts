import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import {
  createDocument,
  createNode,
  type CanvasDocument,
} from "../src/canvas/model.ts";
import { rememberChat } from "../src/backend/chatDrafts.ts";
import { releaseBackendProject } from "../src/backend/projects.ts";
import {
  createWorkspaceProject,
  importWorkspaceDocument,
  initializeWorkspace,
  openWorkspaceProject,
  saveWorkspaceDocument,
  type WorkspaceProject,
} from "../src/backend/workspace.ts";

/** API boundary with the server's one-project-per-session lease and CAS writes. */
function fixture(t: TestContext) {
  const fetchBefore = globalThis.fetch;
  const windowBefore = Object.getOwnPropertyDescriptor(globalThis, "window");
  const storageBefore = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  const projects = new Map<string, WorkspaceProject>();
  const documents = new Map<
    string,
    { revision: number; document: CanvasDocument | null }
  >();
  const calls: string[] = [];
  const storage = new Map<string, string>();
  const location = { pathname: "/", search: "" };
  let lease: string | null = null;
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { location, setInterval: () => 1, addEventListener() {} },
  });
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
    },
  });
  const conflict = () =>
    Response.json(
      { detail: "项目已关闭或会话已过期，请重新打开项目后保存。" },
      { status: 409 },
    );
  globalThis.fetch = async (input, options) => {
    const path = String(input),
      method = options?.method ?? "GET";
    calls.push(`${method} ${path}`);
    if (path === "/api/projects" && method === "GET")
      return Response.json({ projects: [...projects.values()], warnings: [] });
    if (path === "/api/projects" && method === "POST") {
      const value = JSON.parse(options!.body as string) as {
        id: string;
        name: string;
      };
      if ([...projects.values()].some((project) => project.name === value.name))
        return Response.json({ detail: "已有同名项目" }, { status: 409 });
      const project = { ...value, path: `/projects/${value.name}` };
      projects.set(value.id, project);
      documents.set(value.id, { revision: 0, document: null });
      lease = value.id;
      return Response.json(project);
    }
    const projectMatch = path.match(
      /^\/api\/projects\/([^/]+)\/(open|workspace)$/,
    );
    if (projectMatch) {
      const [, id, action] = projectMatch;
      if (action === "open") {
        lease = id!;
        return Response.json(projects.get(id!));
      }
      const current = documents.get(id!)!;
      if (method === "GET") return Response.json(current);
      if (lease !== id) return conflict();
      const value = JSON.parse(options!.body as string);
      if (value.revision !== current.revision) return conflict();
      const saved = {
        revision: current.revision + 1,
        document: value.document,
      };
      documents.set(id!, saved);
      return Response.json(saved);
    }
    const draft = path.match(/^\/api\/data\/([^/]+)\/draft$/);
    if (draft)
      return lease === draft[1] ? Response.json({ ok: true }) : conflict();
    if (path.startsWith("/api/sessions/") && method === "DELETE") {
      lease = null;
      return Response.json({ ok: true });
    }
    if (path.endsWith("/close") && method === "POST") {
      const value = JSON.parse(options!.body as string);
      const draftSaved = lease === value.projectId;
      if (draftSaved) lease = null;
      return Response.json({ ok: true, draftSaved });
    }
    throw new Error(`Unexpected request ${method} ${path}`);
  };
  t.after(async () => {
    try {
      await releaseBackendProject();
    } finally {
      globalThis.fetch = fetchBefore;
      for (const [key, descriptor] of [
        ["window", windowBefore],
        ["localStorage", storageBefore],
      ] as const) {
        if (descriptor) Object.defineProperty(globalThis, key, descriptor);
        else Reflect.deleteProperty(globalThis, key);
      }
    }
  });
  return { projects, documents, calls, location };
}

test("a later workspace mount rereads saved content while concurrent initialization shares work", async (t) => {
  const state = fixture(t);
  const first = initializeWorkspace();
  assert.equal(initializeWorkspace(), first);
  const initial = await first;
  const updated = {
    ...initial,
    nodes: [createNode("image", { x: 20, y: 40 }, { title: "已上传图片" })],
  };
  await saveWorkspaceDocument(updated);
  state.location.pathname = `/ai-tool/ai-canvas/${initial.id}`;
  const reopened = await initializeWorkspace();
  assert.deepEqual(reopened.nodes, updated.nodes);
  assert.equal(state.projects.size, 1);
  assert.deepEqual(
    state.documents.get(initial.id)!.document!.nodes,
    updated.nodes,
  );
});

test("importing an example atomically saves and closes the old project before creation", async (t) => {
  const state = fixture(t);
  const original = await initializeWorkspace();
  rememberChat(original.id, {
    messages: [],
    draft: "未发送的草稿",
    assets: [],
    thinking: "auto",
    modelSelections: {},
  });
  state.calls.length = 0;
  const example = {
    ...createDocument("示例画布"),
    nodes: [createNode("text", undefined, { text: "示例内容" })],
  };
  const imported = await importWorkspaceDocument(example);
  assert.notEqual(imported.id, original.id);
  assert.equal(
    state.documents.get(imported.id)!.document!.nodes[0]!.data.text,
    "示例内容",
  );
  const isClose = (call: string) =>
    call.startsWith("POST /api/sessions/") && call.endsWith("/close");
  const flushed = state.calls.findIndex(isClose);
  const created = state.calls.indexOf("POST /api/projects");
  assert.ok(flushed >= 0 && flushed < created, state.calls.join("\n"));
  assert.equal(state.calls.filter(isClose).length, 1);
  const restored = await openWorkspaceProject(state.projects.get(original.id)!);
  await saveWorkspaceDocument(restored);
  assert.equal(restored.id, original.id);
});

test("failed project creation keeps the existing project writable", async (t) => {
  const state = fixture(t);
  const original = await initializeWorkspace();
  rememberChat(original.id, {
    messages: [],
    draft: "保留草稿",
    assets: [],
    thinking: "auto",
    modelSelections: {},
  });
  await assert.rejects(
    createWorkspaceProject(original.title, crypto.randomUUID()),
    /已有同名项目/,
  );
  const edited = {
    ...original,
    nodes: [createNode("text", undefined, { text: "继续编辑" })],
  };
  await saveWorkspaceDocument(edited);
  assert.equal(
    state.documents.get(original.id)!.document!.nodes[0]!.data.text,
    "继续编辑",
  );
});
