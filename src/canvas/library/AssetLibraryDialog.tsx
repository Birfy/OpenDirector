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
import { addFromCanvas, addInlineFromCanvas, withMediaSuffix } from "./libraryClient";

export type LibraryMode = "manage" | "select";

type TabKey = "assets" | "subjects" | "canvases" | "trash";

const TABS: { key: TabKey; label: string }[] = [
  { key: "assets", label: "资产" },
  { key: "subjects", label: "主体" },
  { key: "canvases", label: "画布" },
  { key: "trash", label: "回收站" },
];

export function AssetLibraryDialog({
  mode = "manage",
  currentId,
  onClose,
  onImport,
  onInsert,
  onConfirm,
}: {
  mode?: LibraryMode;
  currentId: string;
  onClose: () => void;
  onImport?: (resource: CanvasResource) => void;
  /** Copies library items into the current canvas as canvas-owned assets. */
  onInsert?: (items: LibraryItem[]) => Promise<void>;
  onConfirm?: (items: LibraryItem[]) => void;
}) {
  const [tab, setTab] = useState<TabKey>("assets");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  // A single cache of chosen payloads so confirm can hand back objects.
  const [picked, setPicked] = useState<Map<string, LibraryItem | CanvasResource>>(
    new Map(),
  );
  const [notice, setNotice] = useState("");
  const [reload, setReload] = useState(0);

  const reset = useCallback(() => {
    setSelected(new Set());
    setPicked(new Map());
  }, []);

  useEffect(() => {
    reset();
    setNotice("");
  }, [tab, reset]);

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
    const library = chosen.filter((entry): entry is LibraryItem => "kind" in entry);
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
        if (event.target === event.currentTarget) onClose();
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
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <button
            type="button"
            className="cw-lib-close"
            aria-label="关闭资产库"
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
                  const name = withMediaSuffix(resource.title, resource.mimeType);
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
          <span role="status">{notice || `已选择 ${selected.size} 个素材`}</span>
          <div>
            <button type="button" onClick={onClose}>
              关闭
            </button>
            {mode === "select" && (
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