import { useEditorCommit, type EditorApplyResult } from "./useEditorCommit";
import { useMemo, useState } from "react";
import type { CanvasNode, StackData } from "./model";
import { STACK_MEMBER_KINDS, resourceFromNode } from "./operations";
import { EditorModal, ResourcePreview } from "./EditorModal";
import { CanvasIcon } from "./CanvasIcon";
import { indexNodes, isNodeLocked } from "./hierarchy";

export interface StackEditorProps {
  node: CanvasNode;
  nodes: CanvasNode[];
  onApply: (data: StackData) => EditorApplyResult;
  onClose: () => void;
  onSelectNode?: (id: string) => void;
}

export function StackEditor({
  node,
  nodes,
  onApply,
  onClose,
  onSelectNode,
}: StackEditorProps) {
  const [stack, setStack] = useState<StackData>(() => ({
    nodeIds: [...(node.data.stack?.nodeIds ?? [])],
    activeIndex: node.data.stack?.activeIndex ?? 0,
  }));
  const commit = useEditorCommit(onClose);
  const byId = useMemo(
    () => new Map(nodes.map((node) => [node.id, node])),
    [nodes],
  );
  const taken = new Set(
    nodes
      .filter((item) => item.id !== node.id)
      .flatMap((item) => item.data.stack?.nodeIds ?? []),
  );
  const candidates = nodes.filter(
    (item) =>
      !item.parentId &&
      !taken.has(item.id) &&
      !stack.nodeIds.includes(item.id) &&
      STACK_MEMBER_KINDS.includes(
        item.type as (typeof STACK_MEMBER_KINDS)[number],
      ),
  );
  const current = byId.get(stack.nodeIds[stack.activeIndex] ?? "");
  const hierarchy = indexNodes(nodes);
  const resource = current
    ? (resourceFromNode(current) ?? current.data.subject?.main)
    : undefined;
  const move = (index: number, delta: -1 | 1) => {
    const destination = index + delta;
    if (destination < 0 || destination >= stack.nodeIds.length) return;
    const nodeIds = [...stack.nodeIds],
      active = nodeIds[stack.activeIndex];
    [nodeIds[index], nodeIds[destination]] = [
      nodeIds[destination]!,
      nodeIds[index]!,
    ];
    setStack({ nodeIds, activeIndex: nodeIds.indexOf(active!) });
  };
  return (
    <EditorModal
      title={`资源堆叠 · ${node.data.title}`}
      subtitle="折叠整理画布节点，保留原节点与连线；移出至不足两个成员时自动解散堆叠"
      onClose={commit.close}
      disabled={node.locked || commit.saving}
      error={commit.error}
      onApply={() =>
        commit.apply(() => {
          if (stack.nodeIds.some((id) => !byId.has(id) || taken.has(id)))
            throw new Error("部分成员已失效或属于其他堆叠，请移除后重试。");
          return onApply({
            nodeIds: [...stack.nodeIds],
            activeIndex: stack.activeIndex,
          });
        })
      }
    >
      <div className="cw-stack-layout">
        <div>
          <div className="cw-stack-preview">
            {resource ? (
              <ResourcePreview resource={resource} />
            ) : current?.type === "text" ? (
              <pre>
                {current.data.text || current.data.prompt || "空文本节点"}
              </pre>
            ) : current ? (
              <div className="cw-resource-empty">
                <CanvasIcon name={current.type} size={40} />
                <h3>{current.data.title}</h3>
                <p>
                  {current.type === "timeline"
                    ? `${current.data.timeline?.tracks.reduce((sum, track) => sum + track.clips.length, 0) ?? 0} 个时间线片段`
                    : "该节点的详情可在原画布打开"}
                </p>
              </div>
            ) : (
              <div className="cw-resource-empty">
                <CanvasIcon name="group" size={40} />
                <span>从右侧添加至少两个节点</span>
              </div>
            )}
          </div>
          <div className="cw-stack-switcher">
            <button
              aria-label="上一个堆叠资源"
              disabled={!stack.nodeIds.length}
              onClick={() =>
                setStack({
                  ...stack,
                  activeIndex:
                    (stack.activeIndex - 1 + stack.nodeIds.length) %
                    stack.nodeIds.length,
                })
              }
            >
              ←
            </button>
            <span>
              {stack.nodeIds.length ? stack.activeIndex + 1 : 0} /{" "}
              {stack.nodeIds.length} · {current?.data.title ?? "未选择"}
            </span>
            <button
              aria-label="下一个堆叠资源"
              disabled={!stack.nodeIds.length}
              onClick={() =>
                setStack({
                  ...stack,
                  activeIndex: (stack.activeIndex + 1) % stack.nodeIds.length,
                })
              }
            >
              →
            </button>
          </div>
          {current && onSelectNode && (
            <button
              disabled={commit.saving}
              onClick={() => {
                onSelectNode(current.id);
                onClose();
              }}
            >
              定位原节点
            </button>
          )}
          <p className="cw-domain-note">
            可整理图片、视频、音频、文本、主体、时间线和导演台。每个节点最多属于一个堆叠；原节点身份、素材和连线保留。
          </p>
        </div>
        <div>
          <div className="cw-domain-section-heading">
            <h3>资源顺序</h3>
            <span>{stack.nodeIds.length} / 50</span>
          </div>
          <div className="cw-stack-members">
            {stack.nodeIds.map((id, index) => (
              <div
                key={id}
                className={stack.activeIndex === index ? "selected" : ""}
              >
                <button
                  onClick={() => setStack({ ...stack, activeIndex: index })}
                >
                  <span>{index + 1}</span>
                  <CanvasIcon name={byId.get(id)?.type ?? "file"} size={16} />
                  <strong>{byId.get(id)?.data.title ?? "源节点已删除"}</strong>
                </button>
                <button
                  aria-label={`前移资源 ${index + 1}`}
                  disabled={!index}
                  onClick={() => move(index, -1)}
                >
                  ↑
                </button>
                <button
                  aria-label={`后移资源 ${index + 1}`}
                  disabled={index === stack.nodeIds.length - 1}
                  onClick={() => move(index, 1)}
                >
                  ↓
                </button>
                <button
                  aria-label={`移除资源 ${index + 1}`}
                  disabled={Boolean(
                    byId.get(id) && isNodeLocked(byId.get(id)!, hierarchy),
                  )}
                  onClick={() => {
                    const nodeIds = stack.nodeIds.filter((item) => item !== id);
                    setStack({
                      nodeIds,
                      activeIndex: Math.min(
                        stack.activeIndex,
                        Math.max(0, nodeIds.length - 1),
                      ),
                    });
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="cw-domain-section-heading">
            <h3>添加画布节点</h3>
          </div>
          <div className="cw-domain-resource-list">
            {candidates.map((item) => (
              <button
                key={item.id}
                disabled={
                  stack.nodeIds.length >= 50 || isNodeLocked(item, hierarchy)
                }
                onClick={() =>
                  setStack({ ...stack, nodeIds: [...stack.nodeIds, item.id] })
                }
              >
                <CanvasIcon name={item.type} size={16} />
                <span>{item.data.title}</span>
                <CanvasIcon name="plus" size={14} />
              </button>
            ))}
            {!candidates.length && <p>没有其他可引用的独立节点。</p>}
          </div>
          <button
            className="cw-wide-button"
            disabled={node.locked || commit.saving}
            onClick={() =>
              commit.apply(() => onApply({ nodeIds: [], activeIndex: 0 }))
            }
          >
            解散堆叠，保留全部节点
          </button>
        </div>
      </div>
    </EditorModal>
  );
}

export default StackEditor;
