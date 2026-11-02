import assert from "node:assert/strict";
import test from "node:test";
import { creationClient } from "../src/backend/creationClient.ts";
import { submitToolTask, waitForToolTask } from "../src/backend/tools.ts";
import type { ProjectSnapshot } from "../src/contracts/generated.ts";

test("tool submission forwards the selected model with its saved source and editor versions", async () => {
  const fetch = globalThis.fetch;
  const windowDescriptor = Object.getOwnPropertyDescriptor(
    globalThis,
    "window",
  );
  const projectId = crypto.randomUUID();
  const modelId = crypto.randomUUID();
  const sourceId = crypto.randomUUID();
  const sourceNodeId = crypto.randomUUID();
  const editorId = crypto.randomUUID();
  creationClient(projectId).snapshot = {
    canvasItems: [
      {
        id: sourceNodeId,
        revision: 3,
        editors: [{ kind: "media_edit", id: editorId }],
      },
    ],
    editorDocuments: [
      {
        id: editorId,
        revision: 4,
        kind: "media_edit",
        data: { sources: [{ assetId: sourceId }] },
      },
    ],
  } as unknown as ProjectSnapshot;
  let submitted: Record<string, unknown> | undefined;
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { setInterval: () => 1, addEventListener: () => {} },
  });
  globalThis.fetch = (async (url, options) => {
    const path = String(url);
    if (path.startsWith("data:")) return fetch(url, options);
    if (path.endsWith("/open")) return new Response(null, { status: 204 });
    if (path.endsWith("/assets")) return Response.json([]);
    if (path.includes("/assets/")) return Response.json({ id: sourceId });
    if (path.endsWith("/tool-tasks")) {
      submitted = JSON.parse(String(options?.body));
      return Response.json({ id: "selected-model-task" });
    }
    throw new Error(`Unexpected request: ${path}`);
  }) as typeof globalThis.fetch;
  try {
    await submitToolTask(
      {
        id: crypto.randomUUID(),
        canvas: { nodeId: sourceNodeId, sourceNodeIds: [sourceNodeId] },
        documentId: projectId,
        documentTitle: "改图测试",
        tool: "smart-edit",
        sources: [
          {
            kind: "image",
            title: "原图",
            src: "data:image/png;base64,aW1hZ2U=",
          },
        ],
        parameters: { prompt: "换成红色外套" },
        modelConfigIds: { "image.edit": modelId },
      },
      new AbortController().signal,
    );
    assert.deepEqual(submitted?.modelConfigIds, { "image.edit": modelId });
    assert.deepEqual(submitted?.sourceAssetIds, [sourceId]);
    assert.deepEqual(submitted?.draft, {
      itemId: sourceNodeId,
      itemRevision: 3,
      editorId,
      editorRevision: 4,
    });
  } finally {
    globalThis.fetch = fetch;
    if (windowDescriptor)
      Object.defineProperty(globalThis, "window", windowDescriptor);
    else Reflect.deleteProperty(globalThis, "window");
  }
});

test("a status read stalled in transit is abandoned and retried instead of hanging the follow loop", async () => {
  const fetch = globalThis.fetch;
  const seen: string[] = [];
  let reads = 0;
  globalThis.fetch = (async (
    url: string | URL | Request,
    options?: RequestInit,
  ) => {
    const path = String(url);
    seen.push(path);
    if (path.includes("/tool-tasks/") && ++reads === 1)
      // The first read never answers, like a request stuck in a tunnel.
      return new Promise((_, reject) =>
        options!.signal!.addEventListener("abort", () =>
          reject(options!.signal!.reason),
        ),
      );
    if (path.includes("/tool-tasks/"))
      return Response.json({
        id: "task",
        tool: "outpaint",
        status: "succeeded",
        phase: null,
        error: null,
        outputs: [
          {
            id: "asset",
            kind: "image",
            name: "扩图.png",
            type: "image/png",
            title: "扩图",
          },
        ],
      });
    return new Response(new Blob(["png"], { type: "image/png" }));
  }) as typeof globalThis.fetch;
  try {
    const files = await waitForToolTask(
      "project",
      "task",
      new AbortController().signal,
      undefined,
      {
        status: 50,
        download: 1000,
      },
    );
    assert.equal(reads, 2);
    assert.equal(files.length, 1);
    assert.equal(files[0]!.file.name, "扩图.png");
    assert.ok(
      seen.some((path) =>
        path.endsWith("/creation/projects/project/assets/asset/content"),
      ),
    );
  } finally {
    globalThis.fetch = fetch;
  }
});

test("a rejected status read is reported, not retried", async () => {
  const fetch = globalThis.fetch;
  let reads = 0;
  globalThis.fetch = (async () => {
    reads++;
    return Response.json(
      { detail: "工具任务不存在。", code: "not_found" },
      { status: 404 },
    );
  }) as typeof globalThis.fetch;
  try {
    await assert.rejects(
      waitForToolTask("project", "task", new AbortController().signal),
      /工具任务不存在/,
    );
    assert.equal(reads, 1);
  } finally {
    globalThis.fetch = fetch;
  }
});
