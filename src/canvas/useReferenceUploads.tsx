import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { uploadReferenceFile } from "../backend/referenceUploads.ts";
import type { ReferenceAsset } from "./chatReferenceContent.ts";
import { useI18n } from "../i18n/I18nProvider.tsx";

export function useReferenceUploads(projectId: string) {
  const { t } = useI18n();
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
        else reject(new DOMException(t("errors.refs.cancelled"), "AbortError"));
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
            t("errors.refs.cancelledWithSaved", { count: saved.length }),
            "AbortError",
          );
        throw error;
      }
      throw new Error(
        saved.length
          ? t("errors.refs.uploadFailedWithSaved", {
              error:
                error instanceof Error
                  ? error.message
                  : t("errors.refs.uploadFailed"),
              count: saved.length,
            })
          : error instanceof Error
            ? error.message
            : t("errors.refs.uploadFailed"),
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
        aria-label={t("errors.refs.pickerAria")}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            event.stopPropagation();
            choice.select(null);
          }
        }}
      >
        <div className="cw-modal">
          <h2>{t("errors.refs.pickerTitle")}</h2>
          <p>{t("errors.refs.pickerHint")}</p>
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
                · {asset.kind} ·{" "}
                {asset.nodeId
                  ? t("errors.refs.existing")
                  : t("errors.refs.projectAsset")}
              </small>
            </button>
          ))}
          <button type="button" onClick={() => choice.select(null)}>
            {t("errors.refs.cancel")}
          </button>
        </div>
      </div>,
      document.body,
    );
  return { prepare, dialog };
}
