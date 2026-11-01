/** 「回收站」: restore or permanently purge. Never touches canvas data (L4). */
import { useEffect, useState } from "react";
import { errorMessage } from "../../backend/api";
import {
  listItems,
  purgeAll,
  purgeOne,
  restoreItems,
  type LibraryItem,
} from "./libraryClient";
import { MediaCard } from "./MediaCard";

export function TrashPanel({
  query,
  selected,
  onToggle,
  onChanged,
  onNotice,
  reloadKey,
}: {
  query: string;
  selected: Set<string>;
  onToggle: (item: LibraryItem) => void;
  onChanged: () => void;
  onNotice: (message: string) => void;
  reloadKey: number;
}) {
  const [items, setItems] = useState<LibraryItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    let active = true;
    setBusy(true);
    listItems({ state: "trashed", query })
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
  }, [query, reloadKey]);

  const restore = async () => {
    const ids = items.filter((item) => selected.has(item.id)).map((item) => item.id);
    if (!ids.length) return;
    setBusy(true);
    try {
      await restoreItems(ids);
      onNotice(`已还原 ${ids.length} 个素材`);
      onChanged();
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setBusy(false);
    }
  };

  const purgeSelected = async () => {
    const ids = items.filter((item) => selected.has(item.id)).map((item) => item.id);
    if (!ids.length) return;
    setBusy(true);
    try {
      for (const id of ids) await purgeOne(id);
      onNotice(`已永久删除 ${ids.length} 个素材`);
      onChanged();
    } catch (reason) {
      setError(errorMessage(reason));
    } finally {
      setBusy(false);
    }
  };

  const empty = async () => {
    setBusy(true);
    try {
      const result = await purgeAll();
      onNotice(`已清空回收站，释放 ${result.blobsRemoved.length} 个文件`);
      setConfirming(false);
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
        <button type="button" className="cw-lib-tab cw-lib-tab-on">
          全部
        </button>
        <div className="cw-lib-tab-actions">
          <button
            type="button"
            onClick={() => void restore()}
            disabled={busy || !items.some((item) => selected.has(item.id))}
          >
            还原
          </button>
          <button
            type="button"
            onClick={() => void purgeSelected()}
            disabled={busy || !items.some((item) => selected.has(item.id))}
          >
            永久删除
          </button>
          <button
            type="button"
            className="cw-lib-danger"
            onClick={() => setConfirming(true)}
            disabled={busy || !items.length}
          >
            清空回收站
          </button>
        </div>
      </div>
      {confirming && (
        <div className="cw-lib-confirm" role="alertdialog" aria-label="确认清空回收站">
          <p>
            清空后这些素材将无法恢复。画布中的素材不受影响。
          </p>
          <div>
            <button type="button" onClick={() => setConfirming(false)}>
              取消
            </button>
            <button type="button" className="cw-lib-danger" onClick={() => void empty()}>
              确认清空
            </button>
          </div>
        </div>
      )}
      {error && <p role="alert">{error}</p>}
      {busy && !items.length && <p role="status">正在读取回收站…</p>}
      {!busy && !items.length && <p className="cw-lib-empty">回收站是空的。</p>}
      <div className="cw-lib-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.name}
            subtitle={item.trashedAt ? new Date(item.trashedAt).toLocaleString() : undefined}
            icon={item.kind === "subject" ? "subject" : item.mediaKind ?? "file"}
            item={
              item.kind === "asset" &&
              (item.mediaKind === "image" ||
                item.mediaKind === "video" ||
                item.mediaKind === "audio")
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