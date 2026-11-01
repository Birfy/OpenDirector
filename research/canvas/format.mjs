import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import * as prettier from "prettier";

const root = path.dirname(fileURLToPath(import.meta.url));
const capture = JSON.parse(
  await readFile(path.join(root, "capture/manifest.json"), "utf8"),
);
const digest = (data) => createHash("sha256").update(data).digest("hex");
const results = [];
for (const resource of capture.resources) {
  if (resource.outcome !== "saved") continue;
  const bytes = await readFile(path.join(root, "capture", resource.path));
  if (bytes.length !== resource.bytes || digest(bytes) !== resource.sha256)
    throw new Error(`Capture changed: ${resource.path}`);
  try {
    const formatted = await prettier.format(bytes.toString("utf8"), {
      parser: resource.kind === "css" ? "css" : "babel",
    });
    const output = path.join(root, "readable", resource.path);
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, formatted);
    results.push({
      source: `capture/${resource.path}`,
      sourceSha256: resource.sha256,
      path: `readable/${resource.path}`,
      sha256: digest(formatted),
      bytes: Buffer.byteLength(formatted),
      lines: formatted.split("\n").length - 1,
      status: "formatted",
    });
  } catch (error) {
    results.push({
      source: `capture/${resource.path}`,
      sourceSha256: resource.sha256,
      status: "failed",
      error: error.message,
    });
  }
}
await writeFile(
  path.join(root, "readable-manifest.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      tool: "Prettier",
      version: prettier.version,
      interpretation:
        "Formatting only; original chunks, factory IDs, and JavaScript semantics are retained. No target execution or original-source recovery. Positions in readable output are not original byte offsets.",
      results,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify(
    {
      formatted: results.filter((r) => r.status === "formatted").length,
      failures: results.filter((r) => r.status === "failed"),
    },
    null,
    2,
  ),
);
