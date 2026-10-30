import assert from "node:assert/strict";
import test from "node:test";
import { waitForToolTask } from "../src/backend/tools.ts";

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
    assert.ok(seen.some((path) => path.endsWith("/data/project/assets/asset")));
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
