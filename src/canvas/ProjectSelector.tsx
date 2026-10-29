import { useEffect, useId, useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import {
  listWorkspaceProjects,
  type WorkspaceProject,
} from "../backend/workspace";
import { errorMessage } from "../backend/api";

const NAME_PLACEHOLDER = "输入项目名称";

export function ProjectSelector({
  currentId,
  name,
  disabled,
  onSelect,
  onCreate,
  onRename,
}: {
  currentId: string;
  name: string;
  disabled: boolean;
  onSelect: (project: WorkspaceProject) => Promise<boolean>;
  onCreate: () => void;
  onRename: (name: string) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState<WorkspaceProject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(name);
  const [renameError, setRenameError] = useState("");
  const nameInput = useRef<HTMLInputElement>(null);
  const nameButton = useRef<HTMLButtonElement>(null);
  const editingRef = useRef(false);
  const renamePending = useRef(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const renameErrorId = useId();
  useEffect(() => {
    if (editing) {
      nameInput.current?.focus();
      nameInput.current?.select();
    }
  }, [editing]);
  useEffect(() => {
    setOpen(false);
    editingRef.current = false;
    setEditing(false);
    setRenameError("");
  }, [currentId]);
  const finishEditing = (restoreFocus: boolean) => {
    editingRef.current = false;
    setEditing(false);
    setRenameError("");
    if (restoreFocus) requestAnimationFrame(() => nameButton.current?.focus());
  };
  const saveName = async (restoreFocus: boolean) => {
    if (!editingRef.current) return true;
    if (renamePending.current) return false;
    const nextName = draftName.trim();
    if (nextName === name) {
      finishEditing(restoreFocus);
      return true;
    }
    if (!nextName) {
      setRenameError("项目名称不能为空。");
      return false;
    }
    renamePending.current = true;
    setBusy(true);
    setRenameError("");
    try {
      await onRename(nextName);
      finishEditing(restoreFocus);
      return true;
    } catch (reason) {
      setRenameError(errorMessage(reason));
      return false;
    } finally {
      renamePending.current = false;
      setBusy(false);
    }
  };
  useEffect(() => {
    if (!open) return;
    let active = true;
    setLoading(true);
    setError("");
    void listWorkspaceProjects()
      .then((result) => {
        if (active) {
          setProjects(result.projects);
          setError(result.warnings.join("\n"));
        }
      })
      .catch((reason) => {
        if (active) setError(errorMessage(reason));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    const dismiss = (event: Event) => {
      if (
        event.target instanceof Node &&
        !container.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    return () => {
      active = false;
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
    };
  }, [open]);
  return (
    <div
      className="cw-project-selector"
      ref={container}
      onKeyDown={(event) => {
        if (editing) return;
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          trigger.current?.focus();
        } else if (
          ["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)
        ) {
          event.preventDefault();
          event.stopPropagation();
          if (!open) {
            if (event.target !== trigger.current) return;
            setOpen(true);
            return;
          }
          const buttons = Array.from(
            container.current!.querySelectorAll<HTMLButtonElement>(
              "[role=menuitemradio]:not(:disabled),[role=menuitem]:not(:disabled)",
            ),
          );
          const index = buttons.indexOf(
            document.activeElement as HTMLButtonElement,
          );
          const next =
            event.key === "Home"
              ? 0
              : event.key === "End"
                ? buttons.length - 1
                : event.key === "ArrowUp"
                  ? (index - 1 + buttons.length) % buttons.length
                  : (index + 1) % buttons.length;
          buttons[next]?.focus();
        }
      }}
    >
      <div
        className={`cw-project-title${editing ? " cw-project-name-editor" : ""}`}
        aria-busy={busy}
      >
        {editing ? (
          <div className="cw-project-name-field">
            <span className="cw-project-name-measure" aria-hidden="true">
              {draftName || NAME_PLACEHOLDER}
            </span>
            <input
              ref={nameInput}
              aria-label="项目名称"
              placeholder={NAME_PLACEHOLDER}
              value={draftName}
              maxLength={100}
              readOnly={busy}
              aria-invalid={!!renameError}
              aria-describedby={renameError ? renameErrorId : undefined}
              onChange={(event) => {
                setDraftName(event.target.value);
                setRenameError("");
              }}
              onBlur={() => {
                if (!renameError) void saveName(false);
              }}
              onKeyDown={(event) => {
                event.stopPropagation();
                if (event.nativeEvent.isComposing || event.keyCode === 229)
                  return;
                if (event.key === "Enter") {
                  event.preventDefault();
                  void saveName(true);
                } else if (event.key === "Escape" && !renamePending.current) {
                  event.preventDefault();
                  finishEditing(true);
                }
              }}
            />
          </div>
        ) : (
          <button
            className="cw-project-name"
            ref={nameButton}
            disabled={disabled || busy}
            title="单击编辑项目名称"
            onClick={() => {
              setOpen(false);
              setDraftName(name);
              setRenameError("");
              editingRef.current = true;
              setEditing(true);
            }}
          >
            {name}
          </button>
        )}
        <button
          type="button"
          className="cw-project-chevron"
          ref={trigger}
          disabled={disabled || busy}
          aria-label="切换项目"
          title="切换项目"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? menuId : undefined}
          onPointerDown={(event) => {
            // Commit editing in the click handler so blur cannot swallow this click.
            if (editingRef.current) event.preventDefault();
          }}
          onClick={async () => {
            if (editingRef.current && !(await saveName(false))) return;
            setOpen((value) => !value);
          }}
        >
          <CanvasIcon name="chevron" size={14} />
        </button>
      </div>
      {editing && renameError && (
        <p className="cw-project-rename-error" id={renameErrorId} role="alert">
          {renameError}
        </p>
      )}
      {open && (
        <div
          className="cw-project-dropdown"
          role="menu"
          id={menuId}
          aria-label="画布项目"
        >
          <div className="cw-project-caption">项目</div>
          {error && (
            <p className="cw-project-error" role="alert">
              {error}
            </p>
          )}
          <div className="cw-project-list" aria-busy={loading || busy}>
            {loading ? (
              <p className="cw-project-placeholder" role="status">
                正在读取项目…
              </p>
            ) : (
              projects.map((project) => (
                <button
                  key={project.id}
                  role="menuitemradio"
                  aria-checked={project.id === currentId}
                  disabled={disabled || busy}
                  className="cw-project-option"
                  title={project.name}
                  onClick={async () => {
                    if (project.id === currentId) {
                      setOpen(false);
                      return;
                    }
                    setBusy(true);
                    setError("");
                    try {
                      if (await onSelect(project)) setOpen(false);
                    } catch (reason) {
                      setError(errorMessage(reason));
                    } finally {
                      setBusy(false);
                    }
                  }}
                >
                  <span className="cw-project-thumbnail" aria-hidden="true">
                    <CanvasIcon name="group" size={18} />
                  </span>
                  <span className="cw-project-option-name">{project.name}</span>
                  {project.id === currentId && (
                    <CanvasIcon name="check" size={20} />
                  )}
                </button>
              ))
            )}
          </div>
          <button
            className="cw-project-create"
            role="menuitem"
            disabled={busy || loading || disabled}
            onClick={() => {
              setOpen(false);
              onCreate();
            }}
          >
            <span>新建画布项目</span>
            <CanvasIcon name="plus" size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
