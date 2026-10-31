/** 「资产」: global media backed up from uploads and canvases. */
import { useEffect, useRef, useState } from "react";
import { errorMessage } from "../../backend/api";
import {
  ASSET_CATEGORIES,
  listItems,
  trashItems,
  uploadItem,
  type LibraryItem,
  type LibraryMediaKind,
} from "./libraryClient";
import { MediaCard } from "./MediaCard";

const ICONS: Record<string, "image" | "video" | "audio" | "file"> = {
  image: "image",
  video: "video",
  audio: "audio",
  file: "file",
};

export function AssetsPanel({
  query,
  selected,
  onToggle,
  onChanged,
  onNotice,
  onInsert,
  reloadKey,
}: {
  query: string;
  selected: Set<string>;
  onToggle: (item: LibraryItem) => void;
  onChanged: () => void;
  onNotice: (message: string) => void;
  /** Copies the chosen assets onto the current canvas. */
  onInsert?: (items: LibraryItem[]) => Promise<void>;
  reloadKey: number;
}) {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [kind, setKind] = useState<LibraryMediaKind | "">("");
  const [busy, setBusy] = useState(false);
  const [inserting, setInserting] = useState(false);
  const [error, setError] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const chosen = items.filter(
    (item) => selected.has(item.id) && item.mediaKind !== null,
  );

  const insertIntoCanvas = async () => {
    if (!chosen.length || !onInsert) return;
    setInserting(true);
    setError("");
    try {
      await onInsert(chosen);
      onNotice(`已放入 ${chosen.length} 个素材到当前画布`);
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setInserting(false);
    }
  };

  useEffect(() => {
    let active = true;
    setBusy(true);
    listItems({ kind: "asset", state: "active", query, mediaKind: kind || undefined })
      .then((rows) => {
        if (active) setItems(rows);
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
  }, [query, kind, reloadKey]);

  const upload = async (files: FileList | null) => {
    if (!files?.length) return;
    setError("");
    setBusy(true);
    try {
      for (const file of Array.from(files)) await uploadItem(file);
      onNotice(`已加入 ${files.length} 个素材`);
      onChanged();
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  };

  const remove = async () => {
    const ids = items.filter((item) => selected.has(item.id)).map((item) => item.id);
    if (!ids.length) return;
    setBusy(true);
    try {
      await trashItems(ids);
      onNotice(`已将 ${ids.length} 个素材移入回收站`);
      onChanged();
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="cw-lib-panel">
      <div className="cw-lib-tabs">
        <button
          type="button"
          className={kind === "" ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"}
          onClick={() => setKind("")}
        >
          全部
        </button>
        {ASSET_CATEGORIES.map((category) => (
          <button
            key={category.key}
            type="button"
            className={kind === category.key ? "cw-lib-tab cw-lib-tab-on" : "cw-lib-tab"}
            onClick={() => setKind(category.key)}
          >
            {category.label}
          </button>
        ))}
        <div className="cw-lib-tab-actions">
          <input
            ref={input}
            type="file"
            multiple
            hidden
            onChange={(event) => void upload(event.target.files)}
          />
          <button type="button" onClick={() => input.current?.click()} disabled={busy}>
            上传素材
          </button>
          <button
            type="button"
            onClick={() => void insertIntoCanvas()}
            disabled={busy || !chosen.length}
            title={chosen.length ? undefined : "先选中要放到画布的素材"}
          >
            {inserting ? "正在放入画布…" : "放入当前画布"}
          </button>
          <button
            type="button"
            onClick={() => void remove()}
            disabled={busy || !items.some((item) => selected.has(item.id))}
          >
            移入回收站
          </button>
        </div>
      </div>
      {error && <p role="alert">{error}</p>}
      {busy && !items.length && <p role="status">正在读取资产…</p>}
      {!busy && !items.length && (
        <p className="cw-lib-empty">
          还没有资产。可从本机上传，或在「画布」中把素材加入资产。
        </p>
      )}
      <div className="cw-lib-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.name}
            icon={ICONS[item.mediaKind ?? "file"]}
            item={
              item.mediaKind === "image" ||
              item.mediaKind === "video" ||
              item.mediaKind === "audio"
                ? item
                : undefined
            }
            selected={selected.has(item.id)}
            onSelect={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}