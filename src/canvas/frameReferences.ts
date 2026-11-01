import type {
  CanvasDocument,
  CanvasNode,
  GenerationSettings,
} from "./model.ts";

export const FRAME_IMAGE_LIMIT = 2;
export const FRAME_IMAGE_LIMIT_MESSAGE =
  "首尾帧模式最多连接 2 个图片节点，请先断开多余连线。";

export function frameImageLimitIssue(
  settings: GenerationSettings,
  incoming: readonly CanvasNode[],
) {
  return settings.mode === "video" &&
    settings.videoMode === "first-last" &&
    new Set(
      incoming.filter((node) => node.type === "image").map((node) => node.id),
    ).size > FRAME_IMAGE_LIMIT
    ? FRAME_IMAGE_LIMIT_MESSAGE
    : null;
}

/** Connection/mode-change default only; rendering and manual clearing never
 * refill a slot. Keep explicit selections and the order of incoming edges. */
export function fillConnectedFrames(
  settings: GenerationSettings,
  incoming: readonly CanvasNode[],
): GenerationSettings {
  if (
    settings.mode !== "video" ||
    settings.videoMode !== "first-last" ||
    frameImageLimitIssue(settings, incoming)
  )
    return settings;
  const images = incoming.filter(
    (node) =>
      node.type === "image" &&
      node.data.src &&
      node.data.assetState !== "missing",
  );
  let next = settings.frameSlotsInitialized
    ? settings
    : { ...settings, frameSlotsInitialized: true };
  for (const field of ["firstFrameNodeId", "lastFrameNodeId"] as const) {
    // Current local adapters accept a first frame only.
    if (settings.modelConfigId && field === "lastFrameNodeId") continue;
    if (next[field]) continue;
    const image = images.find(
      (node) =>
        node.id !== next.firstFrameNodeId && node.id !== next.lastFrameNodeId,
    );
    if (image) next = { ...next, [field]: image.id };
  }
  return next;
}

/** Upgrade older local canvas documents once. Subsequent reloads must preserve
 * intentionally empty slots instead of assigning a frame the user cleared. */
export function initializeConnectedFrames(
  document: CanvasDocument,
): CanvasDocument {
  let changed = false;
  const nodes = document.nodes.map((node) => {
    const settings = node.data.settings;
    if (
      node.type !== "video" ||
      !settings ||
      settings.frameSlotsInitialized ||
      settings.videoMode !== "first-last"
    )
      return node;
    const sources = [
      ...new Set(
        document.edges
          .filter(
            (edge) =>
              edge.target === node.id && edge.intent !== "post_edit_result",
          )
          .map((edge) => edge.source),
      ),
    ];
    const incoming = sources.flatMap(
      (id) => document.nodes.find((item) => item.id === id) ?? [],
    );
    const initialized = fillConnectedFrames(settings, incoming);
    if (initialized === settings) return node;
    changed = true;
    return { ...node, data: { ...node.data, settings: initialized } };
  });
  return changed ? { ...document, nodes } : document;
}
