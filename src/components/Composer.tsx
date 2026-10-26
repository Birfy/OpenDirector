import { useRef } from "react";
import type { GenerationMode, Skill } from "../domain/types";
import { Icon, type IconName } from "./Icon";

export interface ReferenceFile {
  id: string;
  name: string;
  url?: string;
  size: number;
}
export const MODE_LABELS: Record<GenerationMode, string> = {
  agent: "Agent 模式",
  image: "图片生成",
  video: "视频生成",
  audio: "音频生成",
};
const MODE_ICONS: Record<GenerationMode, IconName> = {
  agent: "sparkles",
  image: "image",
  video: "video",
  audio: "audio",
};

export function Composer({
  prompt,
  onPrompt,
  mode,
  onMode,
  aspectRatio,
  onAspectRatio,
  references,
  onFiles,
  onRemoveFile,
  running,
  onGenerate,
  onAbort,
  skills,
  onSkill,
  notice,
}: {
  prompt: string;
  onPrompt: (text: string) => void;
  mode: GenerationMode;
  onMode: (mode: GenerationMode) => void;
  aspectRatio: string;
  onAspectRatio: (ratio: string) => void;
  references: ReferenceFile[];
  onFiles: (files: FileList) => void;
  onRemoveFile: (id: string) => void;
  running: boolean;
  onGenerate: () => void;
  onAbort: () => void;
  skills: Skill[];
  onSkill: (skill: Skill) => void;
  notice: string;
}) {
  const fileInput = useRef<HTMLInputElement>(null);
  return (
    <div className="composer-wrap">
      <form
        className={`composer ${running ? "is-generating" : ""}`}
        onSubmit={(event) => {
          event.preventDefault();
          running ? onAbort() : onGenerate();
        }}
      >
        {references.length > 0 && (
          <div className="reference-strip">
            {references.map((file) => (
              <div className="reference" key={file.id}>
                {file.url ? (
                  <img src={file.url} alt="" />
                ) : (
                  <Icon name="attach" size={18} />
                )}
                <span title={file.name}>{file.name}</span>
                <button
                  type="button"
                  onClick={() => onRemoveFile(file.id)}
                  aria-label={`移除参考素材 ${file.name}`}
                >
                  <Icon name="close" size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
        <label htmlFor="creative-prompt" className="sr-only">
          创作描述
        </label>
        <textarea
          id="creative-prompt"
          value={prompt}
          onChange={(event) => onPrompt(event.target.value)}
          placeholder={
            mode === "agent"
              ? "描述你的想法，让灵感在这里发生…"
              : {
                  image: "描述你想要的画面、风格与光线…",
                  video: "描述场景、镜头运动，以及你想讲述的故事…",
                  audio: "描述声音的情绪、节奏与使用场景…",
                }[mode]
          }
          onKeyDown={(event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
              event.preventDefault();
              running ? onAbort() : onGenerate();
            }
          }}
        />
        <div className="composer-toolbar">
          <div className="composer-tools">
            <button
              type="button"
              className="reference-button"
              title="添加本地参考素材；不会上传"
              onClick={() => fileInput.current?.click()}
            >
              <Icon name="plus" size={17} />
              <span>参考素材</span>
            </button>
            <input
              ref={fileInput}
              type="file"
              className="sr-only"
              accept="image/*,video/*,audio/*"
              multiple
              onChange={(event) => {
                if (event.target.files) onFiles(event.target.files);
                event.target.value = "";
              }}
              aria-label="添加参考素材"
            />
            <span className="toolbar-divider" />
            <label className="select-control mode-select">
              <Icon name={MODE_ICONS[mode]} size={16} />
              <select
                aria-label="生成模式"
                value={mode}
                onChange={(event) =>
                  onMode(event.target.value as GenerationMode)
                }
              >
                {Object.entries(MODE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              <Icon name="chevron" size={13} />
            </label>
            <label className="select-control ratio-select">
              <span className="ratio-icon" />
              <select
                aria-label="画面比例"
                value={aspectRatio}
                onChange={(event) => onAspectRatio(event.target.value)}
              >
                {["1:1", "16:9", "9:16", "4:3"].map((ratio) => (
                  <option key={ratio}>{ratio}</option>
                ))}
              </select>
              <Icon name="chevron" size={13} />
            </label>
          </div>
          <button
            type="submit"
            className={`generate-button ${running ? "stop-button" : ""}`}
            disabled={!running && !prompt.trim()}
            aria-label={running ? "中止本地模拟" : "开始本地模拟"}
            title={running ? "中止本地模拟" : "本地模拟 · ⌘ / Ctrl + Enter"}
          >
            <Icon name={running ? "stop" : "arrow"} size={21} />
          </button>
        </div>
        <div className="composer-caption">
          <span>
            <span className="small-purple-dot" />
            本地交互模型
          </span>
          <span>
            {running
              ? "正在模拟任务，可随时中止"
              : "仅演示交互，不调用生成服务"}
          </span>
        </div>
      </form>
      <div className="skill-list">
        <span className="skills-label">试一试</span>
        {skills.map((skill) => (
          <button key={skill.id} onClick={() => onSkill(skill)}>
            <Icon name="sparkles" size={13} />
            {skill.label}
            <span>↗</span>
          </button>
        ))}
      </div>
      <p className="composer-notice" role="status" aria-live="polite">
        {notice || "\u00a0"}
      </p>
    </div>
  );
}
