import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";

/** Names a project for creation, or renames an existing one. */
export function ProjectNameDialog({
  initialName,
  title = "新建画布项目",
  submitLabel = "创建项目",
  hint = "项目将保存到本地 projects 目录下的同名文件夹。",
  onClose,
  onSubmit,
}: {
  initialName: string;
  title?: string;
  submitLabel?: string;
  hint?: string;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void>;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [name, setName] = useState(initialName);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    input.current?.select();
    return () => element.close();
  }, []);
  return (
    <dialog
      ref={dialog}
      className="cw-project-dialog"
      aria-labelledby="project-dialog-title"
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
          if (busy || !name.trim()) return;
          setBusy(true);
          setError("");
          try {
            await onSubmit(name.trim());
            onClose();
          } catch (reason) {
            setError(errorMessage(reason));
          } finally {
            setBusy(false);
          }
        }}
      >
        <h2 id="project-dialog-title">{title}</h2>
        <label htmlFor="canvas-project-name">项目名称</label>
        <input
          ref={input}
          id="canvas-project-name"
          autoFocus
          required
          maxLength={100}
          disabled={busy}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="请输入项目名称"
        />
        <p>{hint}</p>
        {error && (
          <p className="cw-project-error" role="alert">
            {error}
          </p>
        )}
        <div className="cw-project-dialog-actions">
          <button type="button" disabled={busy} onClick={onClose}>
            取消
          </button>
          <button
            className="cw-light-button"
            disabled={busy || !name.trim()}
            type="submit"
          >
            {busy ? "正在保存…" : submitLabel}
          </button>
        </div>
      </form>
    </dialog>
  );
}
