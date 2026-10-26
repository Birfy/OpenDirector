import { useEffect, useRef, useState } from "react";
import type { CanvasNode, CanvasResource, SubjectData } from "./model";
import { copySubject, subjectError } from "./dataBoundary";
import { readEditorResource, withMediaDuration } from "./editorMedia";
import { EditorModal, ResourcePreview } from "./EditorModal";
import { CanvasIcon } from "./CanvasIcon";

type SubjectSlot = "main" | "auxiliary" | "voice";
export interface SubjectEditorProps {
  node: CanvasNode;
  resources?: CanvasResource[];
  onApply: (data: SubjectData) => void;
  onClose: () => void;
}

export function SubjectEditor({
  node,
  resources = [],
  onApply,
  onClose,
}: SubjectEditorProps) {
  const [subject, setSubject] = useState(() =>
    copySubject(
      node.data.subject ?? {
        description: "",
        category: "character",
        auxiliaries: [],
      },
    ),
  );
  const [slot, setSlot] = useState<SubjectSlot>("main");
  const [error, setError] = useState(""),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null),
    active = useRef(true),
    loading = useRef<AbortController | null>(null),
    subjectRef = useRef(subject);
  subjectRef.current = subject;
  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      loading.current?.abort();
    };
  }, []);
  const assign = async (resource: CanvasResource, requestedSlot = slot) => {
    setBusy(true);
    setError("");
    try {
      loading.current?.abort();
      const controller = new AbortController();
      loading.current = controller;
      const resolved = await withMediaDuration(resource, controller.signal);
      if (!active.current) return;
      const current = subjectRef.current;
      const next =
        requestedSlot === "main"
          ? { ...current, main: resolved }
          : requestedSlot === "voice"
            ? { ...current, voice: resolved }
            : { ...current, auxiliaries: [...current.auxiliaries, resolved] };
      const invalid = subjectError(next);
      if (invalid) throw new Error(invalid);
      setSubject(next);
      setNotice(`已将「${resource.title}」加入主体。`);
    } catch (error) {
      if (active.current)
        setError(error instanceof Error ? error.message : "素材读取失败。");
    } finally {
      if (active.current) setBusy(false);
    }
  };
  const pickFile = (target: SubjectSlot) => {
    setSlot(target);
    requestAnimationFrame(() => fileInput.current?.click());
  };
  const importFile = async (file: File) => {
    setBusy(true);
    setError("");
    try {
      const allowed =
        slot === "voice"
          ? ["audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp3"]
          : slot === "auxiliary"
            ? ["image/jpeg", "image/png", "image/webp", "image/bmp"]
            : [
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/bmp",
                "video/mp4",
                "video/quicktime",
              ];
      if (!allowed.includes(file.type))
        throw new Error(
          slot === "voice"
            ? "声音支持 MP3/WAV。"
            : "主素材支持 JPEG/PNG/WebP/BMP 图片或 MP4/MOV 视频，辅助素材仅支持图片。",
        );
      const max =
        slot === "voice" ? 15 : file.type.startsWith("video/") ? 500 : 25;
      if (file.size > max * 1024 * 1024)
        throw new Error(`该类主体素材最大 ${max} MiB。`);
      loading.current?.abort();
      const controller = new AbortController();
      loading.current = controller;
      const resource = await readEditorResource(file, controller.signal);
      if (active.current) await assign(resource, slot);
    } catch (error) {
      if (active.current)
        setError(error instanceof Error ? error.message : "读取素材失败。");
    } finally {
      if (active.current) setBusy(false);
    }
  };
  const available = resources.filter((resource) =>
    slot === "voice"
      ? resource.kind === "audio"
      : slot === "auxiliary"
        ? resource.kind === "image"
        : ["image", "video"].includes(resource.kind),
  );
  return (
    <EditorModal
      title={`编辑主体 · ${node.data.title}`}
      subtitle="主素材、辅助视角和声音引用；描述与素材将随画布保存"
      onClose={onClose}
      disabled={busy || node.locked}
      onApply={() => {
        const invalid = subjectError(subject);
        if (invalid) setError(invalid);
        else {
          onApply(copySubject(subject));
          onClose();
        }
      }}
      error={error}
    >
      <div className="cw-subject-layout">
        <div>
          <div className="cw-domain-section-heading">
            <h3>主素材</h3>
            <span>图片或 ≤15 秒视频</span>
          </div>
          <div className="cw-subject-main">
            <ResourcePreview resource={subject.main} />
          </div>
          <div className="cw-domain-row">
            <button disabled={busy} onClick={() => pickFile("main")}>
              <CanvasIcon name="upload" size={15} />
              {subject.main ? "更换主素材" : "上传主素材"}
            </button>
            {subject.main && (
              <button
                disabled={busy}
                onClick={() =>
                  setSubject({
                    ...subject,
                    main: undefined,
                    voice: undefined,
                    auxiliaries: [],
                  })
                }
              >
                移除主素材及关联引用
              </button>
            )}
          </div>
          <label className="cw-domain-field">
            主体类别
            <select
              value={subject.category}
              onChange={(event) =>
                setSubject({ ...subject, category: event.target.value })
              }
            >
              <option value="character">人物 / 角色</option>
              <option value="product">物品 / 产品</option>
              <option value="scene">场景</option>
            </select>
          </label>
          <label className="cw-domain-field">
            主体描述
            <textarea
              value={subject.description}
              onChange={(event) =>
                setSubject({ ...subject, description: event.target.value })
              }
              placeholder="描述外貌、服装、特征与需要保持一致的细节…"
              rows={6}
            />
          </label>
        </div>
        <div>
          <div className="cw-domain-section-heading">
            <h3>辅助视角</h3>
            <span>{subject.auxiliaries.length} / 3 张图片</span>
          </div>
          <div className="cw-subject-auxiliaries">
            {subject.auxiliaries.map((resource, index) => (
              <div className="cw-subject-auxiliary" key={resource.id}>
                <ResourcePreview resource={resource} />
                <div>
                  <span>{index + 1}</span>
                  <button
                    disabled={!index || busy}
                    aria-label={`前移辅助图 ${index + 1}`}
                    onClick={() => {
                      const list = [...subject.auxiliaries];
                      [list[index - 1], list[index]] = [
                        list[index]!,
                        list[index - 1]!,
                      ];
                      setSubject({ ...subject, auxiliaries: list });
                    }}
                  >
                    ←
                  </button>
                  <button
                    disabled={busy}
                    aria-label={`移除辅助图 ${index + 1}`}
                    onClick={() =>
                      setSubject({
                        ...subject,
                        auxiliaries: subject.auxiliaries.filter(
                          (item) => item.id !== resource.id,
                        ),
                      })
                    }
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
            {subject.auxiliaries.length < 3 && (
              <button
                className="cw-subject-add"
                disabled={!subject.main || busy}
                onClick={() => pickFile("auxiliary")}
              >
                <CanvasIcon name="plus" size={24} />
                <span>添加辅助图</span>
              </button>
            )}
          </div>
          <div className="cw-domain-section-heading">
            <h3>主体声音</h3>
            <span>2–5 秒 · MP3 / WAV</span>
          </div>
          <div className="cw-subject-voice">
            {subject.voice ? (
              <>
                <ResourcePreview resource={subject.voice} />
                <button
                  disabled={busy}
                  onClick={() => setSubject({ ...subject, voice: undefined })}
                >
                  移除声音
                </button>
              </>
            ) : (
              <button
                disabled={!subject.main || busy}
                onClick={() => pickFile("voice")}
              >
                <CanvasIcon name="audio" />
                上传声音片段
              </button>
            )}
          </div>
          <div className="cw-domain-section-heading">
            <h3>引用画布素材</h3>
          </div>
          <label className="cw-domain-field">
            加入位置
            <select
              value={slot}
              disabled={busy}
              onChange={(event) => setSlot(event.target.value as SubjectSlot)}
            >
              <option value="main">主素材</option>
              <option
                value="auxiliary"
                disabled={!subject.main || subject.auxiliaries.length >= 3}
              >
                辅助视角
              </option>
              <option value="voice" disabled={!subject.main}>
                主体声音
              </option>
            </select>
          </label>
          <div className="cw-domain-resource-list">
            {available.map((resource) => (
              <button
                key={resource.id}
                disabled={busy || (slot !== "main" && !subject.main)}
                onClick={() => {
                  void assign(resource);
                }}
              >
                <CanvasIcon name={resource.kind} size={16} />
                <span>{resource.title}</span>
                <CanvasIcon name="plus" size={14} />
              </button>
            ))}
            {!available.length && (
              <p>当前画布没有符合此位置的素材，可直接上传。</p>
            )}
          </div>
          <p className="cw-domain-note">
            引用保留素材快照与源节点标识。删除原节点不会删除已加入主体的素材；本地编辑不会创建原站主体或调用模型。
          </p>
        </div>
      </div>
      <input
        className="cw-domain-file-input"
        ref={fileInput}
        type="file"
        accept={
          slot === "voice"
            ? ".mp3,.wav"
            : slot === "auxiliary"
              ? ".jpg,.jpeg,.png,.webp,.bmp"
              : ".jpg,.jpeg,.png,.webp,.bmp,.mp4,.mov"
        }
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void importFile(file);
          event.target.value = "";
        }}
        aria-label="上传主体素材"
      />
      <p className="cw-domain-status" role="status">
        {busy ? "正在读取素材…" : notice}
      </p>
    </EditorModal>
  );
}

export default SubjectEditor;
