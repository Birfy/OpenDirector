import { useState, type FormEvent } from "react";
import { errorMessage } from "../backend/api.ts";
import {
  MODEL_KINDS,
  readModelCapabilities,
  type BackendModels,
  type ModelConfigInput,
} from "../backend/models.ts";
import type { ModelConfig, ModelKind } from "../backend/rules.ts";
import { createVideoCapabilities } from "../backend/videoCapabilities.ts";
import {
  VideoCapabilitiesEditor,
  capabilityDraft,
} from "./VideoCapabilitiesEditor";
import "./model-settings.css";

type Protocol = ModelConfigInput["protocol"];

const PROTOCOLS: Record<ModelKind, readonly [Protocol, string][]> = {
  agent: [["openai", "OpenAI 兼容接口（含 vLLM）"]],
  image: [
    ["openai", "OpenAI 兼容接口（含 vLLM-Omni Z-Image-Turbo）"],
    ["volcengine", "火山方舟 / Agent Plan"],
  ],
  video: [
    ["vllm_omni", "异步 /videos 接口（含 vLLM-Omni）"],
    ["volcengine", "火山方舟 / Agent Plan"],
  ],
  audio: [
    ["openai", "OpenAI 兼容语音合成（含 vLLM-Omni TTS）"],
    ["volcengine", "火山引擎语音 / Agent Plan"],
  ],
  vision: [["vllm_omni", "vLLM-Omni 分割接口（SAM 3）"]],
};

const PLACEHOLDERS: Record<ModelKind, [string, string]> = {
  agent: ["http://127.0.0.1:8100/v1", "Qwen/Qwen3-30B-A3B"],
  image: ["http://127.0.0.1:8200/v1", "Tongyi-MAI/Z-Image-Turbo"],
  video: ["http://127.0.0.1:8010/v1", "MiniMaxAI/MiniMax-H3"],
  audio: ["http://127.0.0.1:8220/v1", "Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice"],
  vision: ["http://127.0.0.1:8230/v1", "facebook/sam3"],
};

