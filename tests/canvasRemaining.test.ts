import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { persistCurrentDocument } from "../src/canvas/projectManagement.ts";
import { visibleSelectionIds } from "../src/canvas/stackProjection.ts";
import {
  stackSelection,
  cutSelection,
  pasteFragment,
} from "../src/canvas/operations.ts";
import { readImportBatch } from "../src/canvas/importBatch.ts";
import { assistantReferences } from "../src/canvas/assistantReferences.ts";
import {
  parseGenerationJob,
  reconcileGenerationJobs,
} from "../src/canvas/generationHistory.ts";
import {
  generationDefaults,
  changeGenerationSettings,
  generationBlocker,
} from "../src/canvas/generationCatalog.ts";
import { unsyncedResults } from "../src/backend/sync.ts";
import { uploadReferences } from "../src/backend/generation.ts";

test("mixed batch imports preserve success order and original replacement index", async () => {
  const files = ["first.png", "broken.png", "last.png"].map(
    (name) => new File(["x"], name),
  );
  const result = await readImportBatch(
    files,
    async (file) => {
      if (file.name === "broken.png") throw new Error("decode failed");
      return file.name;
    },
    new AbortController().signal,
  );
  assert.deepEqual(
    result.successes.map((x) => [x.index, x.value]),
    [
      [0, "first.png"],
      [2, "last.png"],
    ],
  );
  assert.deepEqual(result.failures, [
    { name: "broken.png", message: "decode failed" },
  ]);
});

test("cancelling a partial batch rejects the entire commit", async () => {
  const controller = new AbortController();
  let read = 0;
  await assert.rejects(
    readImportBatch(
      [new File(["a"], "a.png"), new File(["b"], "b.png")],
      async () => {
        if (++read === 2) controller.abort();
        return "media";
      },
      controller.signal,
    ),
    { name: "AbortError" },
  );
});

test("assistant snapshots explicit eligible references and deduplicates media", () => {
  const text = createNode("text", undefined, { text: "selected text" });
  const image = createNode("image", undefined, {
    src: "data:image/png;base64,YQ==",
  });
  const missing = createNode("image", undefined, {
    src: "broken",
    assetState: "missing",
  });
  const result = assistantReferences([
    text,
    image,
    { ...image, id: "copy" },
    missing,
    createNode("external"),
  ]);
  assert.deepEqual(
    result.map((x) => x.kind),
    ["text", "image"],
  );
  text.data.text = "later";
  assert.equal(result[0]!.text, "selected text");
});

test("history stores an independent request/result and rejects session-only media", () => {
  const job = {
    id: "1",
    nodeId: "gone",
    title: "history",
    time: "12:00",
    status: "succeeded" as const,
    request: {
      kind: "image" as const,
      title: "request",
      prompt: "test",
      settings: generationDefaults("image"),
    },
    outputs: [
      {
        kind: "image" as const,
        title: "result",
        src: "data:image/png;base64,YQ==",
        mimeType: "image/png",
      },
    ],
  };
  const saved = parseGenerationJob(job);
  job.request.prompt = "changed";
  assert.equal(saved.request!.prompt, "test");
  assert.throws(() =>
    parseGenerationJob({
      ...job,
      outputs: [{ ...job.outputs[0], src: "blob:session" }],
    }),
  );
  assert.throws(() => parseGenerationJob({ ...job, status: "invented" }));
});

test("product views resolves its complete observed preset and rejects stale settings", () => {
  const before = {
    ...generationDefaults("image"),
    aspectRatio: "9:16",
    resolution: "4K",
    count: 4,
  };
  const normalized = changeGenerationSettings(before, {
    imagePreset: "product-views",
  });
  assert.deepEqual(
    [
      normalized.model,
      normalized.aspectRatio,
      normalized.resolution,
      normalized.count,
    ],
    ["Seedream 5.0 Pro", "16:9", "2K", 1],
  );
  assert.equal(
    generationBlocker({ ...normalized, prompt: "product" }, []),
    null,
  );
  assert.match(
    generationBlocker(
      { ...normalized, prompt: "product", aspectRatio: "9:16" },
      [],
    )!,
    /16:9/,
  );
});

test("reference upload rejects unreadable media before creating any asset", async () => {
  const original = globalThis.fetch;
  const requests: string[] = [];
  globalThis.fetch = async (input) => {
    const url = String(input);
    requests.push(url);
    return url.startsWith("/api")
      ? Response.json([])
      : new Response("missing", { status: 404 });
  };
  try {
    await assert.rejects(
      uploadReferences(
        "project",
        [
          {
            kind: "image",
            title: "missing",
            src: "https://invalid.test/media.png",
          },
        ],
        new AbortController().signal,
      ),
      /404/,
    );
    assert.equal(requests.length, 2);
  } finally {
    globalThis.fetch = original;
  }
});

