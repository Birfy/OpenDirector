import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";

/** Confirms removing a project from the list and says what happens to its files. */
export function ProjectDeleteDialog({
  name,
  recycleBin,
  onClose,
  onSubmit,
}: {
  name: string;
  recycleBin: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    return () => element.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      className="cw-project-dialog"
      aria-labelledby="project-delete-title"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onClose();
      }}
    >
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (busy) return;
          setBusy(true);
          setError("");
          try {
            await onSubmit();
            onClose();
          } catch (reason) {
            setError(errorMessage(reason));
          } finally {
            setBusy(false);
          }
        }}
      >
        <h2 id="project-delete-title">删除项目</h2>
        <p>“{name}”将从项目列表移除，正在生成的素材和工具任务需要先取消。</p>
        <p role="note">
          {recycleBin
            ? "删除后项目文件夹会放入本机回收站，需要时可以从回收站恢复。"
            : "删除后不可恢复，项目文件和素材会被永久删除。"}
        </p>
        {error && (
          <p className="cw-project-error" role="alert">
            {error}
          </p>
        )}
        <div className="cw-project-dialog-actions">
          <button type="button" disabled={busy} onClick={onClose}>
            取消
          </button>
          <button className="cw-danger-button" disabled={busy} type="submit">
            {busy ? "正在删除…" : "删除项目"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
