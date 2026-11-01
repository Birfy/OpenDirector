import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { GridSplitOptions, SelectionToolbarMenu } from "./SelectionToolbarMenu";
import type { CanvasNode } from "./model";
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
  /** Opens this operation's dedicated source-bound editing session. */
  onTool?: (tool: CanvasToolId) => void;
  onEdit?: (mode: SelectionEditorMode) => void;
  onCaptureFrame?: (position: "first" | "last") => void;
  onGridSplit?: (rows: number, columns: number) => void;
  onPreview?: () => void;
  onDownload?: () => void;
  onAssistant?: () => void;
  onRename?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

type Action = {
  id: string;
  label: string;
  icon: string;
  run?: () => void;
  options?: MenuOption[];
  disabled?: boolean;
  iconOnly?: boolean;
  destructive?: boolean;
};
type MenuOption = {
  id: string;
  label: string;
  icon: string;
  description?: string;
  run?: () => void;
  grid?: boolean;
  disabled?: boolean;
};
type OpenMenu = {
  nodeId: string;
  actionId: string;
  anchor: HTMLButtonElement;
  initialFocus: "first" | "last";
  grid?: boolean;
};

const imageTools: readonly [CanvasToolId, string, string][] = [
  ["smart-edit", "智能改图", "sparkle"],
  ["panorama", "720 全景", "expand"],
  ["outpaint", "扩图", "expand"],
  ["image-hd", "智能超清", "image"],
  ["cutout", "抠图", "subject"],
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
  onEdit,
  onCaptureFrame,
  onGridSplit,
  onPreview,
  onDownload,
  onAssistant,
  onRename,
  onDuplicate,
  onDelete,
}: NodeSelectionToolbarProps) {
  const toolbar = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [openMenu, setOpenMenu] = useState<OpenMenu | null>(null);
  const hasMedia = Boolean(node.data.src) && node.data.assetState !== "missing";
  useEffect(() => setOpenMenu(null), [node.id, node.type, locked, hasMedia]);
  const mediaKind = ["image", "video", "audio", "file"].includes(node.type);
  if (mediaKind && !hasMedia) return null;

  const editing: Action[] = [];
  const toolOption = (
    tool: CanvasToolId,
    label: string,
    icon: string,
    description?: string,
  ): MenuOption => ({
    id: tool,
    label,
    icon,
    description,
    run: () => onTool?.(tool),
    disabled: !onTool,
  });
  const addMenu = (
    id: string,
    label: string,
    icon: string,
    options: MenuOption[],
  ) => {
    if (options.some((option) => !option.disabled))
      editing.push({ id, label, icon, options, disabled: locked });
  };
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
    addMenu("image-presets", "预设", "sparkle", [
      toolOption(
        "image-presets",
        "选择图像预设",
        "sparkle",
        "可用预设由已连接的模型服务提供",
      ),
    ]);
    addTool("view-control", "多角度", "rotate");
    addTool("lighting", "智能打光", "palette");
    addMenu("marketing", "营销工具", "palette", [
      toolOption("multi-size", "智能多尺寸", "expand"),
      toolOption("layer-decompose", "图层分离", "stack"),
      toolOption("product-replacement", "商品替换", "image"),
      toolOption("dynamic-poster", "动态海报", "video"),
    ]);
    addMenu("tools", "工具", "tool", [
      toolOption("inpainting-remove", "消除", "edit"),
      toolOption("composition", "裁剪与构图", "crop"),
      {
        id: "grid-split",
        label: "网格切分",
        icon: "grid",
        grid: true,
        disabled: !onGridSplit,
      },
      toolOption("annotation", "标注", "pencil"),
    ]);
  } else if (node.type === "video") {
    for (const [tool, label, icon] of videoTools) addTool(tool, label, icon);
    addMenu("video-frame-capture", "截取帧", "image", [
      {
        id: "capture-first",
        label: "首帧",
        icon: "image",
        run: () => onCaptureFrame?.("first"),
        disabled: !onCaptureFrame,
      },
      {
        id: "capture-last",
        label: "尾帧",
        icon: "image",
        run: () => onCaptureFrame?.("last"),
        disabled: !onCaptureFrame,
      },
      {
        id: "capture-custom",
        label: "自定义截帧",
        icon: "camera",
        run: () => onEdit?.("frame"),
        disabled: !onEdit,
      },
    ]);
    addTool("video-depth-capture", "深度动作捕捉", "subject");
    addEditor("video-trim", "视频修剪", "crop", "trim");
    addMenu("sound-separation", "声音分离", "audio", [
      {
        id: "extract-audio",
        label: "提取音频",
        icon: "audio",
        description: "提取视频中已有的音频",
        run: () => onEdit?.("extract-audio"),
        disabled: !onEdit,
      },
      toolOption(
        "audio-separation",
        "分离音轨",
        "sliders",
        "选择人声、背景声或其他声音类型",
      ),
    ]);
    addMenu("tools", "工具", "tool", [
      toolOption("video-frame-interpolation", "补帧", "video"),
      toolOption("video-subtitle-erasure", "字幕擦除", "text"),
      toolOption("video-matting", "视频抠像", "subject"),
      toolOption("video-crop", "视频裁剪", "crop"),
    ]);
  } else if (node.type === "audio") {
    addEditor("audio-trim", "音频裁剪", "crop", "trim");
    addTool("audio-separation", "分离音轨", "audio");
  } else if (editLabels[node.type]) {
    addEditor("edit", editLabels[node.type]!, node.type, "default");
  }
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
  const menuAction =
    openMenu?.nodeId === node.id && !locked
      ? editing.find(
          (action) => action.id === openMenu.actionId && action.options,
        )
      : undefined;
  const showMenu = (
    action: Action,
    anchor: HTMLButtonElement,
    initialFocus: "first" | "last" = "first",
  ) => {
    if (action.disabled) return;
    setOpenMenu({ nodeId: node.id, actionId: action.id, anchor, initialFocus });
  };

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
    <>
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
                aria-haspopup={
                  action.options
                    ? menuAction?.id === action.id && openMenu?.grid
                      ? "dialog"
                      : "menu"
                    : undefined
                }
                aria-expanded={
                  action.options ? menuAction?.id === action.id : undefined
                }
                aria-controls={
                  menuAction?.id === action.id ? menuId : undefined
                }
                label={
                  action.disabled
                    ? `${action.label} · 请先解锁节点`
                    : action.label
                }
                tooltipSide="top"
                // Labelled buttons already show their text; only icons and lock reasons need a tooltip.
                showTooltip={Boolean(action.iconOnly || action.disabled)}
                className={`${action.iconOnly ? "is-icon-only" : ""}${action.destructive ? " is-destructive" : ""}`}
                disabled={action.disabled}
                onClick={(event) => {
                  if (action.options) {
                    if (menuAction?.id === action.id) setOpenMenu(null);
                    else showMenu(action, event.currentTarget);
                  } else {
                    setOpenMenu(null);
                    action.run?.();
                  }
                }}
                onKeyDown={(event) => {
                  if (
                    !action.options ||
                    !["ArrowDown", "ArrowUp"].includes(event.key)
                  )
                    return;
                  event.preventDefault();
                  event.stopPropagation();
                  showMenu(
                    action,
                    event.currentTarget,
                    event.key === "ArrowUp" ? "last" : "first",
                  );
                }}
              >
                <CanvasIcon name={action.icon} size={16} />
                {!action.iconOnly && <span>{action.label}</span>}
                {action.options && <CanvasIcon name="chevronDown" size={12} />}
              </TooltipButton>
            ))}
          </div>
        ))}
      </div>
      {openMenu && menuAction && (
        <SelectionToolbarMenu
          key={`${node.id}-${menuAction.id}`}
          anchor={openMenu.anchor}
          id={menuId}
          label={openMenu.grid ? "网格切分" : menuAction.label}
          role={openMenu.grid ? "dialog" : "menu"}
          initialFocus={openMenu.initialFocus}
          onClose={() => setOpenMenu(null)}
        >
          {openMenu.grid ? (
            <GridSplitOptions
              onCancel={() => {
                setOpenMenu(null);
                openMenu.anchor.focus({ preventScroll: true });
              }}
              onConfirm={(rows, columns) => {
                setOpenMenu(null);
                onGridSplit?.(rows, columns);
              }}
            />
          ) : (
            menuAction.options?.map((option) => (
              <TooltipButton
                key={option.id}
                data-action={option.id}
                role="menuitem"
                aria-label={option.label}
                label={
                  option.disabled
                    ? `${option.label} · 此操作暂不可用`
                    : (option.description ?? option.label)
                }
                tooltipSide="right"
                // The item shows its label and description; only an unavailable item explains itself.
                showTooltip={Boolean(option.disabled || locked)}
                disabled={option.disabled || locked}
                className="cw-selection-menu-item"
                onClick={() => {
                  if (option.grid) setOpenMenu({ ...openMenu, grid: true });
                  else {
                    setOpenMenu(null);
                    option.run?.();
                  }
                }}
              >
                <CanvasIcon name={option.icon} size={17} />
                <span>
                  <span>{option.label}</span>
                  {option.description && <small>{option.description}</small>}
                </span>
                {option.grid && <CanvasIcon name="chevronRight" size={13} />}
              </TooltipButton>
            ))
          )}
        </SelectionToolbarMenu>
      )}
    </>
  );
}
