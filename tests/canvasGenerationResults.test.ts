import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { generationDefaults } from "../src/canvas/generationCatalog.ts";
import { createHistory, recordChange, undo } from "../src/canvas/history.ts";
import { serializeDocument, parseDocument } from "../src/canvas/storage.ts";
import {
  applyGenerationResults,
  appendLinkedMediaResults,
  type LinkedMediaResult,
} from "../src/canvas/linkedResults.ts";
import {
  applyRecoveredGenerationResults,
  mergeGenerationJobs,
  parseGenerationJob,
  type GenerationJob,
} from "../src/canvas/generationHistory.ts";
import { unsyncedResults } from "../src/backend/sync.ts";

function fixture(kind: "image" | "video" | "audio" = "video") {
  const group = createNode("group", { x: 500, y: 100 });
  const reference = createNode("text", { x: 10, y: 20 }, { text: "山间日出" });
  const source = {
    ...createNode(
      kind,
      { x: 80, y: 90 },
      {
        title: "自定义名称",
        prompt: "山间日出",
        settings: { ...generationDefaults(kind), prompt: "山间日出" },
      },
    ),
    parentId: group.id,
  };
  const document = {
    ...createDocument(),
    nodes: [group, reference, source],
    edges: [{ id: "reference", source: reference.id, target: source.id }],
  };
  const origin = {
    documentId: document.id,
    nodeId: source.id,
    kind,
    src: source.data.src,
  };
  const output: LinkedMediaResult = {
    kind,
    title: "provider-output",
    src: `data:${kind}/${kind === "video" ? "mp4" : kind === "audio" ? "wav" : "png"};base64,YQ==`,
    mimeType: `${kind}/${kind === "video" ? "mp4" : kind === "audio" ? "wav" : "png"}`,
    media: { width: 1280, height: 720, durationSeconds: 5 },
  };
  return { document, source, origin, output };
}

for (const kind of ["image", "video", "audio"] as const)
  test(`${kind} generation fills its node without changing graph, layout or request`, () => {
    const { document, source, origin, output } = fixture(kind);
    const result = applyGenerationResults(document, origin, [output]);
    assert.equal(
      result.document.nodes.find((node) => node.id === source.id)?.data
        .mediaRole,
      "generation",
    );
    assert.equal(result.error, undefined);
    assert.deepEqual(result.ids, [source.id]);
    assert.equal(result.document.nodes.length, document.nodes.length);
    assert.equal(result.document.edges, document.edges);
    const updated = result.document.nodes.find(
      (node) => node.id === source.id,
    )!;
    assert.deepEqual({ ...updated, data: source.data }, source);
    assert.equal(updated.data.title, source.data.title);
    assert.deepEqual(updated.data.settings, source.data.settings);
    assert.equal(updated.data.src, output.src);
    assert.deepEqual(updated.data.media, output.media);
    const serialized = serializeDocument(result.document);
    assert.equal(serialized.ok, true);
    if (!serialized.ok) return;
    const restored = parseDocument(serialized.value);
    assert.equal(restored.ok, true);
    if (restored.ok)
      assert.equal(restored.value.nodes.at(-1)!.data.src, output.src);
    assert.deepEqual(
      undo(recordChange(createHistory(document), result.document)).present,
      document,
    );
  });

test("new generation uses the media replacement boundary and drops obsolete layer and task data", () => {
  const { document, source, origin, output } = fixture("image");
  source.data.src = "data:image/png;base64,b2xk";
  source.data.media = { width: 100, height: 200 };
  source.data.layers = { schemaVersion: 1 } as never;
  source.data.taskDraft = { id: "old-tool-task" } as never;
  const next = applyGenerationResults(
    document,
    { ...origin, src: source.data.src },
    [{ ...output, media: undefined }],
  );
  const data = next.document.nodes.at(-1)!.data;
  assert.equal(data.src, output.src);
  assert.equal(data.layers, undefined);
  assert.equal(data.taskDraft, undefined);
  assert.equal(data.media, undefined);
});

test("additional batch results stay independent whichever request completes first", () => {
  for (const extraFirst of [false, true]) {
    const { document, source, origin, output } = fixture();
    const extra = { ...output, src: "data:video/mp4;base64,Yg==" };
    const first = applyGenerationResults(
      document,
      origin,
      [extraFirst ? extra : output],
      extraFirst ? "additional" : "replace",
    );
    const second = applyGenerationResults(
      first.document,
      origin,
      [extraFirst ? output : extra],
      extraFirst ? "replace" : "additional",
    );
    assert.equal(second.error, undefined);
    assert.equal(second.document.nodes.length, document.nodes.length + 1);
    assert.equal(second.document.edges, document.edges);
    assert.equal(
      second.document.nodes.find((node) => node.id === source.id)!.data.src,
      output.src,
    );
    assert.equal(second.document.nodes.at(-1)!.data.src, extra.src);
    assert.deepEqual(
      second.document.nodes.at(-1)!.data.settings,
      source.data.settings,
    );
  }
});

