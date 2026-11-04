import { useEditorCommit, type EditorApplyResult } from "./useEditorCommit";
import { useMemo, useState } from "react";
import type { CanvasNode, StackData } from "./model";
import { STACK_MEMBER_KINDS, resourceFromNode } from "./operations";
import { EditorModal, ResourcePreview } from "./EditorModal";
import { CanvasIcon } from "./CanvasIcon";
import { indexNodes, isNodeLocked } from "./hierarchy";
import { useT } from "../i18n/I18nProvider.tsx";

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
  const t = useT();
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
      title={t("canvasNodes.stack.title", { title: node.data.title })}
      subtitle={t("canvasNodes.stack.subtitle")}
      onClose={commit.close}
      disabled={node.locked || commit.saving}
      error={commit.error}
      onApply={() =>
        commit.apply(() => {
          if (stack.nodeIds.some((id) => !byId.has(id) || taken.has(id)))
            throw new Error(t("canvasNodes.stack.invalidMembers"));
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
                {current.data.text ||
                  current.data.prompt ||
                  t("canvasNodes.stack.emptyTextNode")}
              </pre>
            ) : current ? (
              <div className="cw-resource-empty">
                <CanvasIcon name={current.type} size={40} />
                <h3>{current.data.title}</h3>
                <p>
                  {current.type === "timeline"
                    ? t("canvasNodes.stack.timelineClips", {
                        count:
                          current.data.timeline?.tracks.reduce(
                            (sum, track) => sum + track.clips.length,
                            0,
                          ) ?? 0,
                      })
                    : t("canvasNodes.stack.openOnCanvas")}
                </p>
              </div>
            ) : (
              <div className="cw-resource-empty">
                <CanvasIcon name="group" size={40} />
                <span>{t("canvasNodes.stack.addAtLeastTwo")}</span>
              </div>
            )}
          </div>
          <div className="cw-stack-switcher">
            <button
              aria-label={t("canvasNodes.stack.previousResource")}
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
              {stack.nodeIds.length} ·{" "}
              {current?.data.title ?? t("canvasNodes.stack.unselected")}
            </span>
            <button
              aria-label={t("canvasNodes.stack.nextResource")}
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
              {t("canvasNodes.stack.locate")}
            </button>
          )}
          <p className="cw-domain-note">
            {t("canvasNodes.stack.hint")}
          </p>
        </div>
        <div>
          <div className="cw-domain-section-heading">
            <h3>{t("canvasNodes.stack.order")}</h3>
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
                  <strong>
                    {byId.get(id)?.data.title ??
                      t("canvasNodes.stack.sourceDeleted")}
                  </strong>
                </button>
                <button
                  aria-label={t("canvasNodes.stack.moveUp", {
                    index: index + 1,
                  })}
                  disabled={!index}
                  onClick={() => move(index, -1)}
                >
                  ↑
                </button>
                <button
                  aria-label={t("canvasNodes.stack.moveDown", {
                    index: index + 1,
                  })}
                  disabled={index === stack.nodeIds.length - 1}
                  onClick={() => move(index, 1)}
                >
                  ↓
                </button>
                <button
                  aria-label={t("canvasNodes.stack.remove", {
                    index: index + 1,
                  })}
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
            <h3>{t("canvasNodes.stack.addNodes")}</h3>
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
            {!candidates.length && (
              <p>{t("canvasNodes.stack.noCandidates")}</p>
            )}
          </div>
          <button
            className="cw-wide-button"
            disabled={node.locked || commit.saving}
            onClick={() =>
              commit.apply(() => onApply({ nodeIds: [], activeIndex: 0 }))
            }
          >
            {t("canvasNodes.stack.dissolve")}
          </button>
        </div>
      </div>
    </EditorModal>
  );
}

export default StackEditor;
