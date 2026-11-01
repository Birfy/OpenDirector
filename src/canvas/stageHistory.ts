import {
  parseLocalStageValue,
  sameLocalStage,
  type LocalStageDocument,
} from "./stageDocument.ts";
export interface StageHistory {
  past: LocalStageDocument[];
  present: LocalStageDocument;
  future: LocalStageDocument[];
}
export const createStageHistory = (
  present: LocalStageDocument,
): StageHistory => ({
  past: [],
  present: parseLocalStageValue(present),
  future: [],
});
export function commitStageHistory(
  history: StageHistory,
  value: LocalStageDocument,
): StageHistory {
  const present = parseLocalStageValue(value);
  if (sameLocalStage(history.present, present)) return history;
  return { past: [...history.past, history.present], present, future: [] };
}
export function navigateStageHistory(
  history: StageHistory,
  direction: "undo" | "redo",
): StageHistory {
  if (direction === "undo") {
    const present = history.past.at(-1);
    return present
      ? {
          past: history.past.slice(0, -1),
          present,
          future: [history.present, ...history.future],
        }
      : history;
  }
  const present = history.future[0];
  return present
    ? {
        past: [...history.past, history.present],
        present,
        future: history.future.slice(1),
      }
    : history;
}
