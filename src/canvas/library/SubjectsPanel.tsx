/** 「主体」: global subjects snapshotted from completed subject nodes. */
import { useEffect, useState } from "react";
import { errorMessage } from "../../backend/api";
import {
  listItems,
  trashItems,
  type LibraryItem,
} from "./libraryClient";
import { MediaCard } from "./MediaCard";

export function SubjectsPanel({
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

  useEffect(() => {
    let active = true;
    setBusy(true);
    listItems({ kind: "subject", state: "active", query })
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

  const remove = async () => {
    const ids = items.filter((item) => selected.has(item.id)).map((item) => item.id);
    if (!ids.length) return;
    setBusy(true);
    try {
      await trashItems(ids);
      onNotice(`已将 ${ids.length} 个主体移入回收站`);
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
            onClick={() => void remove()}
            disabled={busy || !items.some((item) => selected.has(item.id))}
          >
            移入回收站
          </button>
        </div>
      </div>
      {error && <p role="alert">{error}</p>}
      {busy && !items.length && <p role="status">正在读取主体…</p>}
      {!busy && !items.length && (
        <p className="cw-lib-empty">
          还没有主体。可在「画布」中选择一个已完成的主体节点并加入主体。
        </p>
      )}
      <div className="cw-lib-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.name}
            subtitle={item.subject?.category || undefined}
            icon="subject"
            selected={selected.has(item.id)}
            onSelect={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}