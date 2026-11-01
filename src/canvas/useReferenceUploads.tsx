import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { uploadReferenceFile } from "../backend/referenceUploads.ts";
import type { ReferenceAsset } from "./chatReferenceContent.ts";

export function useReferenceUploads(projectId: string) {
  const [choice, setChoice] = useState<{
    matches: ReferenceAsset[];
    select: (asset: ReferenceAsset | null) => void;
  } | null>(null);
  const cancel = useRef<(() => void) | null>(null);
  useEffect(() => () => cancel.current?.(), [projectId]);
  const choose = (matches: ReferenceAsset[], signal: AbortSignal) =>
    new Promise<ReferenceAsset>((resolve, reject) => {
      const select = (asset: ReferenceAsset | null) => {
        signal.removeEventListener("abort", abort);
        cancel.current = null;
        setChoice(null);
        if (asset) resolve(asset);
        else reject(new DOMException("来源选择已取消。", "AbortError"));
      };
      const abort = () => select(null);
      cancel.current = abort;
      signal.addEventListener("abort", abort, { once: true });
      if (signal.aborted) abort();
      else setChoice({ matches, select });
    });
  useEffect(() => {
    if (!choice) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        choice.select(null);
      }
    };
    window.addEventListener("keydown", keydown, true);
    return () => window.removeEventListener("keydown", keydown, true);
  }, [choice]);
  const prepare = async (files: File[], signal: AbortSignal) => {
    const saved: ReferenceAsset[] = [];
    try {
      for (const file of files)
        saved.push(await uploadReferenceFile(projectId, file, signal, choose));
      return saved;
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        if (saved.length)
          throw new DOMException(
            `来源选择已取消。已登记 ${saved.length} 份素材并保留在项目素材，本批引用未插入。`,
            "AbortError",
          );
        throw error;
      }
      throw new Error(
        `${error instanceof Error ? error.message : "上传失败"}${saved.length ? ` 已登记 ${saved.length} 份素材，可从项目素材选择；本批引用未插入。` : ""}`,
      );
    }
  };
  const dialog =
    choice &&
    createPortal(
      <div
        className="cw-modal-backdrop cw-reference-source-choice"
        role="dialog"
        aria-modal="true"
        aria-label="选择已有参考来源"
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            choice.select(null);
          }
        }}
      >
        <div className="cw-modal">
          <h2>选择已有参考来源</h2>
          <p>多个来源的文件内容相同，请选择需要跟随的来源。</p>
          {choice.matches.map((asset, index) => (
            <button
              key={`${asset.nodeId}:${asset.id}:${index}`}
              autoFocus={index === 0}
              type="button"
              onClick={() => choice.select(asset)}
            >
              {asset.nodeTitle || asset.name}
              <small>
                {" "}
                · {asset.kind} · {asset.nodeId ? "已有来源" : "项目素材"}
              </small>
            </button>
          ))}
          <button type="button" onClick={() => choice.select(null)}>
            取消
          </button>
        </div>
      </div>,
      document.body,
    );
  return { prepare, dialog };
}
