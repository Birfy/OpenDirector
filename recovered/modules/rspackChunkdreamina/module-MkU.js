import i from "Ut";
export function Y(e) {
  if (
    e.mode === i.DAGenerateTTSMode.VideoTranslation ||
    (e.mode === i.DAGenerateTTSMode.UnifiedEdit && e.hasVideoMaterial())
  ) {
    return i.AudioGenerateType.VideoDubbing;
  }
  return i.AudioGenerateType.GenerateTTS;
}
