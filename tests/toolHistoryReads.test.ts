import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import { ApiError } from "../src/backend/api.ts";
import { creationClient } from "../src/backend/creationClient.ts";
import { resilientRead } from "../src/backend/resilientRead.ts";
import { toolHistoryJobs } from "../src/backend/tools.ts";

const reads = { timeouts: { status: 20, download: 20 }, retryDelayMs: 1 };
const originalFetch = globalThis.fetch;
const stalled = () => new Promise<Response>(() => {});
const image = () => new Response(new Blob(["png"], { type: "image/png" }));
const task = {
  id: "task",
  tool: "outpaint",
  status: "succeeded",
  phase: null,
  error: null,
  placement: "pending",
  canvas: {
    nodeId: "source",
    sourceNodeIds: ["source"],
    targetNodeId: "result",
    targetKind: "image",
    targetTitle: "Pending",
  },
  outputs: [
    {
      id: "asset",
      canvasItemId: "result",
      kind: "image",
      name: "result.png",
      title: "Result",
      type: "image/png",
      width: 64,
      height: 48,
    },
  ],
};
const list = () => Response.json({ tasks: [task] });

// Media decoding uses DOM fixtures; requests, caches and history projection remain real.
function browser(t: TestContext) {
  const host = globalThis as unknown as Record<string, unknown>;
  class ImageFixture {
    naturalWidth = 64;
    naturalHeight = 48;
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;
    set src(_value: string) {
      queueMicrotask(() => this.onload?.());
    }
    removeAttribute() {}
  }
  class ReaderFixture {
    result = "";
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;
    onabort: (() => void) | null = null;
    readAsDataURL(blob: Blob) {
      void blob.arrayBuffer().then((bytes) => {
        this.result = `data:${blob.type};base64,${Buffer.from(bytes).toString("base64")}`;
        this.onload?.();
      });
    }
    abort() {
      this.onabort?.();
    }
  }
  const values = {
    window: { location: { search: "" } },
    Image: ImageFixture,
    HTMLImageElement: ImageFixture,
    HTMLMediaElement: class {},
    HTMLVideoElement: class {},
    FileReader: ReaderFixture,
  };
  for (const [key, value] of Object.entries(values)) {
    const descriptor = Object.getOwnPropertyDescriptor(host, key);
    Object.defineProperty(host, key, {
      configurable: true,
      writable: true,
      value,
    });
    t.after(() => {
      if (descriptor) Object.defineProperty(host, key, descriptor);
      else delete host[key];
    });
  }
  t.after(() => {
    globalThis.fetch = originalFetch;
  });
}

