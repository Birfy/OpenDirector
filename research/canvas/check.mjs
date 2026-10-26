import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const root = new URL("./", import.meta.url);
const capture = JSON.parse(
  await readFile(new URL("capture/manifest.json", root), "utf8"),
);
const readable = JSON.parse(
  await readFile(new URL("readable-manifest.json", root), "utf8"),
);
const digest = (bytes) => createHash("sha256").update(bytes).digest("hex");
const sources = new Map();
for (const item of capture.resources) {
  if (item.outcome !== "saved") throw new Error(`Missing capture: ${item.url}`);
  const data = await readFile(new URL(`capture/${item.path}`, root));
  if (data.length !== item.bytes || digest(data) !== item.sha256)
    throw new Error(`Capture mismatch: ${item.path}`);
  sources.set(`capture/${item.path}`, item.sha256);
}
const seen = new Set();
for (const item of readable.results) {
  if (
    item.status !== "formatted" ||
    seen.has(item.source) ||
    sources.get(item.source) !== item.sourceSha256
  )
    throw new Error(`Invalid derivation: ${item.source}`);
  const data = await readFile(new URL(item.path, root));
  if (data.length !== item.bytes || digest(data) !== item.sha256)
    throw new Error(`Readable mismatch: ${item.path}`);
  seen.add(item.source);
}
if (seen.size !== sources.size)
  throw new Error("Some captured resources have no readable output.");
console.log(
  JSON.stringify({
    captured: sources.size,
    readable: seen.size,
    hashes: "verified",
    targetExecution: false,
  }),
);
