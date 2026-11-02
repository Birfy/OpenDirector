import { useEditorCommit, type EditorApplyResult } from "./useEditorCommit";
import { useState } from "react";
import type { CanvasNode, ToolData } from "./model";
import { toolError } from "./dataBoundary";
import { EditorModal } from "./EditorModal";

export function ToolEditor({
  node,
  onApply,
  onClose,
}: {
  node: CanvasNode;
  onApply: (data: ToolData) => EditorApplyResult;
  onClose: () => void;
}) {
  const [tool, setTool] = useState<ToolData>(() =>
    structuredClone(node.data.tool ?? { kind: "camera", fields: [] }),
  );
  const commit = useEditorCommit(onClose);
  return (
    <EditorModal
      title={`工具参数 · ${node.data.title}`}
      subtitle="编辑可被下游创作节点引用的结构化参数；此面板不会启动生成任务"
      onClose={commit.close}
      disabled={node.locked || commit.saving}
      error={commit.error}
      onApply={() =>
        commit.apply(() => {
          const invalid = toolError(tool);
          if (invalid) throw new Error(invalid);
          return onApply(structuredClone(tool));
        })
      }
    >
      <div className="cw-tool-editor">
        <label className="cw-domain-field">
          工具类型
          <select
            value={tool.kind}
            onChange={(event) => {
              const kind = event.target.value as ToolData["kind"];
              setTool({
                ...tool,
                kind,
                ...(kind === "palette"
                  ? {}
                  : { palette: undefined, provenance: undefined }),
              });
            }}
          >
            <option value="camera">相机参数</option>
            <option value="style">风格</option>
            <option value="palette">调色板</option>
            <option value="camera_motion">运镜</option>
          </select>
        </label>
        {tool.kind === "palette" && (
          <label className="cw-domain-field">
            调色板名称
            <input
              value={tool.palette?.name ?? ""}
              onChange={(event) =>
                setTool({
                  ...tool,
                  palette: { ...tool.palette, name: event.target.value },
                })
              }
              placeholder="例如：暖调日落"
            />
          </label>
        )}
        <div className="cw-domain-section-heading">
          <h3>参数字段</h3>
          <button
            disabled={tool.fields.length >= 16}
            onClick={() =>
              setTool({
                ...tool,
                fields: [...tool.fields, { name: "", values: [] }],
              })
            }
          >
            ＋ 添加字段
          </button>
        </div>
        {tool.fields.map((field, index) => (
          <div className="cw-tool-field" key={index}>
            <label className="cw-domain-field">
              字段名
              <input
                value={field.name}
                onChange={(event) =>
                  setTool({
                    ...tool,
                    fields: tool.fields.map((item, i) =>
                      i === index
                        ? { ...item, name: event.target.value }
                        : item,
                    ),
                  })
                }
                placeholder={
                  tool.kind === "camera"
                    ? "camera / aperture / focal"
                    : "参数名称"
                }
              />
            </label>
            <label className="cw-domain-field">
              参数值（每行一个）
              <textarea
                rows={3}
                value={field.values.join("\n")}
                onChange={(event) =>
                  setTool({
                    ...tool,
                    fields: tool.fields.map((item, i) =>
                      i === index
                        ? {
                            ...item,
                            values: event.target.value
                              ? event.target.value.split("\n")
                              : [],
                          }
                        : item,
                    ),
                  })
                }
              />
            </label>
            <button
              onClick={() =>
                setTool({
                  ...tool,
                  fields: tool.fields.filter((_, i) => i !== index),
                })
              }
            >
              移除字段
            </button>
          </div>
        ))}
        {tool.provenance && (
          <p className="cw-domain-note">
            调色板来源：{tool.provenance.paletteId} · 版本{" "}
            {tool.provenance.version}
          </p>
        )}
        <p className="cw-domain-note">
          每个工具最多 16 个字段，每字段最多 32 个值，每个字符串最多 256
          字符。参数可以保存和引用，是否支持真实模型调用由下游适配器决定。
        </p>
      </div>
    </EditorModal>
  );
}

export default ToolEditor;
