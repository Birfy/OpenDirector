import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import * as prettier from "prettier";

const root = path.dirname(fileURLToPath(import.meta.url));
const inventoryBytes = await readFile(path.join(root, "../lazy-chunks.json"));
const inventory = JSON.parse(inventoryBytes);
const names = new Set([
  "async-canvas-generation-node-draft-runtime",
  "async-canvas-camera-dialog",
  "async-canvas-feature-overlays",
  "async-canvas-feature-runtime",
  "async-canvas-image-layer-board-fullscreen",
  "async-canvas-text-editor",
  "async-canvas-motion-dialog",
  "async-canvas-asset-library-dialog",
  "director-stage-fbx-export",
  "director-stage-fbx-import",
]);
const selection = inventory.entries.filter(
  (entry) =>
    entry.name.startsWith("async-canvas-node-") ||
    names.has(entry.name) ||
    ["9725", "2232"].includes(entry.id),
);
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const resources = [];
let previous = [];
try {
  previous = JSON.parse(
    await readFile(path.join(root, "capture/manifest.json"), "utf8"),
  ).resources;
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const maxBytesPerResource = 8 * 1024 * 1024;
const maxTotalBytes = 48 * 1024 * 1024;
let totalBytes = 0;
await mkdir(path.join(root, "capture"), { recursive: true });
await mkdir(path.join(root, "readable"), { recursive: true });
let cursor = 0;
async function worker() {
  while (cursor < selection.length) {
    const entry = selection[cursor++];
    const cached = previous.find(
      (resource) => resource.url === entry.url && resource.outcome === "saved",
    );
    if (cached) {
      const bytes = await readFile(path.join(root, cached.path));
      if (bytes.length !== cached.bytes || sha256(bytes) !== cached.sha256)
        throw new Error(`Existing capture changed: ${cached.path}`);
      totalBytes += bytes.length;
      resources.push(cached);
      continue;
    }
    const record = {
      chunkId: entry.id,
      name: entry.name,
      url: entry.url,
      requestedAtUtc: new Date().toISOString(),
    };
    try {
      const url = new URL(entry.url);
      if (url.origin !== "https://lf3-lv-buz.vlabstatic.com" || url.search)
        throw new Error(
          "Resource is outside the approved public static origin.",
        );
      const response = await fetch(url, {
        signal: AbortSignal.timeout(60000),
        credentials: "omit",
        redirect: "error",
      });
      record.status = response.status;
      record.contentType = response.headers.get("content-type");
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const parts = [];
      let size = 0;
      for await (const part of response.body) {
        size += part.length;
        totalBytes += part.length;
        if (size > maxBytesPerResource || totalBytes > maxTotalBytes)
          throw new Error("Capture byte allowance exceeded.");
        parts.push(part);
      }
      const bytes = Buffer.concat(parts);
      record.path = `capture/${path.posix.basename(url.pathname)}`;
      record.bytes = bytes.length;
      record.sha256 = sha256(bytes);
      await writeFile(path.join(root, record.path), bytes);
      record.outcome = "saved";
    } catch (error) {
      record.outcome = "failed";
      record.error = error.message;
    }
    resources.push(record);
    console.log(
      JSON.stringify({
        name: entry.name,
        outcome: record.outcome,
        bytes: record.bytes,
        error: record.error,
      }),
    );
  }
}
await Promise.all([worker(), worker(), worker()]);
resources.sort((a, b) => Number(a.chunkId) - Number(b.chunkId));
await writeFile(
  path.join(root, "capture/manifest.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      scope:
        "Selected publicly referenced canvas node, generation, editing, subject, director and timeline chunks. Anonymous GET only; no browser or authenticated API use; no target execution.",
      inventory: "../lazy-chunks.json",
      inventorySha256: sha256(inventoryBytes),
      additionalSelectionEvidence: [
        {
          chunkId: "9725",
          source: "readable/async-canvas-feature-overlays.778674dbae.js",
          line: 7025,
          reason: "Literal lazy import of DirectorStageWorkspace",
        },
        {
          chunkId: "2232",
          source: "../readable/js/545ec3537fff-main.303f6eac20.js",
          line: 55680,
          reason:
            "DirectorStageShellWorkspaceDialog import chunk from its explicit dependency list; vendor dependencies not followed",
        },
      ],
      concurrency: 3,
      timeoutMsPerRequest: 60000,
      maxBytesPerResource,
      maxTotalBytes,
      resources,
    },
    null,
    2,
  ) + "\n",
);
const results = [];
for (const resource of resources) {
  if (resource.outcome !== "saved") continue;
  const bytes = await readFile(path.join(root, resource.path));
  const result = { source: resource.path, sourceSha256: resource.sha256 };
  try {
    const formatted = await prettier.format(bytes.toString("utf8"), {
      parser: "babel",
    });
    result.path = resource.path.replace(/^capture\//, "readable/");
    await writeFile(path.join(root, result.path), formatted);
    Object.assign(result, {
      status: "formatted",
      sha256: sha256(formatted),
      bytes: Buffer.byteLength(formatted),
      lines: formatted.split("\n").length - 1,
    });
  } catch (error) {
    Object.assign(result, { status: "failed", error: error.message });
  }
  results.push(result);
}
await writeFile(
  path.join(root, "readable-manifest.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      tool: "Prettier",
      version: prettier.version,
      interpretation:
        "Static formatting only. No execution, original-source recovery, or runtime availability claim. Readable line numbers differ from captured byte positions.",
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    selected: selection.length,
    saved: resources.filter((r) => r.outcome === "saved").length,
    totalBytes: resources.reduce((n, r) => n + (r.bytes ?? 0), 0),
    formatted: results.filter((r) => r.status === "formatted").length,
  }),
);
