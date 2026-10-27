import { useRef, type CSSProperties, type KeyboardEvent } from "react";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import type { CanvasNode } from "./model";
import { isTaggable } from "./nodeTags";
import type { CanvasToolId } from "./toolCatalog";
import "./node-selection-toolbar.css";

export type SelectionEditorMode =
  | "default"
  | "trim"
  | "frame"
  | "extract-audio";

export interface NodeSelectionToolbarProps {
  node: CanvasNode;
  locked?: boolean;
  /** The caller owns positioning in screen space, outside the zoomed viewport. */
  style?: CSSProperties;
  className?: string;
  /** Opens the existing tool parameters/result-import panel. It does not imply a service is connected. */
  onTool?: (tool: CanvasToolId) => void;
  onTools?: () => void;
  onEdit?: (mode: SelectionEditorMode) => void;
  onPreview?: () => void;
  onDownload?: () => void;
  onAssistant?: () => void;
  onRename?: () => void;
  onTags?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

type Action = {
  id: string;
  label: string;
  icon: string;
  run: () => void;
  disabled?: boolean;
  iconOnly?: boolean;
  destructive?: boolean;
};

const imageTools: readonly [CanvasToolId, string, string][] = [
  ["smart-edit", "智能改图", "sparkle"],
  ["outpaint", "扩图", "expand"],
  ["image-hd", "智能超清", "image"],
  ["cutout", "抠图", "subject"],
  ["view-control", "多角度", "rotate"],
  ["lighting", "智能打光", "palette"],
];
const videoTools: readonly [CanvasToolId, string, string][] = [
  ["video-partial-reshoot", "局部重拍", "camera"],
  ["video-upscale", "智能超清", "video"],
  ["video-edit", "视频编辑", "edit"],
  ["video-extend", "视频延长", "clock"],
];
const editLabels: Partial<Record<CanvasNode["type"], string>> = {
  text: "编辑文本",
  timeline: "编辑时间线",
  subject: "编辑主体",
  stack: "管理堆叠",
  tool: "编辑工具",
  external: "打开导演台",
};

/** Selection actions stay distinct from generation controls. Empty media has no post-edit toolbar.
 * Source menu identities: research/canvas/readable/js/545ec3537fff-main.303f6eac20.js:16051–17512.
 * The local editors and tool drafts implement a subset of those services; labels do not assert parity.
 */
export function NodeSelectionToolbar({
  node,
  locked = false,
  style,
  className = "",
  onTool,
  onTools,
  onEdit,
  onPreview,
  onDownload,
  onAssistant,
  onRename,
  onTags,
  onDuplicate,
  onDelete,
}: NodeSelectionToolbarProps) {
  const toolbar = useRef<HTMLDivElement>(null);
  const hasMedia = Boolean(node.data.src) && node.data.assetState !== "missing";
  const mediaKind = ["image", "video", "audio", "file"].includes(node.type);
  if (mediaKind && !hasMedia) return null;

  const editing: Action[] = [];
  const addTool = (tool: CanvasToolId, label: string, icon: string) => {
    if (onTool)
      editing.push({
        id: tool,
        label,
        icon,
        run: () => onTool(tool),
        disabled: locked,
      });
  };
  const addEditor = (
    id: string,
    label: string,
    icon: string,
    mode: SelectionEditorMode,
  ) => {
    if (onEdit)
      editing.push({
        id,
        label,
        icon,
        run: () => onEdit(mode),
        disabled: locked,
      });
  };
  if (node.type === "image") {
    for (const [tool, label, icon] of imageTools) addTool(tool, label, icon);
  } else if (node.type === "video") {
    for (const [tool, label, icon] of videoTools) addTool(tool, label, icon);
    addEditor("video-frame-capture", "截取帧", "image", "frame");
    addTool("video-depth-capture", "深度动作捕捉", "subject");
    addEditor("video-trim", "视频修剪", "crop", "trim");
    // This local editor extracts the existing audio track; it does not separate voices/instruments.
    addEditor("extract-audio", "分离音频", "audio", "extract-audio");
  } else if (node.type === "audio") {
    addEditor("audio-trim", "音频裁剪", "crop", "trim");
  } else if (editLabels[node.type]) {
    addEditor("edit", editLabels[node.type]!, node.type, "default");
  }
  if (onTools && ["image", "video", "audio"].includes(node.type))
    editing.push({
      id: "tools",
      label: "工具",
      icon: "tool",
      run: onTools,
      disabled: locked,
    });
  if (onAssistant && node.type !== "group")
    editing.push({
      id: "assistant",
      label: "AI 助手",
      icon: "sparkle",
      run: onAssistant,
    });

  const outputs: Action[] = [];
  if (onPreview && hasMedia)
    outputs.push({
      id: "preview",
      label: node.type === "file" ? "预览文件" : "全屏预览",
      icon: "fullscreen",
      run: onPreview,
      iconOnly: true,
    });
  if (onDownload && (hasMedia || node.type === "text"))
    outputs.push({
      id: "download",
      label: "下载",
      icon: "download",
      run: onDownload,
      iconOnly: true,
    });

  const organization: Action[] = [];
  if (onRename)
    organization.push({
      id: "rename",
      label: "重命名",
      icon: "pencil",
      run: onRename,
      iconOnly: true,
      disabled: locked,
    });
  if (onTags && isTaggable(node.type))
    organization.push({
      id: "tags",
      label: "节点标签",
      icon: "tag",
      run: onTags,
      iconOnly: true,
      disabled: locked,
    });
  if (onDuplicate)
    organization.push({
      id: "duplicate",
      label: "创建副本",
      icon: "duplicate",
      run: onDuplicate,
      iconOnly: true,
    });
  if (onDelete)
    organization.push({
      id: "delete",
      label: "删除节点",
      icon: "trash",
      run: onDelete,
      iconOnly: true,
      destructive: true,
      disabled: locked,
    });
  const groups = [editing, outputs, organization].filter(
    (group) => group.length,
  );
  if (!groups.length) return null;

  const navigate = (event: KeyboardEvent<HTMLDivElement>) => {
    // Canvas shortcuts must not delete or move nodes while operating a toolbar button.
    event.stopPropagation();
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const buttons = [
      ...(toolbar.current?.querySelectorAll<HTMLButtonElement>(
        "button:not(:disabled)",
      ) ?? []),
    ];
    if (!buttons.length) return;
    event.preventDefault();
    const current = buttons.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? buttons.length - 1
          : (current + (event.key === "ArrowLeft" ? -1 : 1) + buttons.length) %
            buttons.length;
    buttons[next]?.focus({ preventScroll: true });
    buttons[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  };
  return (
    <div
      ref={toolbar}
      role="toolbar"
      aria-label="节点操作"
      aria-orientation="horizontal"
      data-node-id={node.id}
      className={`cw-selection-toolbar nodrag nopan nowheel ${className}`}
      style={style}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => event.stopPropagation()}
      onDoubleClick={(event) => event.stopPropagation()}
      onWheel={(event) => event.stopPropagation()}
      onKeyDown={navigate}
    >
      {groups.map((actions, index) => (
        <div className="cw-selection-toolbar-group" key={actions[0]!.id}>
          {index > 0 && (
            <span
              className="cw-selection-toolbar-separator"
              aria-hidden="true"
            />
          )}
          {actions.map((action) => (
            <TooltipButton
              key={action.id}
              data-action={action.id}
              aria-label={action.label}
              label={
                action.disabled
                  ? `${action.label} · 请先解锁节点`
                  : action.label
              }
              tooltipSide="top"
              className={`${action.iconOnly ? "is-icon-only" : ""}${action.destructive ? " is-destructive" : ""}`}
              disabled={action.disabled}
              onClick={action.run}
            >
              <CanvasIcon name={action.icon} size={16} />
              {!action.iconOnly && <span>{action.label}</span>}
            </TooltipButton>
          ))}
        </div>
      ))}
    </div>
  );
}
