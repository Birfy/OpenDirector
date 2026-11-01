import i from "yMd";
export function v(e) {
  return e === i.NB.DreaminaAiVideo || e === i.NB.ShortVideo;
}
export function s(e) {
  return v(e.effectType);
}
