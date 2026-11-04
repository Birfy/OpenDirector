import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";
import { useT } from "../i18n/I18nProvider";

/** Names a project for creation, or renames an existing one. */
export function ProjectNameDialog({
  initialName,
  title,
  submitLabel,
  hint,
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
  const t = useT();
  const dialogTitle = title ?? t("canvas.project.createTitle");
  const submitText = submitLabel ?? t("canvas.project.createSubmit");
  const hintText = hint ?? t("canvas.project.createHint");
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
        <h2 id="project-dialog-title">{dialogTitle}</h2>
        <label htmlFor="canvas-project-name">
          {t("canvas.project.nameLabel")}
        </label>
        <input
          ref={input}
          id="canvas-project-name"
          autoFocus
          required
          maxLength={100}
          disabled={busy}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder={t("canvas.project.newNamePlaceholder")}
        />
        <p>{hintText}</p>
        {error && (
          <p className="cw-project-error" role="alert">
            {error}
          </p>
        )}
        <div className="cw-project-dialog-actions">
          <button type="button" disabled={busy} onClick={onClose}>
            {t("common.cancel")}
          </button>
          <button
            className="cw-light-button"
            disabled={busy || !name.trim()}
            type="submit"
          >
            {busy ? t("canvas.project.saving") : submitText}
          </button>
        </div>
      </form>
    </dialog>
  );
}
