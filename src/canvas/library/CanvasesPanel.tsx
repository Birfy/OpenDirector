/** Read-only node browsing; opening another project never acquires its edit lease. */
import { useEffect, useState } from "react";
import { errorMessage, headers, responseError } from "../../backend/api";
import { useT } from "../../i18n/I18nProvider";
import {
  listWorkspaceProjects,
  peekWorkspaceProjects,
  type WorkspaceProject,
} from "../../backend/workspace";
import {
  canvasSources,
  canvasSourceMedia,
  peekCanvasSources,
  prefetchCanvasSources,
  type CanvasSource,
} from "../../backend/canvasSources";
import { MediaCard } from "./MediaCard";
import { CanvasSourceCard } from "./CanvasSourceCard";
import { CANVAS_CATEGORIES } from "./libraryClient";
import { backUpLibrarySubject } from "../../backend/subjectLibrary";
import { addInlineFromCanvas, withMediaSuffix } from "./libraryClient";

/** Sources are content-addressed by revision, so equal revisions mean equal cards. */
function sameSources(previous: CanvasSource[], next: CanvasSource[]): boolean {
  return (
    previous.length === next.length &&
    previous.every(
      (item, index) =>
        item.nodeId === next[index]?.nodeId &&
        item.revision === next[index]?.revision,
    )
  );
}

export function CanvasesPanel({
  currentId,
  live,
  query,
  selected,
  onToggle,
  onNotice,
  onCanvasChanged,
  onState,
  disabled = false,
}: {
  currentId: string;
  /** Rows of the canvas that is open right now, derived from its document. */
  live?: { projectId: string; sources: CanvasSource[] };
  query: string;
  selected: Set<string>;
  onToggle: (item: CanvasSource) => void;
  onNotice: (message: string) => void;
  onCanvasChanged: () => void;
  onState: (projectId: string, items: CanvasSource[], loading: boolean) => void;
  disabled?: boolean;
}) {
  const t = useT();
  const liveId = live?.projectId ?? "",
    liveSources = live?.sources;
  const [projects, setProjects] = useState<WorkspaceProject[]>([]),
    [openId, setOpenId] = useState("");
  const [items, setItems] = useState<CanvasSource[]>([]),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [category, setCategory] = useState("");
  useEffect(() => {
    let active = true;
    const seed = peekWorkspaceProjects();
    if (seed) setProjects(seed.projects);
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
    if (openId || !projects.length) return;
    // Opening a canvas from this grid used to wait on a full read of that
    // project; warm them all while the list is on screen instead, one at a time
    // so the thumbnails already requested are not pushed aside.
    const timer = setTimeout(() => {
      void (async () => {
        for (const project of projects)
          if (project.id !== liveId) await prefetchCanvasSources(project.id);
      })();
    }, 150);
    return () => clearTimeout(timer);
  }, [openId, projects, liveId]);
  useEffect(() => {
    // The open canvas is read from the document itself: instant, and never out
    // of step with what the canvas is showing.
    if (liveId && openId === liveId) {
      setItems(liveSources ?? []);
      setBusy(false);
      setError("");
      return;
    }
    let active = true;
    const seed = openId ? peekCanvasSources(openId) : undefined;
    if (seed) {
      setItems(seed);
      setBusy(false);
    } else {
      setItems([]);
      setBusy(Boolean(openId));
    }
    setError("");
    if (!openId) return;
    canvasSources(openId)
      .then((value) => {
        // A refreshed list usually repeats the seeded rows; keeping it by
        // reference stops every card from loading its preview again.
        if (active)
          setItems((previous) =>
            sameSources(previous, value) ? previous : value,
          );
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
  }, [openId, liveId, liveSources]);
  const visible = items.filter(
    (item) =>
      (!category || item.kind === category) &&
      item.title.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const fromDocument = Boolean(liveId) && openId === liveId;
  useEffect(
    () => onState(openId, visible, busy || Boolean(error)),
    [openId, items, category, query, busy, error, onState],
  );
  const chosen = visible.find((item) => selected.has(item.nodeId));
  // Rows read from the open document carry no revision; ask for it only when a
  // copy actually needs one.
  const revisionOf = async (item: CanvasSource) =>
    item.revision || !fromDocument
      ? item
      : ((await canvasSources(openId, { fresh: true })).find(
          (entry) => entry.nodeId === item.nodeId,
        ) ?? item);
  const backup = async () => {
    if (!chosen) return;
    setBusy(true);
    try {
      if (chosen.kind === "subject")
        await backUpLibrarySubject(openId, chosen.nodeId);
      else {
        const response = await fetch(
          canvasSourceMedia(openId, await revisionOf(chosen)),
          { headers },
        );
        if (!response.ok) throw await responseError(response);
        const blob = await response.blob();
        const src = URL.createObjectURL(blob);
        try {
          await addInlineFromCanvas(
            src,
            withMediaSuffix(chosen.title, blob.type),
            { projectId: openId, mimeType: blob.type },
            t,
          );
        } finally {
          URL.revokeObjectURL(src);
        }
      }
      onNotice(t("library.canvases.copied"));
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
              subtitle={
                project.id === currentId
                  ? t("library.canvases.current")
                  : undefined
              }
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
          {t("library.canvases.back")}
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
          {t("library.all")}
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
            {t(entry.labelKey)}
          </button>
        ))}
        <div className="cw-lib-tab-actions">
          <button
            type="button"
            disabled={disabled || busy || !chosen}
            onClick={() => void backup()}
          >
            {t("library.canvases.addToAssets")}
          </button>
        </div>
      </div>
      <p className="cw-lib-note">
        {liveId === openId
          ? t("library.canvases.noteCurrent", { count: items.length })
          : t("library.canvases.note", {
              name:
                projects.find((project) => project.id === openId)?.name ?? "",
              count: items.length,
            })}
      </p>
      {error && <p role="alert">{error}</p>}
      {busy && <p role="status">{t("library.reading")}</p>}
      {!busy && !visible.length && (
        <p className="cw-lib-empty">{t("library.canvases.empty")}</p>
      )}
      <div className="cw-lib-grid">
        {visible.map((item) => (
          <CanvasSourceCard
            key={item.nodeId}
            item={item}
            projectId={openId}
            preview={!fromDocument}
            selected={selected.has(item.nodeId)}
            disabled={disabled || busy}
            onSelect={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}
