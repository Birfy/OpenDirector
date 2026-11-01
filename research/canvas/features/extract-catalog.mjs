import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = path.dirname(fileURLToPath(import.meta.url));
const digest = (data) => createHash("sha256").update(data).digest("hex");
const labels = JSON.parse(
  await readFile(path.join(root, "../localized-labels.json"), "utf8"),
);
const labelFamilies =
  /^(octo_canvas_(audio_generator|image_generator|video_generator|text_generator|generator|selection_context_toolbar|feature_intro|cinema_studio|director_stage|subject|lighting|multi_angle|motion|camera|tool|timeline)|octo_(audio_separation|director_stage|dynamic_poster|image_hd|image_layer_board|image_upscale|post_edit|video_|image_edit|image_inpaint|image_cutout))/;
const selectedLabels = labels.entries.filter((entry) =>
  labelFamilies.test(entry.key),
);
const mainPath = "../readable/js/545ec3537fff-main.303f6eac20.js";
const main = await readFile(path.join(root, mainPath), "utf8");
// This intentionally inventories only literal id properties in the examined
// selection toolbar factory. It does not infer dynamic ids or visibility.
const toolbarIds = main.split("\n").flatMap((line, index) => {
  if (index + 1 < 16027 || index + 1 > 17700) return [];
  const match = line.match(/^\s*id: "([a-z0-9-]+)",?$/);
  return match ? [{ id: match[1], line: index + 1 }] : [];
});
const capture = JSON.parse(
  await readFile(path.join(root, "capture/manifest.json"), "utf8"),
);
const baseManifest = JSON.parse(
  await readFile(path.join(root, "../capture/manifest.json"), "utf8"),
);
const sources = [
  ...baseManifest.resources
    .filter(
      (resource) =>
        resource.kind === "js" && !resource.path.includes("zh-Hans"),
    )
    .map((resource) => ({
      path: `../readable/${resource.path}`,
      originalSha256: resource.sha256,
    })),
  ...capture.resources
    .filter((resource) => resource.outcome === "saved")
    .map((resource) => ({
      path: resource.path.replace(/^capture\//, "readable/"),
      originalSha256: resource.sha256,
    })),
];
const models = [];
const directorOperations = [];
for (const source of sources) {
  const text = await readFile(path.join(root, source.path), "utf8");
  const occurrences = [];
  for (const [index, line] of text.split("\n").entries()) {
    if (line.length > 1000) continue;
    if (source.path.startsWith("readable/2232."))
      for (const match of line.matchAll(/"(director\.[a-z0-9_.-]+)"/g))
        directorOperations.push({
          value: match[1],
          source: source.path,
          line: index + 1,
        });
    for (const match of line.matchAll(
      /"(seedream_[a-z0-9_.]+|seedance_[a-z0-9_.]+|seed_audio_[a-z0-9_.]+|dreamina_seedance_[a-z0-9_.]+)"/g,
    ))
      occurrences.push({ value: match[1], line: index + 1 });
  }
  if (occurrences.length)
    models.push({ ...source, readableSha256: digest(text), occurrences });
}
await writeFile(
  path.join(root, "catalog.json"),
  JSON.stringify(
    {
      schemaVersion: 1,
      interpretation:
        "Bounded static inventories. Literal toolbar ids include submenus and separators; labels are translation entries, not enabled actions. Model-like literals include specialized adapters and telemetry keys, not an active model menu. No current prices or account entitlements were fetched.",
      toolbar: {
        source: mainPath,
        readableSha256: digest(main),
        examinedLines: [16027, 17700],
        occurrences: toolbarIds,
      },
      modelLiterals: models,
      directorOperations,
      localizedLabels: {
        source: `../${labels.source}`,
        entries: selectedLabels,
      },
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    toolbarLiteralIds: toolbarIds.length,
    modelSourceFiles: models.length,
    localizedLabels: selectedLabels.length,
  }),
);
