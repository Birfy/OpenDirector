import { useLayoutEffect, useRef, useState } from "react";
import { CanvasIcon } from "./CanvasIcon";
import { ModelSettings } from "./ModelSettings";
import { errorMessage } from "../backend/api";
import type { BackendModels } from "../backend/models";
import type { Theme, ThemeControls } from "./theme";

const categories = [
  { id: "general", label: "通用", icon: "settings" },
  { id: "models", label: "模型接入", icon: "model" },
] as const;

function GeneralSettings({
  catalog,
  theme,
}: {
  catalog: BackendModels;
  theme: ThemeControls;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const saving = useRef(false);
  const toggleWatermark = async () => {
    if (saving.current || !catalog.settings) return;
    saving.current = true;
    setBusy(true);
    setError("");
    try {
      await catalog.updateSettings({
        removeWatermark: !catalog.settings.removeWatermark,
      });
    } catch (reason) {
      setError(
        `水印设置保存未确认：${errorMessage(reason)} 请核对当前状态后重试。`,
      );
    } finally {
      saving.current = false;
      setBusy(false);
    }
  };
  return (
    <div className="cw-settings-fields">
      <div className="cw-settings-field">
        <div>
          <label htmlFor="settings-language">语言</label>
          <p>选择应用的显示语言</p>
        </div>
        <select id="settings-language" defaultValue="zh-CN">
          <option value="zh-CN">中文</option>
        </select>
      </div>
      <div className="cw-settings-field">
        <div>
          <label htmlFor="settings-theme">主题</label>
          <p>选择浅色或深色主题</p>
        </div>
        <select
          id="settings-theme"
          value={theme.theme}
          onChange={(event) => theme.setTheme(event.target.value as Theme)}
        >
          <option value="light">浅色</option>
          <option value="dark">深色</option>
        </select>
      </div>
      <div className="cw-settings-field cw-settings-watermark">
        <div>
          <label id="settings-watermark-label" htmlFor="settings-watermark">
            去除水印
          </label>
          <p id="settings-watermark-hint">
            关闭服务商模型 AI
            生成内容中的可见水印。仅对未来生成内容生效，已生成的素材保留原状。
          </p>
        </div>
        <div className="cw-settings-switch-control">
          <button
            id="settings-watermark"
            className="cw-settings-switch"
            role="switch"
            aria-checked={catalog.settings?.removeWatermark ?? false}
            aria-labelledby="settings-watermark-label"
            aria-describedby="settings-watermark-hint settings-watermark-status"
            disabled={busy || catalog.settings === null}
            onClick={() => void toggleWatermark()}
          >
            <span />
          </button>
          <p id="settings-watermark-status" role="status">
            {busy
              ? "保存中…"
              : catalog.settings === null
                ? "状态未确认"
                : `当前：${catalog.settings.removeWatermark ? "无水印" : "有水印"}`}
          </p>
        </div>
      </div>
      {(error || catalog.settings === null) && (
        <div className="cw-settings-notice" role="alert">
          <span>{error || catalog.error || "无法读取通用设置。"}</span>
          <button
            disabled={busy}
            onClick={() => {
              setError("");
              void catalog.refresh();
            }}
          >
            重新读取
          </button>
        </div>
      )}
    </div>
  );
}

export function SettingsDialog({
  catalog,
  theme,
  initialCategory,
  onClose,
}: {
  catalog: BackendModels;
  theme: ThemeControls;
  initialCategory: "general" | "models";
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const backdropPressed = useRef(false);
  const [category, setCategory] = useState<"general" | "models">(
    initialCategory,
  );
  useLayoutEffect(() => {
    const element = dialog.current!;
    element.showModal();
    return () => element.close();
  }, []);
  const isBackdrop = (event: {
    target: EventTarget;
    currentTarget: HTMLDialogElement;
    clientX: number;
    clientY: number;
  }) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    return (
      event.target === event.currentTarget &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    );
  };
  return (
    <dialog
      id="settings-dialog"
      ref={dialog}
      className="cw-settings-dialog"
      aria-labelledby="settings-title"
      aria-modal="true"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onPointerDown={(event) => {
        backdropPressed.current = isBackdrop(event);
      }}
      onPointerCancel={() => {
        backdropPressed.current = false;
      }}
      onClick={(event) => {
        if (backdropPressed.current && isBackdrop(event)) onClose();
        backdropPressed.current = false;
      }}
    >
      <div className="cw-settings-layout">
        <aside className="cw-settings-sidebar">
          <h1 id="settings-title">设置</h1>
          <nav className="cw-settings-navigation" aria-label="设置分类">
            {categories.map((item) => (
              <button
                key={item.id}
                type="button"
                autoFocus={item.id === initialCategory}
                aria-current={category === item.id ? "page" : undefined}
                aria-controls="settings-content"
                onClick={() => setCategory(item.id)}
              >
                <CanvasIcon name={item.icon} size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>
        <section
          className="cw-settings-main"
          id="settings-content"
          aria-labelledby="settings-section-title"
        >
          <header className="cw-settings-header">
            <h2 id="settings-section-title">
              {category === "general" ? "通用" : "模型接入"}
            </h2>
          </header>
          <div className="cw-settings-body">
            {theme.error && (
              <div className="cw-settings-notice" role="alert">
                <span>{theme.error}</span>
                <button aria-label="关闭主题提示" onClick={theme.clearError}>
                  <CanvasIcon name="close" />
                </button>
              </div>
            )}
            {category === "general" ? (
              <GeneralSettings catalog={catalog} theme={theme} />
            ) : (
              <ModelSettings catalog={catalog} />
            )}
          </div>
        </section>
        <button
          className="cw-settings-close"
          aria-label="关闭设置"
          onClick={onClose}
        >
          <CanvasIcon name="close" size={20} />
        </button>
      </div>
    </dialog>
  );
}
