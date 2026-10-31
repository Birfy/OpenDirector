/**
 * Global asset library shell (docs/ASSET-LIBRARY-DESIGN.md §7).
 *
 * Two modes share one dialog:
 *   manage — opened from the canvas「资产库」button; can delete
 *   select — opened to pick references; bottom bar confirms a selection
 */
import { useCallback, useEffect, useState } from "react";
import { CanvasIcon } from "../CanvasIcon";
import type { CanvasResource } from "../model";
import { AssetsPanel } from "./AssetsPanel";
import { CanvasesPanel } from "./CanvasesPanel";
import { SubjectsPanel } from "./SubjectsPanel";
import { TrashPanel } from "./TrashPanel";
import type { LibraryItem } from "./libraryClient";
import { errorMessage } from "../../backend/api";
import type { SubjectLibraryItem } from "../../backend/subjectLibrary";
import {
  addFromCanvas,
  addInlineFromCanvas,
  withMediaSuffix,
} from "./libraryClient";

export type LibraryMode = "manage" | "select";

export type LibraryTab = "assets" | "subjects" | "canvases" | "trash";

const TABS: { key: LibraryTab; label: string }[] = [
  { key: "assets", label: "资产" },
  { key: "subjects", label: "主体" },
  { key: "canvases", label: "画布" },
  { key: "trash", label: "回收站" },
];

