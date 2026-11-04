export const settings = {
  "settings.title": "Settings",
  "settings.categories": "Settings categories",
  "settings.close": "Close settings",
  "settings.general": "General",
  "settings.models": "Model connections",
  "settings.watermark": "Remove watermark",
  "settings.watermarkHint":
    "Hide visible watermarks in model-generated content. This applies to future generations only; existing assets keep their current appearance.",
  "settings.watermarkSaving": "Saving…",
  "settings.watermarkUnknown": "Status unavailable",
  "settings.watermarkOn": "Current: no watermark",
  "settings.watermarkOff": "Current: watermark present",
  "settings.readFailed": "Could not read general settings.",
  "settings.reload": "Reload",
  "settings.closeThemeError": "Dismiss theme message",
  "settings.watermarkSaveFailed":
    "Watermark setting was not confirmed: {reason} Check the current state and try again.",
  "settings.themeSaveFailed":
    "The theme was applied, but the preference could not be saved. It may not persist after a refresh.",
} satisfies Record<string, string | { one: string; other: string }>;
