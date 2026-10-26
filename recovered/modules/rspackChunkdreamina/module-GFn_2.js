import a from "Ut";
export function X(e) {
  let t;
  let i;
  let n;
  let r;
  const { textToSpeechAbility, metricsExtra } =
    (t = e.videoDubbingInfo) != null ? t : {};
  const d = textToSpeechAbility == null ? undefined : textToSpeechAbility.mode;
  if (
    d !== a.DAGenerateTTSMode.UnifiedEdit &&
    d !== a.DAGenerateTTSMode.VideoTranslation
  ) {
    return {};
  }
  return {
    functionMode:
      d === a.DAGenerateTTSMode.VideoTranslation
        ? "video_audio_translate"
        : "omni_dubbing",
    language:
      (d === a.DAGenerateTTSMode.VideoTranslation &&
        (textToSpeechAbility == null ||
        (r = textToSpeechAbility.videoTranslationParam) == null
          ? undefined
          : r.targetLanguage)) ||
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
