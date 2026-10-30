import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import {
  currentChat,
  flushChatDraft,
  rememberChat,
} from "../src/backend/chatDrafts.ts";
import {
  openBackendProject,
  releaseBackendProject,
  requireActiveBackendProject,
} from "../src/backend/projects.ts";
import type { Conversation } from "../src/backend/chat.ts";

const listeners = new Map<string, () => void>();
let heartbeat: () => void;
const draft = (text: string): Conversation => ({
  messages: [],
  draft: text,
  assets: [],
  thinking: "auto",
  modelSelections: {},
});

function fixture(t: TestContext, unified = false) {
  const beforeFetch = globalThis.fetch;
  const beforeWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location: { search: unified ? "?creation=unified" : "" },
      setInterval: (callback: () => void) => {
        heartbeat = callback;
        return 1;
      },
      addEventListener: (name: string, callback: () => void) =>
        listeners.set(name, callback),
    },
  });
  const prefix = unified ? "/api/creation" : "/api";
  const calls: {
    path: string;
    method: string;
    value: Record<string, unknown>;
    keepalive?: boolean;
  }[] = [];
  let lease: string | null = null;
  let saved: Conversation | undefined;
  let intercept:
    | ((path: string, options: RequestInit) => Promise<Response | undefined>)
    | undefined;
  globalThis.fetch = (async (url, options: RequestInit = {}) => {
    const path = String(url),
      method = options.method ?? "GET";
    const value = options.body ? JSON.parse(String(options.body)) : {};
    calls.push({ path, method, value, keepalive: options.keepalive });
    const response = await intercept?.(path, options);
    if (response) return response;
    if (path.endsWith("/open")) {
      lease = path.split("/").at(-2)!;
      return Response.json({ ok: true });
    }
    if (path.startsWith(`${prefix}/sessions/`)) {
      if (method === "PUT") lease = value.projectId;
      if (method === "DELETE") lease = null;
      if (method === "POST") {
        const draftSaved = value.projectId === lease;
        if (draftSaved) {
          saved = value.conversation;
          lease = null;
        }
        return Response.json({ ok: true, draftSaved });
      }
      return Response.json({ ok: true });
    }
    if (path.endsWith("/draft")) return Response.json({ ok: true });
    throw new Error(`Unexpected request ${method} ${path}`);
  }) as typeof fetch;
  t.after(async () => {
    intercept = undefined;
    try {
      await releaseBackendProject();
    } finally {
      globalThis.fetch = beforeFetch;
      if (beforeWindow)
        Object.defineProperty(globalThis, "window", beforeWindow);
      else Reflect.deleteProperty(globalThis, "window");
    }
  });
  return {
    calls,
    prefix,
    saved: () => saved,
    lease: () => lease,
    expire: () => {
      lease = null;
    },
    intercept: (value: typeof intercept) => {
      intercept = value;
    },
  };
}

test("explicit close drains pending draft writes and atomically saves the newest draft", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("older"));
  let release!: () => void, entered!: () => void;
  const started = new Promise<void>((resolve) => {
    entered = resolve;
  });
  const blocked = new Promise<void>((resolve) => {
    release = resolve;
  });
  f.intercept(async (path) => {
    if (path.endsWith("/draft")) {
      entered();
      await blocked;
    }
    return undefined;
  });
  const saving = flushChatDraft(id);
  await started;
  const closing = releaseBackendProject();
  rememberChat(id, draft("newest"));
  await Promise.resolve();
  assert.equal(
    f.calls.some((call) => call.path.endsWith("/close")),
    false,
  );
  release();
  await saving;
  await closing;
  assert.equal(f.saved()?.draft, "newest");
  assert.equal(f.lease(), null);
  assert.equal(f.calls.at(-1)!.path.endsWith("/close"), true);
  assert.equal(
    f.calls.some((call) => call.method === "DELETE"),
    false,
  );
});

