import {
  memo,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import type { Node, NodeProps } from "@xyflow/react";
import { NodeFrame } from "./NodeFrame";
import type { CanvasNodeData, CanvasNodeKind, CanvasResource } from "./model";
import { ResourcePreview } from "./EditorModal";
import { resourceFromNode } from "./operations";
import { timelineDuration } from "./timeline";
import { subjectDescriptionLayout } from "./subjectLayout.ts";
import { CanvasIcon } from "./CanvasIcon";
import { TooltipButton } from "./TooltipButton";
import { GeneratingOverlay } from "./GeneratingOverlay";
import { CanvasVideoPreview } from "./CanvasMediaPreview";
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

function CanvasNodeContents({ id, data, selected }: NodeProps<CanvasFlowNode>) {
  const actions = useContext(CanvasActionsContext);
  const kind = data.kind;
  const hasAsset = Boolean(data.src) && data.assetState !== "missing";
  const locked = Boolean(actions?.isLocked(id));
  const activity = ["text", "image", "video", "audio"].includes(kind)
    ? actions?.generationActivity(id)
    : undefined;
  const selectMedia = (event: MouseEvent) => {
    event.stopPropagation();
    // Media controls keep their native playback behavior. Their nodrag surface
    // does not reach React Flow selection, so select it explicitly on a click.
    if (!selected) actions?.select(id, event);
  };

  return (
    <NodeFrame
      id={id}
      kind={kind}
      title={data.title || names[kind]}
      selected={selected}
      empty={!hasAsset && !data.text}
      busy={Boolean(activity)}
    >
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
              <span className="cw-text-placeholder">双击编辑文本</span>
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
            <CanvasVideoPreview
              className="cw-video-preview"
              src={data.src}
              playsInline
              preload="metadata"
              onClick={selectMedia}
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
                onClick={selectMedia}
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
            <CanvasIcon name={kind} size={20} />
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
        <GeneratingOverlay
          activity={activity}
          hasAsset={hasAsset || Boolean(data.text)}
        />
      )}
    </NodeFrame>
  );
}

// React Flow moves the wrapper; position-only props do not change card contents.
export const CanvasNodeView = memo(
  CanvasNodeContents,
  (previous, next) =>
    previous.id === next.id &&
    previous.data === next.data &&
    previous.selected === next.selected,
);

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
  if (kind === "subject" && !data.subject?.main?.src)
    return (
      <div className="cw-subject-empty">
        <SubjectDescription
          id={id}
          value={data.subject?.description ?? ""}
          actions={actions}
        />
        <div className="cw-subject-empty-material nodrag nopan">
          {(
            [
              ["import", "导入主体", "subject"],
              ["canvas", "从画布选择", "canvas"],
              ["assets", "从资产库选择", "rail-folder"],
              ["file", "本地添加", "upload"],
            ] as const
          ).map(([source, label, icon]) => (
            <button
              key={source}
              disabled={actions?.isLocked(id)}
              onClick={() => actions?.pickSubject?.(id, source)}
            >
              <CanvasIcon name={icon} size={13} />
              {label}
            </button>
          ))}
        </div>
      </div>
    );
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
          <SubjectDescription
            id={id}
            value={data.subject?.description ?? ""}
            actions={actions}
          />
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
      {kind !== "subject" && (
        <button
          className="cw-card-open nodrag nopan"
          onClick={() => actions?.edit(id)}
        >
          <CanvasIcon name="edit" size={13} />
          {kind === "timeline"
            ? "打开时间线"
            : kind === "stack"
              ? "管理堆叠"
              : kind === "tool"
                ? "编辑参数"
                : "进入导演台"}
          <CanvasIcon name="chevronRight" size={13} />
        </button>
      )}
    </div>
  );
}

/** User annotations are edited on the canvas, independently of retained media. */
function SubjectDescription({
  id,
  value,
  actions,
}: {
  id: string;
  value: string;
  actions: CanvasActions | null;
}) {
  const [draft, setDraft] = useState(value);
  const [editing, setEditing] = useState(false);
  const cancelled = useRef(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const resize = actions?.resizeSubjectDescription;
  useLayoutEffect(() => {
    const element = input.current;
    if (!element) return;
    const measure = () => {
      if (!element.clientWidth) return;
      element.style.height = "0px";
      element.style.overflowY = "hidden";
      const contentHeight = element.scrollHeight;
      const { descriptionHeight } = subjectDescriptionLayout(contentHeight);
      element.style.height = `${descriptionHeight}px`;
      element.style.overflowY =
        contentHeight > descriptionHeight ? "auto" : "hidden";
      resize?.(id, contentHeight);
    };
    measure();
    let width = element.clientWidth;
    const observer = new ResizeObserver(() => {
      if (element.clientWidth === width) return;
      width = element.clientWidth;
      measure();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [draft, id, resize]);
  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);
  return (
    <textarea
      ref={input}
      className="cw-subject-description nodrag nopan nowheel"
      aria-label="主体描述"
      title="仅供查看，不作为生成参考"
      placeholder="添加描述…"
      rows={1}
      maxLength={20000}
      readOnly={actions?.isLocked(id)}
      value={draft}
      onFocus={() => {
        cancelled.current = false;
        setEditing(true);
      }}
      onChange={(event) => setDraft(event.target.value)}
      onBlur={() => {
        const node = actions?.getNode(id);
        if (
          !cancelled.current &&
          node?.type === "subject" &&
          node.data.subject &&
          !actions?.isLocked(id) &&
          draft !== node.data.subject.description
        )
          actions?.update(id, {
            subject: { ...node.data.subject, description: draft },
          });
        setEditing(false);
      }}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.nativeEvent.isComposing) return;
        if (event.key === "Escape") {
          event.preventDefault();
          cancelled.current = true;
          setDraft(value);
          event.currentTarget.blur();
        } else if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          event.currentTarget.blur();
        }
      }}
    />
  );
}

export default CanvasNodeView;
