import { useEffect, useRef, useState } from "react";
import type { Asset, CanvasItem } from "../contracts/generated.ts";
import {
  assetReference,
  creationClient,
  creationPath,
  currentAsset,
  objectVersion,
  visibleItems,
} from "../backend/creationClient.ts";
import { errorMessage, json, request } from "../backend/api.ts";
import { createNode, type Point } from "./model.ts";
import { CanvasIcon } from "./CanvasIcon.tsx";
import "./creation-assets.css";

interface Usage {
  assetId: string;
  used: boolean;
  reasons: { type: string; id: string }[];
  hiddenItemIds: string[];
}
interface Row {
  asset: Asset;
  usage: Usage;
  owners: { itemId: string; visible: boolean }[];
  specId: string | null;
  createdOrder: number;
}
interface Listing {
  items: Row[];
  total: number;
  eventCursor: number;
}
interface Impact {
  fingerprint: string;
  usage: Usage[];
  canDelete: boolean;
  clearsAllUndoRedo: boolean;
  hiddenItemIds: string[];
}

/** MuseShow's asset management layout without its independent preview branch. */
export function CreationAssetList({
  projectId,
  onClose,
  onLocate,
  position,
}: {
  projectId: string;
  onClose: () => void;
  onLocate: (id: string) => void;
  position: Point;
}) {
  const [text, setText] = useState(""),
    [usage, setUsage] = useState("all");
  const [listing, setListing] = useState<Listing | null>(null),
    [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]),
    [busy, setBusy] = useState(false),
    [attempt, setAttempt] = useState(0);
  const [deleting, setDeleting] = useState<{
    ids: string[];
    impact: Impact;
  } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);
  useEffect(() => {
    const element = dialog.current!;
    element.showModal();
    return () => element.close();
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setListing(null);
    setError("");
    void (async () => {
      const rows: Row[] = [];
      let total = Infinity,
        cursor = 0;
      while (rows.length < total) {
        const page = await request<Listing>(
          `${creationPath(projectId)}/asset-list?text=${encodeURIComponent(text)}&usage=${usage}&offset=${rows.length}&limit=200`,
          { signal: controller.signal },
        );
        if (rows.length && page.eventCursor !== cursor)
          throw new Error("资产列表已变化，请重新读取。");
        rows.push(...page.items);
        total = page.total;
        cursor = page.eventCursor;
        if (!page.items.length) break;
      }
      if (active) {
        setListing({ items: rows, total, eventCursor: cursor });
        setSelected((ids) =>
          ids.filter((id) => rows.some((row) => row.asset.id === id)),
        );
      }
    })().catch((reason) => {
      if (active) setError(errorMessage(reason));
    });
    return () => {
      active = false;
      controller.abort();
    };
  }, [projectId, text, usage, attempt]);
  const perform = async (action: () => Promise<void>) => {
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (reason) {
      if (alive.current) setError(errorMessage(reason));
    } finally {
      if (alive.current) setBusy(false);
    }
  };
  const inspect = async (ids: string[]) => {
    let impact = await request<Impact>(
      `${creationPath(projectId)}/asset-delete-preview`,
      json("POST", { assetIds: ids }),
    );
    const onlyUndo = impact.usage.every((entry) =>
      entry.reasons.every((reason) => reason.type === "undo_history"),
    );
    if (!impact.canDelete && onlyUndo)
      impact = await request<Impact>(
        `${creationPath(projectId)}/asset-delete-preview`,
        json("POST", { assetIds: ids, clearHistory: true }),
      );
    if (alive.current) setDeleting({ ids, impact });
  };
  const destroy = async () => {
    if (!deleting) return;
    const client = creationClient(projectId);
    await client.refresh();
    const versions = [
      ...client.snapshot.assets
        .filter((a) => deleting.ids.includes(a.id))
        .map((a) => objectVersion("asset", a)),
      ...client.snapshot.canvasItems
        .filter((i) => deleting.impact.hiddenItemIds.includes(i.id))
        .map((i) => objectVersion("canvas_item", i)),
    ];
    await client.command(
      "asset.delete",
      {
        assetIds: deleting.ids,
        clearHistory: deleting.impact.clearsAllUndoRedo,
      },
      versions,
      deleting.impact.fingerprint,
    );
    if (alive.current) {
      setDeleting(null);
      setSelected([]);
      setAttempt((n) => n + 1);
    }
  };
  const open = async (row: Row) => {
    const client = creationClient(projectId);
    await client.refresh();
    const visible = visibleItems(client.snapshot);
    const owners = client.snapshot.canvasItems.filter(
      (item) => currentAsset(client.snapshot, item)?.id === row.asset.id,
    );
    let item = owners.find((item) => visible.has(item.id)) ?? owners[0];
    if (row.owners.length && !item) {
      setAttempt((n) => n + 1);
      throw new Error("资产的当前版本已变化，请从更新后的列表选择。");
    }
    if (item && !visible.has(item.id)) {
      const versions = [objectVersion("canvas_item", item)];
      let parentId = item.parentId;
      while (parentId) {
        const parent = client.snapshot.canvasItems.find(
          (item) => item.id === parentId,
        )!;
        versions.push(objectVersion("canvas_item", parent));
        parentId = parent.parentId;
      }
      await client.command("canvas.show", { item }, versions);
    } else if (!item) {
      const node = createNode(
        row.asset.kind,
        { x: position.x - 150, y: position.y - 150 },
        {
          media: {
            width: row.asset.metadata.width ?? undefined,
            height: row.asset.metadata.height ?? undefined,
          },
        },
      );
      item = {
        id: node.id,
        projectId,
        revision: 1,
        kind: row.asset.kind,
        title: row.asset.name,
        position: node.position,
        width: node.width,
        height: node.height,
        zIndex: 0,
        locked: false,
        visible: true,
        parentId: null,
        tags: [],
        editors: [],
        binding: row.specId
          ? {
              role: "generation",
              objectRef: { objectType: "generation_spec", id: row.specId },
              materialOverride: null,
            }
          : { role: "material", objectRef: assetReference(row.asset) },
      } as CanvasItem;
      await client.command("canvas.show", { item });
    }
    onLocate(item.id);
    onClose();
  };
  const labels: Record<string, string> = {
    visible_canvas_item: "画布中显示的节点",
    reference: "生成参考",
    job: "生成任务及固定输入",
    result: "生成结果历史",
    editor_document: "编辑文档",
    asset_provenance: "素材来源",
    undo_history: "画布撤销/重做记录",
    unresolved_reference: "尚未解析的参考",
  };
  return (
    <dialog
      ref={dialog}
      className="cw-creation-assets"
      aria-label="资产列表"
      onCancel={(event) => {
        event.preventDefault();
        if (!busy) onClose();
      }}
      onKeyDown={(event) => event.stopPropagation()}
    >
      <header>
        <h2>{deleting ? "永久删除资产" : "资产列表"}</h2>
        <button aria-label="关闭资产列表" disabled={busy} onClick={onClose}>
          <CanvasIcon name="close" />
        </button>
      </header>
      {deleting ? (
        <>
          <p>
            永久删除所选 {deleting.ids.length}{" "}
            项资产及其本地文件？此操作不可撤销。
          </p>
          {deleting.impact.hiddenItemIds.length > 0 && (
            <p>对应隐藏节点保留原身份，其已删除素材绑定将清空。</p>
          )}
          {!deleting.impact.canDelete ? (
            <>
              <p>以下依赖仍在使用资产，请先处理引用。</p>
              <ul>
                {deleting.impact.usage.flatMap((entry) =>
                  entry.reasons.map((reason) => (
                    <li key={`${entry.assetId}:${reason.type}:${reason.id}`}>
                      {labels[reason.type] ?? reason.type} ·{" "}
                      {reason.id.slice(0, 8)}
                    </li>
                  )),
                )}
              </ul>
            </>
          ) : (
            deleting.impact.clearsAllUndoRedo && (
              <p role="note">
                继续删除将清空当前项目全部画布撤销和重做记录，包括其他节点的编辑记录。生成版本历史保留。
              </p>
            )
          )}
          <footer>
            <button disabled={busy} onClick={() => setDeleting(null)}>
              返回
            </button>
            {deleting.impact.canDelete && (
              <button disabled={busy} onClick={() => void perform(destroy)}>
                {deleting.impact.clearsAllUndoRedo
                  ? "删除并清空画布撤销记录"
                  : "确认永久删除"}
              </button>
            )}
          </footer>
        </>
      ) : (
        <>
          <div className="cw-creation-asset-filters">
            <input
              autoFocus
              aria-label="查找资产"
              placeholder="按名称查找…"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
            <select
              aria-label="资产使用状态"
              value={usage}
              onChange={(event) => setUsage(event.target.value)}
            >
              <option value="all">全部</option>
              <option value="used">已使用</option>
              <option value="unused">未使用</option>
            </select>
          </div>
          {!listing && !error && <p role="status">正在读取资产和使用状态…</p>}
          <div className="cw-creation-asset-rows">
            {listing?.items.map((row) => (
              <div key={row.asset.id} className="cw-creation-asset-row">
                <input
                  type="checkbox"
                  aria-label={`选择资产：${row.asset.name}`}
                  checked={selected.includes(row.asset.id)}
                  disabled={
                    busy ||
                    (!selected.includes(row.asset.id) && selected.length >= 100)
                  }
                  onChange={() =>
                    setSelected((ids) =>
                      ids.includes(row.asset.id)
                        ? ids.filter((id) => id !== row.asset.id)
                        : [...ids, row.asset.id],
                    )
                  }
                />
                <button
                  className="cw-creation-asset-open"
                  disabled={busy}
                  onClick={() => void perform(() => open(row))}
                >
                  <CanvasIcon
                    name={row.asset.kind === "file" ? "folder" : row.asset.kind}
                  />
                  <span>{row.asset.name}</span>
                  <small>
                    {row.owners.some((owner) => owner.visible)
                      ? "定位节点"
                      : "显示到画布"}{" "}
                    · {row.usage.used ? "已使用" : "未使用"}
                  </small>
                </button>
                <button
                  aria-label={`永久删除：${row.asset.name}`}
                  title={
                    row.owners.some((owner) => owner.visible)
                      ? "先移除画布节点，再删除资产文件"
                      : "永久删除资产文件"
                  }
                  disabled={busy || row.owners.some((owner) => owner.visible)}
                  onClick={() => void perform(() => inspect([row.asset.id]))}
                >
                  <CanvasIcon name="trash" />
                </button>
              </div>
            ))}
            {listing && !listing.items.length && (
              <p>
                {text || usage !== "all" ? "未找到匹配的资产" : "当前暂无资产"}
              </p>
            )}
          </div>
          <footer>
            <button
              disabled={busy || !listing?.items.length}
              onClick={() =>
                setSelected(
                  listing!.items.slice(0, 100).map((row) => row.asset.id),
                )
              }
            >
              全选当前列表
            </button>
            {!!selected.length && (
              <button disabled={busy} onClick={() => setSelected([])}>
                取消选择
              </button>
            )}
            <button
              disabled={busy || !selected.length}
              onClick={() => void perform(() => inspect(selected))}
            >
              删除所选（{selected.length}）
            </button>
          </footer>
        </>
      )}
      {error && (
        <p role="alert">
          {error}
          <button
            disabled={busy}
            onClick={() => {
              if (deleting) void perform(() => inspect(deleting.ids));
              else setAttempt((n) => n + 1);
            }}
          >
            重新读取资产及使用状态
          </button>
        </p>
      )}
    </dialog>
  );
}
