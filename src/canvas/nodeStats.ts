import type { CanvasNode, CanvasNodeKind } from "./model";
import { tNow } from "../i18n/messages.ts";
import type { MessageKey } from "../i18n/types.ts";

export interface NodeStatEntry {
  kind: CanvasNodeKind;
  label: string;
  count: number;
}

/** Fixed display order for the node-info panel; matches the design sketch. */
export const NODE_STAT_ORDER: readonly CanvasNodeKind[] = [
  "image",
  "video",
  "text",
  "audio",
  "subject",
  "timeline",
  "group",
];

export const NODE_STAT_LABEL: Record<string, MessageKey> = {
  image: "errors.stats.image",
  video: "errors.stats.video",
  text: "errors.stats.text",
  audio: "errors.stats.audio",
  subject: "errors.stats.subject",
  timeline: "errors.stats.timeline",
  group: "errors.stats.group",
};

/**
 * Counts visible canvas nodes by kind, restricted to the kinds the panel
 * reports.
 *
 * Kinds outside NODE_STAT_ORDER are omitted so the button's total always
 * equals the sum of the listed rows. `hiddenNodes` are never read here: they
 * are logical sources whose presentation is hidden, so reporting them would
 * show counts with no visible counterpart on the canvas.
 */
export function countNodesByKind(
  nodes: readonly CanvasNode[],
): NodeStatEntry[] {
  const counts = new Map<CanvasNodeKind, number>();
  for (const node of nodes) {
    if (!NODE_STAT_ORDER.includes(node.type)) continue;
    counts.set(node.type, (counts.get(node.type) ?? 0) + 1);
  }
  const entries: NodeStatEntry[] = [];
  for (const kind of NODE_STAT_ORDER) {
    const count = counts.get(kind) ?? 0;
    if (count > 0)
      entries.push({
        kind,
        label: tNow(NODE_STAT_LABEL[kind] ?? "errors.stats.other"),
        count,
      });
  }
  return entries;
}

/** Sum of countNodesByKind counts; equals the sum of the panel's rows. */
export function totalNodeCount(nodes: readonly CanvasNode[]): number {
  let total = 0;
  for (const node of nodes) {
    if (NODE_STAT_ORDER.includes(node.type)) total += 1;
  }
  return total;
}
