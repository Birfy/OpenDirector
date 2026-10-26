import { createContext, memo, useContext, type MouseEvent } from "react";
import {
  Handle,
  NodeResizer,
  Position,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import type { CanvasNodeData, CanvasNodeKind } from "./model";
import { CanvasIcon } from "./CanvasIcon";
import "./nodes.css";

export interface CanvasActions {
  update: (id: string, data: Partial<CanvasNodeData>) => void;
  rename: (id: string) => void;
  upload: (id: string) => void;
  newConnected: (id: string, direction: "source" | "target") => void;
  preview: (id: string) => void;
  contextMenu: (id: string, event: MouseEvent) => void;
  beginEdit?: (id: string) => void;
  endEdit?: (id: string) => void;
}

export const CanvasActionsContext = createContext<CanvasActions | null>(null);
export type CanvasFlowNode = Node<CanvasNodeData, CanvasNodeKind>;

const names: Record<CanvasNodeKind, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
  file: "文件",
  group: "分组",
};

export const CanvasNodeView = memo(function CanvasNodeView({
  id,
  data,
  selected,
  isConnectable,
  draggable,
}: NodeProps<CanvasFlowNode>) {
  const actions = useContext(CanvasActionsContext);
  const kind = data.kind;
  const hasAsset = Boolean(data.src) && data.assetState !== "missing";
  const menu = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    actions?.contextMenu(id, event);
  };
  const openPreview = (event: MouseEvent) => {
    event.stopPropagation();
    if (hasAsset) actions?.preview(id);
  };

  return (
    <div
      className={`cw-node cw-node-${kind}${selected ? " cw-node-selected" : ""}${!draggable ? " cw-node-locked" : ""}`}
      onContextMenu={menu}
    >
      <NodeResizer
        isVisible={selected && draggable}
        minWidth={kind === "group" ? 200 : 160}
        minHeight={kind === "group" ? 160 : kind === "audio" ? 100 : 120}
        color="#e7e7ec"
        handleClassName="cw-resize-handle"
        lineClassName="cw-resize-line"
        onResizeStart={() => actions?.beginEdit?.(id)}
        onResizeEnd={() => actions?.endEdit?.(id)}
      />
      <div className="cw-node-heading">
        <span className="cw-node-type">
          <CanvasIcon name={kind} size={15} />
        </span>
        <span
          className="cw-node-title"
          title={data.title}
          onDoubleClick={(event) => {
            event.stopPropagation();
            actions?.rename(id);
          }}
        >
          {data.title || names[kind]}
        </span>
        {!draggable && <CanvasIcon name="lock" size={12} />}
        <div className="cw-node-heading-actions nodrag nopan">
          <button
            aria-label={`重命名${data.title}`}
            title="重命名"
            onClick={() => actions?.rename(id)}
          >
            <CanvasIcon name="pencil" size={13} />
          </button>
          <button aria-label="节点选项" title="节点选项" onClick={menu}>
            <CanvasIcon name="tag" size={13} />
          </button>
        </div>
      </div>

      {kind === "group" ? (
        <div className="cw-group-interior" />
      ) : kind === "text" ? (
        <textarea
          className="cw-text-editor nodrag nopan nowheel"
          aria-label={`${data.title}内容`}
          placeholder="输入你的想法…"
          spellCheck={false}
          readOnly={!draggable}
          value={data.text ?? ""}
          onFocus={() => actions?.beginEdit?.(id)}
          onBlur={() => actions?.endEdit?.(id)}
          onChange={(event) =>
            actions?.update(id, { text: event.target.value })
          }
          onKeyDown={(event) => event.stopPropagation()}
        />
      ) : hasAsset ? (
        <div className="cw-node-media" onDoubleClick={openPreview}>
          {kind === "image" && (
            <img
              className="cw-image-preview"
              src={data.src}
              alt={data.title}
              draggable={false}
            />
          )}
          {kind === "video" && (
            <video
              className="cw-video-preview nodrag nopan"
              src={data.src}
              controls
              playsInline
              preload="metadata"
              onClick={(event) => event.stopPropagation()}
            />
          )}
          {kind === "audio" && (
            <div className="cw-audio-preview">
              <div className="cw-audio-wave" aria-hidden="true">
                {Array.from({ length: 32 }, (_, index) => (
                  <i
                    key={index}
                    style={{
                      height: `${14 + Math.sin(index * 1.8) ** 2 * 62}%`,
                    }}
                  />
                ))}
              </div>
              <audio
                className="nodrag nopan"
                src={data.src}
                controls
                preload="metadata"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}
          {kind === "file" && (
            <button
              className="cw-file-preview nodrag nopan"
              onClick={openPreview}
            >
              <CanvasIcon name="file" size={38} />
              <strong>{data.title}</strong>
              <span>{data.mimeType || "本地文件"}</span>
              <span className="cw-file-action">
                打开预览 <CanvasIcon name="arrowRight" size={14} />
              </span>
            </button>
          )}
        </div>
      ) : (
        <button
          className="cw-node-placeholder nodrag nopan"
          onClick={() => actions?.upload(id)}
          aria-label={`上传${names[kind]}`}
        >
          <span className="cw-placeholder-symbol">
            <CanvasIcon name={kind} size={42} />
          </span>
          <span className="cw-placeholder-label">
            {data.assetState === "missing"
              ? "素材未找到，点击重新选择"
              : `点击上传${names[kind]}`}
          </span>
        </button>
      )}

      {kind !== "group" && (
        <>
          <Handle
            id="in"
            type="target"
            position={Position.Left}
            isConnectable={isConnectable}
            className="cw-port cw-port-left"
            title="连接参考素材，或点击创建上游节点"
            onClick={(event) => {
              event.stopPropagation();
              if (isConnectable) actions?.newConnected(id, "target");
            }}
          >
            <span>+</span>
          </Handle>
          <Handle
            id="out"
            type="source"
            position={Position.Right}
            isConnectable={isConnectable}
            className="cw-port cw-port-right"
            title="连接到新节点，或点击创建下游节点"
            onClick={(event) => {
              event.stopPropagation();
              if (isConnectable) actions?.newConnected(id, "source");
            }}
          >
            <span>+</span>
          </Handle>
        </>
      )}
    </div>
  );
});

export default CanvasNodeView;