test("late replacements preserve changed, deleted, locked and different-project targets", () => {
  const { document, source, origin, output } = fixture();
  for (const changed of [
    { ...document, id: "different-project" },
    {
      ...document,
      nodes: document.nodes.filter((node) => node.id !== source.id),
    },
    {
      ...document,
      nodes: document.nodes.map((node) =>
        node.id === source.id
          ? { ...node, data: { ...node.data, src: "changed" } }
          : node,
      ),
    },
    {
      ...document,
      nodes: document.nodes.map((node) =>
        node.id === source.id ? { ...node, locked: true } : node,
      ),
    },
    {
      ...document,
      nodes: document.nodes.map((node) =>
        node.id === source.parentId ? { ...node, locked: true } : node,
      ),
    },
  ]) {
    const result = applyGenerationResults(changed, origin, [output]);
    assert.equal(result.document, changed);
    assert.deepEqual(result.ids, []);
    assert.ok(result.error);
  }
  assert.ok(
    applyGenerationResults(document, origin, [{ ...output, kind: "audio" }])
      .error,
  );
});

test("reopened tasks preserve replacement ownership while assistant and explicit edits still create outputs", () => {
  const { document, source, origin, output } = fixture();
  const job: GenerationJob = parseGenerationJob({
    id: "job",
    taskId: "owned-task",
    nodeId: source.id,
    title: "生成视频",
    time: "12:00",
    status: "interrupted",
    resultSource: origin,
    resultMode: "replace",
  });
  const recovered = applyRecoveredGenerationResults(
    document,
    [
      { taskId: "owned-task", output },
      {
        taskId: "assistant-task",
        output: { kind: "text", title: "助手回复", text: "content" },
      },
    ],
    [job],
  );
  assert.equal(recovered.document.nodes.length, document.nodes.length + 1);
  assert.deepEqual(recovered.placements[0]!.ids, [source.id]);
  assert.equal(recovered.document.edges, document.edges);
  const edited = appendLinkedMediaResults(
    recovered.document,
    { ...origin, src: output.src },
    [output],
  );
  assert.equal(
    edited.document.nodes.length,
    recovered.document.nodes.length + 1,
  );
  assert.equal(edited.document.edges.at(-1)!.source, source.id);
  assert.equal(edited.document.edges.at(-1)!.intent, "post_edit_result");
  assert.throws(() =>
    parseGenerationJob({
      ...job,
      resultSource: { ...origin, nodeId: "another" },
    }),
  );
  assert.throws(() => parseGenerationJob({ ...job, resultMode: "unknown" }));
});

test("history hydration preserves placement ownership and newer in-memory updates", () => {
  const { document, source, origin, output } = fixture();
  const saved: GenerationJob = {
    id: "owned",
    nodeId: source.id,
    taskId: "task",
    title: "saved",
    time: "12:00",
    status: "interrupted",
    createdAt: 1,
    resultSource: origin,
    resultMode: "replace",
  };
  const live: GenerationJob = {
    ...saved,
    status: "succeeded",
    outputs: [output],
  };
  const unrelated: GenerationJob = {
    id: "new",
    nodeId: "other",
    title: "new",
    time: "12:01",
    status: "draft",
    createdAt: 2,
  };
  const hydrated = mergeGenerationJobs([saved], [unrelated, live]);
  assert.deepEqual(
    hydrated.map((job) => job.id),
    ["new", "owned"],
  );
  assert.equal(hydrated[1], live);
  assert.deepEqual(hydrated[1]!.resultSource, origin);
  assert.equal(
    applyRecoveredGenerationResults(
      document,
      [{ taskId: "task", output }],
      hydrated,
    ).document.nodes.length,
    document.nodes.length,
  );
  const changed = {
    ...document,
    nodes: document.nodes.map((node) =>
      node.id === source.id ? { ...node, locked: true } : node,
    ),
  };
  const deferred = applyRecoveredGenerationResults(
    changed,
    [{ taskId: "task", output }],
    hydrated,
  );
  assert.equal(deferred.document, changed);
  assert.deepEqual(deferred.ids, []);
  assert.equal(deferred.placements[0]!.output, output);
  assert.match(deferred.placements[0]!.error!, /锁定/);
});

test("first service sync recovers an owned completed task without importing unrelated old history", async () => {
  const fetchBefore = globalThis.fetch;
  const storageBefore = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  const values = new Map<string, string>();
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    },
  });
  globalThis.fetch = async (input) => {
    const path = String(input);
    if (path.endsWith("/canvas"))
      return Response.json({
        assets: ["owned", "old"].map((id) => ({
          id,
          kind: "video",
          name: `${id}.mp4`,
          type: "video/mp4",
          fingerprint: id,
        })),
        tasks: ["owned", "old"].map((id) => ({
          id,
          nodeId: `server-${id}`,
          kind: "video",
          status: "succeeded",
          assetId: id,
          error: null,
        })),
      });
    assert.ok(
      path.endsWith("/assets/owned"),
      "only the owned result should download",
    );
    return new Response(new Blob(["media"], { type: "video/mp4" }));
  };
  try {
    const synced = await unsyncedResults(
      "restore-project",
      new Set(),
      undefined,
      new Set(["owned"]),
    );
    assert.deepEqual(
      synced.results.map((item) => item.taskId),
      ["owned"],
    );
  } finally {
    globalThis.fetch = fetchBefore;
    if (storageBefore)
      Object.defineProperty(globalThis, "localStorage", storageBefore);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
