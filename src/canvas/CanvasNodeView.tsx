import { memo, useContext, useCallback, type MouseEvent } from "react";
import {
  Handle,
  NodeResizer,
  Position,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import type { CanvasNodeData, CanvasNodeKind, CanvasResource } from "./model";
import { ResourcePreview } from "./EditorModal";
import { resourceFromNode } from "./operations";
import { timelineDuration } from "./timeline";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { GeneratingOverlay } from "./GeneratingOverlay";
import "./nodes.css";
import {
  CanvasActionsContext,
  type CanvasActions,
} from "./CanvasActionsContext";

export type CanvasFlowNode = Node<CanvasNodeData, CanvasNodeKind>;

const names: Record<CanvasNodeKind, string> = {
  image: "图片",
  video: "视频",
  audio: "音频",
  text: "文本",
  file: "文件",
  group: "分组",
  timeline: "时间线",
  subject: "主体",
  stack: "资源堆叠",
  tool: "工具",
  external: "导演台",
};

export const CanvasNodeView = memo(function CanvasNodeView({
  id,
  data,
  selected,
  isConnectable,
  draggable,
}: NodeProps<CanvasFlowNode>) {
  const actions = useContext(CanvasActionsContext);
  const beginEdit = actions?.beginResize;
  const endEdit = actions?.endResize;
  const resizeStart = useCallback(() => beginEdit?.(id), [beginEdit, id]);
  const resizeEnd = useCallback(() => endEdit?.(id), [endEdit, id]);
  const kind = data.kind;
  const hasAsset = Boolean(data.src) && data.assetState !== "missing";
  const locked = Boolean(actions?.isLocked(id));
  const activity = ["image", "video", "audio"].includes(kind)
    ? actions?.generationActivity(id)
    : undefined;
  const menu = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    actions?.contextMenu(id, event);
  };

  return (
    <div
      className={`cw-node cw-node-${kind}${selected ? " cw-node-selected" : ""}${locked ? " cw-node-locked" : ""}${activity ? " cw-node-generating" : ""}${actions?.isArriving(id) ? " cw-node-result-arrival" : ""}`}
      onContextMenu={menu}
      aria-busy={Boolean(activity)}
    >
      <NodeResizer
        isVisible={selected && draggable}
        minWidth={kind === "group" ? 200 : 160}
        minHeight={kind === "group" ? 160 : kind === "audio" ? 100 : 120}
        color="#e7e7ec"
        handleClassName="cw-resize-handle"
        lineClassName="cw-resize-line"
        onResizeStart={resizeStart}
        onResizeEnd={resizeEnd}
      />
      <div className="cw-node-heading">
        <span className="cw-node-type">
          <CanvasIcon name={kind} size={15} />
        </span>
        <span className="cw-node-title" title={data.title}>
          {data.title || names[kind]}
        </span>
        {locked && <CanvasIcon name="lock" size={12} />}
        <div className="cw-node-heading-actions nodrag nopan">
          <TooltipButton
            aria-label={`重命名${data.title}`}
            label="重命名"
            onClick={() => actions?.rename(id)}
          >
            <CanvasIcon name="pencil" size={13} />
          </TooltipButton>
          <TooltipButton aria-label="节点选项" label="节点选项" onClick={menu}>
            <CanvasIcon name="tag" size={13} />
          </TooltipButton>
        </div>
      </div>

      {kind === "group" ? (
        <div className="cw-group-interior" />
      ) : ["timeline", "subject", "stack", "tool", "external"].includes(
          kind,
        ) ? (
        <DomainCard id={id} data={data} actions={actions} />
      ) : kind === "text" ? (
        actions?.isTextEditing(id) ? (
          <textarea
            className="cw-text-editor nodrag nopan nowheel"
            aria-label={`${data.title}内容`}
            placeholder="输入你的想法…"
            spellCheck={false}
            readOnly={locked}
            autoFocus
            value={data.text ?? ""}
            onFocus={() => actions?.beginEdit?.(id)}
            onBlur={() => actions?.finishTextEdit()}
            onChange={(event) =>
              actions?.update(id, { text: event.target.value })
            }
            onKeyDown={(event) => event.stopPropagation()}
          />
        ) : (
          <div className="cw-text-display" aria-label={`${data.title}内容`}>
            {data.text || (
              <span className="cw-text-placeholder">
                双击或按 Enter 输入想法…
              </span>
            )}
          </div>
        )
      ) : hasAsset ? (
        <div className="cw-node-media">
          {kind === "image" && (
            <img
              className="cw-image-preview"
              src={data.src}
              alt={data.title}
              draggable={false}
              onLoad={(event) =>
                actions?.metadata(id, {
                  width: event.currentTarget.naturalWidth,
                  height: event.currentTarget.naturalHeight,
                })
              }
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
              onDurationChange={(event) =>
                actions?.metadata(id, {
                  durationSeconds: event.currentTarget.duration,
                })
              }
              onLoadedMetadata={(event) =>
                actions?.metadata(id, {
                  width: event.currentTarget.videoWidth,
                  height: event.currentTarget.videoHeight,
                  durationSeconds: event.currentTarget.duration,
                })
              }
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
                onDurationChange={(event) =>
                  actions?.metadata(id, {
                    durationSeconds: event.currentTarget.duration,
                  })
                }
                onLoadedMetadata={(event) =>
                  actions?.metadata(id, {
                    durationSeconds: event.currentTarget.duration,
                  })
                }
              />
            </div>
          )}
          {kind === "file" && (
            <button
              className="cw-file-preview nodrag nopan"
              onClick={(event) => {
                event.stopPropagation();
                actions?.preview(id);
              }}
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
        <div className="cw-node-placeholder">
          <span className="cw-placeholder-symbol">
            <CanvasIcon name={kind} size={42} />
          </span>
          <span className="cw-placeholder-label">
            {data.assetState === "missing"
              ? "素材未找到，请重新选择"
              : names[kind]}
          </span>
          {!locked && (
            <button
              className="cw-placeholder-upload nodrag nopan"
              aria-label={`上传${names[kind]}`}
              onClick={(event) => {
                event.stopPropagation();
                actions?.upload(id);
              }}
            >
              <CanvasIcon name="upload" size={14} />
              本地上传
            </button>
          )}
        </div>
      )}

      {activity && (
        <GeneratingOverlay activity={activity} hasAsset={hasAsset} />
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

function DomainCard({
  id,
  data,
  actions,
}: {
  id: string;
  data: CanvasNodeData;
  actions: CanvasActions | null;
}) {
  const kind = data.kind;
  const stack = data.stack;
  const member =
    stack && actions?.getNode(stack.nodeIds[stack.activeIndex] ?? "");
  const stackResource = member
    ? (resourceFromNode(member) ?? member.data.subject?.main)
    : undefined;
  const timeline = data.timeline;
  const firstClip = timeline?.tracks.find((track) => track.kind === "visual")
    ?.clips[0];
  const resource: CanvasResource | undefined =
    kind === "subject"
      ? data.subject?.main
      : kind === "stack"
        ? stackResource
        : kind === "timeline"
          ? firstClip?.resource
          : data.src
            ? { id, kind: "image", title: data.title, src: data.src }
            : undefined;
  return (
    <div className={`cw-domain-card cw-domain-card-${kind}`}>
      {(kind === "subject" ||
        kind === "stack" ||
        kind === "timeline" ||
        kind === "external") && (
        <div className="cw-domain-card-preview">
          {resource ? (
            <ResourcePreview resource={resource} controls={false} />
          ) : kind === "stack" && member?.type === "text" ? (
            <pre>{member.data.text || member.data.prompt || "空文本"}</pre>
          ) : (
            <div className="cw-domain-card-empty">
              <CanvasIcon name={kind} size={38} />
              <span>
                {kind === "timeline"
                  ? "把素材编排成故事"
                  : kind === "subject"
                    ? "添加主素材与角色声音"
                    : kind === "stack"
                      ? "整理画布资源"
                      : "布景、镜头与动作预演"}
              </span>
            </div>
          )}
        </div>
      )}
      {kind === "timeline" && (
        <div className="cw-card-timeline">
          <div className="cw-card-timeline-meta">
            <span>
              {timeline?.width ?? 1920} × {timeline?.height ?? 1080}
            </span>
            <span>
              {timeline ? timelineDuration(timeline).toFixed(1) : "0.0"}s ·{" "}
              {timeline?.fps ?? 30}fps
            </span>
          </div>
          {timeline?.tracks.slice(0, 3).map((track) => (
            <div className="cw-card-track" key={track.id}>
              <CanvasIcon
                name={track.kind === "audio" ? "audio" : "video"}
                size={11}
              />
              <span>
                {track.clips.length ? (
                  track.clips.slice(0, 10).map((clip) => (
                    <i
                      key={clip.id}
                      title={clip.resource.title}
                      style={{
                        flex: Math.max(
                          0.1,
                          (clip.outPoint - clip.inPoint) / clip.speed,
                        ),
                      }}
                    />
                  ))
                ) : (
                  <small>添加{track.kind === "audio" ? "音轨" : "片段"}</small>
                )}
              </span>
            </div>
          ))}
        </div>
      )}
      {kind === "subject" && (
        <div className="cw-card-subject">
          <span>{data.subject?.description || "主体描述尚未填写"}</span>
          <div>
            {data.subject?.auxiliaries.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.title}
                draggable={false}
              />
            ))}
            <small>
              {data.subject?.auxiliaries.length ?? 0}/3 辅助视角 ·{" "}
              {data.subject?.voice ? "已添加声音" : "无声音"}
            </small>
          </div>
        </div>
      )}
      {kind === "stack" && (
        <div className="cw-card-stack-controls nodrag nopan">
          <TooltipButton
            label="上一个堆叠素材"
            disabled={!stack?.nodeIds.length}
            onClick={() => actions?.cycleStack(id, -1)}
          >
            ‹
          </TooltipButton>
          <span>
            {stack?.nodeIds.length ? stack.activeIndex + 1 : 0} /{" "}
            {stack?.nodeIds.length ?? 0}
            <small>{member?.data.title ?? "尚无资源"}</small>
          </span>
          <TooltipButton
            label="下一个堆叠素材"
            disabled={!stack?.nodeIds.length}
            onClick={() => actions?.cycleStack(id, 1)}
          >
            ›
          </TooltipButton>
        </div>
      )}
      {kind === "tool" && (
        <div className="cw-card-tool">
          <span>
            <CanvasIcon
              name={
                data.tool?.kind === "palette"
                  ? "palette"
                  : data.tool?.kind === "style"
                    ? "sparkle"
                    : "camera"
              }
              size={25}
            />
            {
              {
                camera: "相机参数",
                style: "风格参考",
                palette: "调色板",
                camera_motion: "运镜参数",
              }[data.tool?.kind ?? "camera"]
            }
          </span>
          {data.tool?.fields.length ? (
            data.tool.fields.slice(0, 4).map((field, index) => (
              <div key={index}>
                <small>{field.name}</small>
                <strong>{field.values.join(" · ")}</strong>
              </div>
            ))
          ) : (
            <p>添加可被下游节点引用的创作参数</p>
          )}
        </div>
      )}
      {kind === "external" && (
        <div className="cw-card-stage-summary">
          <span>导演台 · 本地舞台草稿</span>
          {data.external?.current && (
            <small>外部版本 {data.external.current.versionId}</small>
          )}
        </div>
      )}
      <button
        className="cw-card-open nodrag nopan"
        onClick={() => actions?.edit(id)}
      >
        <CanvasIcon name="edit" size={13} />
        {kind === "timeline"
          ? "打开时间线"
          : kind === "subject"
            ? "编辑主体"
            : kind === "stack"
              ? "管理堆叠"
              : kind === "tool"
                ? "编辑参数"
                : "进入导演台"}
        <CanvasIcon name="chevronRight" size={13} />
      </button>
    </div>
  );
}

export default CanvasNodeView;