export function AssetLibraryDialog({
  mode = "manage",
  initialTab = "assets",
  currentId,
  onClose,
  onImport,
  onInsert,
  onConfirm,
  subjectTarget,
  subjectBusy = false,
  backupSubjectIssue,
  onImportSubjects,
  onBackupSubject,
}: {
  mode?: LibraryMode;
  initialTab?: LibraryTab;
  currentId: string;
  onClose: () => void;
  onImport?: (resource: CanvasResource) => void;
  /** Copies library items into the current canvas as canvas-owned assets. */
  onInsert?: (items: LibraryItem[]) => Promise<void>;
  onConfirm?: (items: LibraryItem[]) => void;
  subjectTarget?: { id?: string; issue: string | null };
  subjectBusy?: boolean;
  backupSubjectIssue?: string | null;
  onImportSubjects?: (items: LibraryItem[], targetId?: string) => Promise<void>;
  onBackupSubject?: () => Promise<void>;
}) {
  const [tab, setTab] = useState<LibraryTab>(initialTab);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // A single cache of chosen payloads so confirm can hand back objects.
  const [picked, setPicked] = useState<
    Map<string, LibraryItem | CanvasResource>
  >(new Map());
  const [notice, setNotice] = useState("");
  const [reload, setReload] = useState(0);
  const [subjectItems, setSubjectItems] = useState<SubjectLibraryItem[]>([]);
  const [subjectsLoading, setSubjectsLoading] = useState(true);
  const [working, setWorking] = useState(false);
  const busy = working || subjectBusy;
  const reportSubjects = useCallback(
    (items: SubjectLibraryItem[], loading: boolean) => {
      setSubjectItems(items);
      setSubjectsLoading(loading);
    },
    [],
  );
  const chosenSubjects = subjectItems.filter((item) => selected.has(item.id));
  const sourceIssue = busy
    ? "正在处理，请稍候。"
    : subjectsLoading
      ? "正在读取主体。"
      : !chosenSubjects.length
        ? "请先选择主体。"
        : chosenSubjects.length !== selected.size
          ? "所选主体已失效，请重新选择。"
          : (chosenSubjects.find((item) => !item.available)?.issue ?? null);
  const replaceIssue =
    sourceIssue ??
    (chosenSubjects.length !== 1 ? "只能选择一个库中主体。" : null) ??
    subjectTarget?.issue ??
    (!subjectTarget?.id ? "请在画布中仅选中一个主体节点。" : null);
  const importSubjects = async (replace: boolean) => {
    if (!onImportSubjects || (replace ? replaceIssue : sourceIssue)) return;
    setWorking(true);
    setNotice("");
    try {
      await onImportSubjects(
        chosenSubjects,
        replace ? subjectTarget?.id : undefined,
      );
      onClose();
    } catch (error) {
      setNotice(errorMessage(error));
    } finally {
      setWorking(false);
    }
  };
  const backupSubject = async () => {
    if (!onBackupSubject || busy || backupSubjectIssue) return;
    setWorking(true);
    try {
      await onBackupSubject();
      reset();
      setReload((value) => value + 1);
      setNotice("已将选中主体的完整副本加入主体库。");
    } catch (error) {
      setNotice(errorMessage(error));
    } finally {
      setWorking(false);
    }
  };

  const reset = useCallback(() => {
    setSelected(new Set());
    setPicked(new Map());
  }, []);

  useEffect(() => {
    reset();
    setNotice("");
  }, [tab, query, reset]);

  const toggle = useCallback((entry: LibraryItem | CanvasResource) => {
    const id = entry.id;
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setPicked((current) => {
      const next = new Map(current);
      if (next.has(id)) next.delete(id);
      else next.set(id, entry);
      return next;
    });
  }, []);

  const changed = useCallback(() => {
    reset();
    setReload((value) => value + 1);
  }, [reset]);

  // Panels take this by reference, so it must stay stable across renders;
  // a new identity every render would restart their fetch effect in a loop
  // and discard every in-flight result (which happened: the grid stayed
  // empty and `busy` never cleared after uploading or deleting).
  const notifyPanel = useCallback((message: string) => setNotice(message), []);

  const confirm = () => {
    const chosen = [...selected]
      .map((id) => picked.get(id))
      .filter((entry): entry is LibraryItem | CanvasResource => Boolean(entry));
    if (!chosen.length) return;
    const library = chosen.filter(
      (entry): entry is LibraryItem => "kind" in entry,
    );
    if (library.length && onConfirm) onConfirm(library);
    onClose();
  };

  return (
    <div
      className="cw-lib-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="资产库"
      onClick={(event) => {
        if (!busy && event.target === event.currentTarget) onClose();
      }}
    >
      <div className="cw-lib-dialog">
        <header className="cw-lib-header">
          <nav className="cw-lib-top" role="tablist" aria-label="资产库分区">
            {TABS.map((entry) => (
              <button
                key={entry.key}
                type="button"
                role="tab"
                aria-selected={tab === entry.key}
                disabled={busy}
                className={tab === entry.key ? "cw-lib-top-on" : undefined}
                onClick={() => setTab(entry.key)}
              >
                {entry.label}
              </button>
            ))}
          </nav>
          <div className="cw-lib-search">
            <CanvasIcon name="search" size={16} />
            <input
              type="search"
              placeholder="搜索"
              aria-label="搜索资产库"
              value={query}
              disabled={busy}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="cw-lib-close"
            aria-label="关闭资产库"
            disabled={busy}
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="cw-lib-body">
          {tab === "assets" && (
            <AssetsPanel
              query={query}
              selected={selected}
              onToggle={toggle}
              onChanged={changed}
              onNotice={notifyPanel}
              onInsert={onInsert}
              reloadKey={reload}
            />
          )}
          {tab === "subjects" && (
            <SubjectsPanel
              query={query}
              selected={selected}
              onToggle={toggle}
              onChanged={changed}
              onNotice={notifyPanel}
              reloadKey={reload}
              onState={reportSubjects}
              disabled={busy}
              onBackup={() => void backupSubject()}
              backupIssue={
                busy
                  ? "正在处理，请稍候。"
                  : (backupSubjectIssue ??
                    (!onBackupSubject ? "无法保存主体。" : null))
              }
            />
          )}
          {tab === "canvases" && (
            <CanvasesPanel
              currentId={currentId}
              query={query}
              selected={selected}
              onToggle={toggle}
              onImport={(resource) => onImport?.(resource)}
              onNotice={notifyPanel}
              onCanvasChanged={reset}
              onAddToAssets={async (projectId, resources) => {
                // L1: each entry is a byte copy, never a link back to the
                // canvas, so deleting the canvas media cannot break the library.
                for (const resource of resources) {
                  // Canvas titles have no extension; add one so the item can be
                  // copied back onto a canvas later (the backend checks suffix).
                  const name = withMediaSuffix(
                    resource.title,
                    resource.mimeType,
                  );
                  if (resource.assetId)
                    await addFromCanvas(projectId, resource.assetId, name);
                  else if (resource.src)
                    // Media embedded in the document has no asset id; the
                    // browser already holds its bytes.
                    await addInlineFromCanvas(resource.src, name, {
                      projectId,
                      mimeType: resource.mimeType,
                    });
                }
                reset();
                setReload((value) => value + 1);
              }}
            />
          )}
          {tab === "trash" && (
            <TrashPanel
              query={query}
              selected={selected}
              onToggle={toggle}
              onChanged={changed}
              onNotice={notifyPanel}
              reloadKey={reload}
            />
          )}
        </div>

        <footer className="cw-lib-footer">
          <span role="status">
            {notice ||
              (busy
                ? "正在处理主体，请稍候…"
                : `已选择 ${selected.size} 个${tab === "subjects" ? "主体" : "素材"}`)}
          </span>
          <div>
            {tab === "subjects" ? (
              <>
                <button
                  type="button"
                  disabled={Boolean(sourceIssue) || !onImportSubjects}
                  title={sourceIssue ?? "为所选主体创建独立的画布节点。"}
                  onClick={() => void importSubjects(false)}
                >
                  导入画布
                </button>
                <button
                  type="button"
                  disabled={Boolean(replaceIssue) || !onImportSubjects}
                  title={
                    replaceIssue ??
                    "替换选中主体的媒体，保留名称和描述，可撤销。"
                  }
                  onClick={() => void importSubjects(true)}
                >
                  导入选中主体
                </button>
              </>
            ) : (
              <button type="button" disabled={busy} onClick={onClose}>
                关闭
              </button>
            )}
            {tab !== "subjects" && mode === "select" && (
              <button
                type="button"
                className="cw-lib-primary"
                disabled={!selected.size}
                onClick={confirm}
              >
                确认
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
