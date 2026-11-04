import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../backend/api";
import { useT } from "../i18n/I18nProvider";

/** Confirms removing a project from the list and says what happens to its files. */
export function ProjectDeleteDialog({
  name,
  recycleBin,
  onClose,
  onSubmit,
  title,
  description,
  submitLabel,
  busyLabel,
}: {
  name: string;
  recycleBin: boolean;
  onClose: () => void;
  onSubmit: () => Promise<void>;
  title?: string;
  description?: string;
  submitLabel?: string;
  busyLabel?: string;
}) {
  const t = useT();
  const dialogTitle = title ?? t("canvas.project.deleteTitle");
  const submitText = submitLabel ?? t("canvas.project.deleteSubmit");
  const busyText = busyLabel ?? t("canvas.project.deleting");
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
        <h2 id="project-delete-title">{dialogTitle}</h2>
        <p>{description ?? t("canvas.project.deleteDescription", { name })}</p>
        <p role="note">
          {recycleBin
            ? t("canvas.project.deleteRecycleNote")
            : t("canvas.project.deletePermanentNote")}
        </p>
        {error && (
          <p className="cw-project-error" role="alert">
            {error}
          </p>
        )}
        <div className="cw-project-dialog-actions">
          <button type="button" disabled={busy} onClick={onClose}>
            {t("common.cancel")}
          </button>
          <button className="cw-danger-button" disabled={busy} type="submit">
            {busy ? busyText : submitText}
          </button>
        </div>
      </form>
    </dialog>
  );
}