function ModelForm({
  kind,
  existing,
  catalog,
  onClose,
}: {
  kind: ModelKind;
  existing?: ModelConfig;
  catalog: BackendModels;
  onClose: () => void;
}) {
  const [value, setValue] = useState<ModelConfigInput>({
    kind,
    url: existing?.url ?? "",
    modelId: existing?.modelId ?? "",
    apiKey: "",
    connectionType: existing?.connectionType ?? "self_hosted",
    protocol: existing?.protocol ?? PROTOCOLS[kind][0][0],
    authMode: existing?.authMode ?? "none",
    videoAdapter: existing?.videoAdapter ?? "auto",
  });
  const [outputDraft, setOutputDraft] = useState(() =>
    capabilityDraft(
      existing?.videoCapabilities ?? existing?.inputRules.videoCapabilities,
      Boolean(existing?.videoCapabilities),
    ),
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const update = (patch: Partial<ModelConfigInput>) =>
    setValue((current) => ({ ...current, ...patch }));
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const videoCapabilities = outputDraft.custom
        ? createVideoCapabilities(
            outputDraft.outputs,
            outputDraft.defaultResolution,
            Number(outputDraft.defaultDuration),
            outputDraft.dimensionStep,
            value.videoAdapter,
          )
        : null;
      await catalog.save(
        kind === "video" ? { ...value, videoCapabilities } : value,
        existing?.id,
      );
      onClose();
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setBusy(false);
    }
  };
  const loadCapabilities = async (source: "preset" | "service") => {
    setBusy(true);
    setError("");
    try {
      const result = await readModelCapabilities(value, existing?.id, source);
      if (!result.videoCapabilities)
        throw new Error("未识别到输出预设，请开启自定义输出规格并填写。");
      setOutputDraft(
        capabilityDraft(result.videoCapabilities, source === "service"),
      );
    } catch (failure) {
      setError(errorMessage(failure));
    } finally {
      setBusy(false);
    }
  };
  return (
    <form
      className="cw-model-form"
      autoComplete="off"
      onSubmit={(event) => void submit(event)}
    >
      <fieldset disabled={busy}>
        <label className="cw-domain-field">
          接入方式
          <select
            value={value.connectionType}
            onChange={(event) => {
              const connectionType = event.target
                .value as ModelConfigInput["connectionType"];
              update({
                connectionType,
                authMode: connectionType === "self_hosted" ? "none" : "bearer",
                videoAdapter: "auto",
                protocol:
                  connectionType === "self_hosted"
                    ? PROTOCOLS[kind][0][0]
                    : (PROTOCOLS[kind].find(
                        ([id]) => id === "volcengine",
                      )?.[0] ?? PROTOCOLS[kind][0][0]),
              });
            }}
          >
            <option value="self_hosted">自部署服务（vLLM / vLLM-Omni）</option>
            <option value="api">服务商 API</option>
          </select>
        </label>
        <label className="cw-domain-field">
          接口协议
          <select
            value={value.protocol}
            onChange={(event) =>
              update({
                protocol: event.target.value as Protocol,
                videoAdapter: "auto",
              })
            }
          >
            {PROTOCOLS[kind].map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="cw-domain-field">
          服务地址（Base URL）
          <input
            type="url"
            required
            maxLength={2048}
            value={value.url}
            placeholder={PLACEHOLDERS[kind][0]}
            onChange={(event) => update({ url: event.target.value })}
          />
        </label>
        <label className="cw-domain-field">
          Model ID（服务的 served-model-name）
          <input
            required
            maxLength={200}
            value={value.modelId}
            placeholder={PLACEHOLDERS[kind][1]}
            onChange={(event) => update({ modelId: event.target.value })}
          />
        </label>
        <label className="cw-domain-field">
          鉴权方式
          <select
            value={value.authMode}
            onChange={(event) =>
              update({
                authMode: event.target.value as ModelConfigInput["authMode"],
              })
            }
          >
            <option value="none">无需鉴权</option>
            <option value="bearer">API Key / Bearer Token</option>
          </select>
        </label>
        {value.authMode === "bearer" && (
          <label className="cw-domain-field">
            API Key
            <input
              type="password"
              maxLength={8192}
              required={!existing || existing.authMode === "none"}
              value={value.apiKey}
              placeholder={existing ? "留空保留原密钥" : "服务端配置的密钥"}
              onChange={(event) => update({ apiKey: event.target.value })}
            />
          </label>
        )}
        {kind === "video" && (
          <details className="cw-video-config">
            <summary>视频适配方式</summary>
            {value.protocol === "vllm_omni" && (
              <label className="cw-domain-field">
                视频适配方式
                <select
                  value={value.videoAdapter}
                  onChange={(event) =>
                    update({
                      videoAdapter: event.target
                        .value as ModelConfigInput["videoAdapter"],
                    })
                  }
                >
                  <option value="auto">
                    自动识别已知模型；其他使用通用首帧接口
                  </option>
                  <option value="fasth3">
                    FastH3-Omni（8 步、多素材参考）
                  </option>
                  <option value="minimax_h3">
                    原生 MiniMax-H3（首帧、素材参考、接续）
                  </option>
                  <option value="standard">
                    通用 /videos（文本、单张首帧）
                  </option>
                </select>
              </label>
            )}
            <div className="cw-capability-actions">
              <button
                type="button"
                onClick={() => void loadCapabilities("preset")}
              >
                载入适配预设
              </button>
              <button
                type="button"
                onClick={() => void loadCapabilities("service")}
              >
                读取服务声明
              </button>
            </div>
            <p className="cw-capability-help">
              服务需在 /models 中返回该模型的 videoCapabilities
              扩展；仅返回模型名称时，请手动配置。
            </p>
            <VideoCapabilitiesEditor
              value={outputDraft}
              adapter={value.videoAdapter}
              onChange={setOutputDraft}
            />
          </details>
        )}
        {error && (
          <p className="cw-domain-error" role="alert">
            {error}
          </p>
        )}
        <div className="cw-model-form-actions">
          <button type="button" onClick={onClose}>
            取消
          </button>
          <button className="cw-domain-primary" type="submit">
            {busy ? "保存中…" : "保存模型"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export function ModelSettings({ catalog }: { catalog: BackendModels }) {
  const [editing, setEditing] = useState<{
    kind: ModelKind;
    model?: ModelConfig;
  } | null>(null);
  const [error, setError] = useState("");
  const remove = async (id: string) => {
    setError("");
    try {
      await catalog.remove(id);
    } catch (failure) {
      setError(errorMessage(failure));
    }
  };
  return (
    <div className="cw-model-settings">
      {(error || !catalog.connected) && (
        <div className="cw-settings-notice" role="alert">
          <span>{error || catalog.error}</span>
          <button
            type="button"
            onClick={() => {
              setError("");
              void catalog.refresh();
            }}
          >
            重新读取模型列表
          </button>
        </div>
      )}
      {catalog.connected &&
        MODEL_KINDS.map((kind) => {
          const models = catalog.models.filter(
            (model) => model.kind === kind.id,
          );
          return (
            <section key={kind.id} className="cw-model-section">
              <div className="cw-domain-section-heading">
                <h3>{kind.label}</h3>
                <button
                  disabled={!!editing}
                  onClick={() => setEditing({ kind: kind.id })}
                >
                  添加模型
                </button>
              </div>
              {!models.length && <p className="cw-model-empty">暂无模型</p>}
              <ul className="cw-model-list">
                {models.map((model) => (
                  <li key={model.id}>
                    <div>
                      <strong>{model.modelId}</strong>
                      <small>
                        {model.url} ·{" "}
                        {model.connectionType === "self_hosted"
                          ? "自部署"
                          : "服务商 API"}{" "}
                        · {model.inputRules.profile}
                      </small>
                    </div>
                    <button
                      disabled={!!editing}
                      onClick={() => setEditing({ kind: kind.id, model })}
                    >
                      编辑
                    </button>
                    <button
                      disabled={!!editing}
                      onClick={() => void remove(model.id)}
                    >
                      删除
                    </button>
                  </li>
                ))}
              </ul>
              {editing?.kind === kind.id && (
                <ModelForm
                  key={editing.model?.id ?? kind.id}
                  kind={kind.id}
                  existing={editing.model}
                  catalog={catalog}
                  onClose={() => setEditing(null)}
                />
              )}
            </section>
          );
        })}
    </div>
  );
}