{
  const mode = "unified";
  const prefix = "/api/creation/projects/";
  const assetPath = "/assets/asset/content";

  test(`${mode}: active history list recovers from stalled headers and body`, async (t) => {
    browser(t);
    let calls = 0;
    const paths: string[] = [];
    globalThis.fetch = (async (url, options) => {
      paths.push(String(url));
      assert.ok(options?.signal);
      calls++;
      if (calls === 1) return stalled();
      if (calls === 2) return new Response(new ReadableStream({ start() {} }));
      return Response.json({ tasks: [] });
    }) as typeof fetch;
    assert.deepEqual(await toolHistoryJobs(crypto.randomUUID(), [], reads), []);
    assert.equal(calls, 3);
    assert.ok(
      paths.every(
        (path) => path.startsWith(prefix) && path.endsWith("/tool-tasks"),
      ),
    );
  });

  test(`${mode}: real history output reads recover and retain stable rows`, async (t) => {
    browser(t);
    const project = crypto.randomUUID();
    let downloads = 0;
    globalThis.fetch = (async (url, options) => {
      const path = String(url);
      assert.ok(options?.signal);
      assert.equal(
        options?.method,
        undefined,
        "following a task must never resubmit it",
      );
      if (path.endsWith("/tool-tasks")) return list();
      assert.ok(path.includes(assetPath));
      return ++downloads === 1 ? stalled() : image();
    }) as typeof fetch;
    const first = await toolHistoryJobs(project, [], reads);
    assert.equal(downloads, 2);
    assert.equal(first[0]!.status, "succeeded");
    assert.equal(first[0]!.targetNodeId, "result");
    assert.equal(first[0]!.nodeId, "source");
    assert.equal(first[0]!.toolTask!.unavailable, false);
    assert.deepEqual(first[0]!.toolTask!.outputIds, ["result"]);
    assert.ok(first[0]!.outputs?.length);
    const next = await toolHistoryJobs(project, first, reads);
    assert.equal(next[0], first[0], "successful polls preserve memoized rows");
    assert.equal(downloads, 2);
  });

  test(`${mode}: failed shared downloads expire and the next poll can recover`, async (t) => {
    browser(t);
    const project = crypto.randomUUID();
    let downloads = 0;
    let healthy = false;
    globalThis.fetch = (async (url) => {
      if (String(url).endsWith("/tool-tasks")) return list();
      downloads++;
      return healthy ? image() : stalled();
    }) as typeof fetch;
    const [first, peer] = await Promise.all([
      toolHistoryJobs(project, [], reads),
      toolHistoryJobs(project, [], reads),
    ]);
    assert.equal(downloads, 3, "concurrent consumers share bounded retries");
    assert.equal(first[0]!.toolTask!.unavailable, true);
    assert.equal(peer[0]!.message, first[0]!.message);
    assert.match(first[0]!.message!, /暂时失败.*重试/);
    assert.doesNotMatch(first[0]!.message!, /文件缺失/);
    healthy = true;
    const recovered = await toolHistoryJobs(project, first, reads);
    assert.equal(downloads, 4);
    assert.equal(recovered[0]!.toolTask!.unavailable, false);
    assert.equal(recovered[0]!.outputs?.length, 1);
  });

  test(`${mode}: HTTP rejections stop immediately and missing files stay distinct`, async (t) => {
    browser(t);
    for (const status of [401, 404, 422]) {
      let downloads = 0;
      globalThis.fetch = (async (url) => {
        if (String(url).endsWith("/tool-tasks")) return list();
        downloads++;
        return Response.json(
          { detail: "Fixture rejection", code: "rejected" },
          { status },
        );
      }) as typeof fetch;
      const rows = await toolHistoryJobs(crypto.randomUUID(), [], reads);
      assert.equal(downloads, 1);
      assert.match(
        rows[0]!.message!,
        status === 404 ? /文件缺失/ : /Fixture rejection/,
      );
      assert.doesNotMatch(rows[0]!.message!, /自动重试/);
    }
    let calls = 0;
    globalThis.fetch = (async () => {
      calls++;
      return Response.json(
        { detail: "Missing task", code: "not_found" },
        { status: 404 },
      );
    }) as typeof fetch;
    await assert.rejects(
      toolHistoryJobs(crypto.randomUUID(), [], reads),
      (error: unknown) => error instanceof ApiError && error.status === 404,
    );
    assert.equal(calls, 1);
  });

  test(`${mode}: cancelling a consumer leaves its peer's media read intact`, async (t) => {
    browser(t);
    const project = crypto.randomUUID();
    const controller = new AbortController();
    let downloads = 0;
    let release!: (response: Response) => void;
    let started!: () => void;
    const downloadStarted = new Promise<void>((resolve) => {
      started = resolve;
    });
    globalThis.fetch = (async (url) => {
      if (String(url).endsWith("/tool-tasks")) return list();
      downloads++;
      started();
      return new Promise<Response>((resolve) => {
        release = resolve;
      });
    }) as typeof fetch;
    const options = { ...reads, timeouts: { status: 100, download: 500 } };
    const cancelled = toolHistoryJobs(project, [], {
      ...options,
      signal: controller.signal,
    });
    const rejected = assert.rejects(cancelled, { name: "AbortError" });
    await downloadStarted;
    const peer = toolHistoryJobs(project, [], options);
    controller.abort();
    await rejected;
    release(image());
    const rows = await peer;
    assert.equal(downloads, 1);
    assert.equal(rows[0]!.toolTask!.unavailable, false);
    assert.equal(
      await creationClient(project).mediaUrl("asset"),
      rows[0]!.outputs![0]!.kind !== "text" && rows[0]!.outputs![0]!.src,
    );
  });

  test(`${mode}: abandoning a history read cancels its status request`, async (t) => {
    browser(t);
    const controller = new AbortController();
    let calls = 0;
    let attemptSignal: AbortSignal | undefined;
    globalThis.fetch = (async (_url, options) => {
      calls++;
      attemptSignal = options?.signal ?? undefined;
      return stalled();
    }) as typeof fetch;
    const pending = toolHistoryJobs(crypto.randomUUID(), [], {
      ...reads,
      signal: controller.signal,
    });
    const rejected = assert.rejects(pending, { name: "AbortError" });
    controller.abort();
    await rejected;
    assert.equal(calls, 1);
    assert.equal(attemptSignal?.aborted, true);
  });
}

test("cancellation during retry backoff does not start another request", async () => {
  const controller = new AbortController();
  let calls = 0;
  const pending = resilientRead(
    async () => {
      calls++;
      setTimeout(() => controller.abort(), 5);
      throw new TypeError("Network interrupted");
    },
    { signal: controller.signal, timeoutMs: 100, retryDelayMs: 1000 },
  );
  await assert.rejects(pending, { name: "AbortError" });
  assert.equal(calls, 1);
});

test("invalid JSON and pre-cancelled reads do not retry", async () => {
  let calls = 0;
  await assert.rejects(
    resilientRead(
      async () => {
        calls++;
        throw new SyntaxError("Invalid response");
      },
      { retryDelayMs: 1 },
    ),
    SyntaxError,
  );
  assert.equal(calls, 1);
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    resilientRead(
      async () => {
        calls++;
      },
      { signal: controller.signal },
    ),
    { name: "AbortError" },
  );
  assert.equal(calls, 1);
});