test("page exit uses the same atomic close with keepalive and tolerates a repeated exit", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("exit draft"));
  listeners.get("pagehide")!();
  await new Promise<void>((resolve) => setImmediate(resolve));
  rememberChat(id, draft("late stale draft"));
  listeners.get("pagehide")!();
  await new Promise<void>((resolve) => setImmediate(resolve));
  const close = f.calls.filter((call) => call.path.endsWith("/close"));
  assert.equal(close.length, 2);
  assert.ok(close.every((call) => call.method === "POST" && call.keepalive));
  assert.equal(f.saved()?.draft, "exit draft");
  assert.equal(currentChat(id)?.draft, "late stale draft");
  assert.equal(f.calls.filter((call) => call.path.endsWith("/open")).length, 1);
});

test("real save errors prevent release or switching and preserve the active draft", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID(),
    next = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("keep this"));
  f.intercept(async (path) =>
    path.endsWith("/close")
      ? Response.json(
          { detail: "部分素材尚未保存，项目对话未覆盖，请重试。" },
          { status: 409 },
        )
      : undefined,
  );
  await assert.rejects(releaseBackendProject(), /部分素材尚未保存/);
  await assert.rejects(openBackendProject(next, "B"), /部分素材尚未保存/);
  assert.equal(
    await requireActiveBackendProject(id, new AbortController().signal),
    id,
  );
  assert.equal(currentChat(id)?.draft, "keep this");
  assert.equal(f.lease(), id);
  assert.equal(
    f.calls.some((call) => call.path.endsWith(`/${next}/open`)),
    false,
  );
});

test("a failed target open reacquires the old project after closing its draft", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID(),
    next = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("saved before switch"));
  f.intercept(async (path) =>
    path.endsWith(`/${next}/open`)
      ? Response.json({ detail: "目标项目不可用" }, { status: 409 })
      : undefined,
  );
  await assert.rejects(openBackendProject(next, "B"), /目标项目不可用/);
  assert.equal(f.lease(), id);
  assert.equal(f.saved()?.draft, "saved before switch");
  assert.equal(
    await requireActiveBackendProject(id, new AbortController().signal),
    id,
  );
  assert.equal(f.calls.at(-1)!.path, `${f.prefix}/projects/${id}/open`);
});

test("pending heartbeat completes before close and cannot reacquire the released lease", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("closed"));
  let release!: () => void, entered!: () => void;
  const started = new Promise<void>((resolve) => {
    entered = resolve;
  });
  const blocked = new Promise<void>((resolve) => {
    release = resolve;
  });
  f.intercept(async (path, options) => {
    if (path.includes("/sessions/") && options.method === "PUT") {
      entered();
      await blocked;
    }
    return undefined;
  });
  heartbeat();
  await started;
  const closing = releaseBackendProject();
  await Promise.resolve();
  assert.equal(
    f.calls.some((call) => call.path.endsWith("/close")),
    false,
  );
  release();
  await closing;
  heartbeat();
  await Promise.resolve();
  assert.equal(f.lease(), null);
  assert.equal(f.calls.at(-1)!.path.endsWith("/close"), true);
});

test("expired close neither reopens the project nor claims to save the stale draft", async (t) => {
  const f = fixture(t),
    id = crypto.randomUUID();
  await openBackendProject(id, "A");
  rememberChat(id, draft("stale"));
  f.expire();
  await releaseBackendProject();
  assert.equal(f.saved(), undefined);
  assert.equal(currentChat(id)?.draft, "stale");
  assert.equal(f.calls.filter((call) => call.path.endsWith("/open")).length, 1);
});

test("unified projects retain their own session endpoint for switches and page exit", async (t) => {
  const f = fixture(t, true),
    id = crypto.randomUUID(),
    next = crypto.randomUUID();
  await openBackendProject(id, "A");
  await openBackendProject(next, "B");
  listeners.get("pagehide")!();
  await new Promise<void>((resolve) => setImmediate(resolve));
  const closes = f.calls.filter((call) => call.method === "DELETE");
  assert.equal(closes.length, 2);
  assert.ok(
    closes.every((call) => call.path.startsWith("/api/creation/sessions/")),
  );
  assert.equal(closes.at(-1)!.keepalive, true);
  assert.equal(
    f.calls.some((call) => call.path.endsWith("/close")),
    false,
  );
});
