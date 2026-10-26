import { applyCommand } from "./model.ts";
import type {
  CanvasCommand,
  CanvasDocument,
  CanvasNode,
  GenerationSettings,
} from "./model.ts";

export interface CanvasHistory {
  past: CanvasDocument[];
  present: CanvasDocument;
  future: CanvasDocument[];
  transaction: CanvasDocument | null;
  limit: number;
}

export function createHistory(
  document: CanvasDocument,
  limit = 80,
): CanvasHistory {
  if (!Number.isSafeInteger(limit) || limit < 1)
    throw new Error("历史记录上限必须是正整数。");
  return { past: [], present: document, future: [], transaction: null, limit };
}

/** Records content edits. Panning, zooming and unchanged node updates do not consume undo steps. */
export function recordChange(
  history: CanvasHistory,
  next: CanvasDocument,
): CanvasHistory {
  if (history.transaction || sameContent(history.present, next))
    return { ...history, present: next };
  return {
    ...history,
    past: [...history.past, history.present].slice(-history.limit),
    present: next,
    future: [],
  };
}

export function executeCommand(
  history: CanvasHistory,
  command: CanvasCommand,
): CanvasHistory {
  return recordChange(history, applyCommand(history.present, command));
}

/** Start once on drag start, update during drag, then commit once on drag stop. */
export function beginTransaction(history: CanvasHistory): CanvasHistory {
  return history.transaction
    ? history
    : { ...history, transaction: history.present };
}

export function updateTransaction(
  history: CanvasHistory,
  next: CanvasDocument,
): CanvasHistory {
  return { ...beginTransaction(history), present: next };
}

export function commitTransaction(history: CanvasHistory): CanvasHistory {
  if (!history.transaction) return history;
  if (sameContent(history.transaction, history.present))
    return { ...history, transaction: null };
  return {
    ...history,
    past: [...history.past, history.transaction].slice(-history.limit),
    future: [],
    transaction: null,
  };
}

export function cancelTransaction(history: CanvasHistory): CanvasHistory {
  if (!history.transaction) return history;
  return {
    ...history,
    present: { ...history.transaction, viewport: history.present.viewport },
    transaction: null,
  };
}

export function undo(history: CanvasHistory): CanvasHistory {
  if (history.transaction) return cancelTransaction(history);
  const previous = history.past.at(-1);
  if (!previous) return history;
  return {
    ...history,
    past: history.past.slice(0, -1),
    present: { ...previous, viewport: history.present.viewport },
    future: [history.present, ...history.future],
  };
}

export function redo(history: CanvasHistory): CanvasHistory {
  if (history.transaction) return history;
  const next = history.future[0];
  if (!next) return history;
  return {
    ...history,
    past: [...history.past, history.present].slice(-history.limit),
    present: { ...next, viewport: history.present.viewport },
    future: history.future.slice(1),
  };
}

function sameSettings(
  a: GenerationSettings | undefined,
  b: GenerationSettings | undefined,
): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return (
    a.mode === b.mode &&
    a.model === b.model &&
    a.aspectRatio === b.aspectRatio &&
    a.durationSeconds === b.durationSeconds &&
    a.resolution === b.resolution &&
    a.prompt === b.prompt &&
    a.count === b.count &&
    a.camera === b.camera &&
    a.palette === b.palette &&
    a.style === b.style &&
    a.audioEnabled === b.audioEnabled
  );
}

function sameNode(a: CanvasNode, b: CanvasNode): boolean {
  if (a === b) return true;
  return (
    a.id === b.id &&
    a.type === b.type &&
    a.position.x === b.position.x &&
    a.position.y === b.position.y &&
    a.width === b.width &&
    a.height === b.height &&
    a.locked === b.locked &&
    a.zIndex === b.zIndex &&
    a.parentId === b.parentId &&
    a.data.kind === b.data.kind &&
    a.data.title === b.data.title &&
    a.data.prompt === b.data.prompt &&
    a.data.src === b.data.src &&
    a.data.mimeType === b.data.mimeType &&
    a.data.text === b.data.text &&
    a.data.assetState === b.data.assetState &&
    sameSettings(a.data.settings, b.data.settings)
  );
}

/** Compare known document facts without serializing potentially large embedded media on every drag frame. */
function sameContent(a: CanvasDocument, b: CanvasDocument): boolean {
  if (a === b) return true;
  if (
    a.id !== b.id ||
    a.title !== b.title ||
    a.version !== b.version ||
    !sameSettings(a.settings, b.settings)
  )
    return false;
  if (a.nodes.length !== b.nodes.length || a.edges.length !== b.edges.length)
    return false;
  return (
    a.nodes.every((node, index) => sameNode(node, b.nodes[index]!)) &&
    a.edges.every((edge, index) => {
      const other = b.edges[index]!;
      return (
        edge.id === other.id &&
        edge.source === other.source &&
        edge.target === other.target &&
        edge.sourceHandle === other.sourceHandle &&
        edge.targetHandle === other.targetHandle
      );
    })
  );
}
