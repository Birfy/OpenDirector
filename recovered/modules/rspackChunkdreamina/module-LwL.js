import a from "Ut";
import { G } from "./module-zp5.js";
export function X(e) {
  let t;
  let i;
  let r;
  let o;
  let l;
  const { songAbility, instrumentalAbility, textToSpeechAbility } = e;
  if (songAbility) {
    const { prompt, lyrics } = songAbility;
    return (
      prompt ||
      (lyrics
        ? G(lyrics)
            .map((e) => e.content)
            .join("，")
        : "")
    );
  }
  if (instrumentalAbility) {
    if ((t = instrumentalAbility.prompt) != null) {
      return t;
    }
    return "";
  }
  if (textToSpeechAbility) {
    if (textToSpeechAbility.mode === a.DAGenerateTTSMode.AudioSeparation) {
      if (
        (o =
          (l = textToSpeechAbility.audioSeparationParam) == null
            ? undefined
            : l.prompt) != null
      ) {
        return o;
      }
      return "";
    }
    if (textToSpeechAbility.text) {
      return textToSpeechAbility.text;
    }
    return (
      (i =
        (r = textToSpeechAbility.unifiedEditInput) == null
          ? undefined
          : r.metaList) != null
        ? i
        : []
    )
      .map((e) => e.text)
      .filter(Boolean)
      .join("");
  }
  return "";
}
