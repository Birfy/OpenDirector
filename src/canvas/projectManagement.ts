import type { CanvasDocument } from "./model.ts";

/** Async generated results may arrive while a project is saving for a switch. */
export async function persistCurrentDocument(
  read: () => CanvasDocument,
  persist: (snapshot: CanvasDocument) => Promise<boolean>,
): Promise<boolean> {
  for (;;) {
    const snapshot = read();
    if (!(await persist(snapshot))) return false;
    if (read() === snapshot) return true;
  }
}
