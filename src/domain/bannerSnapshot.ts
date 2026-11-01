/**
 * Validate banner snapshots without reading or modifying DOM script elements.
 * This pure adapter takes unknown input and reports validation failures;
 * it never follows an action.
 */
type ObjectValue = Record<string, unknown>;
export interface BannerItem extends ObjectValue {
  id: string;
  title: string;
  action: ObjectValue & { type: string };
}
export interface BannerSnapshot {
  items: BannerItem[];
  panelKeys?: string[];
  panelKey?: string;
  source?: string;
}
export type SnapshotResult =
  | { ok: true; value: BannerSnapshot }
  | { ok: false; error: string };

const object = (value: unknown): value is ObjectValue =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const text = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;
const optionalText = (value: unknown) =>
  value === undefined || typeof value === "string";
const optionalStrings = (value: ObjectValue, keys: string[]) =>
  keys.every((key) => optionalText(value[key]));

function validInputRules(value: unknown): boolean {
  if (value === undefined) return true;
  if (!object(value)) return false;
  const pairs = [
    ["minWidth", "maxWidth"],
    ["minHeight", "maxHeight"],
    ["minSizeMB", "maxSizeMB"],
    ["minDurationSeconds", "maxDurationSeconds"],
    ["minCount", "maxCount"],
  ];
  for (const [minKey, maxKey] of pairs) {
    const min = value[minKey];
    const max = value[maxKey];
    if (
      [min, max].some(
        (n) =>
          n !== undefined &&
          (typeof n !== "number" || !Number.isFinite(n) || n < 0),
      )
    )
      return false;
    if (typeof min === "number" && typeof max === "number" && min > max)
      return false;
  }
  for (const key of ["minWidth", "maxWidth", "minHeight", "maxHeight"]) {
    const n = value[key];
    if (
      n !== undefined &&
      (typeof n !== "number" || !Number.isSafeInteger(n) || n <= 0)
    )
      return false;
  }
  for (const key of ["minCount", "maxCount"]) {
    if (value[key] !== undefined && !Number.isSafeInteger(value[key]))
      return false;
  }
  const maxCount = value.maxCount ?? 1;
  const minCount = value.minCount ?? 0;
  return (
    typeof maxCount === "number" &&
    typeof minCount === "number" &&
    maxCount >= 1 &&
    minCount <= maxCount
  );
}

function validAction(value: unknown): value is BannerItem["action"] {
  if (!object(value)) return false;
  switch (value.type) {
    case "tool":
      return text(value.toolKey);
    case "canvas_template":
      return text(value.templateProjectId);
    case "canvas_tool":
      return (
        text(value.url) &&
        text(value.capability) &&
        optionalText(value.capsuleId) &&
        ["image", "video"].includes(value.mediaType as string) &&
        validInputRules(value.inputRules)
      );
    case "link":
      return (
        text(value.url) &&
        ["same_tab", "new_tab"].includes(value.target as string)
      );
    case "generation":
    case "open_generator": {
      if (value.generateType === "digitalHuman")
        return optionalStrings(value, ["modelKey", "speech", "prompt"]);
      if (
        !["image", "video"].includes(value.generateType as string) ||
        !optionalStrings(value, [
          "prompt",
          "modelKey",
          "aspectRatio",
          "resolution",
          "generationMode",
        ])
      )
        return false;
      if (
        value.generateCount !== undefined &&
        (typeof value.generateCount !== "number" ||
          !Number.isInteger(value.generateCount) ||
          value.generateCount <= 0)
      )
        return false;
      if (
        value.durationSeconds !== undefined &&
        (typeof value.durationSeconds !== "number" ||
          !Number.isFinite(value.durationSeconds) ||
          value.durationSeconds <= 0)
      )
        return false;
      return (
        value.referenceImages === undefined ||
        (Array.isArray(value.referenceImages) &&
          value.referenceImages.every(
            (ref: unknown) =>
              object(ref) &&
              optionalText(ref.imageUri) &&
              optionalText(ref.imageUrl) &&
              (text(ref.imageUri) || text(ref.imageUrl)),
          ))
      );
    }
    default:
      return false;
  }
}

function validItem(value: unknown): value is BannerItem {
  return (
    object(value) &&
    text(value.id) &&
    text(value.title) &&
    (value.tag === undefined || ["hot", "new"].includes(value.tag as string)) &&
    (value.badge === undefined ||
      ["hot", "new"].includes(value.badge as string)) &&
    optionalStrings(value, [
      "scene",
      "panelKey",
      "titleKey",
      "description",
      "descriptionKey",
      "detailDescription",
      "detailDescriptionKey",
      "iconUrl",
      "coverUrl",
      "tileCoverUrl",
    ]) &&
    validAction(value.action)
  );
}

/** URL fields are only checked for non-empty text, exactly as observed. This is not a URL sanitizer. */
export function parseBannerSnapshot(input: unknown): SnapshotResult {
  if (!object(input) || input.version !== 1)
    return { ok: false, error: "Expected snapshot version 1." };
  if (!Array.isArray(input.items) || !input.items.every(validItem))
    return { ok: false, error: "Invalid banner items or actions." };
  if (!optionalStrings(input, ["panelKey", "source"]))
    return { ok: false, error: "Invalid panel metadata." };
  if (
    input.panelKeys !== undefined &&
    (!Array.isArray(input.panelKeys) || !input.panelKeys.every(text))
  )
    return { ok: false, error: "Invalid panel keys." };
  if (new Set(input.items.map((item) => item.id)).size !== input.items.length)
    return { ok: false, error: "Duplicate item IDs." };
  return {
    ok: true,
    value: {
      items: input.items,
      ...(Array.isArray(input.panelKeys)
        ? { panelKeys: input.panelKeys as string[] }
        : {}),
      panelKey: input.panelKey as string | undefined,
      source: input.source as string | undefined,
    },
  };
}

export function parseBannerSnapshotText(input: string): SnapshotResult {
  try {
    return parseBannerSnapshot(JSON.parse(input));
  } catch {
    return { ok: false, error: "Invalid JSON." };
  }
}

/** Matches the observed JSON escaping. The typed input supplies no version field. */
export function serializeBannerSnapshot(input: BannerSnapshot): string {
  return JSON.stringify({ version: 1, ...input })
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
