/** Global library: every import creates independent canvas nodes. */
import { useCallback, useEffect, useState } from "react";
import { CanvasIcon } from "../CanvasIcon";
import { AssetsPanel } from "./AssetsPanel";
import { SubjectsPanel } from "./SubjectsPanel";
import { CanvasesPanel } from "./CanvasesPanel";
import { TrashPanel } from "./TrashPanel";
import { errorMessage } from "../../backend/api";
import type { LibraryItem } from "./libraryClient";
import type { SubjectLibraryItem } from "../../backend/subjectLibrary";
import type { CanvasSource } from "../../backend/canvasSources";
export type LibraryTab = "assets" | "subjects" | "canvases" | "trash";
const tabs = [
  { key: "assets", label: "资产" },
  { key: "subjects", label: "主体" },
  { key: "canvases", label: "画布" },
  { key: "trash", label: "回收站" },
] as const;
export function AssetLibraryDialog({
  initialTab = "assets",
  currentId,
  onClose,
  onInsert,
  onImportCanvas,
  subjectBusy = false,
  backupSubjectIssue,
  onImportSubjects,
  onBackupSubject,
}: {
  initialTab?: LibraryTab;
  currentId: string;
  onClose: () => void;
  onInsert?: (items: LibraryItem[]) => Promise<void>;
  onImportCanvas?: (projectId: string, item: CanvasSource) => Promise<void>;
  subjectBusy?: boolean;
  backupSubjectIssue?: string | null;
  onImportSubjects?: (items: LibraryItem[]) => Promise<void>;
  onBackupSubject?: () => Promise<void>;
}) {
  const [tab, setTab] = useState<LibraryTab>(initialTab),
    [query, setQuery] = useState(""),
    [selected, setSelected] = useState<Set<string>>(new Set());
  const [items, setItems] = useState<LibraryItem[]>([]),
    [canvasItems, setCanvasItems] = useState<CanvasSource[]>([]),
    [canvasId, setCanvasId] = useState("");
  const [loading, setLoading] = useState(true),
    [working, setWorking] = useState(false),
    [notice, setNotice] = useState(""),
    [reload, setReload] = useState(0);
  const busy = working || subjectBusy;
  const reset = useCallback(() => setSelected(new Set()), []);
  useEffect(() => {
    reset();
    setNotice("");
    setItems([]);
    setCanvasItems([]);
    setLoading(true);
  }, [tab, query, reset]);
  const toggle = useCallback(
    (entry: { id: string }) =>
      setSelected((current) =>
        current.has(entry.id) ? new Set() : new Set([entry.id]),
      ),
    [],
  );
  const report = useCallback((rows: LibraryItem[], pending: boolean) => {
    setItems(rows);
    setLoading(pending);
  }, []);
  const reportCanvas = useCallback(
    (projectId: string, rows: CanvasSource[], pending: boolean) => {
      setCanvasId(projectId);
      setCanvasItems(rows);
      setLoading(pending);
    },
    [],
  );
  const changed = useCallback(() => {
    reset();
    setReload((value) => value + 1);
  }, [reset]);
  const notify = useCallback((message: string) => setNotice(message), []);
  const chosen = items.find((item) => selected.has(item.id));
  const canvasChoice = canvasItems.find((item) => selected.has(item.nodeId));
  const issue = busy
    ? "正在处理，请稍候。"
    : loading
      ? "正在读取素材。"
      : tab === "canvases"
        ? !canvasChoice
          ? "请选择一个节点。"
          : null
        : !chosen
          ? "请选择一项素材。"
          : tab === "subjects" && !(chosen as SubjectLibraryItem).available
            ? (chosen as SubjectLibraryItem).issue || "所选主体不可用。"
            : null;
  const run = async (action: () => Promise<void>, close = true) => {
    if (busy) return;
    setWorking(true);
    setNotice("");
    try {
      await action();
      if (close) onClose();
      else changed();
    } catch (error) {
      setNotice(errorMessage(error));
    } finally {
      setWorking(false);
    }
  };
  const insert = () => {
    if (issue) return;
    void run(async () => {
      if (tab === "subjects" && chosen && onImportSubjects)
        await onImportSubjects([chosen]);
      else if (tab === "canvases" && canvasChoice && onImportCanvas)
        await onImportCanvas(canvasId, canvasChoice);
      else if (chosen && onInsert) await onInsert([chosen]);
      else throw new Error("无法导入该来源。");
    });
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
            {tabs.map((entry) => (
              <button
                key={entry.key}
                type="button"
                role="tab"
                aria-selected={tab === entry.key}
                disabled={busy}
                className={tab === entry.key ? "cw-lib-top-on" : undefined}
                onClick={() => {
                  if (tab === entry.key) return;
                  reset();
                  setItems([]);
                  setCanvasItems([]);
                  setLoading(true);
                  setTab(entry.key);
                }}
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
              onChange={(event) => {
                reset();
                setItems([]);
                setCanvasItems([]);
                setLoading(true);
                setQuery(event.target.value);
              }}
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
              onNotice={notify}
              onState={report}
              disabled={busy}
              reloadKey={reload}
            />
          )}
          {tab === "subjects" && (
            <SubjectsPanel
              query={query}
              selected={selected}
              onToggle={toggle}
              onChanged={changed}
              onNotice={notify}
              onState={report}
              disabled={busy}
              reloadKey={reload}
              onBackup={() => {
                if (onBackupSubject) void run(onBackupSubject, false);
              }}
              backupIssue={
                busy ? "正在处理，请稍候。" : (backupSubjectIssue ?? null)
              }
            />
          )}
          {tab === "canvases" && (
            <CanvasesPanel
              currentId={currentId}
              query={query}
              selected={selected}
              onToggle={(item) => toggle({ id: item.nodeId })}
              onNotice={notify}
              onCanvasChanged={reset}
              onState={reportCanvas}
              disabled={busy}
            />
          )}
          {tab === "trash" && (
            <TrashPanel
              query={query}
              selected={selected}
              onToggle={toggle}
              onChanged={changed}
              onNotice={notify}
              reloadKey={reload}
            />
          )}
        </div>
        <footer className="cw-lib-footer">
          <span role="status">
            {notice || (busy ? "正在处理…" : `已选择 ${selected.size} 项`)}
          </span>
          <div>
            {tab === "trash" ? (
              <button type="button" onClick={onClose}>
                关闭
              </button>
            ) : (
              <button
                type="button"
                disabled={Boolean(issue)}
                title={issue ?? "创建独立的画布节点"}
                onClick={insert}
              >
                导入画布
              </button>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
}
