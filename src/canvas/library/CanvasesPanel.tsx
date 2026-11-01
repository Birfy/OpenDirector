/** Read-only node browsing; opening another project never acquires its edit lease. */
import { useEffect, useState } from "react";
import { errorMessage, headers, responseError } from "../../backend/api";
import {
  listWorkspaceProjects,
  type WorkspaceProject,
} from "../../backend/workspace";
import {
  canvasSources,
  canvasSourceMedia,
  type CanvasSource,
} from "../../backend/canvasSources";
import { MediaCard } from "./MediaCard";
import { CanvasSourceCard } from "./CanvasSourceCard";
import { CANVAS_CATEGORIES } from "./libraryClient";
import { backUpLibrarySubject } from "../../backend/subjectLibrary";
import { addInlineFromCanvas, withMediaSuffix } from "./libraryClient";

export function CanvasesPanel({
  currentId,
  query,
  selected,
  onToggle,
  onNotice,
  onCanvasChanged,
  onState,
  disabled = false,
}: {
  currentId: string;
  query: string;
  selected: Set<string>;
  onToggle: (item: CanvasSource) => void;
  onNotice: (message: string) => void;
  onCanvasChanged: () => void;
  onState: (projectId: string, items: CanvasSource[], loading: boolean) => void;
  disabled?: boolean;
}) {
  const [projects, setProjects] = useState<WorkspaceProject[]>([]),
    [openId, setOpenId] = useState("");
  const [items, setItems] = useState<CanvasSource[]>([]),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [category, setCategory] = useState("");
  useEffect(() => {
    let active = true;
    listWorkspaceProjects()
      .then((value) => {
        if (active) setProjects(value.projects);
      })
      .catch((reason) => {
        if (active) setError(errorMessage(reason));
      });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    let active = true;
    setItems([]);
    setError("");
    if (!openId) {
      setBusy(false);
      return;
    }
    setBusy(true);
    canvasSources(openId)
      .then((value) => {
        if (active) setItems(value);
      })
      .catch((reason) => {
        if (active) setError(errorMessage(reason));
      })
      .finally(() => {
        if (active) setBusy(false);
      });
    return () => {
      active = false;
    };
  }, [openId]);
  const visible = items.filter(
    (item) =>
      (!category || item.kind === category) &&
      item.title.toLowerCase().includes(query.trim().toLowerCase()),
  );
  useEffect(
    () => onState(openId, visible, busy || Boolean(error)),
    [openId, items, category, query, busy, error, onState],
  );
  const chosen = visible.find((item) => selected.has(item.nodeId));
  const backup = async () => {
    if (!chosen) return;
    setBusy(true);
    try {
      if (chosen.kind === "subject")
        await backUpLibrarySubject(openId, chosen.nodeId);
      else {
        const response = await fetch(canvasSourceMedia(openId, chosen), {
          headers,
        });
        if (!response.ok) throw await responseError(response);
        const blob = await response.blob();
        const src = URL.createObjectURL(blob);
        try {
          await addInlineFromCanvas(
            src,
            withMediaSuffix(chosen.title, blob.type),
            { projectId: openId, mimeType: blob.type },
          );
        } finally {
          URL.revokeObjectURL(src);
        }
      }
      onNotice("已将独立副本加入资产库。");
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setBusy(false);
    }
  };
  if (!openId)
    return (
      <div className="cw-lib-panel">
        {error && <p role="alert">{error}</p>}
        <div className="cw-lib-grid cw-lib-grid-wide">
          {projects.map((project) => (
            <MediaCard
              key={project.id}
              shape="wide"
              title={project.name}
              subtitle={project.id === currentId ? "当前画布" : undefined}
              icon="layers"
              selectable={false}
              onOpen={() => {
                if (disabled) return;
                onCanvasChanged();
                setOpenId(project.id);
                setCategory("");
              }}
            />
          ))}
        </div>
      </div>
    );
  return (
    <div className="cw-lib-panel">
      <div className="cw-lib-tabs">
        <button
          type="button"
          disabled={disabled || busy}
          className="cw-lib-back"
          onClick={() => {
            onCanvasChanged();
            setOpenId("");
            setCategory("");
          }}
        >
          ‹ 返回
        </button>
        <button
          type="button"
          disabled={disabled}
          className={!category ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"}
          onClick={() => {
            onCanvasChanged();
            setCategory("");
          }}
        >
          全部
        </button>
        {CANVAS_CATEGORIES.map((entry) => (
          <button
            key={entry.key}
            type="button"
            disabled={disabled}
            className={
              category === entry.key ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"
            }
            onClick={() => {
              onCanvasChanged();
              setCategory(entry.key);
            }}
          >
            {entry.label}
          </button>
        ))}
        <div className="cw-lib-tab-actions">
          <button
            type="button"
            disabled={disabled || busy || !chosen}
            onClick={() => void backup()}
          >
            加入资产
          </button>
        </div>
      </div>
      <p className="cw-lib-note">
        {projects.find((project) => project.id === openId)?.name} ·{" "}
        {items.length} 个有内容的节点 · 只读
      </p>
      {error && <p role="alert">{error}</p>}
      {busy && <p role="status">正在读取素材…</p>}
      {!busy && !visible.length && (
        <p className="cw-lib-empty">该画布暂无此类素材。</p>
      )}
      <div className="cw-lib-grid">
        {visible.map((item) => (
          <CanvasSourceCard
            key={item.nodeId}
            item={item}
            projectId={openId}
            selected={selected.has(item.nodeId)}
            disabled={disabled || busy}
            onSelect={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}
