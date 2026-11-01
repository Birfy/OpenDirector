/** 「主体」: global subjects snapshotted from completed subject nodes. */
import { useEffect, useState } from "react";
import { errorMessage } from "../../backend/api";
import { trashItems, type LibraryItem } from "./libraryClient";
import { MediaCard } from "./MediaCard";
import {
  listLibrarySubjects,
  type SubjectLibraryItem,
} from "../../backend/subjectLibrary";

export function SubjectsPanel({
  query,
  selected,
  onToggle,
  onChanged,
  onNotice,
  reloadKey,
  onState,
  disabled = false,
  onBackup,
  backupIssue,
}: {
  query: string;
  selected: Set<string>;
  onToggle: (item: LibraryItem) => void;
  onChanged: () => void;
  onNotice: (message: string) => void;
  reloadKey: number;
  onState: (items: SubjectLibraryItem[], busy: boolean) => void;
  disabled?: boolean;
  onBackup: () => void;
  backupIssue: string | null;
}) {
  const [items, setItems] = useState<SubjectLibraryItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    () => onState(items, busy || Boolean(error)),
    [items, busy, error, onState],
  );

  useEffect(() => {
    let active = true;
    setBusy(true);
    setError("");
    listLibrarySubjects(query)
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
    const ids = items
      .filter((item) => selected.has(item.id))
      .map((item) => item.id);
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
            disabled={disabled || Boolean(backupIssue)}
            title={backupIssue ?? "将画布中选中的完整主体保存到主体库。"}
            onClick={onBackup}
          >
            加入选中主体
          </button>
          <button
            type="button"
            onClick={() => void remove()}
            disabled={
              disabled || busy || !items.some((item) => selected.has(item.id))
            }
          >
            移入回收站
          </button>
        </div>
      </div>
      {error && <p role="alert">{error}</p>}
      {busy && !items.length && <p role="status">正在读取主体…</p>}
      {!busy && !items.length && (
        <p className="cw-lib-empty">
          还没有主体。在画布中选中一个有内容的主体节点，再点击“加入选中主体”。
        </p>
      )}
      <div className="cw-lib-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            title={item.name}
            subtitle={item.issue ?? (item.subject?.category || undefined)}
            icon="subject"
            selected={selected.has(item.id)}
            disabled={disabled}
            onSelect={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}
