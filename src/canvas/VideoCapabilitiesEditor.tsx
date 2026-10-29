import type { VideoCapabilities } from "../backend/rules.ts";
import {
  videoOutputDrafts,
  type VideoOutputDraft,
} from "../backend/videoCapabilities.ts";

export interface VideoCapabilityDraft {
  custom: boolean;
  outputs: VideoOutputDraft[];
  defaultResolution: string;
  defaultDuration: string;
  dimensionStep: VideoCapabilities["dimensionStep"];
}

export function capabilityDraft(
  caps: VideoCapabilities | null | undefined,
  custom = false,
): VideoCapabilityDraft {
  return {
    custom,
    outputs: videoOutputDrafts(caps),
    defaultResolution: caps?.defaultResolution ?? "auto",
    defaultDuration: String(caps?.defaultDuration ?? 5),
    dimensionStep: caps?.dimensionStep ?? 2,
  };
}

export function VideoCapabilitiesEditor({
  value,
  onChange,
}: {
  value: VideoCapabilityDraft;
  onChange: (value: VideoCapabilityDraft) => void;
}) {
  const update = (patch: Partial<VideoCapabilityDraft>) =>
    onChange({ ...value, ...patch });
  const rowChange = (index: number, patch: Partial<VideoOutputDraft>) =>
    update({
      outputs: value.outputs.map((row, item) =>
        item === index ? { ...row, ...patch } : row,
      ),
    });
  return (
    <div className="cw-video-capabilities">
      <label className="cw-domain-checkbox">
        <input
          type="checkbox"
          checked={value.custom}
          onChange={(event) => update({ custom: event.target.checked })}
        />
        自定义输出规格（关闭时跟随适配预设）
      </label>
      <p className="cw-capability-help">
        填写服务实际支持的规格；时长可写
        4-10,15。像素尺寸按横屏填写，竖屏交换宽高。服务要求明确宽高时填写；按分辨率档位确定尺寸时可留空。
      </p>
      <fieldset disabled={!value.custom}>
        {value.outputs.map((row, index) => (
          <div className="cw-output-spec" key={index}>
            <div className="cw-output-spec-heading">
              <strong>输出规格 {index + 1}</strong>
              <button
                type="button"
                disabled={value.outputs.length === 1}
                onClick={() =>
                  update({
                    outputs: value.outputs.filter((_, item) => item !== index),
                  })
                }
              >
                移除规格 {index + 1}
              </button>
            </div>
            <div className="cw-capability-grid">
              <label className="cw-domain-field">
                分辨率名称
                <input
                  aria-label={`规格 ${index + 1} 分辨率`}
                  maxLength={24}
                  value={row.resolution}
                  placeholder="例如 720P"
                  onChange={(event) =>
                    rowChange(index, { resolution: event.target.value })
                  }
                />
              </label>
              <label className="cw-domain-field">
                支持时长（秒）
                <input
                  aria-label={`规格 ${index + 1} 时长`}
                  maxLength={200}
                  value={row.seconds}
                  placeholder="例如 4-10,15"
                  onChange={(event) =>
                    rowChange(index, { seconds: event.target.value })
                  }
                />
              </label>
              <label className="cw-domain-field">
                横屏宽（像素）
                <input
                  aria-label={`规格 ${index + 1} 宽`}
                  type="number"
                  min={64}
                  max={8192}
                  value={row.width}
                  placeholder="例如 1280"
                  onChange={(event) =>
                    rowChange(index, { width: event.target.value })
                  }
                />
              </label>
              <label className="cw-domain-field">
                横屏高（像素）
                <input
                  aria-label={`规格 ${index + 1} 高`}
                  type="number"
                  min={64}
                  max={8192}
                  value={row.height}
                  placeholder="例如 720"
                  onChange={(event) =>
                    rowChange(index, { height: event.target.value })
                  }
                />
              </label>
            </div>
          </div>
        ))}
        <button
          type="button"
          disabled={value.outputs.length >= 20}
          onClick={() =>
            update({
              outputs: [
                ...value.outputs,
                { resolution: "", seconds: "", width: "", height: "" },
              ],
            })
          }
        >
          添加输出规格
        </button>
        <div className="cw-capability-grid">
          <label className="cw-domain-field">
            默认分辨率
            <select
              aria-label="默认分辨率"
              value={value.defaultResolution}
              onChange={(event) =>
                update({ defaultResolution: event.target.value })
              }
            >
              <option value="auto">自动</option>
              {[
                ...new Set(
                  value.outputs
                    .map((row) => row.resolution.trim().toUpperCase())
                    .filter((label) => label && label !== "AUTO"),
                ),
              ].map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label className="cw-domain-field">
            默认时长（秒）
            <input
              aria-label="默认时长"
              type="number"
              min={1}
              max={60}
              value={value.defaultDuration}
              onChange={(event) =>
                update({ defaultDuration: event.target.value })
              }
            />
          </label>
          <label className="cw-domain-field">
            像素对齐步长
            <select
              aria-label="像素对齐步长"
              value={value.dimensionStep}
              onChange={(event) =>
                update({
                  dimensionStep: Number(
                    event.target.value,
                  ) as VideoCapabilityDraft["dimensionStep"],
                })
              }
            >
              {[1, 2, 8, 16, 32, 64].map((step) => (
                <option key={step} value={step}>
                  {step}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>
    </div>
  );
}
