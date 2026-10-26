import r from "Ut";
export function X(e) {
  let t;
  let i;
  let n;
  let a;
  const { textToSpeechAbility, metricsExtra } =
    (t = e.videoDubbingInfo) != null ? t : {};
  const s = textToSpeechAbility == null ? undefined : textToSpeechAbility.mode;
  if (
    s !== r.DAGenerateTTSMode.UnifiedEdit &&
    s !== r.DAGenerateTTSMode.VideoTranslation
  ) {
    return {};
  }
  return {
    functionMode:
      s === r.DAGenerateTTSMode.VideoTranslation
        ? "video_audio_translate"
        : "omni_dubbing",
    language:
      (s === r.DAGenerateTTSMode.VideoTranslation &&
        (textToSpeechAbility == null ||
        (a = textToSpeechAbility.videoTranslationParam) == null
          ? undefined
          : a.targetLanguage)) ||
      undefined,
    enterFrom:
      (i =
        (n = metricsExtra == null ? undefined : metricsExtra.enterFrom) != null
          ? n
          : e.taskExtra.enterFrom) != null
        ? i
        : "click",
  };
}
