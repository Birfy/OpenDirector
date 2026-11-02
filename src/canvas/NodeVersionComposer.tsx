import { Fragment, useEffect, useState } from "react";
import type {
  InputSnapshot,
  ResolvedReference,
} from "../contracts/generated.ts";
import { creationClient } from "../backend/creationClient.ts";
import { CanvasIcon } from "./CanvasIcon";
import type { NodeVersion } from "./NodeVersionHistory";
import "./reference-mentions.css";

type HistoricalReferenceValue = Pick<
  ResolvedReference,
  "asset" | "referenceId" | "name" | "sourceTitle"
> & { transmission?: ResolvedReference["transmission"] };

/** Resolve previews from the execution's immutable assets, never the live source. */
function HistoricalReference({
  projectId,
  reference,
}: {
  projectId: string;
  reference: HistoricalReferenceValue;
}) {
  const [preview, setPreview] = useState("");
  const [unavailable, setUnavailable] = useState(false);
  const { asset, name, sourceTitle } = reference;
  useEffect(() => {
    let active = true;
    setPreview("");
    setUnavailable(false);
    const client = creationClient(projectId);
    const content =
      asset.kind === "text"
        ? client.textContent(asset.assetId)
        : asset.kind === "image"
          ? client.thumbnailUrl(asset.assetId)
          : Promise.resolve("");
    void content
      .then((value) => {
        if (active) setPreview(value);
      })
      .catch(() => {
        if (active) setUnavailable(true);
      });
    return () => {
      active = false;
    };
  }, [projectId, asset.assetId, asset.kind]);
  const label = sourceTitle || name || "参考素材";
  return (
    <span
      className={`cw-chat-reference${unavailable ? " is-unavailable" : ""}`}
      data-history-reference={reference.referenceId}
      data-asset-id={asset.assetId}
      aria-label={`历史参考：${label}`}
      title={[
        label,
        name,
        asset.kind === "text" ? preview : "",
        unavailable ? "素材无法读取" : "",
        reference.transmission === "context_only" ? "未传入模型" : "",
      ]
        .filter(Boolean)
        .join("\n")}
    >
      {asset.kind === "image" && preview ? (
        <img src={preview} alt="" />
      ) : (
        <CanvasIcon name={asset.kind} size={14} />
      )}
      <span className="cw-chat-reference-label">{label}</span>
    </span>
  );
}

function HistoricalOptions({
  frozen,
  available,
}: {
  frozen: InputSnapshot;
  available: boolean | null;
}) {
  const spec = frozen.spec;
  const auto = (value: string | number | null) =>
    !value || value === "auto" ? "自动" : String(value);
  let summary: string;
  let mode = "";
  switch (spec.kind) {
    case "image":
      summary = `${auto(spec.parameters.aspectRatio)} · ${auto(spec.parameters.size)} · 1 张`;
      mode =
        spec.parameters.preset === "product-views" ? "产品三视图" : "自由创作";
      break;
    case "video":
      summary = `${auto(spec.parameters.aspectRatio)} · ${auto(spec.parameters.resolution)}${spec.parameters.durationSeconds ? ` · ${spec.parameters.durationSeconds} 秒` : ""}`;
      mode = {
        reference: "参考生视频",
        first_frame: "首帧生视频",
        continuation: "视频续写",
      }[spec.parameters.videoMode];
      break;
    case "audio":
      summary =
        spec.parameters.creationType === "music"
          ? "音乐生成"
          : spec.parameters.mode === "tts"
            ? "文本朗读"
            : "全能配音";
      mode = spec.parameters.voice ?? "";
      break;
    default:
      summary = Object.entries(spec.parameters)
        .filter(([, value]) => value != null)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" · ");
  }
  return (
    <div className="cw-composer-footer cw-version-options">
      <div className="cw-composer-options">
        <span
          className="cw-model-select"
          title={`${frozen.model.modelId}${available === false ? "（原模型不可用）" : ""}`}
        >
          <span>{frozen.model.modelId}</span>
          <CanvasIcon name="chevronDown" size={12} />
        </span>
        <span className="cw-parameter-trigger" title={summary}>
          <CanvasIcon name="sliders" size={15} />
          <span>{summary}</span>
        </span>
        {mode && (
          <span className="cw-version-mode">
            {mode}
            <CanvasIcon name="chevronDown" size={12} />
          </span>
        )}
      </div>
    </div>
  );
}

export function NodeVersionComposer({
  projectId,
  version,
}: {
  projectId: string;
  version: NodeVersion;
}) {
  const frozen = version.inputSnapshot;
  const parts = frozen?.spec.promptContent;
  const references: readonly HistoricalReferenceValue[] =
    frozen?.references ??
    version.asset.provenance.sources.map((asset) => ({
      asset,
      referenceId: asset.assetId,
      name: "来源素材",
      sourceTitle: "",
    }));
  const mentioned = new Set(
    parts?.flatMap((part) =>
      part.type === "reference" ? [part.referenceId] : [],
    ) ?? [],
  );
  // References without a body marker (e.g. a first-frame slot) stay separate.
  const unmentioned = references.filter(
    (ref) => !mentioned.has(ref.referenceId),
  );
  const prompt = frozen?.spec.prompt ?? version.asset.provenance.prompt;
  const renderReference = (ref: HistoricalReferenceValue, index: number) => (
    <HistoricalReference
      key={`${ref.referenceId}:${index}`}
      projectId={projectId}
      reference={ref}
    />
  );
  return (
    <div className="cw-composer cw-generation-composer cw-version-composer">
      <div className="cw-composer-body">
        {!!unmentioned.length && (
          <div className="cw-version-slot-references" aria-label="历史参考素材">
            {unmentioned.map(renderReference)}
          </div>
        )}
        <div className="cw-version-prompt" aria-label="历史提示词" tabIndex={0}>
          {parts?.length
            ? parts.map((part, index) => (
                <Fragment key={index}>
                  {part.type === "text" ? (
                    part.text
                  ) : references.some(
                      (ref) => ref.referenceId === part.referenceId,
                    ) ? (
                    references
                      .filter((ref) => ref.referenceId === part.referenceId)
                      .map(renderReference)
                  ) : (
                    <span className="cw-chat-reference is-unavailable">
                      参考素材缺失
                    </span>
                  )}
                </Fragment>
              ))
            : prompt || (frozen ? "（无提示词）" : "此版本没有模型生成记录。")}
        </div>
      </div>
      {frozen && (
        <HistoricalOptions frozen={frozen} available={version.modelAvailable} />
      )}
    </div>
  );
}
