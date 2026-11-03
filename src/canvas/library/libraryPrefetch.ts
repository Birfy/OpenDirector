/** Warms the lists the asset library and the project selector show first.
 *
 * Runs once the canvas that was just opened has settled, so the extra reads
 * never compete with installing it. Each read is a no-op while its cache is
 * still fresh, and a failure only means the tab loads on open as before.
 */
import { headers } from "../../backend/api";
import {
  canvasSourceMedia,
  canvasSources,
  peekCanvasSources,
  prefetchCanvasSources,
} from "../../backend/canvasSources";
import { prefetchLibrarySubjects } from "../../backend/subjectLibrary";
import { prefetchWorkspaceProjects } from "../../backend/workspace";
import { prefetchItems } from "./libraryClient";

type Idle = (callback: () => void, options?: { timeout: number }) => void;

const idle: Idle =
  typeof (globalThis as { requestIdleCallback?: Idle }).requestIdleCallback ===
  "function"
    ? (callback, options) =>
        (globalThis as unknown as { requestIdleCallback: Idle })
          .requestIdleCallback(callback, options)
    : (callback) => setTimeout(callback, 1200);

/** A card is a few hundred pixels; rendering its preview costs FFmpeg a moment. */
const PREVIEW_LIMIT = 6;

export function prefetchLibrary(projectId: string) {
  if (!projectId) return;
  // Names and the asset list are cheap and needed first, so they start at once.
  prefetchWorkspaceProjects();
  prefetchItems({ kind: "asset", state: "active" });
  idle(() => {
    prefetchLibrarySubjects();
    prefetchCanvasSources(projectId);
    void prefetchPreviews(projectId);
  }, { timeout: 2500 });
}

/**
 * Renders the first cards of the canvas tab ahead of time. Requests are made one
 * at a time: the server reads the original media for each, and asking for them
 * together is slower than taking turns.
 */
async function prefetchPreviews(projectId: string) {
  try {
    const sources = peekCanvasSources(projectId) ?? (await canvasSources(projectId));
    const cards = sources
      .filter(
        (source) =>
          source.main.kind === "image" || source.main.kind === "video",
      )
      .slice(0, PREVIEW_LIMIT);
    for (const card of cards) {
      await fetch(canvasSourceMedia(projectId, card, "main", "thumb"), {
        headers,
      })
        .then((response) => (response.ok ? response.blob() : undefined))
        .catch(() => {});
    }
  } catch {
    // The tab loads its own previews when opened.
  }
}
