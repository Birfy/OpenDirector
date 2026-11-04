import { useState } from "react";
import { errorMessage } from "../backend/api.ts";
import {
  readModelCapabilities,
  type ModelConfigInput,
  type ModelOptions,
} from "../backend/models.ts";
import type { ModelConfig } from "../backend/rules.ts";
import { createVideoCapabilities } from "../backend/videoCapabilities.ts";
import {
  VideoCapabilitiesEditor,
  capabilityDraft,
  type VideoCapabilityDraft,
} from "./VideoCapabilitiesEditor";
import { useT } from "../i18n/I18nProvider.tsx";

export function ModelCapabilityCard({
  modelId,
  connection,
  configId,
  saved,
  options,
  disabled,
  onChange,
  onValidity,
}: {
  modelId: string;
  connection: ModelConfigInput;
  configId?: string;
  saved?: ModelConfig;
  options: ModelOptions;
  disabled: boolean;
  onChange: (patch: ModelOptions) => void;
  onValidity: (error: string) => void;
}) {
  const t = useT();
  const [draft, setDraft] = useState(() =>
    capabilityDraft(
      saved?.videoCapabilities ?? saved?.inputRules.videoCapabilities,
      Boolean(saved?.videoCapabilities),
    ),
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const adapter =
    options.videoAdapter ??
    saved?.videoAdapter ??
    connection.videoAdapter ??
    "auto";
  const official = connection.protocol === "minimax_video_v2";
  const video =
    connection.kind === "video" &&
    !["vllm_omni_segmentation", "vllm_omni_depth"].includes(
      connection.protocol,
    );
  const updateDraft = (next: VideoCapabilityDraft, nextAdapter = adapter) => {
    setDraft(next);
    try {
      const capabilities = next.custom
        ? createVideoCapabilities(
            next.outputs,
            next.defaultResolution,
            Number(next.defaultDuration),
            next.dimensionStep,
            nextAdapter,
          )
        : null;
      onChange({ videoCapabilities: capabilities, videoAdapter: nextAdapter });
      setError("");
      onValidity("");
    } catch (failure) {
      const message = errorMessage(failure);
      setError(message);
      onValidity(message);
    }
  };
  const load = async (source: "preset" | "service") => {
    setLoading(true);
    try {
      const result = await readModelCapabilities(
        { ...connection, modelId, videoAdapter: adapter },
        configId,
        source,
      );
      if (!result.videoCapabilities)
        throw new Error(t("models.service.noCapabilityOutput"));
      updateDraft(
        capabilityDraft(result.videoCapabilities, source === "service"),
      );
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setLoading(false);
    }
  };
  if (connection.kind !== "agent" && !video) return null;
  return (
    <details
      className="cw-model-capability-card"
      open={official ? true : undefined}
    >
      <summary>
        {connection.kind === "agent"
          ? t("models.service.inputCapabilities")
          : t("models.service.referenceOutput")}
      </summary>
      <fieldset disabled={disabled || loading}>
        {connection.kind === "agent" ? (
          <>
            <div className="cw-model-modalities">
              <label>
                <input type="checkbox" checked disabled />
                {t("models.service.textInput")}
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={
                    (
                      options.inputModalities ?? saved?.inputModalities
                    )?.includes("image") ?? false
                  }
                  onChange={(event) =>
                    onChange({
                      inputModalities: event.target.checked
                        ? ["text", "image"]
                        : ["text"],
                    })
                  }
                />
                {t("models.service.imageInput")}
              </label>
            </div>
            <p className="cw-model-note">
              {t("models.service.imageInputNote")}
            </p>
          </>
        ) : official ? (
          <div className="cw-model-capability-facts">
            <span>{t("models.service.officialSummary")}</span>
            <span>{modelId === "MiniMax-H3" ? "768P / 2K" : "480P / 768P"}</span>
            <span>
              {modelId === "MiniMax-H3-Max"
                ? t("models.service.secondsRange", { min: 5, max: 15 })
                : t("models.service.secondsRange", { min: 4, max: 15 })}
            </span>
            <small>{t("models.service.officialReferences")}</small>
          </div>
        ) : (
          <>
            {connection.protocol === "vllm_omni" && (
              <label className="cw-domain-field">
                 {t("models.service.videoAdapter")}
                <select
                  value={adapter}
                  onChange={(event) =>
                    updateDraft(
                      { ...draft, custom: false },
                      event.target.value as NonNullable<
                        ModelOptions["videoAdapter"]
                      >,
                    )
                  }
                >
                  <option value="auto">{t("models.service.adapterAuto")}</option>
                  <option value="minimax_h3">
                    {t("models.service.adapterMiniMaxH3")}
                  </option>
                  <option value="fasth3">
                    {t("models.service.adapterFastH3")}
                  </option>
                  <option value="standard">
                    {t("models.service.adapterStandard")}
                  </option>
                </select>
              </label>
            )}
            <div className="cw-capability-actions">
              <button
                type="button"
                className="cw-settings-button"
                onClick={() => void load("preset")}
              >
                {t("models.service.loadPreset")}
              </button>
              <button
                type="button"
                className="cw-settings-button"
                onClick={() => void load("service")}
              >
                {t("models.service.readService")}
              </button>
            </div>
            <VideoCapabilitiesEditor
              value={draft}
              adapter={adapter}
              onChange={(next) => updateDraft(next)}
            />
          </>
        )}
        {error && (
          <p role="alert" className="cw-model-feedback">
            {error}
          </p>
        )}
      </fieldset>
    </details>
  );
}
