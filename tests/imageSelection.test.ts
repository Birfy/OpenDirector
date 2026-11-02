import assert from "node:assert/strict";
import test, { type TestContext } from "node:test";
import { creationClient } from "../src/backend/creationClient.ts";
import { fingerprint } from "../src/backend/generation.ts";
import { previewImageSelection } from "../src/backend/imageSelections.ts";
import {
  openBackendProject,
  releaseBackendProject,
} from "../src/backend/projects.ts";
import type { ProjectSnapshot } from "../src/contracts/generated.ts";

async function fixture(t: TestContext, unified: boolean) {
  const original = globalThis.fetch;
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      location: { search: unified ? "" : "" },
      setInterval: () => 1,
      addEventListener() {},
    },
  });
  const projectId = crypto.randomUUID();
  const src = "data:image/png;base64,aW1hZ2U=";
  const asset = {
    id: crypto.randomUUID(),
    kind: "image",
    name: "Source.png",
    type: "image/png",
    fingerprint: await fingerprint(await (await original(src)).blob()),
  };
  if (unified)
    creationClient(projectId).snapshot = {
      project: { id: projectId },
      assets: [asset],
    } as unknown as ProjectSnapshot;
  const prefix = unified ? "/api/creation" : "/api";
  const paths: string[] = [];
  let lease: string | null = null;
  let previewBody: Record<string, unknown> | undefined;
  let interceptor:
    | ((path: string, options?: RequestInit) => Promise<Response | undefined>)
    | undefined;
  globalThis.fetch = (async (url, options) => {
    const path = String(url);
    paths.push(path);
    const intercepted = await interceptor?.(path, options);
    if (intercepted) return intercepted;
    if (path.startsWith("data:")) return original(url, options);
    if (path.endsWith("/open")) {
      lease = path.split("/").at(-2)!;
      return new Response(null, { status: 204 });
    }
    if (path.startsWith(`${prefix}/sessions/`)) {
      lease = null;
      return new Response(null, { status: 204 });
    }
    if (path === `${prefix}/projects/${projectId}/assets`)
      return Response.json([asset]);
    if (path === `${prefix}/projects/${projectId}/image-selections`) {
      previewBody = JSON.parse(String(options?.body));
      return Response.json({
        sourceAssetId: asset.id,
        width: 32,
        height: 24,
        instances: [],
      });
    }
    throw new Error(`Unexpected request: ${path}`);
  }) as typeof fetch;
  t.after(async () => {
    try {
      await releaseBackendProject();
    } finally {
      globalThis.fetch = original;
      if (descriptor) Object.defineProperty(globalThis, "window", descriptor);
      else Reflect.deleteProperty(globalThis, "window");
    }
  });
  await openBackendProject(projectId, "Selection");
  paths.length = 0;
  return {
    projectId,
    asset,
    prefix,
    paths,
    lease: () => lease,
    body: () => previewBody,
    query: {
      documentId: projectId,
      documentTitle: "Selection",
      source: { kind: "image" as const, title: "Source", src },
    },
    intercept: (value: typeof interceptor) => {
      interceptor = value;
    },
  };
}

{
  const unified = true;
  const mode = unified ? "unified" : "workspace";
  for (const cached of [false, true]) {
    test(`${mode}: selection preview reuses its owned source (${cached ? "cached" : "uncached"})`, async (t) => {
      const f = await fixture(t, unified);
      const result = await previewImageSelection(
        {
          ...f.query,
          ...(cached ? { sourceAssetId: f.asset.id } : {}),
          boxes: [{ x: 0, y: 0, width: 16, height: 16 }],
        },
        new AbortController().signal,
      );
      assert.equal(result.sourceAssetId, f.asset.id);
      assert.equal(f.body()?.sourceAssetId, f.asset.id);
      assert.ok(
        f.paths.includes(
          `${f.prefix}/projects/${f.projectId}/image-selections`,
        ),
      );
      assert.equal(
        f.paths.some(
          (path) => path.includes("tool-tasks") || path.endsWith("/open"),
        ),
        false,
      );
      if (unified)
        assert.equal(
          f.paths.some((path) => path.startsWith("/api/projects/")),
          false,
        );
      assert.equal(f.lease(), f.projectId);
    });
  }

  for (const abort of [false, true]) {
    test(`${mode}: ${abort ? "cancelled" : "stale"} preview cannot reactivate its project behind a navigation`, async (t) => {
      const f = await fixture(t, unified);
      const nextId = crypto.randomUUID();
      let release!: () => void;
      let entered!: () => void;
      const started = new Promise<void>((resolve) => {
        entered = resolve;
      });
      const blocked = new Promise<void>((resolve) => {
        release = resolve;
      });
      f.intercept(async (path) => {
        if (path.endsWith(`/${nextId}/open`)) {
          entered();
          await blocked;
        }
        return undefined;
      });
      const switching = openBackendProject(nextId, "Next");
      await started;
      const controller = new AbortController();
      const preview = previewImageSelection(
        { ...f.query, sourceAssetId: f.asset.id },
        controller.signal,
      );
      const rejected = assert.rejects(preview, { name: "AbortError" });
      if (abort) controller.abort();
      release();
      await switching;
      await rejected;
      assert.equal(f.lease(), nextId);
      assert.equal(f.paths.filter((path) => path.endsWith("/open")).length, 1);
      assert.equal(
        f.paths.some((path) => path.endsWith("/image-selections")),
        false,
      );
    });
  }

  test(`${mode}: cancelling recognition aborts the request without creating a task`, async (t) => {
    const f = await fixture(t, unified);
    let entered!: () => void;
    const started = new Promise<void>((resolve) => {
      entered = resolve;
    });
    let requestSignal: AbortSignal | undefined;
    f.intercept(async (path, options) => {
      if (!path.endsWith("/image-selections")) return undefined;
      requestSignal = options?.signal ?? undefined;
      entered();
      return new Promise<Response>((_, reject) =>
        requestSignal!.addEventListener(
          "abort",
          () => reject(requestSignal!.reason),
          { once: true },
        ),
      );
    });
    const controller = new AbortController();
    const preview = previewImageSelection(
      { ...f.query, sourceAssetId: f.asset.id },
      controller.signal,
    );
    const rejected = assert.rejects(preview, { name: "AbortError" });
    await started;
    controller.abort();
    await rejected;
    assert.equal(requestSignal?.aborted, true);
    assert.equal(
      f.paths.some((path) => path.includes("tool-tasks")),
      false,
    );
    assert.equal(f.lease(), f.projectId);
  });
}
