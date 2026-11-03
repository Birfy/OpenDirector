import { useCallback, useEffect, useId, useRef, useState } from "react";
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
import {
  AssetThumbnail,
  HoverPreview,
  type AssetPreview,
} from "./CreationAssetPreview.tsx";
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
  owners: { itemId: string; title: string; visible: boolean }[];
  specId: string | null;
  createdOrder: number;
  categories: string[];
}
const CATEGORIES = [
  { id: "all", label: "全部" },
  { id: "image", label: "图片" },
  { id: "video", label: "视频" },
  { id: "audio", label: "音频" },
  { id: "text", label: "文本" },
  { id: "subject", label: "主体" },
  { id: "timeline", label: "时间线" },
] as const;
type Category = (typeof CATEGORIES)[number]["id"];
interface Listing {
  items: Row[];
  nodes: NodeRow[];
  total: number;
  eventCursor: number;
  counts: Record<Category, number>;
}
interface NodeRow {
  itemId: string;
  title: string;
  kind: "subject" | "timeline";
  visible: boolean;
  asset: Asset | null;
  previewLabel: string;
}
interface Impact {
  fingerprint: string;
  usage: Usage[];
  canDelete: boolean;
  clearsAllUndoRedo: boolean;
  hiddenItemIds: string[];
}

