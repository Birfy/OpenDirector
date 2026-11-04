import { useEditorCommit, type EditorApplyResult } from "./useEditorCommit";
import { useState } from "react";
import type { CanvasNode, ToolData } from "./model";
import { toolError } from "./dataBoundary";
import { EditorModal } from "./EditorModal";
import { useT } from "../i18n/I18nProvider.tsx";

export function ToolEditor({
  node,
  onApply,
  onClose,
}: {
  node: CanvasNode;
  onApply: (data: ToolData) => EditorApplyResult;
  onClose: () => void;
}) {
  const t = useT();
  const [tool, setTool] = useState<ToolData>(() =>
    structuredClone(node.data.tool ?? { kind: "camera", fields: [] }),
  );
  const commit = useEditorCommit(onClose);
  return (
    <EditorModal
      title={t("tools.toolEditor.title", { title: node.data.title })}
      subtitle={t("tools.toolEditor.subtitle")}
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
          {t("tools.toolEditor.kind")}
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
            <option value="camera">{t("tools.toolEditor.kind.camera")}</option>
            <option value="style">{t("tools.toolEditor.kind.style")}</option>
            <option value="palette">{t("tools.toolEditor.kind.palette")}</option>
            <option value="camera_motion">
              {t("tools.toolEditor.kind.cameraMotion")}
            </option>
          </select>
        </label>
        {tool.kind === "palette" && (
          <label className="cw-domain-field">
            {t("tools.toolEditor.paletteName")}
            <input
              value={tool.palette?.name ?? ""}
              onChange={(event) =>
                setTool({
                  ...tool,
                  palette: { ...tool.palette, name: event.target.value },
                })
              }
              placeholder={t("tools.toolEditor.paletteNamePlaceholder")}
            />
          </label>
        )}
        <div className="cw-domain-section-heading">
          <h3>{t("tools.toolEditor.fields")}</h3>
          <button
            disabled={tool.fields.length >= 16}
            onClick={() =>
              setTool({
                ...tool,
                fields: [...tool.fields, { name: "", values: [] }],
              })
            }
          >
            {t("tools.toolEditor.addField")}
          </button>
        </div>
        {tool.fields.map((field, index) => (
          <div className="cw-tool-field" key={index}>
            <label className="cw-domain-field">
              {t("tools.toolEditor.fieldName")}
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
                    : t("tools.toolEditor.fieldNamePlaceholder")
                }
              />
            </label>
            <label className="cw-domain-field">
              {t("tools.toolEditor.fieldValues")}
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
              {t("tools.toolEditor.removeField")}
            </button>
          </div>
        ))}
        {tool.provenance && (
          <p className="cw-domain-note">
            {t("tools.toolEditor.provenance", {
              paletteId: tool.provenance.paletteId,
              version: tool.provenance.version,
            })}
          </p>
        )}
        <p className="cw-domain-note">{t("tools.toolEditor.note")}</p>
      </div>
    </EditorModal>
  );
}

export default ToolEditor;
