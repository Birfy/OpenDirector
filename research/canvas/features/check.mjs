import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = path.dirname(fileURLToPath(import.meta.url));
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");
const capture = JSON.parse(
  await readFile(path.join(root, "capture/manifest.json"), "utf8"),
);
const readable = JSON.parse(
  await readFile(path.join(root, "readable-manifest.json"), "utf8"),
);
const inventory = await readFile(path.join(root, capture.inventory));
if (sha256(inventory) !== capture.inventorySha256)
  throw new Error("Source inventory changed.");
const originals = new Map();
let bytes = 0;
for (const resource of capture.resources) {
  if (resource.outcome !== "saved")
    throw new Error(`Capture incomplete: ${resource.name}`);
  const data = await readFile(path.join(root, resource.path));
  if (data.length !== resource.bytes || sha256(data) !== resource.sha256)
    throw new Error(`Original bytes changed: ${resource.path}`);
  originals.set(resource.path, resource);
  bytes += data.length;
}
for (const result of readable.results) {
  if (result.status !== "formatted")
    throw new Error(`Formatting incomplete: ${result.source}`);
  if (originals.get(result.source)?.sha256 !== result.sourceSha256)
    throw new Error(`Formatting source mismatch: ${result.source}`);
  const data = await readFile(path.join(root, result.path));
  if (data.length !== result.bytes || sha256(data) !== result.sha256)
    throw new Error(`Readable bytes changed: ${result.path}`);
  if (data.toString("utf8").split("\n").length - 1 !== result.lines)
    throw new Error(`Readable line count mismatch: ${result.path}`);
}
if (readable.results.length !== originals.size)
  throw new Error("Formatting coverage mismatch.");
console.log(
  JSON.stringify({
    originals: originals.size,
    originalBytes: bytes,
    formatted: readable.results.length,
    status: "verified",
    targetExecution: false,
  }),
);