/** OpenDirector's asset management layout without its independent preview branch. */
export function CreationAssetList({
  projectId,
  anchor,
  onClose,
  onLocate,
  position,
}: {
  projectId: string;
  anchor: HTMLElement | null;
  onClose: () => void;
  onLocate: (id: string) => void;
  position: Point;
}) {
  const [text, setText] = useState(""),
    [visibility, setVisibility] = useState("all"),
    [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [preview, setPreview] = useState<AssetPreview | null>(null);
  const previewTimer = useRef<number | undefined>(undefined);
  const clearPreview = useCallback(() => {
    window.clearTimeout(previewTimer.current);
    setPreview(null);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", clearPreview);
    return () => {
      window.removeEventListener("resize", clearPreview);
      window.clearTimeout(previewTimer.current);
    };
  }, [clearPreview]);
  const showPreview = (
    button: HTMLButtonElement,
    value: Omit<AssetPreview, "anchor">,
  ) => {
    clearPreview();
    const panel = dialog.current!.getBoundingClientRect();
    const bounds = button.getBoundingClientRect();
    const anchor = new DOMRect(
      panel.left,
      bounds.top,
      panel.width,
      bounds.height,
    );
    previewTimer.current = window.setTimeout(
      () => setPreview({ ...value, anchor }),
      200,
    );
  };
  const rowsId = useId();
  const [loading, setLoading] = useState(true);
  const [listing, setListing] = useState<Listing | null>(null),
    [error, setError] = useState("");
  const [selected, setSelected] = useState<string[]>([]),
    [busy, setBusy] = useState(false),
    [attempt, setAttempt] = useState(0);
  const [deleting, setDeleting] = useState<{
    ids: string[];
    impact: Impact;
  } | null>(null);
  const dialog = useRef<HTMLElement>(null);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (busy || !(event.target instanceof Node)) return;
      if (
        !dialog.current?.contains(event.target) &&
        !anchor?.contains(event.target)
      )
        onClose();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || busy) return;
      event.preventDefault();
      event.stopPropagation();
      if (
        event.target instanceof Node &&
        dialog.current?.contains(event.target)
      )
        anchor?.querySelector("button")?.focus();
      onClose();
    };
    document.addEventListener("pointerdown", dismiss, true);
    document.addEventListener("keydown", escape, true);
    return () => {
      document.removeEventListener("pointerdown", dismiss, true);
      document.removeEventListener("keydown", escape, true);
    };
  }, [anchor, busy, onClose]);
  useEffect(() => {
    const timer = window.setTimeout(() => setQuery(text), 200);
    return () => window.clearTimeout(timer);
  }, [text]);
  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setListing(null);
    setLoading(true);
    setError("");
    void (async () => {
      const rows: Row[] = [];
      const nodes: NodeRow[] = [];
      let total = Infinity,
        cursor = 0;
      while (rows.length + nodes.length < total) {
        const page = await request<Listing>(
          `${creationPath(projectId)}/asset-list?text=${encodeURIComponent(query)}&visibility=${visibility}&category=${category}&offset=${rows.length + nodes.length}&limit=200`,
          { signal: controller.signal },
        );
        if ((rows.length || nodes.length) && page.eventCursor !== cursor)
          throw new Error("资产列表已变化，请重新读取。");
        rows.push(...page.items);
        nodes.push(...(page.nodes ?? []));
        total = page.total;
        cursor = page.eventCursor;
        if (active)
          setListing({
            items: [...rows],
            nodes: [...nodes],
            total,
            eventCursor: cursor,
            counts: page.counts,
          });
        if (!page.items.length && !page.nodes?.length) break;
      }
      if (active) {
        setLoading(false);
        setSelected((ids) =>
          ids.filter((id) => rows.some((row) => row.asset.id === id)),
        );
      }
    })().catch((reason) => {
      if (active) {
        setListing(null);
        setLoading(false);
        setError(errorMessage(reason));
      }
    });
    return () => {
      active = false;
      controller.abort();
    };
  }, [projectId, query, visibility, category, attempt]);
  useEffect(clearPreview, [category, query, visibility, clearPreview]);
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
  const openNode = async (row: NodeRow) => {
    const client = creationClient(projectId);
    await client.refresh();
    const item = client.snapshot.canvasItems.find(
      (item) => item.id === row.itemId,
    );
    if (!item) {
      setAttempt((value) => value + 1);
      throw new Error("节点已变化，请从更新后的列表选择。");
    }
    if (!visibleItems(client.snapshot).has(item.id)) {
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
    <>
      <aside
        ref={dialog}
        className="cw-creation-assets nodrag nopan nowheel"
        role="dialog"
        aria-label="资产列表"
        onKeyDown={(event) => event.stopPropagation()}
        onWheel={(event) => event.stopPropagation()}
        onMouseLeave={clearPreview}
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
                aria-label="资产显示状态"
                value={visibility}
                onChange={(event) => setVisibility(event.target.value)}
              >
                <option value="all">全部</option>
                <option value="visible">已显示</option>
                <option value="hidden">未显示</option>
              </select>
            </div>
            <div
              className="cw-creation-asset-categories"
              role="tablist"
              aria-label="资产类型"
              onKeyDown={(event) => {
                const index = CATEGORIES.findIndex(
                  (entry) => entry.id === category,
                );
                const next =
                  event.key === "ArrowRight"
                    ? (index + 1) % CATEGORIES.length
                    : event.key === "ArrowLeft"
                      ? (index + CATEGORIES.length - 1) % CATEGORIES.length
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? CATEGORIES.length - 1
                          : -1;
                if (next < 0) return;
                event.preventDefault();
                setCategory(CATEGORIES[next].id);
                event.currentTarget
                  .querySelectorAll<HTMLButtonElement>("button")
                  [next]?.focus();
              }}
            >
              {CATEGORIES.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  role="tab"
                  aria-selected={category === entry.id}
                  aria-label={`${entry.label} ${listing?.counts?.[entry.id] ?? 0}`}
                  aria-controls={rowsId}
                  tabIndex={category === entry.id ? 0 : -1}
                  onClick={() => setCategory(entry.id)}
                >
                  {entry.label}
                  <span>{listing?.counts?.[entry.id] ?? 0}</span>
                </button>
              ))}
            </div>
            {loading && !error && (
              <p role="status">
                正在读取资产列表…
                {listing &&
                  `（${listing.items.length + listing.nodes.length}/${listing.total}）`}
              </p>
            )}
            <div
              id={rowsId}
              className="cw-creation-asset-rows"
              aria-label="资产条目"
              onScroll={clearPreview}
            >
              {listing?.nodes.map((row) => (
                <div key={row.itemId} className="cw-creation-asset-row">
                  <span
                    className="cw-creation-asset-checkbox-space"
                    aria-hidden="true"
                  />
                  <button
                    className="cw-creation-asset-open"
                    aria-describedby={
                      preview?.id === row.itemId
                        ? `asset-preview-${row.itemId}`
                        : undefined
                    }
                    disabled={busy}
                    onClick={() => void perform(() => openNode(row))}
                    onMouseEnter={(event) =>
                      showPreview(event.currentTarget, {
                        id: row.itemId,
                        name: row.title,
                        kind: row.kind,
                        label: row.previewLabel,
                        asset: row.asset,
                      })
                    }
                    onFocus={(event) =>
                      showPreview(event.currentTarget, {
                        id: row.itemId,
                        name: row.title,
                        kind: row.kind,
                        label: row.previewLabel,
                        asset: row.asset,
                      })
                    }
                    onMouseLeave={clearPreview}
                    onBlur={clearPreview}
                  >
                    {row.asset ? (
                      <AssetThumbnail projectId={projectId} asset={row.asset} />
                    ) : (
                      <span
                        className="cw-creation-asset-thumbnail"
                        aria-hidden="true"
                      >
                        <CanvasIcon name={row.kind} size={24} />
                      </span>
                    )}
                    <span>{row.title}</span>
                    <small>
                      {row.visible
                        ? "已显示 · 定位节点"
                        : "未显示 · 显示到画布"}
                    </small>
                  </button>
                </div>
              ))}
              {listing?.items.map((row) => {
                const owner =
                  row.owners.find((owner) => owner.visible) ?? row.owners[0];
                const name = owner?.title.trim() || row.asset.name;
                return (
                  <div key={row.asset.id} className="cw-creation-asset-row">
                    <input
                      type="checkbox"
                      aria-label={`选择资产：${name}`}
                      checked={selected.includes(row.asset.id)}
                      disabled={
                        busy ||
                        (!selected.includes(row.asset.id) &&
                          selected.length >= 100)
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
                      aria-describedby={
                        preview?.id === row.asset.id
                          ? `asset-preview-${row.asset.id}`
                          : undefined
                      }
                      title={row.asset.name}
                      disabled={busy}
                      onClick={() => void perform(() => open(row))}
                      onMouseEnter={(event) =>
                        showPreview(event.currentTarget, {
                          id: row.asset.id,
                          name,
                          label:
                            CATEGORIES.find(
                              (entry) => entry.id === row.asset.kind,
                            )?.label ?? "素材",
                          kind: row.asset.kind,
                          asset: row.asset,
                        })
                      }
                      onFocus={(event) =>
                        showPreview(event.currentTarget, {
                          id: row.asset.id,
                          name,
                          label:
                            CATEGORIES.find(
                              (entry) => entry.id === row.asset.kind,
                            )?.label ?? "素材",
                          kind: row.asset.kind,
                          asset: row.asset,
                        })
                      }
                      onMouseLeave={clearPreview}
                      onBlur={clearPreview}
                    >
                      <AssetThumbnail projectId={projectId} asset={row.asset} />
                      <span>{name}</span>
                      <small>
                        {row.owners.some((owner) => owner.visible)
                          ? "已显示 · 定位节点"
                          : "未显示 · 显示到画布"}
                      </small>
                    </button>
                  </div>
                );
              })}
              {listing && !listing.items.length && !listing.nodes.length && (
                <p>
                  {text || visibility !== "all" || category !== "all"
                    ? "未找到匹配的资产"
                    : "当前暂无资产"}
                </p>
              )}
            </div>
            {(!!listing?.items.length || !!selected.length) && (
              <footer>
                <button
                  disabled={busy || !listing?.items.length}
                  onClick={() =>
                    setSelected(
                      listing!.items.slice(0, 100).map((row) => row.asset.id),
                    )
                  }
                >
                  全选素材
                </button>
                {!!selected.length && (
                  <button disabled={busy} onClick={() => setSelected([])}>
                    取消选择
                  </button>
                )}
                {!!selected.length && (
                  <button
                    disabled={busy}
                    onClick={() => void perform(() => inspect(selected))}
                  >
                    删除所选（{selected.length}）
                  </button>
                )}
              </footer>
            )}
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
              重新读取资产列表
            </button>
          </p>
        )}
      </aside>
      {preview && (
        <HoverPreview
          key={preview.id}
          projectId={projectId}
          preview={preview}
        />
      )}
    </>
  );
}
