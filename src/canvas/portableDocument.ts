import type { CanvasDocument } from "./model.ts";

/** Explicit download backup only. Normal persistence always keeps AssetRefs
 * on the server and never converts a result into a browser-owned asset. */
export async function portableDocument(
  document: CanvasDocument,
): Promise<CanvasDocument> {
  const copy = structuredClone(document);
  const media = new Map<string, Promise<string>>();
  const convert = (src: string) => {
    let pending = media.get(src);
    if (!pending) {
      pending = (async () => {
        const response = await fetch(src);
        if (!response.ok)
          throw new Error("无法读取画布素材，未导出不完整的副本。");
        const blob = await response.blob();
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("素材备份失败。"));
          reader.readAsDataURL(blob);
        });
      })();
      media.set(src, pending);
    }
    return pending;
  };
  async function visit(value: unknown): Promise<void> {
    if (!value || typeof value !== "object") return;
    for (const [key, entry] of Object.entries(value)) {
      if (
        (key === "src" || key === "sourceImageUri") &&
        typeof entry === "string" &&
        entry.startsWith("blob:")
      )
        (value as Record<string, unknown>)[key] = await convert(entry);
      else if (typeof entry === "object") await visit(entry);
    }
  }
  await visit(copy);
  for (const node of copy.nodes) {
    const original = document.nodes.find((item) => item.id === node.id)!;
    if (
      node.data.generationEvidence &&
      original.data.src === node.data.generationEvidence.output &&
      node.data.src
    )
      node.data.generationEvidence.output = node.data.src;
  }
  return copy;
}
