/** 「画布」: a read-only projection of every canvas. Never uploads or deletes (L3). */
import { useEffect, useMemo, useState } from "react";
import { errorMessage } from "../../backend/api";
import {
  listWorkspaceProjects,
  readWorkspaceDocument,
  type WorkspaceProject,
} from "../../backend/workspace";
import { projectAssets } from "../projectAssets";
import type { CanvasResource } from "../model";
import { CANVAS_CATEGORIES } from "./libraryClient";
import { MediaCard } from "./MediaCard";

type CanvasCategory = (typeof CANVAS_CATEGORIES)[number]["key"];

const ICONS: Record<string, "image" | "video" | "audio" | "text" | "subject" | "layers" | "file"> = {
  image: "image",
  video: "video",
  audio: "audio",
  text: "text",
  subject: "subject",
  timeline: "layers",
  file: "file",
};

/** Canvas media can be backed up whenever some bytes are reachable. */
export function canBackUp(resource: CanvasResource): boolean {
  return Boolean(resource.assetId || resource.src);
}

/**
 * Media kinds the canvas projection can produce. `text` covers text and file
 * nodes; `subject` and `timeline` are node-derived and only exist on a canvas,
 * never in the library, so each category maps explicitly (design R3).
 */
function resourceCategory(resource: CanvasResource): CanvasCategory | null {
  if (resource.kind === "image") return "image";
  if (resource.kind === "video") return "video";
  if (resource.kind === "audio") return "audio";
  if (resource.kind === "text") return "text";
  if (resource.kind === "file") return "text";
  return null;
}

export function CanvasesPanel({
  currentId,
  query,
  selected,
  onToggle,
  onImport,
  onNotice,
  onCanvasChanged,
  onAddToAssets,
}: {
  currentId: string;
  query: string;
  selected: Set<string>;
  onToggle: (resource: CanvasResource) => void;
  onImport: (resource: CanvasResource) => void;
  onNotice: (message: string) => void;
  /** Switching canvases must clear the selection: ids are positional
   *  (`asset-0`, `asset-1`), so the first item of every canvas collides. */
  onCanvasChanged: () => void;
  /** Backs up the selected canvas media into「资产」 (invariant L1). */
  onAddToAssets: (
    projectId: string,
    resources: CanvasResource[],
  ) => Promise<void>;
}) {
  const [projects, setProjects] = useState<WorkspaceProject[]>([]);
  const [openId, setOpenId] = useState("");
  const [resources, setResources] = useState<CanvasResource[]>([]);
  const [nodeCount, setNodeCount] = useState(0);
  const [category, setCategory] = useState<CanvasCategory | "">("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let active = true;
    setBusy(true);
    listWorkspaceProjects()
      .then((result) => {
        if (active) setProjects(result.projects);
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
  }, []);

  useEffect(() => {
    if (!openId) {
      setResources([]);
      setNodeCount(0);
      return;
    }
    const project = projects.find((item) => item.id === openId);
    if (!project) return;
    let active = true;
    setBusy(true);
    setError("");
    readWorkspaceDocument(project)
      .then((document) => {
        if (!active) return;
        // projectAssets() numbers resources per document (`asset-0`, ...),
        // so namespace them by canvas; otherwise a selection made in one
        // canvas would match the same positional id in another.
        setResources(
          projectAssets(document).map((resource) => ({
            ...resource,
            id: `${project.id}:${resource.id}`,
          })),
        );
        setNodeCount(document.nodes.length);
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
  }, [openId, projects]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return resources.filter(
      (resource) =>
        (!category || resourceCategory(resource) === category) &&
        (!needle || resource.title.toLowerCase().includes(needle)),
    );
  }, [resources, category, query]);

  const chosen = useMemo(
    () => visible.filter((resource) => selected.has(resource.id)),
    [visible, selected],
  );
  const backedUp = chosen.filter(canBackUp);
  const notBackedUp = chosen.length - backedUp.length;

  const addToAssets = async () => {
    if (!openId || !backedUp.length) return;
    setSaving(true);
    setError("");
    try {
      await onAddToAssets(openId, backedUp);
      const skipped = notBackedUp
        ? `，${notBackedUp} 个素材没有可读取的内容已跳过`
        : "";
      onNotice(`已加入 ${backedUp.length} 个素材到资产${skipped}`);
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setSaving(false);
    }
  };

  if (!openId)
    return (
      <div className="cw-lib-panel">
        <div className="cw-lib-tabs">
          <button type="button" className="cw-lib-tab cw-lib-tab-on">
            全部
          </button>
        </div>
        {error && <p role="alert">{error}</p>}
        {busy && !projects.length && <p role="status">正在读取画布…</p>}
        {!busy && !projects.length && (
          <p className="cw-lib-empty">还没有已保存的画布。</p>
        )}
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
                onCanvasChanged();
                setOpenId(project.id);
                setCategory("");
              }}
            />
          ))}
        </div>
      </div>
    );

  const project = projects.find((item) => item.id === openId);
  return (
    <div className="cw-lib-panel">
      <div className="cw-lib-tabs">
        <button
          type="button"
          className="cw-lib-back"
          onClick={() => {
            onCanvasChanged();
            setOpenId("");
            setError("");
          }}
        >
          ‹ 返回
        </button>
        <button
          type="button"
          className={category === "" ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"}
          onClick={() => setCategory("")}
        >
          全部
        </button>
        {CANVAS_CATEGORIES.map((entry) => (
          <button
            key={entry.key}
            type="button"
            className={category === entry.key ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"}
            onClick={() => setCategory(entry.key)}
          >
            {entry.label}
          </button>
        ))}
        <div className="cw-lib-tab-actions">
          <button
            type="button"
            disabled={!backedUp.length || saving}
            title={
              chosen.length && !backedUp.length
                ? "选中的素材没有可读取的内容，无法加入资产"
                : undefined
            }
            onClick={() => void addToAssets()}
          >
            {saving ? "正在加入…" : "加入资产"}
          </button>
          <button
            type="button"
            disabled={!selected.size}
            onClick={() => {
              // Strip the canvas namespace before handing the resource to the
              // canvas importer, so ids stay the shape it expects.
              for (const resource of visible)
                if (selected.has(resource.id))
                  onImport({ ...resource, id: resource.id.split(":").pop()! });
              onNotice("已复制到当前画布");
            }}
          >
            复制到当前画布
          </button>
        </div>
      </div>
      <p className="cw-lib-note">
        {project?.name} · 共 {nodeCount} 个节点（只读，与画布保持一致）
      </p>
      {error && <p role="alert">{error}</p>}
      {busy && !visible.length && <p role="status">正在读取素材…</p>}
      {!busy && !visible.length && <p className="cw-lib-empty">该画布暂无此类素材。</p>}
      <div className="cw-lib-grid">
        {visible.map((resource) => (
          <MediaCard
            key={resource.id}
            title={resource.title}
            subtitle={resource.kind === "text" ? resource.text?.slice(0, 20) : undefined}
            icon={ICONS[resource.kind] ?? "file"}
            kind={resource.kind}
            src={resource.src}
            selected={selected.has(resource.id)}
            onSelect={() => onToggle(resource)}
          />
        ))}
      </div>
    </div>
  );
}