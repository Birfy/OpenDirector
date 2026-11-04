/** Settings dialog. Model-service form copy lives in `models.ts` when migrated. */
export const settings = {
  "settings.title": "设置",
  "settings.categories": "设置分类",
  "settings.close": "关闭设置",
  "settings.general": "通用",
  "settings.models": "模型接入",
  "settings.watermark": "去除水印",
  "settings.watermarkHint":
    "关闭服务商模型 AI 生成内容中的可见水印。仅对未来生成内容生效，已生成的素材保留原状。",
  "settings.watermarkSaving": "保存中…",
  "settings.watermarkUnknown": "状态未确认",
  "settings.watermarkOn": "当前：无水印",
  "settings.watermarkOff": "当前：有水印",
  "settings.readFailed": "无法读取通用设置。",
  "settings.reload": "重新读取",
  "settings.closeThemeError": "关闭主题提示",
  "settings.watermarkSaveFailed":
    "水印设置保存未确认：{reason} 请核对当前状态后重试。",
  "settings.themeSaveFailed":
    "主题已应用，但无法保存偏好，刷新后可能无法保留本次选择。",
} as const;