test("text reference cancellation propagates through asset and node creation", async () => {
  const original = globalThis.fetch;
  const controller = new AbortController();
  const observed: RequestInit[] = [];
  globalThis.fetch = async (input, options) => {
    observed.push(options!);
    return Response.json(
      String(input).endsWith("current_only=true") ? [] : { id: "asset" },
    );
  };
  try {
    assert.deepEqual(
      await uploadReferences(
        "project",
        [{ kind: "text", title: "note", text: "reference" }],
        controller.signal,
      ),
      ["asset"],
    );
    assert.equal(observed.length, 3);
    assert.ok(
      observed.every((options) => options.signal === controller.signal),
    );
  } finally {
    globalThis.fetch = original;
  }
});

test("cutting a stack moves its full member set once and leaves locked stacks untouched", () => {
  const a = createNode("image"),
    b = createNode("image");
  const document = stackSelection({ ...createDocument(), nodes: [a, b] }, [
    a.id,
    b.id,
  ]);
  const stack = document.nodes.find((n) => n.type === "stack")!;
  const cut = cutSelection(document, [stack.id]);
  assert.equal(cut.document.nodes.length, 0);
  assert.equal(
    pasteFragment(cut.document, cut.fragment!).document.nodes.length,
    3,
  );
  const locked = {
    ...document,
    nodes: document.nodes.map((n) =>
      n.id === a.id ? { ...n, locked: true } : n,
    ),
  };
  const blocked = cutSelection(locked, [stack.id]);
  assert.equal(blocked.document, locked);
  assert.equal(blocked.fragment, undefined);
});

test("switch persistence catches a generated result arriving during its first write", async () => {
  let current = createDocument("A");
  const writes: (typeof current)[] = [];
  const result = await persistCurrentDocument(
    () => current,
    async (snapshot) => {
      writes.push(snapshot);
      if (writes.length === 1)
        current = { ...current, nodes: [createNode("image")] };
      return true;
    },
  );
  assert.equal(result, true);
  assert.equal(writes.length, 2);
  assert.equal(writes[1], current);
  assert.equal(writes[1]!.nodes.length, 1);
});

test("pasted stack selection resolves folded member identities to the single visible card", () => {
  const a = createNode("image"),
    b = createNode("image");
  const document = stackSelection({ ...createDocument(), nodes: [a, b] }, [
    a.id,
    b.id,
  ]);
  const ids = visibleSelectionIds(
    document.nodes,
    document.nodes.map((n) => n.id),
  );
  assert.deepEqual(ids, [document.nodes.find((n) => n.type === "stack")!.id]);
});

test("history sync resolves interrupted failures without inventing outputs", () => {
  const job = {
    id: "local",
    nodeId: "gone",
    title: "task",
    time: "12:00",
    status: "interrupted" as const,
    taskId: "server",
  };
  const next = reconcileGenerationJobs(
    [job],
    [{ id: "server", status: "failed", error: "provider unavailable" }],
  );
  assert.equal(next[0]!.status, "failed");
  assert.equal(next[0]!.message, "provider unavailable");
  assert.equal(next[0]!.outputs, undefined);
});

test("the first assistant document in a newly created service project is not skipped", async () => {
  const originalFetch = globalThis.fetch;
  const originalStorage = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  const records = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => records.get(key) ?? null,
      setItem: (key: string, value: string) => records.set(key, value),
    },
  });
  let exists = false;
  globalThis.fetch = async (input) => {
    const url = String(input);
    if (url.endsWith("/canvas"))
      return exists
        ? Response.json({
            tasks: [],
            assets: [
              {
                id: "new-document",
                kind: "text",
                name: "assistant.md",
                agentRunId: "turn",
                generationTaskId: null,
              },
            ],
          })
        : Response.json({ detail: "absent" }, { status: 404 });
    return new Response("first result", {
      headers: { "Content-Type": "text/plain" },
    });
  };
  try {
    assert.equal(
      (await unsyncedResults("new-project", new Set())).results.length,
      0,
    );
    exists = true;
    const synced = await unsyncedResults("new-project", new Set());
    assert.equal(synced.results.length, 1);
    assert.deepEqual(synced.results[0], {
      taskId: "new-document",
      kind: "text",
      title: "assistant",
      text: "first result",
    });
  } finally {
    globalThis.fetch = originalFetch;
    if (originalStorage)
      Object.defineProperty(globalThis, "localStorage", originalStorage);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
